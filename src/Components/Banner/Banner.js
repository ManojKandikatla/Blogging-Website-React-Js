import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <video autoPlay loop muted className="banner-video">
        <source src="/media/motion-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-text">
        <h1>Welcome to Our Blog</h1>
        <p>Explore trending stories and insights</p>
      </div>
    </div>
  );
}

export default Banner;
