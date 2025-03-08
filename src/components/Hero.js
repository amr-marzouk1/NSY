import image from '../assets/image1.png'

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero container">
        <div className="content">
          <h1>NANO SATELLITE YARD</h1>
          <p>“A tiny box that enhances our vision of the Earth.”</p>
          <button>Contact Us</button>
        </div>
        <div className="img">
          <img src={image} alt="Hero img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
