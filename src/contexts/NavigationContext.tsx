import React, { createContext, useContext, useState } from 'react';

type NavigationMode = 'sidebar' | 'header';

interface NavigationContextType {
  mode: NavigationMode;
  toggleMode: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<NavigationMode>('sidebar');

  const toggleMode = () => {
    setMode((prev) => (prev === 'sidebar' ? 'header' : 'sidebar'));
  };

  return (
    <NavigationContext.Provider value={{ mode, toggleMode }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}