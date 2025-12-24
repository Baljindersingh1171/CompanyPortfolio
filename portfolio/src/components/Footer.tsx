const Footer = ({isDark}:any)=> {
    return (
        <footer className={`py-8 text-white  mt-10 ${isDark ? "bg-gray-800" : "bg-black"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <p className="text-lg mb-4">Let's build something amazing together!</p>
          {/* <p>© 2025 Full Stack Developer.</p> */}
        </div>
      </footer>
    )
}
export default Footer;
