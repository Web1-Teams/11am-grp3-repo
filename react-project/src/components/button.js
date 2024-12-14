import './button.css';

const Button = (props) => {
    return (<a target="_blank" href="Type1.html" class="button">
        {props.text}</a>);
}
export default Button