import Specialists from "../assets/specialists.png";

const SectionSpecialists = () => {
  return (
    <div className="p-8 flex justify-center py-16">
      <div className="bg-white shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-xl flex w-[1340px] h-[397px]">
        {/* Sección izquierda: Texto y botón */}
        <div className="flex flex-col justify-center p-8 w-1/2 ">
          <h3 className="pl-10 text-[24px] leading-[32px] font-medium text-[#515151] mb-4">
            Te invitamos a conocer a nuestros <br /> especialistas
          </h3>
          <p className="pl-10 text-[20px] text-[#515151] leading-[28px] mb-10 ">
            Un equipo de trabajo multidisciplinario que te <br /> entrega
            alternativas de atención y tratamientos <br /> para diversas
            patologías.
          </p>
          <button className="ml-10 font-medium px-12 py-3 bg-[#515151] text-white rounded-xl shadow-md hover:bg-[#5D5D5D] transition self-start">
            Conocer más
          </button>
        </div>

        {/* Sección derecha: Imagen */}
        <div className="w-1/2">
          <img
            src={Specialists}
            alt="Especialistas"
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSpecialists;
