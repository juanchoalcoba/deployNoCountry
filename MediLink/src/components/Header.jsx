import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logoheader.svg";

import { useState } from "react";

const Header = () => {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenHelp, setIsOpenHelp] = useState(false);

  return (
    <>
      <div className="h-[3.125rem] font-abc ">
        <button className="bg-[#BCBCBC] text-[1.25rem] h-[50px] w-[188px] text-[#515151] font-medium">
          PACIENTE
        </button>
        <button className="text-[1.25rem] h-[50px] w-[188px] text-[#515151] font-medium">
          MEDICO
        </button>
      </div>

      <nav className="flex items-center font-abc justify-around border-b-[1.5px]">
        <div>
          <img
            src={Logo}
            alt="Logo Medilink"
          />
        </div>

        <div className="font-medium text-[20px] text-[#515151] w-[538px] ml-[120px] flex justify-between">
          <div className="relative">
            <a
              href="#"
              onClick={() => setIsOpenServices(!isOpenServices)}
              className="flex items-center cursor-pointer"
            >
              Servicios{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-6"
              />
            </a>
            {/* Dropdown */}
            {isOpenServices && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Opción 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Opción 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Opción 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a href="#">Especialidades</a>

          <div className="relative">
            <a
              href="#"
              onClick={() => setIsOpenHelp(!isOpenHelp)}
              className="flex items-center cursor-pointer"
            >
              Ayuda{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className="ml-6"
              />
            </a>
            {/* Dropdown */}
            {isOpenHelp && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white z-10">
                <ul className="py-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Opción 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Opción 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Opción 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex p-4  space-x-8">
          <a
            href="/register"
            className="p-[10px] text-[20px] border-[3px]  font-medium w-[174px] h-[53.54px] text-[#515151] border-[#515151] rounded-xl text-center"
          >
            Registrarse
          </a>
          <a
            href="/login"
            className="p-[10px] text-[20px] border-[3px] font-medium w-[174px] h-[53.54px] text-[#FFFFFF] border-[#515151] bg-[#515151] rounded-xl text-center"
          >
            Ingresar
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
