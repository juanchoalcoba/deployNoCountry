import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const HeaderDP = () => {
  const [userName, setUserName] = useState('');

  // Función para obtener solo el primer nombre del usuario
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (loggedUser && loggedUser.nombreCompleto) {
      const firstName = loggedUser.nombreCompleto.split(' ')[0]; // Obtiene solo el primer nombre
      setUserName(firstName);
    }
  }, []);

  return (
    <nav className="w-full font-abc h-16 bg-gray-200 flex items-center justify-between p-4">
      {/* Logo */}
      <div className="flex items-center ml-4">
          <span className="text-[28px] text-gray-400">Mi</span>
          <img src="logoheader.png" alt="Logo" />
      </div>

      {/* Saludo, Avatar y Notificaciones */}
      <div className="flex items-center font-medium space-x-8">
        {/* Saludo */}
        {userName ? (
          <p className="text-[#515151] text-[24px]">¡Hola, {userName}!</p>
        ) : (
          <p className="text-[#515151] text-[24px]">¡Hola, Usuario!</p>
        )}

        {/* Avatar Icono de Usuario */}
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-[#515151] text-[26px] cursor-pointer hover:text-gray-600 transition duration-200"
        />

        {/* Icono de notificaciones */}
        <FontAwesomeIcon
          icon={faBell}
          className="text-[#515151] text-[26px] cursor-pointer hover:text-gray-600 transition duration-200"
        />
      </div>
    </nav>
  );
};

export default HeaderDP;