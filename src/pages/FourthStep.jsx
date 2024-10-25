import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from "react-router-dom";

const FourthStep = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderDP />

      <div className="flex items-center shadow-2xl justify-center w-[359px] max-w-xl mt-8 mx-auto">
        <div className="flex items-center">
          {/* Step 1 */}
          <div className="w-10 h-10 bg-[#515151] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">1</span>
          </div>
          <div className="w-24 h-1 bg-[#515151]"></div>

          {/* Step 2 */}
          <div className="w-10 h-10 bg-[#515151] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">2</span>
          </div>
          <div className="w-24 h-1 bg-[#515151]"></div>

          {/* Step 3 */}
          <div className="w-10 h-10 bg-[#515151] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">3</span>
          </div>
          <div className="w-24 h-1 bg-[#515151]"></div>

          {/* Step 4 */}
          <div className="w-10 h-10 bg-[#515151] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">4</span>
          </div>
        </div>
      </div>

      <h1 className="mt-16 text-[24px] font-medium font-abc text-center">
        Detalles pago - Telemedicina
      </h1>

      <hr className="w-[600px] border-t border-gray-500 mx-auto my-4" />

      <div className="mt-16 flex flex-col items-center w-[780px]">
        <div className="w-full max-w-md flex flex-col items-end">
          <p className="text-right">Valor Prestacion: $30.000</p>
          <p className="text-right">Bonificacion Prestacion: $18.000</p>
          <p className="text-right font-medium">Monto a Pagar: $12.000</p>
        </div>
      </div>

      <h2 className="text-center font-medium text-[24px] mt-8">
        Seleccionar metodo de pago
      </h2>

      <hr className="w-[600px] border-t border-gray-500 mx-auto my-4" />

      <div className="mt-8 flex justify-center items-center">
        <img src="pagos.png" alt="metodos de pagos" />
      </div>

      <div className="flex justify-center items-center gap-72 mt-8">
        <div
          className="text-gray-700 font-medium text-[26px] cursor-pointer flex items-center"
          onClick={() => navigate(-1)}
        >
          <a className="mr-2 text-[34px] text-gray-700">&lt;</a> Volver
        </div>
        <button
          type="button"
          onClick={() => navigate("/fifthstep")}
          className="bg-[#515151] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Pagar
        </button>
      </div>
    </>
  );
};

export default FourthStep;
