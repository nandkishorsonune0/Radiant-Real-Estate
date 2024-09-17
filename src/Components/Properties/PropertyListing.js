import './PropertyListing.css';
import { useState, useEffect } from 'react';
import { databaseOfPseudoProperties as db } from '../Locations/Locations';
import { Link } from 'react-router-dom';
import gpsIcon from '../../imgs/gps.png';
import sizeIcon from '../../imgs/size.png';
import bedsIcon from '../../imgs/beds.png';
import bathroomIcon from '../../imgs/bathroom.png';

function PropertyListing() {
    // Define the addCommas function
    function addCommas(num) {
        const str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    const [isVisible, setIsVisible] = useState(false);
    const [whichIsClicked, setWhichIsClicked] = useState('featured');
    const [properties, setProperties] = useState(db || []);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY >= 1000);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleWhichIsClicked = (buttonId) => {
        setWhichIsClicked(buttonId);
    };

    const filteredProperties = properties
        .filter((dbObj) => whichIsClicked === dbObj.status || whichIsClicked === 'featured')
        .slice(0, 7);

    return (
        <div className='propertyListing-container'>
            <div className='propertyListing-about'>
                <div className='propertyListing-about-text'>
                    <h3>Property Listing</h3>
                    <p>Explore our diverse and extensive range of property listings.
                        Find your ideal home or investment opportunity <br />with our comprehensive
                        and up-to-date selection. Start your search today for a brighter future.</p>
                </div>
                <div className='propertyListing-about-nav'>
                    <button
                        className={`propertyListing-about-nav-button ${whichIsClicked === 'featured' ? 'active' : ''}`}
                        onClick={() => handleWhichIsClicked('featured')}
                    >
                        Featured
                    </button>
                    <button
                        className={`propertyListing-about-nav-button ${whichIsClicked === 'For Sale' ? 'active' : ''}`}
                        onClick={() => handleWhichIsClicked('For Sale')}
                    >
                        For Sale
                    </button>
                    <button
                        className={`propertyListing-about-nav-button ${whichIsClicked === 'For Rent' ? 'active' : ''}`}
                        onClick={() => handleWhichIsClicked('For Rent')}
                    >
                        For Rent
                    </button>
                </div>
            </div>
            <div className='propertyListing-posts'>
                {filteredProperties.map((dbObj) => (
                    <div className='propertyListing-post' key={dbObj.id}>
                        <div className='propertyListing-post-header'>
                            <img className='propertyListing-post-header-photo' src={dbObj.imageURL} alt='Property' />
                            <span className='propertyListing-post-header-status'>{dbObj.status}</span>
                            <span className='propertyListing-post-header-type'>{dbObj.type}</span>
                        </div>
                        <div className='propertyListing-post-main'>
                            <p className='propertyListing-post-main-price'>${addCommas(dbObj.amount)}</p>
                            <p className='propertyListing-post-main-title'>{dbObj.name} {dbObj.type}</p>
                            <div className='propertyListing-post-main-location'>
                                <img className='post-main-gpsIcon' src={gpsIcon} alt='GPS Icon' />
                                {dbObj.state}, {dbObj.address}
                            </div>
                        </div>
                        <div className='propertyListing-post-footer'>
                            <span className='propertyListing-post-footerPart'><img src={sizeIcon} alt='Size Icon' /> {dbObj.size} Sqft</span>
                            <span className='propertyListing-post-footerPart'><img src={bedsIcon} alt='Beds Icon' /> {dbObj.amountOfBeds} Bed</span>
                            <span className='propertyListing-post-footerPart'><img src={bathroomIcon} alt='Bathroom Icon' /> {dbObj.amountOfBaths} Bath</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='propertyListing-browseMore-container'>
                <Link to='/property-listing-extra' className='propertyListing-browseMore'>Browse More Property</Link>
            </div>
        </div>
    );
}

export default PropertyListing;
