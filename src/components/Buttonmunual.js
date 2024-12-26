import { useState } from 'react'
import './Buttonmunual.css'


const Buttonmunual =(props)=>{
    const [color,setColor] = useState('rgb(234, 234, 234)')
    const [colortext , setColortext]=useState('black')

    const checkboxgangecolor=()=>{
        
        setColor(color === 'rgb(234, 234, 234)' ? ' #3ca3ee' : 'rgb(234, 234, 234)');
        setColortext(colortext==='black' ? 'white' : 'black')


    };
    return(
        <div className='foodbutton'>
            <input type="number" name="number" required min="50"  step="50" className="wight"></input>
            <button onClick={checkboxgangecolor} className='but-color' style={{ backgroundColor: color, color: colortext }}> {props.thename}</button>
            <img src={props.imagg2} alt={props.thename} className="imaggm" ></img>
        </div>

    )
}
export default Buttonmunual;