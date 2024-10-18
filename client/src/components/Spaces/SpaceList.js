import React, { useEffect, useState } from 'react';
import { getSpaces } from '../../services/api';

const SpaceList = () => {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        const fetchSpaces = async () => {
            const data = await getSpaces();
            setSpaces(data);
        };

        fetchSpaces();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Espacios Disponibles</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Ubicación</th>
                        <th scope="col">Capacidad</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {spaces.map(space => (
                        <tr key={space.id}>
                            <td>{space.name}</td>
                            <td>{space.location}</td>
                            <td>{space.capacity}</td>
                            <td>{space.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SpaceList;
