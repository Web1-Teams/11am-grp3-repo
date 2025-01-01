import './Inputlabel.css'


const Inputlabel2 = (props) =>{
return(
    <div className="form-groub">
                    <label className='lapelforsignup' for={props.labelfor} aria-hidden="true" >{props.labeltitel}</label>
                    <input className="inputforsignup" type={props.inputtype} name={props.inputname} placeholder={props.labeltitel} required min={props.min}  step={props.step} id={props.labelfor}></input>
                    <img src={props.imagg} alt="" class="iconn"></img></div>
)
}
export default Inputlabel2 ;