import React from "react";
import "./bottomcard.scss";
import facbookicon from "../../assets/icon-facebook.svg";
import instgramicon from "../../assets/icon-instagram.svg";
import twittericon from "../../assets/icon-twitter.svg";
import youtubeicon from "../../assets/icon-youtube.svg";
import upicon from "../../assets/icon-up.svg";
import downicon from "../../assets/icon-down.svg";

const BottomCardsSection = ({
  subtext,
  platform,
  count,
  changeType,
  number,
}) => {
  let icon, up_or_down;
  switch (platform) {
    case "facebook":
      icon = facbookicon;
      break;
    case "twitter":
      icon = twittericon;
      break;
    case "instagram":
      icon = instgramicon;
      break;
    case "youtube":
      icon = youtubeicon;
      break;
  }

  switch (changeType) {
    case "up":
      up_or_down = upicon;
      break;
    case "down":
      up_or_down = downicon;
      break;
  }

  return (
    <div className="card card-grid">
      <div className="card__subtitle">{subtext}</div>
      <img src={icon} alt={platform} />
      <div className="card__count card__count--small">{count}</div>
      <div className={`card__change card__change--${changeType}`}>
        <img src={up_or_down} alt={`${up_or_down} arrow`} />
        <div className="card__number">{number}</div>
      </div>
    </div>
  );
};

export default BottomCardsSection;
