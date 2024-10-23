import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCreditCard } from 'react-icons/fa';


const SixthStep = () => {
  const navigate = useNavigate();


      const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleCardNumberChange = (e) => {
        const input = e.target.value.replace(/\s/g, ''); // Elimina espacios
        if (input.length <= 16) {
            setCardNumber(input.match(/.{1,4}/g)?.join(' ') || ''); // Formatea en XXXX XXXX XXXX XXXX
        }
    };

    const handleExpiryDateChange = (e) => {
        const input = e.target.value.replace(/\//g, ''); // Elimina '/'
        if (input.length <= 4) {
            setExpiryDate(input.match(/.{1,2}/g)?.join('/') || ''); // Formatea en XX/XX
        }
    };

  return (
    <>
      <HeaderDP />
      <div className="flex p-8 justify-around ml-12 items-center w-[1200px] h-[914px] shadow-2xl">
        <div className="h-screen w-[797px] flex flex-col justify-center items-start">
          {" "}
          {/* Cambiado 'items-center' a 'items-start' */}
          <img src="webpay.png" alt="" className="mb-4" />{" "}
          {/* Agregado 'mb-4' para dar espacio entre la imagen y el siguiente contenido */}
          <div className="flex justify-around w-full items-center">
            {" "}
            {/* Cambiado 'w-[797px]' a 'w-full' para usar todo el espacio */}
            <div className="mt-16">
              <h4 className="text-[20px] font-medium">
                Estas pagando en: <br />
                <img src="flow.png" alt="" />
              </h4>
            </div>
            <div className="mt-16">
              <h4 className="text-[20px] font-medium">
                Monto a pagar <br />
                <span className="text-[34px] font-normal">$12000</span>
              </h4>
            </div>
          </div>
          <h2 className="text-center flex ml-44 mt-16 justify-center items-center font-medium text-[24px]">
            Seleccionar metodo de pago - Telemedicina
          </h2>
          <hr className="w-[600px] border-t border-gray-500 mx-auto my-4" />
          <div className="ml-24 mt-8 flex flex-col justify-center items-center">
            <img src="TARJETAS.png" alt="" />
            <img className="ml-8" src="QR.png" alt="" />
          </div>
          
        </div>

        <div className="mb-16">
            <h4 className="text-[24px] font-medium">Ingresar datos de la tarjeta</h4>
            <div className="mt-6 bg-gray-300 rounded-lg w-96 p-6 relative shadow-lg">
                <FaCreditCard className="absolute top-2 left-2 text-black" size={28} />
                <div className="text-black text-xl font-bold mt-10">{cardNumber || 'XXXX XXXX XXXX XXXX'}</div>
                <div className="text-black text-base">{expiryDate || 'MM/AA'}</div>
            </div>
            <div className="mt-8">
                <h5 className="text-lg font-medium">Número de Tarjeta</h5>
                <input
                    type="text"
                    maxLength="19"
                    className="border border-gray-400 rounded-lg p-3 mt-2 w-full"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    required
                />
                <h5 className="text-lg font-medium mt-4">Fecha de Expiración</h5>
                <input
                    type="text"
                    maxLength="5"
                    className="border border-gray-400 rounded-lg p-3 mt-2 w-full"
                    placeholder="MM/AA"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    required
                />
                <h5 className="text-lg font-medium mt-4">Codigo de verificacion</h5>
                <input
                    type="text"
                    maxLength="3"
                    className="border border-gray-400 rounded-lg p-3 mt-2 w-full"
                    placeholder="CVV"
                    required
                />
            </div>
        </div>

      </div>
        <div className="flex justify-around items-center gap-96 mt-8">
            <div
              className="text-gray-700 font-medium text-[26px] cursor-pointer flex items-center"
              onClick={() => navigate(-1)}
            >
              <a className="mr-2 text-[34px] text-gray-700">&lt;</a> Volver
            </div>
            <button
              type="button"
              onClick={() => navigate("/seventhstep")}
              className="bg-[#515151] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Pagar
            </button>
          </div>
    </>
  );
};

export default SixthStep;
