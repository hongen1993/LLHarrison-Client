import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

function IsAdmin({ children }) {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loading />;
    }

    if (user.role !== 'ADMIN') {
        return <Navigate to="/login" />;
    }
    return children;
}

export default IsAdmin;
