import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        worker: action.payload.worker,
        office: action.payload.office,
      };
    case 'logout':
      return { ...state, worker: null, office: null };
    default:
      return state;
  }
};

export const AuthProvinder = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer);

  return (
    <AuthContext.Provider
      value={{
        worker: user?.worker || null,
        office: user?.office || null,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
