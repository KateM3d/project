import { useState } from "react";
import { data } from "../data";
import Cards from "./Cards";

export default function Planets() {
  const [planets, setPlanets] = useState(data);
  const [search, setSearch] = useState();

  const handleSearchChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let searchValue = e.target.value;
    setSearch(searchValue);
    console.log(searchValue);
    console.log(search);

    const filterPlanets = planets.filter(
      (el) => el.planet.toLowerCase() === searchValue
    );

    console.log(filterPlanets);

    return setPlanets(filterPlanets);
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
