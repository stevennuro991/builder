import React, { useState, useEffect, Fragment } from "react";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "../firebase";
import TableRow from "./Table";
import ModalOverlay from "./modal";

function Materials() {
  const [searchActive, setSearchActive] = useState(false)
  const [materialIndex, setMaterialIndex] = useState(0);
  const [dropdown, setDropdown] = useState({
    steel: false,
    wood: false,
    sand: false,
    doors:false,
    plumbing:false,
    services:false,
    roofing: false,
    chippings: false,
    blocks: false,
    doors: false,
    balustrades: false,
    machinery: false
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
      name: "Sand",
      type: "sand",
      variants: "Smooth - Single axle",
      lowestPrice: "-",
      highestPrice: "1200",
      bulkPrice: "-",
      sub: [
        {

          variants: ["Smooth - Double axle",],
          lowestPrice: "2400",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["Quarry dust - Single axle",],
          lowestPrice: "1400",
          highestPrice: "1400",
          bulkPrice: "-",

        },
        {

          variants: ["Quarry dust - Double axle",],
          lowestPrice: "1800",
          highestPrice: "2000",
          bulkPrice: "-",

        },
        {

          variants: ["Laterite - Single Axle",],
          lowestPrice: "800",
          highestPrice: "1000",
          bulkPrice: "-",

        },
        {

          variants: ["Small Truck - All Variants",],
          lowestPrice: "120",
          highestPrice: "140",
          bulkPrice: "-",

        },
        {

          variants: ["Boulders",],
          lowestPrice: "1000",
          highestPrice: "1100",
          bulkPrice: "-",

        },
      ],
    },
    {
      name: "Steel Works",
      type: "steel",
      variants: ["Outer Window Frame - 10ft - All colors",],
      lowestPrice: "350",
      highestPrice: "400",
      bulkPrice: "-",
      sub: [
        {
          variants: ["Inner Window Frame - 10ft - All colors",],
          lowestPrice: "170",
          highestPrice: "200",
          bulkPrice: "-",

        },
        {

          variants: ["Net Leaf - 10ft - All colors",],
          lowestPrice: "70",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["Full net",],
          lowestPrice: "120",
          highestPrice: "120",
          bulkPrice: "120",

        },
        {

          variants: ["Hollow Pipe - 40x40mm - All colors",],
          lowestPrice: "80",
          highestPrice: "120",
          bulkPrice: "-",

        },
        {

          variants: ["Grazing Rubber",],
          lowestPrice: "60",
          highestPrice: "60",
          bulkPrice: "60",

        },
        {

          variants: ["Brush",],
          lowestPrice: "70",
          highestPrice: "70",
          bulkPrice: "70",

        },
        {

          variants: ["Sliding Rollers - 4 set bundle ",],
          lowestPrice: "40",
          highestPrice: "40",
          bulkPrice: "-",

        },
        {

          variants: ["Lockers - Pair",],
          lowestPrice: "30",
          highestPrice: "30",
          bulkPrice: "-",

        },
        {

          variants: ["Division Bar",],
          lowestPrice: "90",
          highestPrice: "100",
          bulkPrice: "-",

        },
        {

          variants: ["Glass - 8x8ft - Plain",],
          lowestPrice: "890",
          highestPrice: "890",
          bulkPrice: "-",

        },
        {

          variants: ["Glass - 8x8ft - Tinted",],
          lowestPrice: "1100",
          highestPrice: "1100",
          bulkPrice: "-",

        },
        {

          variants: ["Glass - 8x8ft - Reflective",],
          lowestPrice: "1200",
          highestPrice: "1200",
          bulkPrice: "-",

        },
        {

          variants: ["Aestheticizing",],
          lowestPrice: "100",
          highestPrice: "100",
          bulkPrice: "-",

        },
      ]
    },

    {
      name: "Wood",
      type: "wood",
      variants: ["Plywood 1/8 - 8x4"],
      lowestPrice: "70",
      highestPrice: "75",
      bulkPrice: "-",
      sub: [
        {
          variants: ["Plywood 1/4 - 8x4",],
          lowestPrice: "95",
          highestPrice: "100",
          bulkPrice: "-",

        },
        {

          variants: ["Plywood 1/2 - 8x4",],
          lowestPrice: "150",
          highestPrice: "155",
          bulkPrice: "-",

        },
        {

          variants: ["Plywood 3/4 - 8x4",],
          lowestPrice: "220",
          highestPrice: "230",
          bulkPrice: "-",

        },
        {

          variants: ["Bush Cut 14ft",],
          lowestPrice: "",
          highestPrice: "63",
          bulkPrice: "-",

        },
        {

          variants: ["Saw Mill 16ft",],
          lowestPrice: "",
          highestPrice: "90",
          bulkPrice: "-",

        },
        {

          variants: ["2x2 - Otie/Esa/Dahoma",],
          lowestPrice: "30",
          highestPrice: "40",
          bulkPrice: "-",

        },
        {

          variants: ["2x3 - Otie/Esa/Dahoma",],
          lowestPrice: "40",
          highestPrice: "55",
          bulkPrice: "-",

        },
        {

          variants: ["2x4 - Otie/Esa/Dahoma",],
          lowestPrice: "50",
          highestPrice: "65",
          bulkPrice: "-",

        },
        {

          variants: ["2x6 - Otie/Esa/Dahoma",],
          lowestPrice: "80",
          highestPrice: "115",
          bulkPrice: "-",

        },
        {

          variants: ["Fascia - Chechen/Wawa",],
          lowestPrice: "150",
          highestPrice: "160",
          bulkPrice: "-",

        },
        {

          variants: ["Chechen",],
          lowestPrice: "-",
          highestPrice: "105",
          bulkPrice: "-",

        },
        {

          variants: ["Wawa",],
          lowestPrice: "-",
          highestPrice: "115",
          bulkPrice: "-",

        },
        {

          variants: ["Dantaa",],
          lowestPrice: "135",
          highestPrice: "150",
          bulkPrice: "-",

        },
        {
          name: "Iron rods",
          variants: "6mm",
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["8mm",],
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["10mm",],
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["12mm",],
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["14mm",],
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["16mm",],
          lowestPrice: "8200",
          highestPrice: "8500",
          bulkPrice: "-",

        },
        {

          variants: ["18mm",],
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["2x3 - Otie/Esa/Dahoma",],
          lowestPrice: "40",
          highestPrice: "55",
          bulkPrice: "",

        },
        {

          variants: ["20mm",],
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
      ]
    },
    {
      name: "Roofing,Ceiling",
      type: "roofing",
      variants: "Aluminum sheets 4x8ft",
      lowestPrice: "130",
      highestPrice: "150",
      bulkPrice: "-",
      sub: [
        {
          variants: ["Aluzinc Sheets 2.5x8ft",],
          lowestPrice: "60",
          highestPrice: "60",
          bulkPrice: "-",
        },
        {

          variants: ["PVC Sheets 3x8ft",],
          lowestPrice: "150",
          highestPrice: "150",
          bulkPrice: "-",

        },
        {

          variants: ["PVC Sheets 3.5x8ft",],
          lowestPrice: "150",
          highestPrice: "150",
          bulkPrice: "-",

        },
        {

          variants: ["Asbestos Slate",],
          lowestPrice: "180",
          highestPrice: "215",
          bulkPrice: "-",

        },
        {

          variants: ["Tiles and Shingles - All variants",],
          lowestPrice: "40",
          highestPrice: "60",
          bulkPrice: "-",

        },
        {

          variants: ["Steel Trusses",],
          lowestPrice: "-",
          highestPrice: "-",
          bulkPrice: "-",

        },
        {

          variants: ["Wooden TnG",],
          lowestPrice: "45",
          highestPrice: "60",
          bulkPrice: "",

        },
        {

          variants: ["Plastic TnG - Local",],
          lowestPrice: "370",
          highestPrice: "390",
          bulkPrice: "-",

        },
        {

          variants: ["Plastic TnG - Fibre",],
          lowestPrice: "440",
          highestPrice: "390",
          bulkPrice: "-",

        },
        {

          variants: ["Plastic TnG - Interplast",],
          lowestPrice: "-",
          highestPrice: "750",
          bulkPrice: "-",

        },
        {

          variants: ["POP cement",],
          lowestPrice: "120",
          highestPrice: "750",
          bulkPrice: "-",

        },
      ]
    },
    

    {
      name: "Chippings",
      type: "chippings",
      variants: "Single Axle - All variants",
      lowestPrice: "-",
      highestPrice: "1200",
      bulkPrice: "-",
      sub: [
        {

          variants: ["Double Axle - All variants",],
          lowestPrice: "-",
          highestPrice: "3000",
          bulkPrice: "-",

        },
      ]
    },
    {
      name: "Blocks",
      type: "blocks",
      variants: "Solid - Sandcrete/Quarry",
      lowestPrice: "4",
      highestPrice: "8",
      bulkPrice: "-",
      sub: [
        {

          variants: ["Hollow",],
          lowestPrice: "4",
          highestPrice: "8",
          bulkPrice: "-",

        },
        {

          variants: ["bricks",],
          lowestPrice: "3",
          highestPrice: "4",
          bulkPrice: "-",

        },
        {

          variants: ["Designer Blocks",],
          lowestPrice: "8",
          highestPrice: "10",
          bulkPrice: "-",

        },
      ]
    },
    {
      name: "Doors",
      variants: "Steel Doors - Single",
      lowestPrice: "1500",
      highestPrice: "3000",
      bulkPrice: "-",
    },
    {
      name: "Balustrades",
      type: "balustrades",
      variants: "Steel Railings",
      lowestPrice: "550",
      highestPrice: "700",
      bulkPrice: "-",

    },

    {
      name: "Machinery",
      type: "machinery",
      variants: "Solid - Sandcrete/Quarry",
      lowestPrice: "4",
      highestPrice: "8",
      bulkPrice: "-",
      sub: [
        {

          variants: ["Ecavator",],
          lowestPrice: "5000",
          highestPrice: "5000",
          bulkPrice: "-",

        },
        {

          variants: ["Backhoe",],
          lowestPrice: "2500",
          highestPrice: "2500",
          bulkPrice: "-",

        },
        {

          variants: ["Cement Mixer - Big",],
          lowestPrice: "400",
          highestPrice: "400",
          bulkPrice: "-",

        },

        {

          variants: ["Cement Mixer - Small",],
          lowestPrice: "230",
          highestPrice: "250",
          bulkPrice: "-",

        },
        {

          variants: ["Compactor Big",],
          lowestPrice: "800",
          highestPrice: "800",
          bulkPrice: "-",

        },
      ]
    },
    {
      name: "Services",
      type: "services",
      variants: "Water",
      lowestPrice: "150",
      highestPrice: "200",
      bulkPrice: "-",
      sub: [
        {

          variants: ["Scaffolds",],
          lowestPrice: "25",
          highestPrice: "30",
          bulkPrice: "-",

        },
        {

          variants: ["Labor/Artisans fee",],
          lowestPrice: "130",
          highestPrice: "150",
          bulkPrice: "-",

        },
        {

          variants: ["Foundation Manpower per 10ft",],
          lowestPrice: "60",
          highestPrice: "60",
          bulkPrice: "-",

        },
      ]
    },
    {
      name: "Doors",
      type: "doors",
      variants: "Steel Doors - Single",
      lowestPrice: "1500",
      highestPrice: "3000",
      bulkPrice: "-",
     
    },
    {
      name: "Plumbing",
      type: "plumbing",
      variants: "4 Standard/PPR",
      lowestPrice: "70",
      highestPrice: "80",
      bulkPrice: "-",
     
    },
    {
      name: "Balustrades",
      type: "baulstrade",
      variants: "Steel Railings",
      lowestPrice: "550",
      highestPrice: "700",
      bulkPrice: "-",
     
    },

  ]

  // const configureDropdown = (idx) => {
  //   setDropDown(!dropdown);
  //   setSelectedIndex(idx);
  // }


  return (

    <>
      {/* {contact && (
        <ModalOverlay setModalOn={setContact}>
          <div className='flex py-3  h-screen space-y-5 justify-evenly'>
            <div className='border-solid rounded-[15px]  h-[40%] w-2/4  border-[#5ad935] border-[2px] p-5  bg-white space-y-5' >
              <h1>Why Bldr?</h1>
              <p>For speculating and first time builders,
                BLDR is the right place to begin your project journey. Be it needing prices and estimates of materials and developments respectively, or seeking real estate developers and apartments prices, BLDR has it all. Gian a fair amount of knowledge of your project without commuting, with BLDR. Discover alternate ideas and more options, auditing your contractors, reveal hidden costs and prevent overspending.
                Whether you are a resident or a non-resident of Ghana, we will keep you up to date with all the changes in the housing industry within the nation. BLDR is the ultimate housing platform.</p>
            </div>
          </div>
        </ModalOverlay>
      )} */}
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
            {TableRow(true)}
            {
              sheet1?.filter((item) => {
                return search !== "" ? item.name.toLowerCase().includes(search) : item
              }).map((data, idx) => {
                return (<Fragment key={idx}>
                  {TableRow(false, data.name, data.variants, data.lowestPrice ?? "-", data.highestPrice ?? "-", data.bulkPrice ?? "-", data.type, dropdown, setDropdown)}
                  {(data.sub && dropdown[data.type]) && data.sub.map((item, index) => {
                    return (
                      <Fragment key={index}>
                        {TableRow(false, false, item.variants, item.lowestPrice ?? "-", item.highestPrice ?? "-", item.bulkPrice ?? "-")}
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
      </div >    </>

  );
}

export default Materials;
