import {BsPlus,BsFillLightningFill,BsGearFill} from 'react-icons/bs';
import {FaFire,FaPoo} from 'react-icons/fa'
import './App.css';

function App() {
  return (
    <div className='flex'>
      <div className='fixed top-0 left-0 h-screen w-16 m-0 
      flex flex-col bg-gray-900 text-white shadow-lg dark:bg-white-900'>

      <SideBarIcon icon={<FaFire size="28"/>}/>
      <SideBarIcon icon={<BsPlus size="32"/>}/>
      <SideBarIcon icon={<BsFillLightningFill size="20"/>}/>
      <SideBarIcon icon={<FaPoo size="20"/>}/>

      </div>
      
    </div>
  );
}

const SideBarIcon = ({icon,text='tooltip 💡'}) => (
  <div className='relative flex justify-center items-center h-12 w-12 mt-2 mb-2 mx-auto
  bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white hover:rounded-xl 
  transition-all duration-300 group'>
    {icon}
    <span className='absolute w-auto p-2 m-2 min-w-max left-16
    rounded-md shadow-md text-white bg-gray-900 text-xs font-bold 
    transition-all duration-100  origin-left group-hover:scale-100'>
      {text}
    </span>
  </div>
)
export default App;
