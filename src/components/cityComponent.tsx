import React, { useState, useEffect } from 'react';
import axios from 'axios';
import createCompare from './createCompare';



interface CityTableProps {
  onRowClick: (city: City) => void;
}

const CityComponent: React.FC<CityTableProps> = ({ onRowClick }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [citiesPerPage] = useState(10);

  useEffect(() => {
    axios.get('https://datahub.io/core/world-cities/r/world-cities.json')
      .then(response => setCities(response.data.sort(createCompare("name", "asc"))));
  }, []);

  //const indexOfLastCity = currentPage * citiesPerPage;
  //const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  // const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

  // const paginate = (pageNumber: number) => {
  //   setCurrentPage(pageNumber);
  // };

  // const handlePrevClick = () => {
  //   setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  // };

  // const handleNextClick = () => {
  //   setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(cities.length / citiesPerPage)));
  // };

  const loadMoreRows = () => {
    setStartIndex(prevIndex => prevIndex + 10);
  };

  return (
    <div className="city-table-container">
      <table className='table table-dark table-striped-columns'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Sub-Country</th>
            <th scope='col'>Country</th>
            
          </tr>
        </thead>
        <tbody>
          {/* {currentCities.map(city => (
            <tr key={city.geonameid} onClick={() => onRowClick(city)}>
              <td>{city.name}</td>
              <td>{city.country}</td>
              
              </tr>
            ))} */}
        {cities.slice(startIndex, startIndex + 10).map(city => (
            <tr key={city.geonameid} onClick={() => onRowClick(city)}>
              <td>{city.name}</td>
              <td>{city.subcountry}</td>
              <td>{city.country}</td>
             
            </tr>
        ))}
        
        </tbody>
      </table>
      <button onClick={loadMoreRows}>Load More</button>
      {/* <div className="pagination">
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: Math.ceil(cities.length / citiesPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextClick} disabled={currentPage === Math.ceil(cities.length / citiesPerPage)}>
          Next
        </button>
    </div> */}
  </div>
  );
};

export default CityComponent;



