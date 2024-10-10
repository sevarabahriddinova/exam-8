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
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Условия использования</a></li>
            <li><a href="#">Приложение</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">О доставке</a></li>
            <li><a href="#">Способы оплаты</a></li>
            <li><a href="#">Оригинальность продукции</a></li>
            <li><a href="#">Обмен и возврат</a></li>
          </ul>
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">Статьи</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Beauty Club</a></li>
          </ul>
        </div>
        <div className="footer__contact">
          <p>+998 712 050 578</p>
          <p>Вы можете <a href="#">написать нам письмо</a></p>
          <p>Ежедневно с 7:55 до 20:05</p>
          <p><a href="#">Обратный звонок</a></p>
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
