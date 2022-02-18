import { useState } from "react";
import { data } from "../data";
import Cards from "./Cards";

export default function Planets() {
  const [planets, setPlanets] = useState(data);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    console.log(search);
    const filterPlanets = planets.filter((el) => {
      if (el.planet.toLowerCase() === e.target.value) {
        return el;
      }
    });

    console.log(filterPlanets);
  };

  return (
    <>
      <div className="search">
        <input
          value={search}
          className="search-input"
          type="text"
          placeholder="what are you looking for?..."
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
      <div className="container">
        {planets.map((item) => {
          const { id, img, planet, info, link } = item;
          return (
            <Cards
              key={id}
              image={img}
              planet={planet}
              info={info}
              link={link}
            />
          );
        })}
      </div>
    </>
  );
}
