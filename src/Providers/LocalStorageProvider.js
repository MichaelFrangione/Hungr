import { useEffect } from "react";
import { useStateValue } from "./StateProvider";

const LocalStorageProvider = props => {
  const [{ favorites }] = useStateValue();

  useEffect(() => {
    addFavorite(favorites);
  }, [favorites]);

  const addFavorite = favorites => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return props.children;
};

export default LocalStorageProvider;
