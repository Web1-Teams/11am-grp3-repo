import "./Card.css";
import { Link } from "react-router-dom";


const Card = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); 
  };

  const show = props.view ? (
    <Link to={props.link} onClick={handleScrollToTop}>
      <button className="custom-btn btn-2">{props.btn}</button>
    </Link>
  ) : null;


  
  return (
    <section className="About-Diabetes">
      <div className="cards">
        <h1 className="card-title">
          <strong>{props.title}</strong>
        </h1>
        <div className="content2">
          <img src={props.image} className="about-photo" alt="aboutdiabetes" />
          <div className="text-content">
            <p className="card-text">{props.text}</p>
          </div>
        </div>
        {show}
      </div>
    </section>
  );
};

export default Card;
