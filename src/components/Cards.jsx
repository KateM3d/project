export default function Cards({ image, planet, info, link }) {
  const handleButtonClick = (e) => {
    window.open(link, "_blank");
  };
  return (
    <div className="card-inner">
      <div className="card">
        <h2>{planet}</h2>
        <img src={image} alt={planet} width="300px" height="230px" />
        <p>{info}</p>
      </div>
      <button className="btn" onClick={handleButtonClick}>
        More Info
      </button>
    </div>
  );
}
