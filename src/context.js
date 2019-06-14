import React, { useState, useEffect } from "react";
import {Animated} from "react-native"
export const Context = React.createContext();


export function ContextController({ children }) {
  let intialState = {
    posts: [],
    //data:[[0,1],[1,2]],
    random: "",
    yscroll: new Animated.Value(0),
    headerHeight:22,
  };

  const [state, setState] = useState(intialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}