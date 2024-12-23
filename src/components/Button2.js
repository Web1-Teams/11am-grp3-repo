import './Button2.css';

const Button =(props)=>{
    return(
        <button type="button" class="btn btn-primary btn-custom">{props.text}</button>
    );
}
export default Button;