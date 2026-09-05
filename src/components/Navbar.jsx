import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];
    const handleNavClick = () => {
        setIsMenuOpen(false);
    };
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#home" className="logo">VELMURUGAN</a>
                {/* Desktop Navigation Links */}
                <div className="desktop-nav">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </div>
                <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="mobile-nav">
                    <div className='container mobile-nav-container'>
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} onClick={handleNavClick}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;