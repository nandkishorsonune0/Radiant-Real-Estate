import './SearchBar.css';
import { Link } from 'react-router-dom';
import { propertyLocations as searchBarLocations, propertyTypes as searchBarTypes } from '../Locations/Locations';


function SearchBar() {
  return (
    <div className='searchBar'>
      <form className='searchBar-form'>
        <input className='searchBar-form-searchField' type='search' placeholder='Search Keyword' />
        <select className='searchBar-form-propertyTypes' defaultValue="">
          <option className='searchBar-form-propertyType' value="" disabled>Choose property's type</option>
          {searchBarTypes.map((apartmentType, index) => (
            <option key={index} className='searchBar-form-propertyType'>{apartmentType.type}s</option>
          ))}
        </select>
        <select className='searchBar-form-propertyLocations' defaultValue="">
          <option className='searchBar-form-propertyLocation' value="" disabled>Choose property's location</option>
          {searchBarLocations.map((locationType, index) => (
            <option key={index} className='searchBar-form-propertyLocation'>{locationType}</option>
          ))}
        </select>
        <Link to="/property-listing-extra" className='searchBar-form-submitSearch'>
          Search
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
