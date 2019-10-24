import React, { useEffect, useState } from "react";
import { fetchByCategory } from "../utils/ApiHelper";
import ErrorModal from "Components/ErrorModal/ErrorModal";
import Category from "Screens/Category";

const CategoryProvider = ({ categoryName, description }) => {
  const [meals, setMeals] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchByCategory(categoryName);
        setMeals(data);
      } catch (err) {
        setHasError(true);
      }
    };
    fetchData();
  }, [categoryName]);

  return (
    <>
      {hasError && <ErrorModal />}
      <Category
        meals={meals}
        description={description}
        categoryName={categoryName}
      />
    </>
  );
};

export default CategoryProvider;
