import { useNavigate } from "react-router-dom";
import "./Homepage.css";

import earth from "./earth.png";
import logo from "./logo.png";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  overflow-hidden flex-col background items-center justify-center h-screen   bg-cover bg-center">
      <div className="two">
        <div
          className="logo"
          id="compss flex flex-col items-center justify-center"
        ></div>{" "}
        <div className="flex flex-col items-center justify-center">
          <p className="mt-10 text-7xl font-serif font-bold m-8">Carbonara</p>
          <p className=" my-1 text-2xl para text-black">
            Make the world a better place.
          </p>

          <Button className="w-fit m-4" onClick={() => navigate(`/auth`)}>
            Get Started
          </Button>
        </div>
      </div>
      <div className="earth" id="compss">
        <img src={earth}></img>
      </div>{" "}
    </div>
  );
};

export default Homepage;
