import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Locations = () => {

    const [ locations, setLocations ] = useState({});

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126) + 1
        axios
        .get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res => setLocations(res.data))
    }, [])

    console.log(locations)

    return (
        <div>
            <h2>Nombre:
                <p>{locations.name}</p>
            </h2>
            <h2>Tipo:
                <p>{locations.type}</p>
            </h2>
            <h2>Dimension:
                <p>{locations.dimension}</p>
            </h2>
            <h2>Poblacion:
                <p>{locations.residents?.length}</p>
            </h2>

            <div className='residents-cards'>
                {
                    locations.residents?.map(urlResident => (
                        <ResidentInfo urlResident={urlResident}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Locations;