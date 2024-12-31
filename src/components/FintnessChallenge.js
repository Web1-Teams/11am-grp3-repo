import "./FintnessChallenge.css"
export default function FintnessChallenge(){
    return(
        <div className="row g-4">
  {/* Walking */}
  <div className="col-md-6">
    <div className="exercise-card" style={{ maxWidth: 400, margin: "auto" }}>
      <a
        href="https://youtu.be/OQanj0RES24?si=_W1FYGNBWbpkQKzH"
        target="_blank"
      >
        <div className="exercise-image ">
          <img
            src="Images/woman-running.jpeg"
            alt="Walking"
            className="img-fluid object-fit-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </a>
      <small> click to see a video</small>
      <h3 className="exercise-title">Walking</h3>
      <button className="btn btn-dark mark-done-btn">Mark as Done</button>
    </div>
  </div>
  {/* Swimming */}
  <div className="col-md-6">
    <div className="exercise-card" style={{ maxWidth: 400, margin: "auto" }}>
      <a
        href="https://youtu.be/8c_lt66Yvn4?si=-jJ_ODiXS3J0llwE"
        target="_blank"
      >
        <div className="exercise-image">
          <img
            src="Images/woman-swimming.jpg"
            alt="Swimming"
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
        </div>
      </a>
      <small> click to see a video</small>
      <h3 className="exercise-title">Swimming</h3>
      <button className="btn btn-dark mark-done-btn">Mark as Done</button>
    </div>
  </div>
  {/* Cycling */}
  <div className="col-md-6">
    <div className="exercise-card" style={{ maxWidth: 400, margin: "auto" }}>
      <div className="exercise-image">
        <a
          href="https://youtu.be/4Hl1WAGKjMc?si=ETJzXRhYGc-Qrjvk"
          target="_blank"
        >
          <img
            src="Images/woman-cycling.jpg"
            alt="Cycling"
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
        </a>
      </div>
      <a
        href="https://youtu.be/4Hl1WAGKjMc?si=ETJzXRhYGc-Qrjvk"
        target="_blank"
      ></a>
      <small> click to see a video</small>
      <h3 className="exercise-title">Cycling</h3>
      <button className="btn btn-dark mark-done-btn">Mark as Done</button>
    </div>
  </div>
  {/* Yoga */}
  <div className="col-md-6">
    <div className="exercise-card" style={{ maxWidth: 400, margin: "auto" }}>
      <div className="exercise-image">
        <a
          href="https://youtu.be/_r8RPkprhVM?si=TIGpYgkdUtqd4ZCB"
          target="_blank"
        >
          <img
            src="Images/woman-yoga.jpeg"
            alt="Yoga"
            className="img-fluid"
            style={{ objectFit: "cover" }}
          />
        </a>
      </div>
      <a
        href="https://youtu.be/_r8RPkprhVM?si=TIGpYgkdUtqd4ZCB"
        target="_blank"
      ></a>
      <small> click to see a video</small>
      <h3 className="exercise-title">Yoga</h3>
      <button className="btn btn-dark mark-done-btn">Mark as Done</button>
    </div>
  </div>
</div>

    );
}