import "./DibitesSection.css";
  function DibitesSection (){
    return(
        <>
  {/*Definition of diabetes*/}
  <div className="BackGround_diabetes">
    <div className="diabetes">
      <h1 className="def_of_diabetes">Definition of diabetes</h1>
      <div className="Font_Of_paragraph">
        <p>
          Diabetes is a chronic health condition that occurs when the body
          cannot properly regulate blood sugar (glucose) levels.This happens due
          to either insufficient production of insulin, a hormone made by the
          pancreas, or the body’s inability to effectively use the insulin it
          produces. Insulin helps transport glucose from the bloodstream into
          cells, where it is used for energy.
        </p>
      </div>
    </div>
    <img src="./Images/diabetes.jpg" alt="" width={1150} />
  </div>
  {/*Definition of insulin*/}
  <div className="insulin">
    <h1> What is Insulin ? </h1>
    <p>
      It is a hormone secreted by the beta cells in the pancreas (a small organ
      located behind the stomach) 
      and is responsible for using glucose after it reaches the bloodstream to
      obtain energy for daily activities. 
      It also plays a crucial role in regulating blood sugar (glucose) levels in
      the body. 
      Without the secretion of this insulin or the inability to use it, blood
      sugar remains high, which causes diabetes.
    </p>
  </div>
</>

    );
}
export default  DibitesSection;
