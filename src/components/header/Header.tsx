 import mkp from "../../assets/mkp.jpg"

const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar  bg-orange-200 shadow-2xl">
                <ul className="flex gap-6 p-8 w-[1400px] m-auto">
                    
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PROFILE</li>
                </ul>
        </div>
        <div>
            <img className="m-auto" src={mkp} alt="" />
        </div>
      </nav>
    </div>
  )
}

export default Header
