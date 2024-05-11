
import styles from "./Display.module.css";

const Display=({displayval})=>{
  return(<input id='display' className={styles.display} type='text' value={displayval} readOnly></input>);
};

export default Display;