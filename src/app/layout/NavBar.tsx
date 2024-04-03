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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Desplazamiento suave
    });
  };

  const navbarStyle = {
    backgroundColor: hovered ? '#005A14' : 'rgba(113, 194, 131, 0.6)',
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navbarStyle} className="font-semibold lg:fixed w-full h-15 z-20 top-0 start-0 border-b border-gray-200" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="items-center justify-center w-full md:w-auto md:order-1 p-5">
        <ul className="flex flex-col md:flex-row justify-evenly w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <img src='/assets/images/sin_foto.jpg' className='h-7' />
          </li>
          <li>
            <Link to="/home" onClick={scrollToTop} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.home')}</Link>
          </li>
          <li>
            <Link to="/about_us" onClick={scrollToTop} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.about_us')}</Link>
          </li>
          <li>
            <Link to="/sports" onClick={scrollToTop} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.sports')}</Link>
          </li>
          <li>
            <Link to="/restaurant" onClick={scrollToTop} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.restaurant')}</Link>
          </li>
          <li>
            <Link to="/join_us" onClick={scrollToTop} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.join_us')}</Link>
          </li>
          <li>
            <Link to="/news" onClick={scrollToTop} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0">{t('navbar.news')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
