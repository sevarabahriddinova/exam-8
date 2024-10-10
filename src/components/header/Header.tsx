import { BiStar } from "react-icons/bi"; 
 import mkp from "../../assets/mkp.jpg"
 
import logo from "../../assets/download.svg"


const Header = () => {

 
  return (
    <div>
      <nav className="bg-red-800">
        <div>
        <div className="navbar flex justify-between  w-[1400px] m-auto bg-yellow-300 pt-2 ">
          <p>Yetkazib berish bepul!</p>
                <ul className="flex  gap-6   "> 
                    <li><a href="#">aktsiya</a></li>
                    <li><a href="#">Yetkazib berish va to'lash</a></li>
                    <li><a href="#">PROFILE</a></li>
                </ul>
          <p className="flex items-center gap-2"> <BiStar /> Go'zallik klubi</p>
        </div>
        <hr className="  m-2 font-bold"/>
        </div>
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
