import { React } from "react";
import { AiOutlineStar } from "react-icons/ai";
import styles from "./Table.module.css";

function TableRowDropdown(variant, lowest, bulk, highest) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.data_fields}>
            <>
              <div className={styles.left_side_wrapper}>
                <div className="flex" >
                <AiOutlineStar />
                <p className={styles.left_side_text}>{variant}</p>
                </div>
              </div>
              <div className="flex justify-evenly text-xs">
                <p className={styles.right_side_text}>{lowest}</p>
                <p className="text-[#59dbe4] pl-4" >{highest}</p>
                <p className="text-[#59e483] pl-10">{bulk}</p>
              </div>
            </>
        </div>
        <div className={styles.divider} />
      </div>
    </div>
  );
}

export default TableRowDropdown;
