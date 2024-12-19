import './Inputlabel.css'


const Inputlabel = (props) =>{
return(
<div className="form-groub">
                    <label for={props.labelfor} aria-hidden="true">{props.labeltitel}</label>
                    <input type={props.inputtype} name={props.inputname} placeholder={props.labeltitel} required id={props.labelfor}></input>
                    <img src= {props.imagg} alt="name icon" class="iconn"></img></div>
                    
)
}
export default Inputlabel ;
