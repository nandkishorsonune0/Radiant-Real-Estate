import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isHoveredProperties, setIsHoveredProperties] = useState(false);
    const [isHoveredPages, setIsHoveredPages] = useState(false);
    const [isMorphed, setIsMorphed] = useState(false);
    
    const navigate = useNavigate(); // Use react-router-dom's useNavigate hook for navigation

    useEffect(() => {
        const handleScrollForMorphed = () => {
            if (window.scrollY >= 50) {
                setIsMorphed(true);
            } else {
                setIsMorphed(false);
            }
        };

        window.addEventListener('scroll', handleScrollForMorphed);
        return () => {
            window.removeEventListener('scroll', handleScrollForMorphed);
        };
    }, []);

    const handleMouseEnterPages = () => setIsHoveredPages(true);
    const handleMouseLeavePages = () => setIsHoveredPages(false);
    const handleMouseClickPages = () => setIsHoveredPages(!isHoveredPages);

    const handleMouseClickProperties = () => {
        setIsHoveredProperties(!isHoveredProperties);
        navigate('/property-listing'); // Navigate to property listing on click
    };

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={isMorphed ? 'navbar-sticky' : 'navbar'}>
            <div className='navbar-shortInfo'>
                <img src={require('../../imgs/icon-deal.png')} alt="Makaan Icon" />
                <h2>Makaan</h2> {/* Add Makaan name here */}
            </div>
            <div className='navbar-links'>
                <Link to="/" className='navbar-links-home' onClick={handleLinkClick}>
                    Home
                </Link>
               
                <div onClick={handleMouseClickProperties} className='navbar-links-dropdownProperties'>
                    Properties
                </div>
                <div onClick={handleMouseClickPages}  className='navbar-links-dropdownPages'>
                    Services ˅
                    <div
                        onMouseEnter={handleMouseEnterPages}
                        onMouseLeave={handleMouseLeavePages}
                        className={`navbar-linksDropdownPage ${isHoveredPages ? 'visible' : ''}`}>
                        <Link onClick={handleLinkClick} to="/testimonial">Testimonial</Link>
                        <Link onClick={handleLinkClick} to="/error-404">Error 404</Link>
                        <Link onClick={handleLinkClick} to="/property-listing-extra">Browse More</Link>
                        <Link onClick={handleLinkClick} to="/faq">FAQs</Link>
                        <Link onClick={handleLinkClick} to="/help">Help</Link>
                    </div>
                </div>
                <Link onClick={handleLinkClick} to="/agent-promo" className='navbar-links-contact'>
                    Contact
                </Link>
                <Link to="/property-promo" className='navbar-links-about' onClick={handleLinkClick}>
                    About Us
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
