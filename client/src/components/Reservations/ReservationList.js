import React, { useEffect, useState } from 'react';
import { getReservations } from '../../services/api';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            const data = await getReservations();
            setReservations(data);
        };

        fetchReservations();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Mis Reservas</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Espacio</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map(reservation => (
                        <tr key={reservation.id}>
                            <td>{reservation.spaceId.name}</td>
                            <td>{new Date(reservation.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReservationList;
