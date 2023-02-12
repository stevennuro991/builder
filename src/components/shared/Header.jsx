import React from 'react'
import Sidebar from './Sidebar'

function Header() {
    return (
        <div className=" w-full pt-6 bg-white items-center justify-between flex px-12 shadow-md">
        {/* search */}
        <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2   ">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 89 57">
                    <text id="bldr" transform="translate(0 45)" fill="#5ad935" font-size="50" font-family="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">bldr</tspan></text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 89 57">
                    <text id="bldr" transform="translate(0 45)" fill="#5ad935" font-size="50" font-family="Bauhaus93, 'Bauhaus \39 3'"><tspan x="0" y="0">bldr</tspan></text>
                </svg>
        </div>
        {/* logo */}
        <div className="items-center w-full justify-center flex space-x-4">
          <h4 className="text-xl text-green-200 font-medium "> the ultimate housing platorm </h4>
        </div>
        {/* icons */}
        <div className="items-center justify-end space-x-6 flex w-full">
          <h4 className="text-gray-200"> Country</h4>
          <h4 className="hover:text-purple-700"> Disclaimer</h4>
          <h4 className="text-gray-200"> FAQs</h4>
          <h4 className="text-gray-200"> About</h4>
          <h4 className="text-gray-200"> Contact</h4>
        </div>
      </div>
    )
}

export default Header