//  function Header() {
//    return (
//      <header className="bg-white shadow-md">
//        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//          {/* Logo */}
//          <h1 className="text-2xl font-bold text-blue-600">Baddy</h1>

//          {/* Navigation links */}
//          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//              <li><a href="#home" className="hover:text-blue-500">Home</a></li>
//              <li><a href="#about" className="hover:text-blue-500">About</a></li>
//              <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
//              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
//          </ul>

//        </nav>
//      </header>
//    );
//  }

//  export default Header;


import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";//for dark mode
//import { Menu, X } from "lucide-react"; // icon library

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  //dark
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    }, [darkMode])

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false); // close menu on link click

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md fixed w-full z-20">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Baddy</h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        <button onClick={() => setDarkMode(!darkMode)} className="text-xl ml-4">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>


        {/* Mobile menu icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <X className="w-6 h-6 cursor-pointer" onClick={handleToggle} />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" onClick={handleToggle} />
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-4 pt-4 pb-6 space-y-4 text-gray-700 font-medium shadow-md">
          <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      )}
    </header>
  );

  

}

export default Header;
