import './PropertyTypesBlock.css';
import { propertyTypes as cardPropertyTypes } from '../../Locations/Locations';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import iconHouse from '../../../imgs/icon-house.png';
import iconApartment from '../../../imgs/icon-apartment.png';
import iconVilla from '../../../imgs/icon-villa.png';
import iconOffice from '../../../imgs/icon-housing.png';
import iconBuilding from '../../../imgs/icon-building.png';
import iconTownhouse from '../../../imgs/icon-neighborhood.png';
import iconShop from '../../../imgs/icon-condominium.png';
import iconGarage from '../../../imgs/icon-luxury.png';

// Function to add commas to numbers
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

function PropertyTypesBlock(props) {
  const [isVisibleStatic, setIsVisibleStatic] = useState(false);
  const [isVisibleCards, setIsVisibleCards] = useState(false);
  const [timeForEach, setTimeForEach] = useState(0.5);

  useEffect(() => {
    const handleScrollForStatic = () => {
      const scrollThreshold = window.innerWidth <= 768 ? 0 : 250;
      if (window.scrollY >= scrollThreshold) {
        setIsVisibleStatic(true);
      }
    };

    const handleScrollForCards = () => {
      if (window.scrollY >= 400) {
        setIsVisibleCards(true);
      }
    };

    window.addEventListener('scroll', handleScrollForStatic);
    window.addEventListener('scroll', handleScrollForCards);
    return () => {
      window.removeEventListener('scroll', handleScrollForStatic);
      window.removeEventListener('scroll', handleScrollForCards);
    };
  }, []);

  // Map propertyTypes to image imports
  const imageMap = {
    House: iconHouse,
    Apartment: iconApartment,
    Villa: iconVilla,
    Office: iconOffice,
    Building: iconBuilding,
    Townhouse: iconTownhouse,
    Shop: iconShop,
    Garage: iconGarage
  };

  return (
    <div className='propertyTypesBlock' style={{ paddingTop: props.animationStatus ? "5%" : "none" }}>
      <div className={isVisibleStatic || props.animationStatus ? 'propertyTypesBlock-text' : 'hidden'}>
        <h3>Housing Options</h3>
        <p>
          Discover luxurious homes, exquisite apartments, opulent penthouses, and charming villas.
          Find inspiring offices, versatile buildings, cozy townhouses, trendy shops, and secure garages.
          Your dream property awaits!
        </p>
      </div>
      <div className='propertyTypesBlock-cards'>
        {cardPropertyTypes.map(propertyType => (
          <div
            key={propertyType.index}
            style={{
              display: isVisibleCards || props.animationStatus ? 'flex' : 'none',
              backgroundColor: '#eefdf4',
              border: '1px solid transparent',
              borderRadius: '15px',
              marginRight: '2em',
              marginBottom: '2em',
              animation: `slideFromBottom ${timeForEach * (propertyType.index + 0.1)}s ease-out`
            }}
          >
            <Link
              to={{ pathname: '/property-listing-extra', state: { scrollToTop: true } }}
              style={{ animation: `${timeForEach * (propertyType.index + 0.1)}s`, textDecoration: "none" }}
              className='propertyTypesBlock-card'
            >
              <div>
                <img src={imageMap[propertyType.type]} alt={propertyType.type} />
              </div>
              <p className='propertyTypesBlock-card-name'>{propertyType.type}</p>
              <p className='propertyTypesBlock-card-amount'>{`${addCommas(propertyType.amount)} Properties`}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyTypesBlock;
