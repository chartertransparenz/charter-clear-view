import React, { createContext, useContext } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { helmetServerContext } from './helmetServerContext';

const HelmetContext = createContext({});

export const HelmetProviderContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider context={helmetServerContext}>
      <HelmetContext.Provider value={{}}>
        {children}
      </HelmetContext.Provider>
    </HelmetProvider>
  );
};

export const useHelmetContext = () => useContext(HelmetContext);