import { createContext, useState } from 'react';

export const MyContext = createContext();

export default function Provider({ children }) {
  const [winner, setWinner] = useState('');
  const [isTime, setIsTime] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <MyContext.Provider
      value={{ winner, setWinner, isTime, setIsTime, score, setScore }}
    >
      {children}
    </MyContext.Provider>
  );
}
