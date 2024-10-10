import React from "react";
import "./footer.css"; 

const flags = [
  { country: "Germany", flag: "🇩🇪" },
  { country: "Belgium", flag: "🇧🇪" },
  { country: "France", flag: "🇫🇷" },
  { country: "Spain", flag: "🇪🇸" },
  { country: "Italy", flag: "🇮🇹" },
  { country: "Russia", flag: "🇷🇺" },
  { country: "Japan", flag: "🇯🇵" },
  { country: "Ukraine", flag: "🇺🇦" },
  { country: "USA", flag: "🇺🇸" },
  { country: "China", flag: "🇨🇳" },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__links">
          <ul>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Kontraktlar</a></li>
            <li><a href="#">Foydalanish shartlari</a></li>
            <li><a href="#">Ilova</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">Yetkazish haqida</a></li>
            <li><a href="#">To'lov usullari</a></li>
            <li><a href="#">Mahsulotning originalligi</a></li>
            <li><a href="#">Almashtirish va qaytarish</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">Maqolalar</a></li>
            <li><a href="#">Yangiliklar</a></li>
            <li><a href="#">Beauty Club</a></li>
          </ul>
        </div>
        <div className="footer__contact">
          <p>+998 712 050 578</p>
          <p>Sizga mumkin<a href="#">bizga xat yozing</a></p>
          <p>Kundalik с 7:55 dan 20:05</p>
          <p><a href="#">Qayta qo'ng'iroq qiling</a></p>
        </div>
      </div>
      <div className="footer__flags">
        {flags.map((flag, index) => (
          <span key={index} className="footer__flag" title={flag.country}>
            {flag.flag}
          </span>
        ))}
      </div>
      <div className="footer__bottom">
        <p>MAKEUP™. BEAUTY WITHOUT LIMITS</p>
        <p>© MAKEUP 2021-2024</p>
      </div>
    </footer>
  );
};

export default Footer;
