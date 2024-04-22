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
    <div>
    <nav style={navbarStyle} className="font-semibold md:fixed w-full h-24 z-20 hidden md:block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center w-full h-full">
        <ul className="flex justify-center items-center w-full h-full">
          <li className='flex-grow mx-5 lg:ml-32 relative'>
            <img src='/assets/images/logos/logo_simple.svg' alt="Logo" className='h-16 white_logo'/>
          </li>
          <li className='flex-grow p-2'>
            <Link to="/home" onClick={() => scrollToTop("home")} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 text-center">{t('navbar.home')}</Link>
          </li>
          <li onMouseLeave={() => setAboutUsExpanded(false)} className='flex-grow relative p-2'>
            <Link to='/about_us' onClick={() => { scrollToTop("about_us"); toggleAboutUs(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer text-center">{t('navbar.about_us')}</Link>
            {aboutUsExpanded && (
              <ul className="absolute top-full left-0 w-full bg-primary-400 md:shadow-md rounded-lg text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#history" onClick={() => setAboutUsExpanded(false)}>{t('navbar.history')}</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#directory" onClick={() => setAboutUsExpanded(false)}>{t('navbar.directory')}</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#statutes" onClick={() => setAboutUsExpanded(false)}>{t('navbar.statute')}</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#regulations" onClick={() => setAboutUsExpanded(false)}>{t('navbar.regulations')}</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#memories" onClick={() => setAboutUsExpanded(false)}>{t('navbar.memories')}</a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseLeave={() => setSportsExpanded(false)} className='flex-grow relative p-2'>
            {/* <Link to='/sports' onClick={() => { scrollToTop("sports"); toggleSports(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer text-center">{t('navbar.sports')}</Link> */}
            <p onClick={() => { scrollToTop("sports"); toggleSports(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer text-center">{t('navbar.sports')}</p>
            {sportsExpanded && (
              <ul className="absolute top-full left-0 w-full bg-primary-400 md:shadow-md rounded-lg text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/swimming' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.swimming')}</Link>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/tennis' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.tennis')}</Link>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/racket' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.racket')}</Link>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/paddle' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.padding')}</Link>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/football' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.football')}</Link>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/gym' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.gym')}</Link>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/cycling' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.cycling')}</Link>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <Link to='/wally' onClick={() => { scrollToTop("swimming"); setSportsExpanded(false); }} className="md:p-2 md:hover:text-white">{t('navbar.wally')}</Link>
                </li>
              </ul>
            )}
          </li>
          <li onMouseLeave={() => setRestaurantExpanded(false)} className='flex-grow relative p-2'>
            <Link to='/restaurant' onClick={() => { scrollToTop("restaurant"); toggleRestaurant(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer text-center">{t('navbar.restaurant')}</Link>
            {restaurantExpanded && (
              <ul className="absolute top-full left-0 w-full bg-primary-400 md:shadow-md rounded-lg text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#weekly" onClick={() => setRestaurantExpanded(false)}>{t('navbar.weekly_menu')}</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#main" onClick={() => setRestaurantExpanded(false)}>{t('navbar.main_menu')}</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#snack" onClick={() => setRestaurantExpanded(false)}>{t('navbar.snack_menu')}</a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseLeave={() => setJoinUsExpanded(false)} className='flex-grow relative p-2'>
            <Link to='/join_us' onClick={() => { scrollToTop("join_us"); toggleJoinUs(); }} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 cursor-pointer text-center">{t('navbar.join_us')}</Link>
            {joinUsExpanded && (
              <ul className="absolute top-full left-0 w-full bg-primary-400 md:shadow-md rounded-lg text-center text-gray-900">
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#tariff" onClick={() => setJoinUsExpanded(false)}>{t('navbar.tariff')}</a>
                </li>
                <li className='md:p-2 md:hover:text-white'>
                  <a href="#participation" onClick={() => setJoinUsExpanded(false)}>{t('navbar.participation')}</a>
                </li>
              </ul>
            )}
          </li>
          <li className='mr-2 lg:mr-32 p-2'>
            <Link to="/news" onClick={() => scrollToTop("news")} className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 text-center">{t('navbar.news')}</Link>
          </li>
        </ul>
      </div>
    </nav>

    {/* Mobile Navbar */}
    
    <button onClick={handleMobileMenuToggle} className="md:hidden text-gray-900 focus:outline-none fixed top-4 right-4 z-50">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
      <div className="flex flex-col items-start justify-start h-full w-1/3 bg-primary-400 shadow-lg py-6 px-4">
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
</div>
  );
}
