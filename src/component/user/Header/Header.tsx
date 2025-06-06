import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
    name: string;
    href: string;
}

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems: NavItem[] = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Team', href: '/team' },
    ];

    // Add scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when changing routes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Determine if a nav item is active based on current path
    const isItemActive = (href: string): boolean => {
        if (href === '/' && location.pathname === '/') {
            return true;
        }
        return href !== '/' && location.pathname.startsWith(href);
    };

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 
            backdrop-blur-md ${isScrolled ? 'shadow-lg' : ''}`}   >
            {/* bg-gradient-to-r from-white to-teal-900 */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Green wave background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-teal-700 backdrop-blur-sm"></div>
                <div className="absolute inset-0">
                    <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                        <path
                            d="M0,1080 C400,900 800,1200 1920,950 L1920,0 L0,0 Z"
                            fill="url(#greenGradient)"
                            opacity="0.3"
                        />
                        <defs>
                            <linearGradient id="greenGradient" x1="10%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00ff80" stopOpacity="0.05" />
                                <stop offset="50%" stopColor="#00bb60" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#008040" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-16 h-20 flex items-center justify-between relative z-10">
                <div className="">
                    <Link to="/" className="block">
                        <img
                            src="/images/agentlivery-logos.png"
                            alt="site logo"
                            className="h-16 w-auto md:h-24"
                            style={{ maxHeight: "120px", width: "auto" }}
                        />
                    </Link>
                </div>

                {/* Right-aligned navigation and contact button */}
                <div className="flex items-center justify-end flex-1 space-x-4 md:space-x-6">
                    {/* Desktop Navigation menu */}
                    <nav className="hidden md:block">
                        <div className="border border-white/20 rounded-xl bg-white/20 backdrop-blur-md shadow-lg">
                            <ul className="flex items-center h-12">
                                {navItems.map((item) => {
                                    const active = isItemActive(item.href);
                                    return (
                                        <li key={item.name} className="relative mx-4">
                                            <Link
                                                to={item.href}
                                                className={`text-md transition-all duration-200 ${active
                                                    ? 'text-white font-medium bg-black/50 border border-white/20 p-2 rounded-md'
                                                    : 'text-gray-300 hover:text-white hover:bg-white/5 p-2 rounded-md'
                                                    }`}
                                            >
                                                <span className="relative py-1 px-2">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </nav>

                    {/* Contact button with glassmorphism - hidden on smaller screens */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-gray-900 to-black text-white text-base font-semibold px-8 py-4 rounded-full 
                            border border-white/20 shadow-xl transition-all duration-300 ease-in-out 
                            hover:bg-gradient-to-r hover:from-black hover:to-gray-800 
                            hover:shadow-gray-500/40 hover:scale-110 hover:border-white/30"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button with glass effect */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
                <div className="bg-black/70 backdrop-blur-md border-t border-white/10 shadow-lg">
                    <div className="container mx-auto px-6">
                        <ul className="py-4 space-y-3">
                            {navItems.map((item) => {
                                const active = isItemActive(item.href);
                                return (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={`block py-3 px-4 rounded-lg text-lg transition-all duration-200 ${active
                                                ? 'text-white font-medium bg-black/50 border border-white/20'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className="pt-1">
                                <Link
                                    to="/contact"
                                    className="block bg-gradient-to-r from-gray-900 to-black text-white text-base font-semibold py-3 px-4 rounded-lg 
                                    border border-white/20 shadow-lg transition-all duration-300 ease-in-out 
                                    hover:bg-gradient-to-r hover:from-black hover:to-gray-800 
                                    hover:shadow-gray-500/40 hover:border-white/30 text-center"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;