 
const Hero = () => {
    return (
      <div className="mt-[34.46px] p-4 font-abc w-[1340px] h-[458px] flex justify-around items-center">
          <div className="ml-24  flex flex-col justify-center items-start">
              <h2 className="text-[34px] w-[500px] text-[#515151]">Realiza hoy tus examenes <br />
              preventivos
              </h2>
              <p className="text-[20px] mt-8 text-[#515151]">Detectá a tiempo el cáncer de máma</p>
              <button className="font-medium text-[20px] w-[204px] mt-12 h-[56px] bg-[#515151] text-[#FFFFFF] rounded-xl">Reservar exámen</button>
          </div>
  
          <div className="flex justify-center items-center">
          <img className="ml-6 rounded-xl" src="hero.png" alt="" />
          </div>
      </div>
    )
  }
  
  export default Hero