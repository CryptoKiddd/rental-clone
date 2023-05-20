import getCurrentUser from '../actions/getCurrentUser'
import getReservations from '../actions/getReservations'
import EmptyState from '../components/EmptyState'
import TripsClient from './TripsClient'



const TripsPage = async()=>{
    const currentUser = await getCurrentUser()
  

    if(!currentUser){
        return(
            <EmptyState title='Unauthorized' subTitle='Please Log in' />
        )
    }ყ
    ყ
    const reservations =await getReservations({
        userId: currentUser.id
    })
    if(!reservations){
        return(
            <EmptyState title='No Trips found' subTitle='Look like you havent reserved any trips' />
        )
    }
    
    return(
        <TripsClient reservations={reservations} currentUser={currentUser} />
    )
}

export default TripsPage