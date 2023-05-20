'use client'
import Container from "../components/Container"
import Heading from "../components/Heading"
import ListingCard from "../components/listings/ListingCard"
import { SafeListing, SafeUser } from "../types"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"


interface FavoritesClienProps{
    currentUser?:SafeUser | null,
    listings: SafeListing[] 
}

const FavoritesClient:React.FC<FavoritesClienProps> = ({
    currentUser,
    listings
})=>{
    const router= useRouter()
  
    return(
      <Container>
        <Heading title='Favorites' subtitle='These are your favorite places' />
        <div className="
        grid
        mt-10
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        ">
           {
            listings.map(listing=> <ListingCard
                data={listing}
             
                currentUser={currentUser}
                key={listing.id}
               
                />)
           }

        </div>
      </Container>
    )
}
export default FavoritesClient