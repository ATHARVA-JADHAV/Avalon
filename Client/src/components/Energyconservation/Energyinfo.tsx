
import Sidebar from "../overlay/Sidebar"
import EnergyForm from "./Energyform"

import './energy.css'

const Energyinfo = () => {
  return (
    <div className="background h-screen  w-full">
<Sidebar/>
       <EnergyForm/>
    </div>
  )
}

export default Energyinfo