import React from 'react'
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/const/navigation'


const linkClasses = 'flex  items-center gap-2 font-light px-3 py-2 hover:bg-green-100 hover:text-green-400 hover:no-unerline active:bg-neuteal-600 rounded-ls text-base'

function Sidebar() {
    return (
        <div className='bg-white w-50 p-3 flex flex-col text-black'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 89 57">
                    <text id="bldr" transform="translate(0 45)" fill="#5ad935" font-size="50" font-family="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">bldr</tspan></text>
                </svg>
            </div>
            <div className='flex-1'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    < SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div>Bottome Part</div>
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

export default Sidebar