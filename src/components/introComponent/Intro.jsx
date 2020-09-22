import React from "react";
import gsap from "gsap";
import "./Intro.scss";
import vasko from "../../img/vasko.png";

const Intro = () => {
  const tlIntro = gsap.timeline({ defaults: { ease: "power1.out" } });
  tlIntro.fromTo(".introImg", { x: "-100" }, { x: "0", duration: 1.5, y: "0" });

  return (
    <div className="introSection">
      <div className="introImg">
        <img className="vasilMatinImg" src={vasko} alt="Vasil Matin picture" />
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
