import './Button2.css';

const Button2 =(props)=>{
    return(
        <button type="button" className=" btn-primary btn-custom">{props.text}</button>
    );
}
export default Button2;