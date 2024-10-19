import HeaderDP from "../components/DashboardPaciente/HeaderDP";
import { useNavigate } from 'react-router-dom';
const FirstStep = () => {
    const navigate = useNavigate();
  return (
    <>
    <HeaderDP />
    <div className="flex flex-col mx-auto mt-8 h-screen items-center w-[476px] shadow-2xl">
    <div className="flex items-center justify-center w-[359px] max-w-xl mx-auto">
      {/* Step 1 - Active */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#515151] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">1</span>
        </div>
        <div className="w-24 h-1 bg-[#515151]"></div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">2</span>
        </div>
        <div className="w-24 h-1 bg-gray-300"></div>
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

    <form className="w-[476px] bg-white p-6 rounded shadow-md">
        {/* Previsión */}
        <div className="mb-4">
          <label htmlFor="prevision" className="block text-xl font-medium text-gray-700 mb-2">
            Previsión
          </label>
          <select
            id="prevision"
            className="w-full px-4 py-4 mt-2 border-b-2 border-gray-400 rounded-b-2xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Seleccionar Previsión</option>
            <option value="prevision1">Previsión 1</option>
            <option value="prevision2">Previsión 2</option>
          </select>
        </div>

        {/* Especialidad */}
        <div className="mb-4">
          <label htmlFor="especialidad" className="block text-sm font-medium text-gray-700 mb-2">
            Especialidad
          </label>
          <select
            id="especialidad"
            className="w-full px-4 py-4 mt-2 border-b-2 border-gray-400 rounded-b-2xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Seleccionar Especialidad</option>
            <option value="especialidad1">Especialidad 1</option>
            <option value="especialidad2">Especialidad 2</option>
          </select>
        </div>

        {/* Mes */}
        <div className="mb-6">
          <label htmlFor="mes" className="block text-sm font-medium text-gray-700 mb-2">
            Mes
          </label>
          <select
            id="mes"
            className="w-full px-4 py-4 mt-2 border-b-2 border-gray-400 rounded-b-2xl outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Enero</option>
            <option value="prevision1">Febrero</option>
            <option value="prevision1">Marzo</option>
            <option value="prevision1">Abril</option>
            <option value="prevision1">Mayo</option>
            <option value="prevision1">Junio</option>
            <option value="prevision1">Julio</option>
            <option value="prevision2">Agosto</option>
            <option value="prevision2">Setiembre</option>
            <option value="prevision2">Octubre</option>
            <option value="prevision2">Noviembre</option>
            <option value="prevision2">Diciembre</option>
          </select>
        </div>

        {/* Botón y enlace */}
        <div className="flex justify-between items-center mt-16">
          <div
            className="text-gray-700 font-medium text-[26px] cursor-pointer flex items-center"
            onClick={() => navigate(-1)}
          >
            <a className="mr-1 text-[34px] text-gray-700">&lt;</a>
            Volver
          </div>
          <button
            type="submit"
            className="bg-[#515151] text-white text-[20px] px-8 py-2 font-medium rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Buscar hora
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default FirstStep;