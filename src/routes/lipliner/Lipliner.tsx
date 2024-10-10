import { useGetProductsLiplinerQuery } from "../../redux/api/products";
import { Link } from "react-router-dom"
import { addToCart } from "../../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../types/index";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { notification } from 'antd';

const Lipliner = () => {

     const { data } = useGetProductsLiplinerQuery(undefined);
           const currency = useSelector((state: RootState) => state.currency.selected);


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
        return (numbericPrice * 12600).toLocaleString() + " UZS";
    }
    return "$" + numbericPrice.toFixed(2);
};

  return (
    <div className="category">
      <div className="category__sidebar">
        <h3>Kategoriya</h3>
    <form className="category__form">
    <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Tirnoq uchun lak</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">ko`z uchun padvodka</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Pomada lab uchun</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Yuz kukuni</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Ko`z uchun ten</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">yuz uchun tonalka</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Aksessuarlar</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Apelsin tayoqchalari</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Ko'z bo'yog'i uchun aplikator</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">qizlar uchun gel-lak</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Makiyaj asosi</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Tirnoq bo'yoqlari</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Yashirin</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Tirnoq uchun lak</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Ko`z uchun padvodka</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Pomada lab uchun</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Upa yuz uchun</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Ko`z uxhun ten</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Tonalniy kream</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Aksessuarlar</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Apelsin tayoqchalari</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Ko'z bo'yog'i uchun aplikator</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Pomada lab uchun</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Yuz uchun pelin</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p"> Tinoq bo`yoqlari</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Tonalniy kram</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Aksessuarlar</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Apelsin tayoqchalari</p></div>
    </form>
   </div>
   <div className="hit">
      <div className="container">
        <h2 className="hit__title mr-5 mt-5">Category: Lipistic</h2>
        <div className="hit__wrapperr">
    {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
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
          )).slice(6, 34)}
          </div>
      </div>
    </div>
      </div>
  )
}

export default Lipliner