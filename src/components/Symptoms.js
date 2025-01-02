import './Symptoms.css';

const Symptoms = (props) => {
    return (
        <div class="Type1_symptoms">
            <img src={props.image} alt="" width={props.width} height={props.height}/>
            <div class="list_and_definition">
                <h1>{props.Title}</h1>
                <h2>{props.SubTitle}</h2>
                <ul>
                    {props.data.map(symptom => <li>{symptom}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default Symptoms;