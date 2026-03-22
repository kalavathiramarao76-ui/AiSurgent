import Navbar from './Navbar'
import Footer from './Footer'
import { AuthGate } from './AuthGate'

export default function Layout({ children }) {
  return (
    <AuthGate>
      <div className="noise-overlay min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </AuthGate>
  )
}
