import { AiFillLike } from "react-icons/ai"; 
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiStar } from "react-icons/bi"; 
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import Mainlogo from "../../assets/download.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrency } from "../../redux/slice/CurrensySlice";

import './nav.css';

const Nav: React.FC = () => {
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.selected);
    const cart = useSelector((state: RootState) => state.cart.products.length);
    const like = useSelector((state: RootState) => state.like.likedProducts.length);

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__wrapper">
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
                    <div className="nav__p2">
                        <p className="nav__p">
                            <select
                                value={currency}
                                onChange={(e) => dispatch(setCurrency(e.target.value))}
                                className="border border-gray-300 p-2 rounded-md w-[100px] focus:outline-none focus:ring focus:ring-black"
                            >
                                <option value="USD">USD</option>
                                <option value="UZS">UZS</option>
                            </select>
                        </p>
                    </div>
                </div>

                <div className="nav__wrapper2">
                    <div className="nav__search">
                        <GoSearch className="nav__icon" />
                    </div>
                    <div className="nav__logo">
                        <h1 className="nav__h1">
                            <Link to="/">
                                <img className="main__logo" src={Mainlogo} alt="Main Logo" />
                            </Link>
                        </h1>
                    </div>

                    <div className="nav__icons">
                        <div className="nav__icon__container">
                            <Link to="/like" className="nav__icon__link">
                                <AiFillLike className="nav__icon" />
                                <span className="nav__icon__counter">{like}</span>
                            </Link>
                        </div>

                        <div className="nav__icon__container">
                            <Link to="/cart" className="nav__icon__link">
                                <AiOutlineShoppingCart className="nav__icon" />
                                <span className="nav__icon__counter">{cart}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
