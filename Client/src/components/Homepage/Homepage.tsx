import "./Homepage.css";

import earth from "./earth.png";
import logo from "./logo.png";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <div className="flex  overflow-hidden flex-col background items-center justify-center h-screen w-full  bg-cover bg-center">
      <div className="two">
        <div className="logo" id="compss">
          <img src={logo}></img>
        </div>{" "}
        <Button>Get Started</Button>
        <p className="para">Make the world a better place.</p>
      </div>
      <div className="eart" id="compss">
        <img src={earth}></img>
      </div>{" "}
    </div>
  );
};

export default Homepage;
