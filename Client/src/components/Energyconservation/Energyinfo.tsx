import { Dashboard } from "../dashboard/Dashboard"
import EnergyForm from "./Energyform"

import './energy.css'

const Energyinfo = () => {
  return (
    <div className="background h-screen  w-full">
        <Dashboard/>
       <EnergyForm/>
    </div>
  )
}

export default Energyinfo