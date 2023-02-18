import React from 'react'
import { Outlet } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_TOPBAR_LINKS } from '../../lib/const/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames';
import Header from './Header'
import Sidebar from './Sidebar'


const linkClasses = 'flex text-sm  items-center gap-2 font-light px-3 py-2 hover:bg-green-100 hover:text-green-400 hover:no-unerline active:bg-neuteal-600 rounded-ls text-base'

function Layout() {
  const { pathname } = useLocation()
  return (
    <div className='flex flex-col bg-neutral-100 h-screen w-screen overflow-hidden z-0 relative'>
      <div className=" bg-white  h-14 items-center flex justify-between  w-full shadow-lg z-50">

        <div className="w-60 lg:flex hidden space-x-5 items-center justify-between pl-10 py-2   ">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="39" viewBox="0 0 37 39">
            <defs>
              <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#5ad935" />
                <stop offset="0.493" stop-color="#79cbc9" />
                <stop offset="0.978" stop-color="#5ad935" />
                <stop offset="1" stop-color="#fff" />
              </radialGradient>
            </defs>
            <path id="Polygon_1" data-name="Polygon 1" d="M15.991,2.02a4,4,0,0,1,5.017,0l13.91,11.2a4,4,0,0,1,1.33,4.241L30.776,36.125A4,4,0,0,1,26.938,39H10.062a4,4,0,0,1-3.838-2.875L.752,17.461a4,4,0,0,1,1.33-4.241Z" opacity="0.4" fill="url(#radial-gradient)" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 89 57">
            <text id="bldr" transform="translate(0 45)" fill="#5ad935" font-size="50" font-family="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">bldr</tspan></text>
          </svg>
        </div>
        <div className="items-center justify-center flex space-x-4">
          <h4 className="text-xl text-black font-medium "> the ultimate housing platorm </h4>
        </div>
        <div className="items-center justify-end space-x-5 flex pr-4 ">
          {DASHBOARD_TOPBAR_LINKS.map((item) => (
            < TopbarLink key={item.key} item={item} />
          ))}
        </div>

      </div>


      <div className="w-full h-full flex ">
        <div className='bg-white w-60 p-3 flex flex-col text-black'>
          <div className='flex items-center gap-2 px-1 py-3'>
          </div>
          <div className='flex-1'>
            {pathname !== "/register" && DASHBOARD_SIDEBAR_LINKS.map((item) => (
              < SidebarLink key={item.key} item={item} />
            ))}
          </div>
          {/* <div>Bottome Part</div> */}
        </div>
        <div className="w-full bg-white">{<Outlet />}</div>
      </div>
    </div>
  )
}

function SidebarLink({ item }) {
  const { pathname } = useLocation()
  return (
    <Link className={classNames(pathname === item.path ? " text-green-400" : 'text-gray-400', linkClasses)} to={item.path}>
      {item.label}
    </Link>
  )
}

function TopbarLink({ item }) {
  const { pathname } = useLocation()
  return (
    <Link className={classNames(pathname === item.path ? " text-green-400" : 'text-gray-400', linkClasses)} to={item.path}>
      {item.label}
    </Link>
  )
}




export default Layout