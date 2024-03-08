import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { t } = useTranslation('ns1');
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const navbarStyle = {
    backgroundColor: hovered ? '#005A14' : 'rgba(113, 194, 131, 0.6)', // Cambia el color de fondo dependiendo si el mouse está sobre el navbar o no
    transition: 'background-color 0.3s', // Añade una transición suave para el cambio de color de fondo
  };

  //<div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
  //</div>

  return (
    <nav style={navbarStyle} className="font-semibold bg-white dark:bg-gray-900 lg:fixed w-full z-20 top-0 start-0 border-b border-gray-200" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="items-center justify-center w-full md:w-auto md:order-1 p-5">
          <ul className="flex flex-col md:flex-row justify-evenly w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link to="/home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.home')}</Link>
            </li>
            <li>
              <Link to="/about_us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.about_us')}</Link>
            </li>
            <li>
              <a href="/contact_us" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.contact')}</a>
            </li>
            <li>
              <a href="/news" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.news')}</a>
            </li>
            <li>
              <a href="/sports" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.sports')}</a>
            </li>
          </ul>
        </div>
      
    </nav>

  );
}
