
import Sidebar from '../overlay/Sidebar'
import CarbonEmissionForm from './carbonemission'
Sidebar

const CarbonEmissionMain = () => {
  return (
    <div className='background'><Sidebar/><CarbonEmissionForm/></div>
  )
}

export default CarbonEmissionMain