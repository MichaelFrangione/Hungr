import React, { useEffect, useState } from "react";
import { fetchByMealId } from "../utils/ApiHelper";
import ErrorModal from "Components/ErrorModal/ErrorModal";
import Meal from "Screens/Meal";

const MealContainer = ({ mealId }) => {
  const [meal, setMeal] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchByMealId(mealId);
        setMeal(data[0]);
      } catch (err) {
        setHasError(true);
      }
    };
    fetchData();
  }, [mealId]);

  return (
    <>
      {hasError && <ErrorModal />}
      <Meal meal={meal} />
    </>
  );
};

export default MealContainer;
