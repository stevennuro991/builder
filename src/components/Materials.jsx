import React from 'react'
import { AiOutlineSearch, AiOutlineStar } from 'react-icons/ai';

function Materials() {
  return (
    <div className='w-full h-full flex'>
      <div className='w-[70%] h-full '>
        <div className='h-[7%] w-full p-3'>
          <div className="w-1/3 flex  items-center justify-between">
            <div className="bg-red-100 py-1 items-center justify-center text-red-500 rounded-full w-32">
              <h1 className="text-center text-xs">live prices</h1>
            </div>
            <div className="bg-green-100 py-1 items-center justify-center text-green-500 rounded-full w-32">
              <h1 className="text-center text-xs">common items</h1>
            </div>
          </div>
        </div>
        <div className='h-[95%]   w-full'>
          <table className=" w-full pl-10 ">
            <thead>
              <tr className="text-left">
                <th className="text-green-300"></th>
                <th className="text-green-300">Name</th>
                <th className="text-green-300" >Variants</th>
                <th className="col-span-6 text-center">Sizes</th>
                <th className="text-red-300">Lowest $</th>
                <th className="text-blue-300">Highest $</th>
                <th className="text-green-300">$/Bulk</th>
              </tr>
            </thead>
            <tbody className="text-xs py-5">
              <tr className="border-b py-5 ">
                <td className="py-5" ><AiOutlineStar /></td>
                <td className="py-5 text-sm font-bold">Sand</td>
                <td className="py-5 ">Fine</td>
                <td className="flex py-5 item-center justify-center space-x-6">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
                <td className="py-2 item-center justify-center">650</td>
                <td className="py-2 ">2500</td>
                <td className="py-2 ">-</td>
              </tr>
              <tr className="border-b p-11">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Cement</td>
                <td className="py-2">32.5R</td>
                <td className="flex py-2 item-center justify-center  space-x-2">
                  <p>42.5R</p>
                  <p>42.5N</p>

                </td>
                <td className="py-2 ">650</td>
                <td className="py-2 ">2500</td>
                <td className="py-2 ">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Gravels</td>
                <td className="py-2">Malcolm Lockyer</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Iron Rods</td>
                <td className="py-2">Malcolm Lockyer</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Blocks,Bricks</td>
                <td className="py-2">Malcolm Lockyer</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Utilities</td>
                <td className="py-2">Malcolm Lockyer</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Wood</td>
                <td className="py-2">Malcolm Lockyer</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Pre Fab</td>
                <td className="py-2">Malcolm Lockyer</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Stones</td>
                <td className="py-2">The Eagles</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2" ><AiOutlineStar /></td>
                <td className="py-2 font-bold">Roofing</td>
                <td className="py-2">Earth, Wind, and Fire</td>
                <td className="flex py-2 item-center justify-center space-x-2">
                  <p>Quarry dust</p>
                  <p>Medium</p>
                  <p>Laterite</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-[30%] h-[50%] '>
        <div className=" items-center flex h-full justify-between  flex-col w-full pt-3 pb-6">
          {/* top section */}
          <div className="border rounded-lg px-5 py-4 border-dashed border-green-800 text-sm text-black bg-green-200">
            <h1>Find Contractors, Get Quotes and Estimates</h1>
          </div>
          <div className="items-center justify-center flex flex-col">
            <h1> Are you a contractor?</h1>
            <h1 className="bg-green-100 font-bold items-center rounded-2xl p-2  text-green-500">Register Now!</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Materials