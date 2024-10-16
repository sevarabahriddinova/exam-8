import { useGetProductsEyeshadowQuery } from "../../redux/api/products";
import { Link } from "react-router-dom"
import { addToCart } from "../../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../types/index";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { notification } from 'antd';

const Eyeshadow = () => {

    const { data } = useGetProductsEyeshadowQuery(undefined);

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
       <div className="category__sidebar bg-white shadow-xl p-4">
        <h3 className="text-[28px] mb-4 pt-2">Kategoriyalar</h3>
        <div className="flex flex-col gap-6">
      <Link to={"/blush"}><p>Blush</p></Link>
      <Link to={"/bronzes"}><p>Bronzes</p></Link>
      <Link to={"/eyeliner"}> <p>Eyeliner</p></Link>
      <Link to={"/eyeshadow"}><p>Eyeshadow</p></Link>
      <Link to={"/foundation"}><p>Foundation</p></Link>
      <Link to={"/lipistic"}><p>Lipistic</p></Link>
      <Link to={"/mascara"}><p>Mascara</p></Link>
        </div>
        </div>
   <div className="hit">
      <div className="container">
        <h2 className="hit__title mr-5 mt-5">Category: Eyeshadow</h2>
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
                <button  onClick={() => handleAddToCart(item)} className="hit__buy-btn">Xarid</button>
              </div>
            </div>
          )).slice(10, 26)}
          </div>
      </div>
    </div>
      </div>
  )
}

export default Eyeshadow