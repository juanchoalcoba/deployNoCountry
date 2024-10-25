import { useNavigate } from "react-router-dom";
import HeaderDP from "../components/DashboardPaciente/HeaderDP";

const SeventhStep = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderDP />
      <div className="flex justify-center items-center h-screen font-abc">
        <div className="flex border border-gray-600 p-4 rounded-3xl flex-col w-[480px] justify-center items-center">
          {/* Imagen alineada a la izquierda */}
          <div className="w-full flex justify-start px-8 mb-8">
            <img className="w-[117px] mr-4" src="logoheader.png" alt="Logo" />
          </div>

          {/* Texto centralizado */}
          <div className="text-center mb-8">
            <h2 className="text-[24px] text-[#3F3F3F] font-medium">¡Reserva exitosa!</h2>
            <p className="text-[20px] text-[#515151] text-left mt-8">
              Tu reserva de Telemedicina fue realizada con <br />
              éxito. En la sección "Citas" puedes encontrar tu <br />
              hora reservada.
            </p>
          </div>

          <div className="w-full flex justify-end px-8">
            <button
              onClick={() => navigate("/dashboardpaciente")}  
              className="bg-[#515151] rounded-xl text-[#FFFFFF] text-[20px] font-medium px-12 py-3"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhStep;
