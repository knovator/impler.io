import React, { createContext, useContext, useState } from 'react';
import { IUpload } from '@impler/shared';
import { IAppStore } from '../types';

interface AppContextProviderProps
  extends React.PropsWithChildren,
    Omit<IAppStore, 'uploadInfo' | 'setUploadInfo' | 'reset'> {}

const AppContext = createContext<IAppStore | null>(null);

const AppContextProvider = ({ children, primaryColor }: AppContextProviderProps) => {
  const [uploadInfo, setUploadInfo] = useState<IUpload>({} as IUpload);

  const reset = () => {
    setUploadInfo({} as IUpload);
  };

  return (
    <AppContext.Provider value={{ uploadInfo, setUploadInfo, reset, primaryColor }}>{children}</AppContext.Provider>
  );
};

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) throw new Error('App Context must be used within AppContextProvider');

  return context;
}

export default AppContextProvider;
