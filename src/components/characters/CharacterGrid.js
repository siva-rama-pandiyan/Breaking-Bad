import React from "react";
import "../../App.css";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item, index) => (
        <CharacterItem key={index} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
