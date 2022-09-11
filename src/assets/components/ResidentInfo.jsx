import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({urlResident}) => {

    const [residents, setResidents] = useState('')

    useEffect(() => {
        axios
        .get(`${urlResident}`)
        .then(res => setResidents(res.data))
    }, [])

    console.log(residents)

    return (
        <div>
            <img src={residents.image} alt="" />
            <h2>Raza:
                <p>{residents.species}</p>
            </h2>
            <h2>Origen:
                <p>{residents.origin.name}</p>
            </h2>
            <h2>Apariciones
                <p>{residents.episode.length}</p>
            </h2>
        </div>
    );
};

export default ResidentInfo;