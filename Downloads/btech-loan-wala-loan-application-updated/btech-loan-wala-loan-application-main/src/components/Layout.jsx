import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TopBar from './TopBar.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  useEffect(() => {
    const saved = localStorage.getItem('btech-theme') || 'light'
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
