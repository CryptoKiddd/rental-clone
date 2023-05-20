'use client'

import {toast} from 'react-hot-toast'
import axios from 'axios'
import {useCallback,useState} from 'react'
import { useRouter } from 'next/navigation'

import Heading from '../components/Heading'
import Container from '../components/Container'
import ListingCard from '../components/listings/ListingCard'

import { SafeReservation, SafeUser } from "../types"

interface ReservationsClientProps{
    reservations: SafeReservation[],
    currentUser: SafeUser | null
}


const ReservationsClient:React.FC<ReservationsClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter()
    const [deletingId, setDeletingId] = useState('')
    const onCancel = useCallback(async(id:string)=>{
        setDeletingId(id)
        try {
            await axios.delete(`/api/reservations/${id}`)
            toast.success('reservation canceled')
            router.refresh()
        } catch (error) {
            toast.error('something went wrong')
        }
        setDeletingId('')
       

    },[router])
  return (
    <Container>
        <Heading title='Reservations' subtitle='Booking on your properties' />
        <div className="grid mt-10 
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        ">

            {
                reservations.map(reservation=><ListingCard key={reservation.id}
                     data={reservation.listing} 
                     reservation={reservation}
                     actionId={reservation.id}
                     onAction={onCancel}
                     disabled={deletingId === reservation.id}
                     actionLabel="Cancel this reservation"
                     currentUser={currentUser}
                     />)
            }
        </div>
    </Container>
  )
}

export default ReservationsClient