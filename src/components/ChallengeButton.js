import "./CallengeButton.css";

const CallengeButton = () => {
    return (
        <div className="challenge-buttons mb-4">
            <div className="row g-3">
                <div className="col-6">
                    <a href="/food" className="btn btn-primary w-100">
                        <i className="bi bi-egg-fried mb-2 d-block"></i>
                        Food Challenge
                    </a>
                </div>
                <div className="col-6">
                    <a href="/fintness" className="btn btn-primary w-100">
                        <i className="bi bi-bicycle mb-2 d-block"></i>
                        Fitness Challenge
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallengeButton;
