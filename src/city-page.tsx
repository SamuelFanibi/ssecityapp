'use client'
import { useState } from 'react';
import CityComponent from './components/cityComponent';
import CityDetailsComponent from './components/cityDetailsComponent';
import styles from './city-page.module.css'
import 'bootstrap/dist/css/bootstrap.css';


export default function CityPage() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const handleRowClick = (city: City) => {
      setSelectedCity(city);
    };
    return(
        <div className={styles.app}>
        <div className={styles.column}>
          <CityComponent onRowClick={handleRowClick} />
        </div>
        <div className={styles.column}>
          <CityDetailsComponent selectedCity={selectedCity} />
        </div>
      </div>
    );
}