
import './CardTips.css';


const CardTips = (props) => {
  
    return (

<div className={"card"}>
<video src={props.videoSrc} controls poster={props.videoPoster}></video>
   
   
      <h3 className="title-part">{props.btntitle}</h3>
      <p>
       {props.heading}
      </p>
    </div>



    );
};
export default CardTips;