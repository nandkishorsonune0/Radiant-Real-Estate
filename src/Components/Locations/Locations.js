// Import images
import houseIcon from '../../imgs/icon-house.png';
import apartmentIcon from '../../imgs/icon-apartment.png';
import villaIcon from '../../imgs/icon-villa.png';
import officeIcon from '../../imgs/icon-housing.png';
import buildingIcon from '../../imgs/icon-building.png';
import townhouseIcon from '../../imgs/icon-neighborhood.png';
import shopIcon from '../../imgs/icon-condominium.png';
import garageIcon from '../../imgs/icon-luxury.png';

import property1 from '../../imgs/property-1.jpg';
import property2 from '../../imgs/property-2.jpg';
import property3 from '../../imgs/property-3.jpg';
import property4 from '../../imgs/property-4.jpg';
import property5 from '../../imgs/property-5.jpg';
import property6 from '../../imgs/property-6.jpg';

// Define property types
const propertyTypes = [
  { type: "House", amount: 1503455, imageURL: houseIcon, index: 1 },
  { type: "Apartment", amount: 203421, imageURL: apartmentIcon, index: 2 },
  { type: "Villa", amount: 250440, imageURL: villaIcon, index: 3 },
  { type: "Office", amount: 186540, imageURL: officeIcon, index: 4 },
  { type: "Building", amount: 354600, imageURL: buildingIcon, index: 5 },
  { type: "Townhouse", amount: 845664, imageURL: townhouseIcon, index: 6 },
  { type: "Shop", amount: 224356, imageURL: shopIcon, index: 7 },
  { type: "Garage", amount: 166454, imageURL: garageIcon, index: 8 }
];

// Define property locations
const propertyLocations = [
  "North Carolina",
  "South Carolina",
  "Oklahoma"
];

// Define database of pseudo properties
const databaseOfPseudoProperties = [
  {
    name: 'Golden Urban',
    type: propertyTypes[0].type,
    amount: propertyTypes[0].amount,
    imageURL: property1, 
    state: propertyLocations[0],
    address: 'Some Street, USA',
    size: 950,
    amountOfBeds: 2,
    amountOfBaths: 1,
    status: "For Rent",
    index: 1
  },
  {
    name: 'Silver Suburban',
    type: propertyTypes[1].type,
    amount: propertyTypes[1].amount,
    imageURL: property2,
    state: propertyLocations[1],
    address: 'Some Street, USA',
    size: 1100,
    amountOfBeds: 3,
    amountOfBaths: 2,
    status: "For Sale",
    index: 2
  },
  {
    name: 'Luxury Condo',
    type: propertyTypes[2].type,
    amount: propertyTypes[2].amount,
    imageURL: property3,
    state: propertyLocations[0],
    address: 'Some Street, USA',
    size: 1000,
    amountOfBeds: 2,
    amountOfBaths: 1,
    status: "For Sale",
    index: 3
  },
  {
    name: 'Modern',
    type: propertyTypes[3].type,
    amount: propertyTypes[3].amount,
    imageURL: property4,
    state: propertyLocations[0],
    address: 'Some Street, USA',
    size: 950,
    amountOfBeds: 2,
    amountOfBaths: 1,
    status: "For Sale",
    index: 4
  },
  {
    name: 'Duplex Dreams',
    type: propertyTypes[4].type,
    amount: propertyTypes[4].amount,
    imageURL: property5,
    state: propertyLocations[0],
    address: 'Some Street, USA',
    size: 1200,
    amountOfBeds: 3,
    amountOfBaths: 2,
    status: "For Rent",
    index: 5
  },
  {
    name: 'Extravagant',
    type: propertyTypes[3].type,
    amount: propertyTypes[1].amount,
    imageURL: property6,
    state: propertyLocations[1],
    address: 'Some Street, USA',
    size: 932,
    amountOfBeds: 3,
    amountOfBaths: 2,
    status: "For Sale",
    index: 6
  }
];

export { propertyLocations, propertyTypes, databaseOfPseudoProperties };
