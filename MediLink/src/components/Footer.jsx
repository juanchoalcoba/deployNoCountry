import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#5D5D5D] w-full font-abc mt-8">
      <div className="max-w-[1440px] h-[91px] mx-auto flex justify-around items-center px-4">
        {/* Sección izquierda */}
            <img src="logofooter.png" alt="logofooter" />
        <ul className="flex mr-36 items-center space-x-4 text-[#FFFFFF]">
          
          <li className="text-[20px]">Acerca de este sitio:</li>
          <li className="text-[20px]">Terminos y Condiciones</li>
          <li className="text-[20px]"><span>|</span></li>
          <li className="text-[20px]">Sugerencias y reclamos</li>
        </ul>

        {/* Sección derecha (Redes sociales) */}
        <div className="flex space-x-4 mr-2">
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#515151] w-12 h-12 flex items-center justify-center rounded-full"
  >
    <FontAwesomeIcon icon={faTwitter} size="lg" />
  </a>
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#515151] w-12 h-12 flex items-center justify-center rounded-full"
  >
    <FontAwesomeIcon icon={faFacebookF} size="lg" />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#515151] w-12 h-12 flex items-center justify-center rounded-full"
  >
    <FontAwesomeIcon icon={faInstagram} size="lg" />
  </a>
</div>

      </div>
    </footer>
  );
}

export default Footer;