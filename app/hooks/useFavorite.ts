import axios from 'axios'
import {useRouter} from 'next/navigation'
import { useCallback, useMemo } from 'react'
import {toast} from 'react-hot-toast'


import { SafeUser } from '../types'
import useLoginModal from './useLoginModal'

interface IUseFavorites{
    listingId: string,
    currentUser?:SafeUser | null
}

const useFavorite=({
    listingId,
    currentUser
}:IUseFavorites)=>{
    const router = useRouter()
    const loginModal = useLoginModal()

    const hasFavorited = useMemo(()=>{
        const list = currentUser?.favoriteIds || [];

        return list.includes(listingId)
    },[listingId,currentUser])


    const toggleFavorite = useCallback( async(e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();
        console.log(currentUser,'user')

        if(!currentUser){
            return loginModal.onOpen()
        }
        try {
            if(hasFavorited){
                const result  = await axios.delete(`/api/favorites/${listingId}`)
                router.refresh()
                return toast.success("Removed From Favorites")
    
            }
            const res = await axios.post(`/api/favorites/${listingId}`)
            router.refresh()
            toast.success("Added to Favorites")
        } catch (error:any) {
            toast.error("Error")
        }
      

    },[
        currentUser,
        hasFavorited,
        listingId,
        loginModal,
        router
    ])

    return {
        hasFavorited,
        toggleFavorite
    } 

}

export default useFavorite

