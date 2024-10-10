import "./brand.css"
import brandimg from "../../assets/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg"
import brandimg2 from "../../assets/22.svg"
import brandimg4 from "../../assets/44.svg"
import brandimg5 from "../../assets/55.svg"
import brandimg6 from "../../assets/66.svg"
import brandimg8 from "../../assets/88.svg"
import brandimg9 from "../../assets/99.svg"
import { Link } from "react-router-dom"

const brands = [
  { path: "/blush", img: brandimg, alt: "Blush" },
  { path: "/bronzer", img: brandimg2, alt: "Bronzer" },
  { path: "/eyeliner", img: brandimg4, alt: "Eyeliner" },
  { path: "/eyeshadow", img: brandimg5, alt: "Eyeshadow" },
  { path: "/foundation", img: brandimg6, alt: "Foundation" },
  { path: "/lipliner", img: brandimg8, alt: "Lipliner" },
  { path: "/mascara", img: brandimg9, alt: "Mascara" },
];

const Brandcategory = () => {
  return (
    <div className="brand">
      <div className="container">
        <h2 className="brand__title">Бренды Категории</h2>
        <div className="brand__wrapper">
          {brands.map((brand, index) => (
            <div className="brand__imgs" key={index}>
              <Link to={brand.path}>
                <img className="brand__img" src={brand.img} alt={brand.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brandcategory;
