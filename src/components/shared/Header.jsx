import React from 'react'
import ModalOverlay from '../modal'
import Sidebar from './Sidebar'

function Header() {
  return (
    <>
      <div className=" w-full pt-6 bg-white items-center justify-between flex px-12 shadow-md">
        {/* search */}
        <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2   ">
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
        {/* logo */}
        <div className="items-center w-full justify-center flex space-x-4">
          <h4 className="text-xl text-gray-500 font-medium "> the ultimate housing platorm </h4>
        </div>
        {/* icons */}
        <div className="items-center justify-end space-x-6 flex w-full">
          <h4 className="text-gray-200">Country</h4>
          <h4 className="hover:text-purple-700"> Disclaimer</h4>
          <h4 className="text-gray-200"> FAQs</h4>
          <h4 className="text-gray-200"> About</h4>
          <h4 className="text-gray-200"> Contact</h4>
        </div>
      </div>
    </>
  )
}

export default Header