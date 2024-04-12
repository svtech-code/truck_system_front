import { createContext, useCallback, useMemo, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // objeto con las variables de entorno global de autenticación
  const [auth, setAuth] = useState(() => ({
    authentication: sessionStorage.getItem("authentication") ?? false,
    authPrivilege: sessionStorage.getItem("authPrivilege") ?? null,
    authToken: sessionStorage.getItem("authToken") ?? null,
    authEmail: sessionStorage.getItem("authEmail") ?? null,
    authUserName: sessionStorage.getItem("authUserEmail") ?? null,
  }));

  // actualizador de las variables de entorno
  const updateAuthProvider = useCallback((newAuth) => {
    setAuth((prevAuth) => ({ ...prevAuth, ...newAuth }));
  }, []);

  // manejador de datos al iniciar sesión
  const login = useCallback((privilege, token, email, userName) => {
    // asignación de dato a variables de entorno
    updateAuthProvider({
      authentication: true,
      authPrivilege: privilege,
      authToken: token,
      authEmail: email,
      authUserName: userName,
    });

    // asignación de dato a variables de sesión
    sessionStorage.setItem("authentication", true);
    sessionStorage.setItem("authPrivilege", privilege.toString());
    sessionStorage.setItem("authToken", token.toString());
    sessionStorage.setItem("authEmail", email.toString());
    sessionStorage.setItem("authUserEmail", userName.toString());
  }, []);

  // manejador de datos al cerrar sesión
  const logout = useCallback(() => {
    // asignación de dato a variables de entorno
    updateAuthProvider({
      authentication: false,
      authPrivilege: null,
      authToken: null,
      authEmail: null,
      authUserName: null,
    });

    // eliminación de las variables de sesión
    sessionStorage.removeItem("authentication");
    sessionStorage.removeItem("authPrivilege");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("authEmail");
    sessionStorage.removeItem("authUserEmail");
  }, []);

  // memorización de los valores del provider
  const value = useMemo(
    () => ({
      updateAuthProvider,
      login,
      logout,
      ...auth,
    }),
    [updateAuthProvider, login, logout, auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
