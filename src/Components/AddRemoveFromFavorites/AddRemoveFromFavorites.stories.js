import React from "react";
import AddRemoveFromFavorites from "./AddRemoveFromFavorites";

export default {
  title: "AddRemoveFromFavorites"
};

export const defaultValue = () => <AddRemoveFromFavorites />;
export const isAddedProp = () => (
  <AddRemoveFromFavorites isAdd={true} breakpoint={600} />
);
export const withBreakpoint = () => (
  <AddRemoveFromFavorites isAdd={true} breakpoint={400} />
);
