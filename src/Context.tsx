import React, { createContext } from 'react';


export const MyContext = createContext<{
  planet: string;
  setPlanet: React.Dispatch<React.SetStateAction<string>>;
}>({
  planet: 'default value',
  setPlanet: () => { }
});