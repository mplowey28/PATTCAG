import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      {children}
      <Footer />
    </div>
  )
}

export default Layout
