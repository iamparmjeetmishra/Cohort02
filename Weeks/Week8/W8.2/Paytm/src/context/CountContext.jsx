import { createContext, useState } from "react";

export const CountContext = createContext(1)

export const CounterProvider = (props) => {
   const [count, setCount] = useState(0)
   return (
      <CountContext.Provider value={{count, setCount}} >
         {props.children}
      </CountContext.Provider>
   )
}