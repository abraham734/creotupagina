import React from "react";
import "./FlowingMenu.css";

function FlowingMenu({ items = [] }) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} index={idx} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, index }) {
  const speeds = ["marquee-slow", "marquee-medium", "marquee-fast"];
  const direction = index % 2 === 1 ? "reverse" : "";

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div
        className="marquee__img"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div className="menu__item">
      {/* quitamos el texto por fuera */}
      <div
        className={`marquee always-visible ${speeds[index % speeds.length]} ${direction}`}
      >
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;


