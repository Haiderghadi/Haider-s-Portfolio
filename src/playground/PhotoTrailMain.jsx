import TrailContainer from "./PhotoTrailSub";
import "./PhotoTrial.css";
const PhotoTrailMain = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-img">
          <img
            className="photo-trial--main-image"
            src="./assets/bg.jpg"
            alt="hero image"
          />
        </div>
        <p className="photo-trial-text">
          [ Cool images trailing with pointer in background ]
        </p>
        <p className="photo-trial-text">Experiment 002 by HaiderGhadi</p>

        <TrailContainer />
      </section>
    </div>
  );
};

export default PhotoTrailMain;
