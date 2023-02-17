import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx';
import {FaUserCircle} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import {toggleSidebar} from '../Redux/sidebarSlice'


const Header = () => {
  const dispatch = useDispatch();
  const tglSidebar = () =>{
    dispatch(toggleSidebar())
  }

  return (
    <div className='flex justify-between p-3 shadow-md'>
        <div className="flex p-2">
          <a href="/">
            <RxHamburgerMenu className='text-3xl mr-3' onClick={()=>{tglSidebar()}}/>
          </a>
            <BsYoutube className='text-3xl text-red-600'/>
        </div>
        <div className="flex p-2">
            <input type="text" className='border-2 rounded-l-full px-3 md:w-[36rem] md:p-1 md:px-3 '/>
            <button className='border-2 border-l-0 px-4 rounded-r-full bg-gray-100'>Search</button>
        </div>
        <div className="p-2">
            <FaUserCircle className='text-3xl'/>
        </div>
    </div>
  )
}

export default Header