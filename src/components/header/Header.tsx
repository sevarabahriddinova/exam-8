 import mkp from "../../assets/mkp.jpg"
 
import logo from "../../assets/download.svg"


const Header = () => {

 
  return (
    <div>
      <nav className="bg-red-800">
        
      </nav>
       <div>
       <img className="w-[260px] m-auto p-6" src={logo} alt="" /> 
       </div>
      <div>
            <img className="m-auto" src={mkp} alt="" />
        </div>

    </div>
  )
}

export default Header
