import './PropertyListingExtra.css';
import React, { useState, useEffect } from 'react';
import { databaseOfPseudoProperties as db, propertyTypes, propertyLocations } from '../../Components/Locations/Locations';

// Import icons
import gpsIcon from '../../imgs/gps.png';
import sizeIcon from '../../imgs/size.png';
import bedsIcon from '../../imgs/beds.png';
import bathroomIcon from '../../imgs/bathroom.png';

function PropertyListingExtra() {
    const [whichIsClicked, setWhichIsClicked] = useState('Featured'); // Default to 'Featured'
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedPropertyType, setSelectedPropertyType] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [properties, setProperties] = useState(db);
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

    const handleWhichIsClicked = (buttonId) => {
        setWhichIsClicked(buttonId);
        setSearchButtonClicked(false); // Reset search button clicked status
    };

    const handleSearch = () => {
        const filteredProperties = db.filter((property) => {
            const titleMatch = property.name.toLowerCase().includes(searchTitle.toLowerCase());
            const typeMatch = !selectedPropertyType || property.type === selectedPropertyType;
            const locationMatch = !selectedLocation || property.state === selectedLocation;
            const statusMatch = whichIsClicked === 'Featured' || property.status === whichIsClicked;

            return titleMatch && typeMatch && locationMatch && statusMatch;
        });

        setProperties(filteredProperties);
    };

    useEffect(() => {
        handleSearch(); // Perform search on initial render to show default properties
    }, [whichIsClicked, searchTitle, selectedPropertyType, selectedLocation, db]);

    function addCommas(num) {
        return num.toLocaleString();
    }

    return (
        <div className='propertyListingExtra'>
            <section className='propertyListingExtra-intro'>
                <div className='propertyListingExtra-intro-text'>
                    <h2>Our Properties</h2>
                    <p>Explore our diverse range of property listings. Find your ideal home or investment opportunity with our comprehensive and up-to-date selection. Start your search today for a brighter future.</p>
                </div>
                <div className='propertyListingExtra-nav'>
                    {['Featured', 'For Sale', 'For Rent'].map(status => (
                        <button
                            key={status}
                            className={`propertyListingExtra-nav-button ${whichIsClicked === status ? 'active' : ''}`}
                            onClick={() => handleWhichIsClicked(status)}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </section>

            <section className='propertyListingExtra-search'>
                <input
                    type='text'
                    placeholder='Search by title'
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
                <select
                    value={selectedPropertyType}
                    onChange={(e) => setSelectedPropertyType(e.target.value)}
                >
                    <option value=''>All Types</option>
                    {propertyTypes.map(type => (
                        <option key={type.index} value={type.type}>{type.type}</option>
                    ))}
                </select>
                <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value=''>All Locations</option>
                    {propertyLocations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                    ))}
                </select>
                <button onClick={() => setSearchButtonClicked(true)}>Search</button>
            </section>

            <section className='propertyListingExtra-posts'>
                {properties.map((dbObj) => (
                    ((whichIsClicked === dbObj.status || whichIsClicked === 'Featured')) && (
                        <div className='propertyListingExtra-post' key={dbObj.index}>
                            <div className='propertyListingExtra-post-photo-container'>
                                <img className='propertyListingExtra-post-photo' src={dbObj.imageURL} alt={dbObj.name} />
                            </div>
                            <div className='propertyListingExtra-post-info'>
                                <div className='propertyListingExtra-post-shortInfo'>
                                    <span className='propertyListingExtra-post-shortInfo-status'>{dbObj.status}</span>
                                    <span className='propertyListingExtra-post-shortInfo-type'>{dbObj.type}</span>
                                </div>
                                <p className='propertyListingExtra-post-info-price'>${addCommas(dbObj.amount)}</p>
                                <p className='propertyListingExtra-post-info-title'>{dbObj.name} {dbObj.type}</p>
                                <div className='propertyListingExtra-post-info-location'>
                                    <img className='post-info-gpsIcon' src={gpsIcon} alt='Location icon' />
                                    {dbObj.state}, {dbObj.address}
                                </div>
                                <div className='propertyListingExtra-post-footer'>
                                    <span className='propertyListingExtra-post-footerPart'><img src={sizeIcon} alt='Size icon' /> {dbObj.size} Sqft</span>
                                    <span className='propertyListingExtra-post-footerPart'><img src={bedsIcon} alt='Beds icon' /> {dbObj.amountOfBeds} Bed</span>
                                    <span className='propertyListingExtra-post-footerPart'><img src={bathroomIcon} alt='Bathroom icon' /> {dbObj.amountOfBaths} Bath</span>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </section>
        </div>
    );
}

export default PropertyListingExtra;
