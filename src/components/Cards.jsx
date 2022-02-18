import { useState } from "react";

export default function Cards({ image, planet, info, link }) {
  const [text, setText] = useState(`${info.substring(0, 150)} ...read more`);

  const handleShowMore = (e) => {
    if (text === `${info.substring(0, 150)} ...read more`) {
      setText(`${info}...read less`);
    } else {
      setText(`${info.substring(0, 150)} ...read more`);
    }
  };
  const handleButtonClick = (e) => {
    window.open(link, "_blank");
  };
  return (
    <div className="card-inner">
      <div className="card">
        <h2>{planet}</h2>
        <img src={image} alt={planet} width="300px" height="230px" />
        <p onClick={() => handleShowMore()}>{text}</p>
      </div>
      <button className="btn" onClick={handleButtonClick}>
        More Info
      </button>
    </div>
  );
}
