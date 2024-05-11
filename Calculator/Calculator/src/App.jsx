
import { useState } from 'react'
import Display from './Components/Display';
import BtnContainer from './Components/BtnContainer';
import styles from "./App.module.css";


function App() {
  const [count, setCount] = useState("");
  const onBtnClick=(btnText)=>{
   if(btnText==="C")
   {
    setCount("");
   }
   else if(btnText==="=")
   {
    let result=eval(count);
    setCount(result);
    }
    else{
      setCount(count+btnText);

       }
  } 
  return (
    <div className={styles.defStyle}>
    <div id="calculator" className={styles.calculator}>

     <Display displayval={count}></Display>
     <BtnContainer onClick={onBtnClick}></BtnContainer>

    </div>
    </div>
  )
}

export default App
