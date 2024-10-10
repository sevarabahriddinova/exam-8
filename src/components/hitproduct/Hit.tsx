import { AiOutlineHeart } from "react-icons/ai"; 
import { FcLike } from "react-icons/fc";
import { useGetProductsQuery } from "../../redux/api/products";
import "./hit.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { likeProduct } from "../../redux/slice/LikeSlice";
import { Product } from "../../types/index";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Hitimage from "../../assets/xbczw8fst1mu.jpg";
import Hitimage2 from "../../assets/6oiyuaj5xii3.jpg";
import Hitimage3 from "../../assets/vr8eco0hmkpq.jpg";
import Hitimage4 from "../../assets/mvqluafeqrmy.jpg";
import Hitimage5 from "../../assets/hkn5cfvzprka.jpg";
import Hitimage6 from "../../assets/emwladahcsvw.jpg";
import {  notification } from "antd";
import { unlikeProduct } from "../../redux/slice/LikeSlice";



const Hit = () => {
  const { data } = useGetProductsQuery(undefined);
  const currency = useSelector((state: RootState) => state.currency.selected);
  const likedProducts = useSelector((state: RootState) => state.like.likedProducts);
  console.log(likedProducts)

  const handleLikeProduct = (product: Product) => {
    if(likedProducts.some((id) => id === product.id)) {
      dispatch(unlikeProduct(product.id));
      notification.error({
        message : `Siz ${product.name}  maxsulotga unlike bosildi`,
      })
    }
    else{
      dispatch(likeProduct(product.id));
    notification.success({
      message : `Siz ${product.name}  maxsulotga like bosildi`,
    })
    }
  };
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    notification.success({
      message : `Siz ${product.name}  maxsuloti korzinkaga qoshildi`,
    })
  };



  const Price = (price: string) => {
    const numbericPrice = parseFloat(price);
    if (isNaN(numbericPrice)) return "";

    if (currency === "UZS") {
      return (numbericPrice * 12400).toLocaleString() + " UZS";
    }
    return "$" + numbericPrice.toFixed(2);
  };


  return (
    <div className="hit">
      <div className="container">
        <h2 className="hit__title">Brend takliflari</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">HIT</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">{likedProducts.some((product) => product === item.id) ? <FcLike  /> : <AiOutlineHeart /> }</div>
              <Link to={`/details/${item.id}`}><img className="hit__img" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Купить</button>
              </div>
            </div>
          )).slice(60, 64)}
        </div>
        <div className="hit__wrapper2">
          {data?.map((item) => (
            <div key={item.id} className="hit__card1">
              <Link to={`/details/${item.id}`}><img className="hit__img1" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">"{item.description}"</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>Leyla</span>
                  <span>10</span>
                </p>
              </div>
            </div>
          )).slice(150, 152)}
        </div>
        <h2 className="hit__title mt-5">Parfyumeriya</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">{likedProducts.some((product) => product === item.id) ? <FcLike  /> : <AiOutlineHeart /> }</div>
              <Link to={`/details/${item.id}`}><img className="hit__img" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Xarid</button>
              </div>
            </div>
          )).slice(130, 134)}
        </div>

        <div className="hit__banner">
          <img className="hitsimgs" src={Hitimage} alt="" />
          <img className="hitsimgs" src={Hitimage2} alt="" />
        </div>


        <h2 className="hit__title mt-5">Mashhur brendlar</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">{likedProducts.some((product) => product === item.id) ? <FcLike  /> : <AiOutlineHeart /> }</div>
              <Link to={`/details/${item.id}`}><img className="hit__img" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Xarid</button>
              </div>
            </div>
          )).slice(70, 74)}
        </div>
        <div className="hit__wrapper2">
          {data?.map((item) => (
            <div key={item.id} className="hit__card1">
              <Link to={`/details/${item.id}`}><img className="hit__img1" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">"{item.description}"</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>Leyla</span>
                  <span>10</span>
                </p>
              </div>
            </div>
          )).slice(170, 172)}
        </div>
        <h2 className="hit__title mt-5">Parfumeriya</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">{likedProducts.some((product) => product === item.id) ? <FcLike  /> : <AiOutlineHeart /> }</div>
              <Link to={`/details/${item.id}`}><img className="hit__img" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Xarid</button>
              </div>
            </div>
          )).slice(630, 634)}
        </div>

        <div className="hit__banner">
          <img className="hitsimgs" src={Hitimage3} alt="" />
          <img className="hitsimgs" src={Hitimage4} alt="" />
        </div>


        <h2 className="hit__title mt-5">Yuz</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">HIT</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">{likedProducts.some((product) => product === item.id) ? <FcLike  /> : <AiOutlineHeart /> }</div>
              <Link to={`/details/${item.id}`}><img className="hit__img" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Xarid</button>
              </div>
            </div>
          )).slice(900, 904)}
        </div>
        <div className="hit__wrapper2">
          {data?.map((item) => (
            <div key={item.id} className="hit__card1">
              <Link to={`/details/${item.id}`}><img className="hit__img1" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">"{item.description}"</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>Leyla</span>
                  <span>10</span>
                </p>
              </div>
            </div>
          )).slice(90, 92)}
        </div>
        <h2 className="hit__title mt-5">Parfumeriya</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">{likedProducts.some((product) => product === item.id) ? <FcLike  /> : <AiOutlineHeart /> }</div>
              <Link to={`/details/${item.id}`}><img className="hit__img" src={item.image_link} alt={item.name} /></Link>
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Xarid</button>
              </div>
            </div>
          )).slice(190, 194)}
        </div>

        <div className="hit__banner">
          <img className="hitsimgs" src={Hitimage5} alt="" />
          <img className="hitsimgs" src={Hitimage6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hit;


