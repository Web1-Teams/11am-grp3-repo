import Buttonmunual from "./Buttonmunual";
import './Cardformunual.css'
const Cardformunual =(props)=>{
    return(
        <>
<div className="breakfast">
    <h2 className="headerformunual">{props.headerm}</h2>
    <Buttonmunual thename={props.food[0]}  imagg2={props.imgeitem[0]}/>
    <Buttonmunual thename={props.food[1]}  imagg2={props.imgeitem[1]}/>
    <Buttonmunual thename={props.food[2]}  imagg2={props.imgeitem[2]}/>
    <Buttonmunual thename={props.food[3]}  imagg2={props.imgeitem[3]}/>
    <Buttonmunual thename={props.food[4]}  imagg2={props.imgeitem[4]}/>
    <Buttonmunual thename={props.food[5]}  imagg2={props.imgeitem[5]}/>
    <Buttonmunual thename={props.food[6]}  imagg2={props.imgeitem[6]}/>
    <Buttonmunual thename={props.food[7]}  imagg2={props.imgeitem[7]}/>
    <Buttonmunual thename={props.food[8]}  imagg2={props.imgeitem[8]}/>
</div>
</>

    )


}
export default Cardformunual;