import React, { useContext, useState } from 'react';
// images
import Logo from '../img/logo.png'

// icons
import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

// link
import { Link } from 'react-router-dom'

// components
import SearchForm from '../components/SearchForm'
import CategoryNavMobile from '../components/CategoryNavMobile'
import Cart from '../components/Cart'

//cart context
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false)
  const [click, setClick] = useState(false)


  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
          {/* menu */}
          <div onClick={() => setCatNavMobile(true)} className='text-3xl xl:hidden cursor-pointer'>
            <FiMenu />
          </div>

          {/* Category nav mobile */}
          <div className={`${catNavMobile ? 'left' : '-left-full'} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>

          {/* logo */}
          <Link to={'/'}>
            <img src={Logo} alt='' />
          </Link>

          {/* searchform - show only on destop */}
          <div className='hidden w-full xl:flex xl:ma-w-[534px]'>
            <SearchForm />
          </div>
          {/* phone & cart */}
          <div className='flex items-center gap-x-[20px]'>
            {/* phone */}
            <div className='hidden xl:flex items-center justify-between' >
              <FontAwesomeIcon icon={faUser} className='text-xl cursor-pointer p-3 ' />
              <button onClick={() => { setClick(!click) }} className='p-3'>
                {click
                  ? <FontAwesomeIcon icon={faHeart} className='text-xl cursor-pointer' />
                  : <FontAwesomeIcon icon={faHeart} className='text-xl cursor-pointer ' style={{ color: '#dc2626' }} />}
              </button>

            </div>
            {/* cart icon */}
            <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer'>
              <SlBag className='text-2xl' />
              {/* amount */}
              <div
                className='bg-accent text-primary absolute w-[18px] h-[18px]
                rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'
              >
                {itemsAmount}
              </div>
            </div>
            {/* cart */}
            <div className={`
            ${isOpen ? 'right-0' : 'right-full'}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
              <Cart />
            </div>
          </div>
        </div>
        {/* searchform - show on mobile only */}
        <div className='xl:hidden'>
          <SearchForm />
        </div>
      </div>
    </header>
  )
};

export default Header;
