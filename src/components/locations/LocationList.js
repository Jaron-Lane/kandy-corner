import React, { useEffect, useState } from 'react';

export const LocationList = () => {
    const [ locations, setLocations ] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )

    return (
        <>
            <div className="container__locationList">
                <h3>Location List</h3>
                {
                    locations.map(
                        (loc) => {
                            return <p key = {`location--${loc.id}`}>{loc.address}</p>
                        }
                    )
                }
            </div>
        </>
    )
}