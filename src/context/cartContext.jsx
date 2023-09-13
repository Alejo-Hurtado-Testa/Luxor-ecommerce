const { createContext } = require('react');

export const cartContext = createContext([]);

export function ThemeProvider({ children }) {
  return <cartContext.Provider value={[]}>{children}</cartContext.Provider>;
}
