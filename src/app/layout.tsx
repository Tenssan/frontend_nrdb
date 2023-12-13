import './globals.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import CartProvider from '../../providers/CartProvider'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster toastOptions={{style:{background: 'rgb(51 65 85)', color: '#fff'}}} />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className='flex-grow pb-16 bg-slate-200'>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
