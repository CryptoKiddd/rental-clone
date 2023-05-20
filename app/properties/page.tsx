import getCurrentUser from '../actions/getCurrentUser'
import getListings from '../actions/getListings'
import EmptyState from '../components/EmptyState'
import PropertiesClient from './PropertiesClient'



const PropertiesPage = async()=>{
    const currentUser = await getCurrentUser()
  

    if(!currentUser){
        return(
            <EmptyState title='Unauthorized' subTitle='Please Log in' />
        )
    }
    
    const listings =await getListings({
        userId: currentUser.id
    })
    if(!listings){
        return(
            <EmptyState title='No listings found' subTitle='Looks like you have not listed yet' />
        )
    }
    
    return(
        <PropertiesClient listings={listings} currentUser={currentUser} />
    )
}

export default PropertiesPage