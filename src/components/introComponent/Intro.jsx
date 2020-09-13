import React from "react";
import "./Intro.scss";
import vasko from "../../img/vasko.png";

const Intro = () => {
  return (
    <div className="introSection">
      <div className="introImg">
        <img src={vasko} alt="Vasil Matin picture" />
      </div>
      <div className="introText">
        <p>
          Здравейте! Казвам се Васил Матин. Предлагам изработка и дизайн на
          стилни, и модерни лога, флаери, щампи на тениски, и визитки. Пишете ми
          чрез формата по-долу за да обсъдим проекта и неговата цена. Работя с
          най-новите технологии като CorelDraw Suite 2018 и Adobe Photoshop CC.
        </p>
      </div>
    </div>
  );
};

export default Intro;
