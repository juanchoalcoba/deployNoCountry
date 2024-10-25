import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import '../css/calendar-overrides.css';
import HoraEspecialistas from "../components/HoraEspecialistas";
import HoraEspecialistas2 from "../components/HoraEspecialistas2";

const SecondStep = () => {
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedHour, setSelectedHour] = useState(null);
    const [especialidad, setEspecialidad] = useState('');

    
    useEffect(() => {
        
        const months = {
            "Enero": 0,
            "Febrero": 1,
            "Marzo": 2,
            "Abril": 3,
            "Mayo": 4,
            "Junio": 5,
            "Julio": 6,
            "Agosto": 7,
            "Setiembre": 8,
            "Octubre": 9,
            "Noviembre": 10,
            "Diciembre": 11,
        };


        const storedEspecialidad = localStorage.getItem('especialidad');
        const storedMes = localStorage.getItem('mes');

        if (storedEspecialidad) {
            setEspecialidad(storedEspecialidad);
        }

        if (storedMes) {
            const monthNumber = months[storedMes];
            const today = new Date();
            let targetYear = today.getFullYear();

            if (monthNumber < today.getMonth()) {
                targetYear += 1;
            }

            const newDate = new Date(targetYear, monthNumber, 1);
            setCurrentDate(newDate);
        }
    }, []);

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
    };

    const handleReserve = () => {
        const dateString = currentDate.toISOString().split('T')[0];
        localStorage.setItem('selectedDate', dateString);
        localStorage.setItem('selectedHour', selectedHour);
        navigate('/thirdstep');
    };

    return (
        <>
            <HeaderDP />
            <div className="flex font-abc flex-col mx-auto mt-8 items-center w-[797px] shadow-2xl">
                <div className="flex items-center justify-center w-[359px] max-w-xl mx-auto">
                    {/* Step 1 */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#515151] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">1</span>
                        </div>
                        <div className="w-24 h-1 bg-[#515151]"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#515151] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">2</span>
                        </div>
                        <div className="w-24 h-1 bg-[#515151]"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">3</span>
                        </div>
                        <div className="w-24 h-1 bg-gray-300"></div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">4</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-[24px] font-medium font-abc text-center mt-16">Reserva Telemedicina</h1>

                <h2 className="text-[20px] flex justify-start w-full mt-12">Seleccionar fecha</h2>

                <div className="w-full max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
                    <Calendar
                        value={currentDate}
                        onChange={setCurrentDate}
                        className="w-full border-none"
                    />
                </div>

                {especialidad === "Dermatología" && (
                    <HoraEspecialistas selectedDate={currentDate} onHourSelect={handleHourSelect} />
                )}

                {especialidad === "Cardiología" && (
                    <HoraEspecialistas2 selectedDate={currentDate} onHourSelect={handleHourSelect} />
                )}

                <div className="flex justify-between w-full mt-4 p-16">
                    <div
                        className="text-gray-700 font-medium text-[26px] cursor-pointer"
                        onClick={() => navigate(-1)}
                    >
                        <a className="mr-1 text-[34px] text-gray-700">&lt;</a>
                        Volver
                    </div>
                    <button
                        type="button"
                        className="bg-[#515151] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={handleReserve}
                    >
                        Reservar
                    </button>
                </div>
            </div>
        </>
    );
};

export default SecondStep;
