import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "../firebase";

function Estate() {
  const [sheet1, setSheet1] = useState([[]]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const query = ref(realtimeDatabase, "Sheet1");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        console.log(data[0])
        setSheet1(data);
      });
    })();
  }, []);

  useEffect(() => {
    if(sheet1.length >0){
      console.log("in")
      console.log(sheet1[1])
    }
  }, [sheet1])

  return (
    <div className="w-full h-full flex">
      <div className="w-[70%] h-full ">
        <div className="h-[7%] w-full p-3">
          <div className="w-1/3 flex  items-center justify-between">
            <div className="bg-blue-100 py-1 items-center justify-center text-blue-500 rounded-full w-32">
              <h1 className="text-center text-xs">live prices</h1>
            </div>
          </div>
        </div>
        <div className="h-[95%]   w-full">
          <table className=" w-full pl-10 ">
            <thead>
              <tr className="text-left">
                <th className="text-green-300 "></th>
                {/* {sheet1.length>0 &&  Object.values(sheet1[1]??{}).map((title) => <th className="text-blue-300 text-[12px]">{title}</th>)} */}

                <th className="text-blue-300 text-[12px]">Name</th>
                <th className="col-span-6 text-blue-300 text-[12px] text-center">
                  Room Types
                </th>
                <th className="text-green-300 text-[12px]">$/Month</th>
                <th className="text-blue-300 text-[12px]">$/Year</th>
                <th className="text-red-300 text-[12px]">$/Down</th>
              </tr>
            </thead>
            <tbody className="text-xs py-5">
              <tr className="border-b py-5 ">
                <td className="py-5">
                  <AiOutlineStar />
                </td>
                <td className="py-5 text-[13px] font-semibold">Sand</td>

                <td className="flex py-5 item-center justify-center space-x-6">
                  <p className="text-gray-400">Quarry dust</p>
                  <p className="text-gray-400">Medium</p>
                  <p className="text-gray-400">Laterite</p>
                </td>
                <td className="py-2 item-center justify-center text-green-300">
                  650
                </td>
                <td className="py-2 text-blue-300">2500</td>
                <td className="py-2 text-red-300 ">200</td>
              </tr>
              <tr className="border-b p-11">
                <td className="py-2">
                  <AiOutlineStar />
                </td>
                <td className="py-2 font-bold">Cement</td>

                <td className="flex py-2 item-center justify-center  space-x-2">
                  <p>42.5R</p>
                  <p>42.5N</p>
                </td>
                <td className="py-2 ">650</td>
                <td className="py-2 ">2500</td>
                <td className="py-2 ">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[30%] h-[95%] ">
        <div className=" items-center flex h-full justify-between  flex-col w-full pt-3 pb-2">
          {/* top section */}
          <div className=" rounded-lg px-5 py-1 pr-2 border-green-800 text-sm text-black bg-green-100">
            <h1>Find Real Estate Agents And Developers</h1>
          </div>
          <div className="items-center justify-center flex flex-col">
            <h1>
              {" "}
              Are you a Realtor?{" "}
              <span>
                <Link
                  to="/register"
                  className="ml-2 bg-green-100 font-bold items-center rounded-2xl p-2  text-green-400"
                >
                  Register Now!
                </Link>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estate;
