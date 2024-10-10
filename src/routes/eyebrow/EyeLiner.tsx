import { useGetProductsEyeLinerQuery } from "../../redux/api/products";
import { Link } from "react-router-dom"
import { addToCart } from "../../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../types/index";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { notification } from "antd";

const EyeLiner = () => {

    const { data } = useGetProductsEyeLinerQuery(undefined);

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
          <p>Blush</p>
          <p>Bronzes</p>
          <p>Eyeliner</p>
          <p>Eyeshadow</p>
          <p>Foundation</p>
          <p>Lipistic</p>
          <p>Mascara</p>
        </div>
   </div>
   <div className="hit">
      <div className="container">
        <h2 className="hit__title mr-5 mt-5">Category: Eyeliner</h2>
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
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Купить</button>
              </div>
            </div>
          )).slice(1, 16)}
          </div>
      </div>
    </div>
      </div>
  )
}

export default EyeLiner