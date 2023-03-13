import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_TOPBAR_LINKS } from '../../lib/const/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames';
import Header from './Header'
import Sidebar from './Sidebar'
import logo from "../../assets/images/logo1.png"
import logo1 from "../../assets/images/logo.png"
import ModalOverlay from '../modal';
import { Button, notification } from 'antd';


const linkClasses = 'flex text-sm  items-center gap-2 font-light px-3 py-2 hover:bg-green-100 hover:text-green-400 hover:no-unerline active:bg-neuteal-600 rounded-ls text-base'
// const openNotificationWithIcon = (type, message, title) => {
//   api[type]({
//     message: title ?? "This is a notification title",
//     description:
//       message ??
//       "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
//   });
// };
function handleClick() {
  notification.open({
    message: 'Coming Soon',
   
    onClick: () => {
      console.log('Notification Clicked!');
    },
    placement: 'topRight', // Specify where the notification should appear
    duration: 3, // Specify how long the notification should be displayed (in seconds)
    // You can also add other properties like `icon`, `style`, `className`, etc.
  });
}
function Layout() {
  const [modal, setModal] = useState({
    conatct: false,
    disclaimer: false,
    bldr: false,
  })
  const { pathname } = useLocation()
  return (
    <>
      {modal.bldr && (
        <ModalOverlay setModalOn={setModal} type="bldr">
          <div className='flex py-3  h-screen space-y-5 justify-evenly'>
            <div className='border-solid rounded-[15px]  h-[40%] w-2/4  border-[#5ad935] border-[2px] p-5  bg-white space-y-5' >
              <h1>Why Bldr?</h1>
              <p>For speculating and first time builders,
                BLDR is the right place to begin your project journey. Be it needing prices and estimates of materials and developments respectively, or seeking real estate developers and apartments prices, BLDR has it all. Gian a fair amount of knowledge of your project without commuting, with BLDR. Discover alternate ideas and more options, auditing your contractors, reveal hidden costs and prevent overspending.
                Whether you are a resident or a non-resident of Ghana, we will keep you up to date with all the changes in the housing industry within the nation. BLDR is the ultimate housing platform.</p>
            </div>
          </div>
        </ModalOverlay>
      )}
      {modal.about && (
        <ModalOverlay setModalOn={setModal} type="about">
          <div className='flex py-3  h-screen space-y-5 justify-evenly'>
            <div className='border-solid rounded-[15px]  h-[40%] w-2/4  border-[#5ad935] border-[2px] p-5  bg-white space-y-5' >
              <h1>Why Bldr?</h1>
              <p>For speculating and first time builders,
                BLDR is the right place to begin your project journey. Be it needing prices and estimates of materials and developments respectively, or seeking real estate developers and apartments prices, BLDR has it all. Gian a fair amount of knowledge of your project without commuting, with BLDR. Discover alternate ideas and more options, auditing your contractors, reveal hidden costs and prevent overspending.
                Whether you are a resident or a non-resident of Ghana, we will keep you up to date with all the changes in the housing industry within the nation. BLDR is the ultimate housing platform.</p>
            </div>
          </div>
        </ModalOverlay>
      )}
      {modal.disclaimer && (
        <ModalOverlay setModalOn={setModal} type="diclaimer">
          <div className='flex py-3  h-screen space-y-5 justify-evenly'>
            <div className='border-solid rounded-[15px]  h-[40%] w-2/4  border-[#5ad935] border-[2px] p-5  bg-white space-y-5' >
              <h1>Disclaimer</h1>
              <p>Even though we try our best to provide you the most accurate information, certain factors are likely to affect some material prices in your area. What we provide is an average price from a range of prices we’ve obtained from the streets. </p>
            </div>
          </div>
        </ModalOverlay>
      )}
      <div className='flex flex-col bg-neutral-100 h-screen w-screen overflow-hidden z-0 relative'>
        <div className=" bg-white  h-14 items-center flex justify-between  w-full shadow-lg z-50">

          <div className="w-60 lg:flex hidden space-x-5 items-center justify-between pl-10 py-2   ">
            <img style={{ height: "40px", width: "40px" }} src={logo}>
            </img>
            <img style={{ height: "40px", width: "60px" }} src={logo1}>
            </img>
          </div>

          <div className="w-full md:hidden flex justify-around items-center p-2">
            <img style={{ height: "40px", width: "40px" }} src={logo} />
            <img style={{ height: "40px", width: "60px" }} src={logo1} />
          </div>
          <div className="items-center justify-center flex space-x-4">
            <h4 className="hidden md:flex text-xl text-gray-500 font-medium "> the ultimate housing platorm </h4>
          </div>
          <div className="hidden items-center justify-end space-x-5 md:flex pr-4 ">
            {DASHBOARD_TOPBAR_LINKS.map((item) => (
              < TopbarLink key={item.key} item={item} setModal={setModal} />
            ))}
          </div>

        </div>
        <div className="w-full h-full flex -z-50">
          <div className='hidden bg-white w-60 p-3 md:flex md:flex-row flex-col text-black'>
            <div className='flex items-center gap-2 px-1 py-3'>
            </div>

            <div className='flex flex-col space-y-2'>
                <button onClick={handleClick} className='text-sm text-purple-400 font-normal'>Auto Contractor</button>
              {pathname !== "/register" && DASHBOARD_SIDEBAR_LINKS.map((item) => (
                < SidebarLink key={item.key} item={item} />
              ))}
            </div>
          </div>
          <div className="w-full bg-white md:pb-20 p-2 overflow-x-auto">{<Outlet />}</div>
          <div className="fixed bottom-0 md:hidden left-0 w-full bg-gray-50 p-2">
            <div className='flex justify-around items-center text-sm'>
              {pathname !== "/register" && DASHBOARD_SIDEBAR_LINKS.map((item) => (
                < SidebarLink2 key={item.key} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SidebarLink({ item }) {
  // const { pathname } = useLocation()
  return (
    // <NavLink ac className={classNames(pathname === item.path ? " text-green-400" : 'text-gray-400', linkClasses, pathname === item.path ? " text-green-400" : 'text-gray-500')} to={item.path}>
    //   {item.label}
    // </NavLink>
    <NavLink className={({ isActive }) =>
      isActive ? `${item.label === "Materials" ? "bg-green-100 text-green-500" : "bg-blue-100 text-blue-500"} rounded-full text-sm py-2 px-4` : "text-gray-400 py-2 px-4 text-sm"
    } to={item.path}>
      {item.label}
    </NavLink>
  )
}

function SidebarLink2({ item }) {
  // const { pathname } = useLocation()
  return (
    // <NavLink ac className={classNames(pathname === item.path ? " text-green-400" : 'text-gray-400', linkClasses, pathname === item.path ? " text-green-400" : 'text-gray-500')} to={item.path}>
    //   {item.label}
    // </NavLink>
    <NavLink className={({ isActive }) =>
      isActive ? `${item.label === "Materials" ? " text-green-500" : "text-blue-500"}` : "text-gray-400 py-2 px-4 flex flex-col justify-center items-center text-sm"
    } to={item.path}>
      <img src={item.img} width={40} height={40} alt="icon" />
      <p className="text-center">{item.label}</p>
    </NavLink>
  )
}

function TopbarLink({ item, setModal }) {
  const { pathname } = useLocation()
  return (
    <p className={classNames(pathname === item.path ? " text-blue-400" : 'text-gray-400', linkClasses)} onClick={() => setModal((modal) => {
      return { ...modal, [item.path]: true }
    })}>
      {item.label}
    </p>
  )
}




export default Layout