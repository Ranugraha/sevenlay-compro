import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.jpeg';
import { useEffect, useState } from 'react';

const menuLink = [
  {
    id: 1,
    name: 'home',
    link: '/',
  },
  {
    id: 3,
    name: 'about us',
    link: '/about-us',
  },
  {
    id: 2,
    name: 'services',
    link: '/services',
  },
];

const Navbar = () => {
  // hamburger

  const [isMenuClick, setisMenuClick] = useState(true);
  const [hamburger, sethamburger] = useState('');
  const hamburgerActive = () => {
    if (!isMenuClick) {
      sethamburger('hamburger-active');
    } else {
      sethamburger('1');
    }
  };

  const [navbar, setnavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    // <div className="flex items-center h-[113px] w-full justify-center relative" >
    <div
      className={
        navbar
          ? 'flex items-center h-20 md:h-[113px] w-full justify-center fixed transition-all duration-500 bg-white shadow-lg z-50'
          : 'flex items-center h-20 md:h-[113px] w-full justify-center fixed transition-all bg-white duration-500 z-50'
      }
    >
      <div className="flex items-center justify-between w-full mx-6 md:mx-6 md:w-[1180px] 2xl:min-w-[1320px]">
        <Link to="/">
          <img src={logo} alt="" className="w-auto h-[49px]" />
        </Link>
        <ul className="lg:block hidden">
          {menuLink.map((listItem) => (
            <Link
              to={listItem.link}
              key={listItem.id}
              className={
                // navbar
                //   ? "text-white text-sm font-medium font-['Roboto'] uppercase tracking-tight mx-4  hover:text-button transition duration-300"
                //   :
                "text-primary text-sm font-medium font-['Roboto'] uppercase tracking-tight mx-4  hover:text-button transition duration-300"
              }
            >
              {listItem.name}
            </Link>
          ))}
        </ul>
        <div className="space-x-[15px] transition flex items-center">
          <button className={'sm:block lg:hidden'} onClick={hamburgerActive}>
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
          <button
            className={
              // navbar
              //   ? 'font-medium text-base p-2 rounded-[1px] border border-white text-white hover:border-neutral-200 hover:text-neutral-200 hover:duration-300 duration-300'
              //   :
              'font-normal text-base px-1 py-1 rounded-[1px] border-[1px] border-black hover:border-neutral-200 hover:text-neutral-200 hover:duration-300 duration-300'
            }
          >
            <p className="mx-1">Id</p>
          </button>
          <Link to="/contact-us">
            <button
              className={
                // navbar
                //   ? 'font-medium text-base p-2 rounded-[1px] border border-white text-white bg-black tracking-tight hover:text-primary hover:border-button hover:shadow-lg hover:duration-300 hover:bg-button duration-300'
                //   :
                'font-normal text-base px-1 py-1 rounded-[1px] border border-black text-white bg-black tracking-tight hover:bg-button hover:text-primary hover:border-button hover:shadow-lg hover:duration-300 duration-300 lg:flex hidden'
              }
            >
              <p className="mx-5">Contact Us</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
