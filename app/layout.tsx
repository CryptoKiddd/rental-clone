import getCurrentUser from './actions/getCurrentUser'
import Navbar from './components/Navbar/Navbar'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import SearchModal from './components/modals/SearchModal'
import RentModal from './components/modals/RentModal'
import ToasterProvider from './components/providers/ToasterProvider'
import './globals.css'
import { Nunito } from 'next/font/google'
import ClientOnly from './components/ClientOnly'

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
      <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pt-28 pb-20">

           {children}
           </div>
        </body>
    </html>
  )
}
