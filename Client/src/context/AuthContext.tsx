import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
  UserCredential,
  AuthError,
  User as FirebaseAuthUser,
} from "firebase/auth";
import { app } from "../firebase.js";
// import { useNavigate } from "react-router-dom";

interface User extends FirebaseAuthUser {}

const auth = getAuth(app);

interface AuthErrorWithCode extends AuthError {
  code: string;
}

// Create the AuthContext
const AuthContext = createContext<{
  handleGoogle: () => Promise<void>;
  logOut: () => void;
  user: User | null;
  loading: boolean;
  changeLoading: () => void;
}>({
  handleGoogle: async () => {},
  logOut: () => {},
  user: null,
  loading: true,
  changeLoading: () => {},
});

// Create the AuthContextProvider component
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const changeLoading = () => {
    setLoading(!loading);
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response: UserCredential = await signInWithPopup(auth, provider);
      setUser(response.user as User);
    } catch (error) {
      console.error("Google Sign-in Error:", (error as AuthErrorWithCode).code);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser as User);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ handleGoogle, logOut, user, loading, changeLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create the UserAuth hook
export const UserAuth = () => {
  return useContext(AuthContext);
};
