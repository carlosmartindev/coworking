import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SpaceList from './components/Spaces/SpaceList';
import ReservationList from './components/Reservations/ReservationList';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <h1 className="mt-4">Plataforma de Coworking</h1>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/spaces" element={<SpaceList />} />
                        <Route path="/reservations" element={<ReservationList />} />
                        <Route path="/" element={<h2>Bienvenido a la plataforma</h2>} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
