import React, { useState, useEffect } from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "../firebase";

function Materials() {
  const [dropdown, setDropDown] = useState(false);
  const [sheet1, setSheet1] = useState([[]]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    (async () => {
      const query = ref(realtimeDatabase, "Sheet1");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();

        setSheet1(data);
      });
    })();
  }, []);

  return (
    <div className="w-full h-full flex">
      <div className="w-[70%] h-full ">
        <div className="h-[7%] w-full p-3">
          <div className="w-1/3 flex  items-center justify-between">
            <div className="bg-red-100 py-1 items-center justify-center text-red-500 rounded-full w-32">
              <h1 className="text-center text-xs">live prices</h1>
            </div>
            <div className="bg-green-100 py-1 items-center justify-center text-green-500 rounded-full w-32">
              <h1 className="text-center text-xs">common items</h1>
            </div>
          </div>
        </div>
        <div className="h-[95%] w-full  overflow-y-auto">
          <table className=" w-full pl-10">
            <thead>
              <tr className="text-left">
                <th className="text-green-300"></th>
                <th className="text-green-300 text-[14px]">Name</th>
                <th className="text-green-300 text-[14px]">Variants</th>
                <th className="text-red-300 text-[13px]">Lowest $</th>
                <th className="text-blue-300 text-[13px]">Highest $</th>
                <th className="text-green-300 text-[13px]">$/Bulk</th>
              </tr>
            </thead>
            <tbody className="text-xs py-5">
              {sheet1?.map((data, idx) => (
                <>
                  <tr
                    className="border-b py-5 "
                    key={idx + crypto.randomUUID()}
                  >
                    <td className="py-5">
                      <AiOutlineStar />
                    </td>
                    <td className="py-5 text-[15px]font-sans font-semibold">
                      <td
                        onClick={() => {
                          setDropDown(!dropdown);
                          setSelectedIndex(idx);
                        }}
                        className="py-2 font-bold flex items-center"
                      >
                        {data["childData"]?.length > 0 && dropdown ? (
                          <AiFillCaretDown className="w-3 h-3" />
                        ) : (
                          <AiFillCaretRight className="w-3 h-3" />
                        )}
                        {data["Name"]}
                      </td>
                    </td>
                    <td className="py-5 ">{data["Variants"] ?? "N/A"}</td>

                    <td className="py-2 item-center justify-center">
                      {data["Lowest Price GHC"] ?? "N/A"}
                    </td>
                    <td>{data["Highest Price GHC"] ?? "N/A"}</td>
                    <td>{data["Bulk Price GHC"] ?? "N/A"}</td>
                  </tr>

                  {selectedIndex === idx && data["childData"]?.length > 0 && (
                    <tr>
                      <td colSpan={6}>
                        <table>
                          <tbody>
                            <tr>
                              <th
                                dangerouslySetInnerHTML={{
                                  __html: "&nbsp;".repeat(2),
                                }}
                              ></th>
                              <th
                                dangerouslySetInnerHTML={{
                                  __html: "&nbsp;".repeat(sheet1?.map(dt => dt["Name"])?.reduce((max, name) => Math.max(max, name?.length), 0)),
                                }}
                              ></th>
                              <th
                                dangerouslySetInnerHTML={{
                                  __html: "&nbsp;".repeat(sheet1?.map(dt => dt["Variants"])?.reduce((max, name) => Math.max(max, name?.length), 0)),
                                }}
                              ></th>
                              <th
                                dangerouslySetInnerHTML={{
                                  __html: "&nbsp;".repeat(sheet1?.map(dt => dt["Lowest Price GHC"])?.reduce((max, name) => Math.max(max, name?.length), 0)),
                                }}
                              ></th>
                              <th
                                dangerouslySetInnerHTML={{
                                  __html: "&nbsp;".repeat(sheet1?.map(dt => dt["Highest Price GHC"])?.reduce((max, name) => Math.max(max, name?.length), 0)),
                                }}
                              ></th>
                              <th
                                dangerouslySetInnerHTML={{
                                  __html: "&nbsp;".repeat(sheet1?.map(dt => dt["Bulk Price GHC"])?.reduce((max, name) => Math.max(max, name?.length), 0)),
                                }}
                              ></th>
                            </tr>
                            {data["childData"]?.map((childData, idx) => (
                              <tr key={idx + crypto.randomUUID()}>
                                <td className="py-5">
                                  <AiOutlineStar />
                                </td>
                                <td className="py-5">
                                  {childData["Variants"] ?? "N/A"}
                                </td>
                                <td className="py-5">
                                  {childData["Lowest Price GHC"] ?? "N/A"}
                                </td>
                                <td className="py-5">
                                  {childData["Highest Price GHC"] ?? "N/A"}
                                </td>
                                <td>{data["Bulk Price GHC"] ?? "N/A"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[30%] h-[50%] ">
        <div className=" items-center flex h-full justify-between  flex-col w-full pt-3 pb-6">
          {/* top section */}
          <div className="border rounded-lg px-5 py-2 pb-19 border-dashed border-green-800 text-sm text-black bg-green-100">
            <h1>Find Contractors, Get Quotes and Estimates</h1>
          </div>
          <div className="items-center justify-center pt-10  flex flex-col">
            <h1> Are you a contractor?</h1>
            <Link
              to="register"
              className="bg-green-100 font-bold items-center rounded-2xl p-2  text-green-500"
            >
              Register Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materials;
