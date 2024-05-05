// src/components/CityDetails.tsx
import React from 'react';
import style from  '../city-page.module.css'



interface CityDetailsProps {
  selectedCity: City | null;
}

const CityDetailsComponent: React.FC<CityDetailsProps> = ({ selectedCity }) => {
  return (
    <div className="city-details-container">
      {selectedCity && (
        
        <>
        <div className={style.citydetailrow}>
          The city of <strong>{selectedCity.name}</strong> has GeoNameID: <strong>{selectedCity.geonameid}</strong> and is in Country: <strong>{selectedCity.country}</strong>
        </div>
        
        
        </>
      )}
    </div>
  );
};

export default CityDetailsComponent;
