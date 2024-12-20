import "./Card.css";
import Read from "./Read";
const Card = (props) => {
  const show = props.view ? <Read read={props.btn} /> : null;

  return (
    <section className="About-Diabetes">
      <div className="cards">
        <h1 className="card-title">
          <strong>{props.title}</strong>
        </h1>
        <div className="content2">
          <img src={props.image} className="about-photo" alt="aboutdiabetes" />
          <div className="text-content">
            <p className="card-text "> {props.text}</p>
          </div>
        </div>
        {show}
      </div>
    </section>
  );
};

export default Card;
