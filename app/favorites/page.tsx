import EmptyState from "../components/EmptyState"
import getFavoriteListings from "../actions/getFavoriteListings"
import getCurrentUser from "../actions/getCurrentUser"
import FavoritesClient from "./FavoritesClient"
const ListingPage = async()=>{
    const listings = await getFavoriteListings()
    const curretnUser = await getCurrentUser()
    
    if(listings.length === 0){

        return(
            <EmptyState title='No favorites found' subTitle="Looks like you dont have favotire listings" />
        )
    }
    return(
        <FavoritesClient 
        listings={listings}
        currentUser={curretnUser}
        />
    )
}
export default ListingPage