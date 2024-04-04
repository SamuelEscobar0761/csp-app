import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { t } = useTranslation('ns1');
  const [hovered, setHovered] = useState(false);
  const [actualPage, setActualPage] = useState("home");
  const [aboutUsExpanded, setAboutUsExpanded] = useState(false);
  const [sportsExpanded, setSportsExpanded] = useState(false);
  const [restaurantExpanded, setRestaurantExpanded] = useState(false);
  const [joinUsExpanded, setJoinUsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const toggleAboutUs = () => {
    setAboutUsExpanded(!aboutUsExpanded);
  };

  const toggleSports = () => {
    setSportsExpanded(!sportsExpanded);
  };

  const toggleRestaurant = () => {
    setRestaurantExpanded(!restaurantExpanded);
  };

  const toggleJoinUs = () => {
    setJoinUsExpanded(!joinUsExpanded);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = (pageToggled: string) => {
    if(actualPage !== pageToggled){
      setActualPage(pageToggled);
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }
  };

  const navbarStyle = {
    backgroundColor: hovered ? '#539A6C' : 'rgba(113, 194, 131, 0.6)',
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navbarStyle} className="font-semibold lg:fixed w-full h-24 z-20" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center w-full md:w-auto md:order-1 p-5 h-full">
        <ul className="flex flex-col items-center md:flex-row justify-evenly w-full h-full md:w-auto space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <img src='/assets/images/sin_foto.jpg' className='h-7' alt="Logo" />
          </li>
          <li>
            <Link to="/home" onClick={() => scrollToTop("home")} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-48 text-center">{t('navbar.home')}</Link>
          </li>
          <li onMouseLeave={() => setAboutUsExpanded(false)} className='relative'>
            <Link to='/about_us' onClick={() => { scrollToTop("about_us"); toggleAboutUs(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer w-48 text-center">{t('navbar.about_us')}</Link>
            {aboutUsExpanded && (
              <ul className="md:absolute bg-primary-400 md:shadow-md rounded-lg w-48 text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#history" onClick={() => setAboutUsExpanded(false)}>History</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#directory" onClick={() => setAboutUsExpanded(false)}>Directory</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#statutes" onClick={() => setAboutUsExpanded(false)}>Statutes</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#memories" onClick={() => setAboutUsExpanded(false)}>Memories</a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseLeave={() => setSportsExpanded(false)} className='relative'>
            <Link to='/sports' onClick={() => { scrollToTop("sports"); toggleSports(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer w-48 text-center">{t('navbar.sports')}</Link>
            {sportsExpanded && (
              <ul className="md:absolute bg-primary-400 md:shadow-md rounded-lg w-48 text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#natacion" onClick={() => setSportsExpanded(false)}>Natacion</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#tenis" onClick={() => setSportsExpanded(false)}>Tenis</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#raquet" onClick={() => setSportsExpanded(false)}>Raquet</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#paleta" onClick={() => setSportsExpanded(false)}>Paleta</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#futbol" onClick={() => setSportsExpanded(false)}>Fútbol</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#gimnasio" onClick={() => setSportsExpanded(false)}>Gimnasio</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#ciclismo" onClick={() => setSportsExpanded(false)}>Ciclismo</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#wally" onClick={() => setSportsExpanded(false)}>Wally</a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseLeave={() => setRestaurantExpanded(false)} className='relative'>
            <Link to='/restaurant' onClick={() => { scrollToTop("restaurant"); toggleRestaurant(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer w-48 text-center">{t('navbar.restaurant')}</Link>
            {restaurantExpanded && (
              <ul className="md:absolute bg-primary-400 md:shadow-md rounded-lg w-48 text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#weekly" onClick={() => setRestaurantExpanded(false)}>Menú Semanal</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#main" onClick={() => setRestaurantExpanded(false)}>Menú Comedor</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#snack" onClick={() => setRestaurantExpanded(false)}>Menú Snack</a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseLeave={() => setJoinUsExpanded(false)} className='relative'>
            <Link to='/join_us' onClick={() => { scrollToTop("join_us"); toggleJoinUs(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer w-48 text-center">{t('navbar.join_us')}</Link>
            {joinUsExpanded && (
              <ul className="md:absolute bg-primary-400 md:shadow-md rounded-lg w-48 text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#tariff" onClick={() => setJoinUsExpanded(false)}>Tarifario</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#participation" onClick={() => setJoinUsExpanded(false)}>Participación</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/news" onClick={() => scrollToTop("news")} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-48 text-center">{t('navbar.news')}</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-end w-full h-full pr-5">
        <button onClick={handleMobileMenuToggle} className="text-gray-900 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-gray-800 bg-opacity-50">
          <div className="flex flex-col items-start justify-start h-full w-3/4 bg-primary-400 shadow-lg py-6 px-4">
            <button onClick={handleMobileMenuToggle} className="text-gray-900 focus:outline-none mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/home" onClick={() => { scrollToTop("home"); handleMobileMenuToggle(); }} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-full text-left">{t('navbar.home')}</Link>
              </li>
              <li>
                <Link to="/about_us" onClick={() => { scrollToTop("about_us"); handleMobileMenuToggle(); }} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-full text-left">{t('navbar.about_us')}</Link>
              </li>
              <li>
                <Link to="/sports" onClick={() => { scrollToTop("sports"); handleMobileMenuToggle(); }} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-full text-left">{t('navbar.sports')}</Link>
              </li>
              <li>
                <Link to="/restaurant" onClick={() => { scrollToTop("restaurant"); handleMobileMenuToggle(); }} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-full text-left">{t('navbar.restaurant')}</Link>
              </li>
              <li>
                <Link to="/join_us" onClick={() => { scrollToTop("join_us"); handleMobileMenuToggle(); }} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-full text-left">{t('navbar.join_us')}</Link>
              </li>
              <li>
                <Link to="/news" onClick={() => { scrollToTop("news"); handleMobileMenuToggle(); }} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 w-full text-left">{t('navbar.news')}</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
