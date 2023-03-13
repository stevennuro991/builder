import { React, useState } from "react";
import { AiFillCaretDown, AiFillCaretRight, AiOutlineStar } from "react-icons/ai";
import styles from "./Table.module.css";
import TableRowDropdown from "./TableRowDropdown";

function TableRow(isHeader, name, variant, lowest, bulk, highest, type, dropdown, setDropdown) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.data_fields}>
          {isHeader == true ?
            <>
              <div className={styles.left_side_wrapper}>
                <div className="flex justify-start pr-5 pl-3">
                  <h1 className="pr-20 pl-2 font-sans text-[#59e483] font-normal text-[12px]"> Name</h1>
                  <h1 className="text-[#59e483] pl-1 font-sans font-normal  text-[12px]"> Variants</h1>
                </div>
              </div>
              <div className="flex  justify-evenly">
                <h1 className="font-sans text-[#e45959] font-normal text-[12px]">Lowest ₵</h1>
                <h1 className="font-sans text-[#59dbe4] font-normal text-[12px]">Highest ₵</h1>
                <h1 className="font-sans text-[#59e483] font-normal text-[12px]">₵/Bulk</h1>
              </div>
            </> :
            <>
              <div className={styles.left_side_wrapper}>
                <div className="flex w-full p-2 pl-5">
                  {/* <AiOutlineStar className=" text-gray-400 -ml-5" /> */}
                  {name ? <div onClick={() => setDropdown((prevState) => {
                    return { ...prevState, [type]: !prevState[type] }
                  })}>
                    {/* {dropdown[type] === true ? (
                      <AiFillCaretDown className="w-3 h-3 mt-1" />
                    ) : (
                      <AiFillCaretRight className="w-3 h-3 mt-1" />
                    )} */}
                    <p className={styles.left_side_name_text}>{name}</p>
                  </div> : null}


                  <p className={styles.left_side_text}>{variant}</p>
                </div>
              </div>
              <div className=" flex w-full justify-evenly p-2 text-xs">
                <p className={styles.right_side_text}>{lowest}</p>
                <p className="text-[#59dbe4] pl-4" >{highest}</p>
                <p className="text-[#59e483] pl-10">{bulk}</p>
              </div>
            </>}
        </div>
        <div className="divide-y w-full" />
        {/* {isDropdown == true ? <TableRowDropdown /> : null} */}
      </div>
    </div>
  );
}
export default TableRow;