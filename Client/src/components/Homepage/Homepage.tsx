import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import earth from "./earth.png";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  overflow-hidden flex-col  items-center justify-center bg-[url('/src/components/Homepage/background.jpg')] bg-cover h-screen bg-center">
      <div className="two">
        <div
          className="logo"
          id="compss flex flex-col items-center justify-center"
        ></div>{" "}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="mt-20 md:mt-32 lg:mt-52 mb-0 pb-0 text-6xl md:text-7xl lg:text-[120px] font-serif font-bold text-white">
              Carbonara
            </p>
            <p className="mt-0 pt-0 text-lg md:text-2xl lg:text-3xl text-white">
              Make the world a better place.
            </p>
          </div>

          <Button
            className="w-fit mt-8 mb-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  ..."
            onClick={() => navigate(`/auth`)}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="earth mt-0 mb-0" id="compss">
        <img
          src={earth}
          className=" mt-24 w-[500px] h-auto animate-spin-slow"
          alt="Earth Image"
        ></img>
      </div>
    </div>
  );
};

export default Homepage;
