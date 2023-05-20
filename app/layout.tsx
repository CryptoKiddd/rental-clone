import getCurrentUser from './actions/getCurrentUser'
import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal'
import ToasterProvider from './components/providers/ToasterProvider'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone ',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
 
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pt-28 pb-20">

           {children}
           </div>
        </body>
    </html>
  )
}
