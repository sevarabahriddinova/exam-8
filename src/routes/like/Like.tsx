import { useDispatch, useSelector } from "react-redux";
import { unlikeProduct } from "../../redux/slice/LikeSlice";
import { useGetProductsQuery } from "../../redux/api/products";
import "./like.css"; 

const Like = () => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: any) => state.like?.likedProducts || []);
  const { data: Product } = useGetProductsQuery(undefined);
  const likedProductDetails = Product?.filter(product => likedProducts.includes(product.id));

  const handleDelete = (productId: number) => {
    dispatch(unlikeProduct(productId));
  };

  return (
    <div className="like-page">

      <div className="sidebarr">
      <div className="sidebar">
        <ul>
          <li>Bog'lanish ma'lumoti</li>
          <li>Manzil kitobi</li>
          <li>Buyurtma tarixi</li>
          <li className="active">Istaklar ro'yxati</li>
          <li>Chiqish</li>
        </ul>
      </div>

      <div className="wishlist-content">
        <h2 className="text-3xl font-bold mb-8">Istaklar ro'yxati</h2>
        {likedProductDetails && likedProductDetails.length > 0 ? (
          likedProductDetails.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-info">
                <img src={product.image_link} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <p className="product-price">{product.price} sum</p>
                  <p className="in-stock">{product.id ? "Есть в наличии!" : "Нет в наличии"}</p>
                </div>
              </div>
              <button className="delete-button" onClick={() => handleDelete(product.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="no-products">Sizga yoqadigan mahsulotlar yo'q.</p>
        )}
      </div>
      </div>


      <div className="footer">
        <div className="subscribe-section">
          <p>Savdolar va yangi mahsulotlar haqida birinchi bo'lib xabardor bo'ling!</p>
          <input type="email" placeholder="Ваш email" />
          <button className="subscribe-button">Obuna boʻling</button>
        </div>
        <div className="footer-links">
          <ul>
            <li>Biz haqimizda</li>
            <li>Kontaktlar</li>
            <li>Yetkazib berish haqida</li>
            <li>To'lov usullari</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Like;
