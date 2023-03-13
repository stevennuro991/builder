import React, { useState, Fragment } from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "../firebase";
import EstateTableRow from "./EstateTable";

//Add the 
function Estate() {
  const [materialIndex, setMaterialIndex] = useState(0);
  const [searchActive, setSearchActive] = useState(false)
  const [dropdown, setDropdown] = useState({
    embassy: false,
    locus: false,
    mirage: false,
    adinkra: false,
    rasmar: false,
    blue: false,
    hancourt: false,
    oxford: false,
    devtraco: false,
    greens: false,
    bijou: false,
    villagion: false,
    lindsay: false,
    aurora: false,
    signature: false,
    rivera: false,
    fortune: false,
  });
  // const [sheet1, setSheet1] = useState([[]]);
  const [selectedIndex, setSelectedIndex] = useState(null);
   const [search, setSearch] = useState('')

  // useEffect(() => {
  //   (async () => {
  //     const query = ref(realtimeDatabase, "Sheet1");
  //     return onValue(query, (snapshot) => {
  //       const data = snapshot.val();

  //       setSheet1(data);
  //     });
  //   })();
  // }, []);

  const sheet1 = [
    {
      name: "Locus",
      type: "locus",
      room: ["2 & 3 BEDROOM DETACHED HOUSES",],
      month: " ",
      year: " ",
      down: " ",
      total: "250,00",
      sub: [
        {
          room: ["2 bedroom",],
          month: "150",
          year: " ",
          down: " ",
          total: " ",

        },
      ]
    },
    {
      name: "Mirage",
      type: "mirage",
      room: ["2 bedroom",],
      month: "310",
      year: " ",
      down: " ",
      total: "370,000",
    },
    {
      name: "Adinkra Heights",
      type: "adinkra",
      room: ["2 bedroom",],
      month: "310",
      year: " ",
      down: " ",
      total: " ",
    },
    {
      name: "Embassy Gardens",
      type: "embassy",
      room: ["2 bedroom",],
      month: "3800",
      year: " ",
      down: " ",
      total: "280,000",
      sub: [
        {
          room: ["2 bedroom",],
          month: " ",
          year: " ",
          down: " ",
          total: "300",

        },
      ]
    },
    {
      name: "Ramsar Towers",
      type: "rasmar",
      room: ["3 bedroom",],
      month: "126",
      year: " ",
      down: " ",
      total: " ",
    },
    {
      name: "Hammond court",
      type: "hammond",
      room: ["3 bedroom",],
      month: " ",
      year: " ",
      down: " ",
      total: "300",
    },
    {
      name: "Oxford",
      type: "oxford",
      room: ["4 bedroom",],
      month: "GH₵ 4,000",
      year: " ",
      down: " ",
      total: "185,000",
    },
    {
      name: "Bijou Homes",
      type: "bijou",
      room: ["2 bedroom semi detached",],
      month: "GH₵ 2,000",
      year: " ",
      down: " ",
      total: "75,000",
    },
    {
      name: "Devtraco Plus",
      type: "devtraco",
      room: ["2 bedroom",],
      month: "3500",
      year: " ",
      down: " ",
      total: "275000",
    },
    {
      name: "The Greens",
      type: "greens",
      room: ["3 bedroom",],
      month: " ",
      year: " ",
      down: " ",
      total: "400(GHC)",
    },

    {
      name: "Lindsay Gardens",
      type: "lindsay",
      room: ["2 bedroom",],
      month: " ",
      year: " ",
      down: " ",
      total: "150,000",
      sub: [
        {
          room: ["3 bedroom",],
          month: " ",
          year: " ",
          down: " ",
          total: "200,000",

        },
        {
          room: ["4 bedroom",],
          month: " ",
          year: " ",
          down: " ",
          total: "260,000",

        },
        {
          room: ["5 bedroom Penthouses",],
          month: " ",
          year: " ",
          down: " ",
          total: "280,000",

        },
      ]
    },
    {
      name: "Signature Apartments",
      type: "signature",
      room: ["1 bedroom",],
      month: " ",
      year: " ",
      down: " ",
      total: "210,000",
      sub: [
        {
          room: ["2 bedroom",],
          month: " ",
          year: " ",
          down: " ",
          total: "240,000",

        },
        {
          room: ["4 bedroom",],
          month: " ",
          year: " ",
          down: " ",
          total: "695,000",

        },
        {
          room: ["4 bedroom Penthouses",],
          month: " ",
          year: " ",
          down: " ",
          total: "850,000",

        },
      ]
    },
    {
      name: "Rivera Apartments",
      type: "rivera",
      room: ["2 bedroom",],
      month: " ",
      year: " ",
      down: " ",
      total: "198,000",
      sub: [
        {
          room: ["3 bedroom",],
          month: " ",
          year: " ",
          down: " ",
          total: "320,000",

        },
      ]
    },
    {
      name: "Fortune City Estates",
      type: "fortune",
      room: ["3 bedroom standard",],
      month: " ",
      year: " ",
      down: " ",
      total: "280,000",
      sub: [
        {
          room: ["3 bedroom + study",],
          month: " ",
          year: " ",
          down: " ",
          total: "244,000",

        },
        {
          room: ["4 bedroom townhouses",],
          month: " ",
          year: " ",
          down: " ",
          total: "350,000",

        },
      ]
    },
    {
      name: "Blue Rose City",
      type: "blue",
      room: ["1 bedroom expandable",],
      month: " ",
      year: " ",
      down: " ",
      total: "25,000",
      sub: [
        {
          room: ["2 bedroom standard",],
          month: " ",
          year: " ",
          down: " ",
          total: "32,000",

        },
        {
          room: ["2 bedroom executive",],
          month: " ",
          year: " ",
          down: " ",
          total: "35,000",

        },
        {
          room: ["2 bedroom semi-detached-standard",],
          month: " ",
          year: " ",
          down: " ",
          total: "46,000",

        },
        {
          room: ["2 bedroom semi-detached-executive",],
          month: " ",
          year: " ",
          down: " ",
          total: "48,000",

        },
        {
          room: ["2 bedroom detached",],
          month: " ",
          year: " ",
          down: " ",
          total: "72,000",

        },
        {
          room: ["3 bedroom detached",],
          month: " ",
          year: " ",
          down: " ",
          total: "72,000",

        },
        {
          room: ["3 bedroom semi-detached",],
          month: " ",
          year: " ",
          down: " ",
          total: "84,000",

        },
      ]
    },
  ]

  // const configureDropdown = (idx) => {
  //   setDropDown(!dropdown);
  //   setSelectedIndex(idx);
  // }

  return (
    <div className="w-full h-full overflow-scroll flex">
      <div className="w-full md:w-[70%] h-full">
      <div className="h-[7%] w-full p-3">
            <div className=" flex  items-center justify-between">
            <div class="container text-red-500 text-xs font-sans bg-red-100 w-[13%] rounded-sm">
            <span class="inline-block w-3 h-3 bg-red-500 mt-1  rounded-full ml-3 mr-2 animate-pulse"></span>
              live prices
             </div>
              <div className="hidden md:flex justify-center items-center space-x-2">
                <button className="bg-gray-400 rounded-full px-3 py-1 text-sm" onClick={() => setSearchActive(!searchActive)}><AiOutlineSearch className="w-4 h-4" /></button>
                {searchActive && <input onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search..." className="p-1 text-sm rounded-full border focus:outline-none" />}
              </div>
              {/* <div className="bg-green-100 py-1 items-center justify-center text-green-500 rounded-full w-32">
              <h1 className="text-center text-xs">common items</h1>
            </div> */}
            </div>
          </div>
        <div className="h-[95%] max-h-screen overflow-y-auto w-full">
          {EstateTableRow(true)}
          {
            sheet1?.filter((item)=>{
               return search !== "" ? item.name.toLowerCase().includes(search) : item
            }).map((data, idx) => {
              return (<Fragment key={idx}>
                {EstateTableRow(false, data.name, data.room, data.month ?? " ", data.year ?? "-", data.down ?? "-", data.total, data.type, dropdown, setDropdown)}
                {(data.sub && dropdown[data.type]) && data.sub.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      {EstateTableRow(false, false, item.room, item.month ?? "-", item.year ?? "-", item.down ?? "-", item.total ?? "-")}
                    </Fragment>
                  )
                })
                }
              </Fragment>)
            })
          }
        </div>
      </div>
      <div className="hidden md:block w-[30%] h-[50%] ">
          <div className=" h-full pl-6 justify-between w-full pt-3 pb-6">
            {/* top section */}
            <div className="border rounded-lg w-[93%] text-center px-10 py-1 border-dashed border-green-800 text-sm text-black bg-green-100">
              <p>Find Contractors, Get Quotes and Estimates</p>

            </div>
            <h1 className=" mt-10 text-center text-gray-400 font-sans">Are you real estate developer,
              construction firm or a real estate agent?</h1>
            {/* <div className="flex w-full mt-3 mb-24 justify-evenly">
            <button className="font-sans rounded-lg w-[25%]  text-[12px] bg-green-300 ">Real Estate</button>
            <button className="font-sans rounded-lg w-[25%] text-[12px] text-white bg-orange-300 ">Firms</button>
            <button className="font-sans rounded-lg w-[25%] text-[12px] text-white bg-purple-300 p-1"> Agents</button>

          </div> */}
            {/* <div className="items-center w-[60%] justify-center flex flex-col"> */}

            {/* <Link
              to="register"
              className="bg-green-100 font-bold items-center rounded-2xl  text-green-500"
            > Register Now!
            </Link> */}
            {/* </div> */}
          </div>
        </div>
    </div >
  );
}

export default Estate;
