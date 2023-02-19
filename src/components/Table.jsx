import { React } from "react";
import styles from "./Table.module.css";

function Table() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.data_fields}>
          <div className={styles.left_side_wrapper}>
            <h1 className={styles.left_side_text}> table 11</h1>
            <h1 className={styles.left_side_text}> table 11</h1>
            <h1 className={styles.left_side_text}> table 11</h1>
          </div>
          <div className={styles.right_side_wrapper}>
            <h1 className={styles.right_side_text}>table 21</h1>
            <h1 className={styles.right_side_text}>table 21</h1>{" "}
            <h1 className={styles.right_side_text}>table 21</h1>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
}

export default Table;
