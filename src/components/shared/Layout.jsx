import React from 'react'
import { Outlet } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/const/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames';
import Header from './Header'
import Sidebar from './Sidebar'


const linkClasses = 'flex  items-center gap-2 font-light px-3 py-2 hover:bg-green-100 hover:text-green-400 hover:no-unerline active:bg-neuteal-600 rounded-ls text-base'

function Layout() {
  return (
    <div className='flex flex-col bg-neutral-100 h-screen w-screen overflow-hidden z-0 relative'>
      <div className=" bg-white  h-14 items-center flex justify-between  w-full shadow-lg z-50">

        <div className="w-60 lg:flex hidden space-x-5 items-center justify-between pl-10 py-2   ">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 89 57">
            <text id="bldr" transform="translate(0 45)" fill="#5ad935" font-size="50" font-family="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">bldr</tspan></text>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 89 57">
            <text id="bldr" transform="translate(0 45)" fill="#5ad935" font-size="50" font-family="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">bldr</tspan></text>
          </svg>
        </div>
        <div className="items-center justify-center flex space-x-4">
          <h4 className="text-xl text-green-200 font-medium "> the ultimate housing platorm </h4>
        </div>
        <div className="items-center justify-end space-x-5 flex pr-4 ">
          <h4 className="text-gray-200"> Country</h4>
          <h4 className="hover:text-purple-700"> Disclaimer</h4>
          <h4 className="text-gray-200"> FAQs</h4>
          <h4 className="text-gray-200"> About</h4>
          <h4 className="text-gray-200"> Contact</h4>
        </div>

      </div>


      <div className="w-full h-full flex ">
        <div className='bg-white w-60 p-3 flex flex-col text-black'>
          <div className='flex items-center gap-2 px-1 py-3'>
          </div>
          <div className='flex-1'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
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

export default Layout