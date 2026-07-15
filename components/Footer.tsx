const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary/80 border-t border-gray-700 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-accent mb-4">Genesis</h3>
            <p className="text-gray-400 text-sm">Connecting exceptional talent with exceptional companies.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Executive Search</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Leadership Recruitment</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Professional Hiring</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Genesis Search Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
