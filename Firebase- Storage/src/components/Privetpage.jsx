import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Privetpage = ({ children }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/login" />;
  }

//   } else if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }
  return children;



  
};

export default Privetpage;
