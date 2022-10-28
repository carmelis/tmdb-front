import React, { useCallback, useEffect } from "react";

const PermissionContext = React.createContext({
  //authenticationData: undefined,
  // eslint-disable-next-line no-empty-function
  setAuthenticationData: () => {},
});

const LOCAL_STORAGE_KEY = "AUTH_DATA";
export const useAuthenticationData = () => React.useContext(PermissionContext);

export const AuthenticationProvider = ({ children }) => {
  const [authenticationData, setAuthData] = React.useState(undefined);
  useEffect(() => {
    const elem = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!!elem) {
      const authData = JSON.parse(elem);
      setAuthData(authData);
    }
  }, [setAuthData]);

  const setAuthenticationData = useCallback((authData) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authData));
    setAuthData(authData);
  }, []);

  return (
    <PermissionContext.Provider
      value={{ authenticationData, setAuthenticationData }}
    >
      {children}
    </PermissionContext.Provider>
  );
};

export default PermissionContext;
