import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

const List = ({ selectedSubCats, catId, sort, maxPrice }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][categories][id]=${catId}${selectedSubCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "laoding..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
