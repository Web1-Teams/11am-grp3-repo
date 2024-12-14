
import './Photo.css'
const Photo=()=>{


return(

<div id="carouselExampleRide" className="carousel slide" data-bs-interval="2000"
      data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="pex.jpeg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="pexels.jpeg" class="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="p3.jpg" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button"
        data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button"
        data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>


      </button>
    </div>










);
}
export default Photo