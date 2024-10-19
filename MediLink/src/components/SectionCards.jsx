import { PiStethoscopeBold } from "react-icons/pi";
import { MdOutlineVideoCall } from "react-icons/md";
import { GiMicroscope } from "react-icons/gi";

const SectionCards = () => {
  return (
    <div className="bg-[#E5E5E5] py-10  ">
      {/* Títulos alineados a la izquierda */}
      <div className="px-14 pb-6 border-red-500">
        <p className="mb-3 text-left ml-[10px] text-[24px] font-abc font-normal leading-[32px] text-[#515151]">
          ¿Por qué nosotros?
        </p>
        <p className="text-left ml-[10px] text-[24px] font-abc font-medium leading-[32px] tracking-[0.0025em] text-[#515151]">
          Nuestra plataforma te ofrece atención médica rápida y segura, desde
          donde estés.
        </p>
      </div>

      {/* Contenedor de las cards */}
      <div className="flex justify-evenly gap-8 mt-8">
        {/* Primera card */}
        <div className="bg-white border-[#515151] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[32px] w-[400px] min-h-[485px] max-h-[576px] gap-[35px]">
          <div className="flex flex-col items-center">
            {/* Icono arriba del título */}
            <PiStethoscopeBold
              size={60}
              className="text-[#515151] mb-8 items-center"
            />
            <h3 className="text-center text-[24px] font-medium text-[#515151] mb-8">
              Médico de Guardia
            </h3>
            <p className="text-left text-[16px] text-[#515151] leading-[26px] mb-10 px-5">
              En caso de emergencia o si necesitas atención en menos de 24
              horas, te ofrecemos nuestro servicio de telemedicina con nuestro
              médico de guardia 24/7.
            </p>

            <button className="mb-6 font-medium px-12 p-3 bg-[#515151] text-white rounded-xl shadow-md hover:bg-[#5D5D5D] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-gray-600 border-2 border-gray-500 rounded-xl shadow-md hover:bg-gray-200 transition">
              Conocer más
            </button>
          </div>
        </div>
        {/* Segunda card */}
        <div className="bg-white border-[#515151] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[32px] w-[400px] min-h-[485px] max-h-[576px] gap-[35px]">
          <div className="flex flex-col items-center">
            {/* Icono arriba del título */}
            <MdOutlineVideoCall
              size={60}
              className="text-[#515151] mb-8 items-center"
            />
            <h3 className="text-center text-[24px] font-medium text-[#515151] mb-8">
              Telemedicina
            </h3>
            <p className="text-left text-[16px] text-[#515151] leading-[26px] mb-10 px-5">
              Ya no necesitas perder tiempo en traslados y salas de espera, con{" "}
              <br />
              nuestro servicio de telemedicina, conéctate con un especialista
              estés donde estés.
            </p>

            <button className="mb-6 font-medium px-12 p-3 bg-[#515151] text-white rounded-xl shadow-md hover:bg-[#5D5D5D] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-gray-600 border-2 border-gray-500 rounded-xl shadow-md hover:bg-gray-200 transition">
              Conocer más
            </button>
          </div>
        </div>
        {/* Tercera card */}
        <div className="bg-white border-[#515151] shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-[20px] p-[32px] w-[400px] min-h-[485px] max-h-[576px] gap-[35px]">
          <div className="flex flex-col items-center">
            {/* Icono arriba del título */}
            <GiMicroscope
              size={60}
              className="text-[#515151] mb-8 items-center"
            />
            <h3 className="text-center text-[24px] font-medium text-[#515151] mb-8">
              Exámenes
            </h3>
            <p className="text-left text-[16px] text-[#515151] leading-[26px] mb-10 px-5 pb-6">
              Reserva y revisa resultados de tus exámenes en linea, cómodo y
              seguro. Contamos con Laboratorios <br /> acreditados.
            </p>

            <button className="mb-6 font-medium px-12 p-3 bg-[#515151] text-white rounded-xl shadow-md hover:bg-[#5D5D5D] transition">
              Reservar
            </button>
            <button className="font-medium px-8 p-3 bg-white text-gray-600 border-2 border-gray-500 rounded-xl shadow-md hover:bg-gray-200 transition">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
