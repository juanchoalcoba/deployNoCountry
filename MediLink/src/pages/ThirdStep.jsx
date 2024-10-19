import { useState, useEffect } from 'react';
import HeaderDP from '../components/DashboardPaciente/HeaderDP';

const ThirdStep = () => {

    const nombreCompleto = localStorage.getItem('nombreCompleto') || "Nombre no disponible";
    const especialidad = localStorage.getItem('especialidad') || "Especialidad no disponible";
    const mes = localStorage.getItem('mes') || "Mes no disponible";
    const fecha = localStorage.getItem('selectedDate') || "Fecha no disponible";
    const hora = localStorage.getItem('selectedHour') || "Hora no disponible";

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("userData"));
        setUserData(storedData);
    }, []);

    return (
        <>
        
        <HeaderDP />            
        <div className="p-4 w-full flex flex-col justify-center items-center h-screen max-w-md mx-auto mt-8">
            <h2 className="text-lg font-semibold mb-4">Resumen de la Reserva</h2>

            <div className="bg-gray-100 p-4 rounded-md shadow-md">
                <h3 className="text-xl font-bold">Nombre Completo:</h3>
                <p>{userData ? userData.nombreCompleto : nombreCompleto}</p>

                <h3 className="text-xl font-bold mt-2">Especialidad:</h3>
                <p>{especialidad}</p>

                <h3 className="text-xl font-bold mt-2">Fecha de la Reserva:</h3>
                <p>{fecha} {mes}</p>

                <h3 className="text-xl font-bold mt-2">Hora de la Reserva:</h3>
                <p>{hora}</p>
                
                
            </div>
        </div>
        </>
    );
};

export default ThirdStep;
