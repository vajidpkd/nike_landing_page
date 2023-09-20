import Button from "../components/Button";
import {arrowRight} from "../assets/icons"

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center w-full min-h-screen gap-10 p-2 xl:flex-row max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1><span>The New Arrival</span>
        <br />
        <span>Nike</span>
        Shoes</h1>
        <p>Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Show now" iconUrl={arrowRight}/>
      </div>
    </section>
  );
}; 

export default Hero;
