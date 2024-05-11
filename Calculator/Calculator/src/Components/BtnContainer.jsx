import styles from "./BtnContainer.module.css";


const BtnContainer=({onClick})=>{
const btnarry=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];


  return (<div id='btnContainer' className={styles.btnContainer}>
    {btnarry.map(btnName=><button key={btnName} className={styles.btn} onClick={()=>onClick(btnName)}>{btnName}</button>)}
</div>);
};

export default BtnContainer;