import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    console.log(allowedRoles);
    const { auth } = useAuth();
    const location = useLocation();
console.log(auth);
// const bhindi=auth?.roles?.find(role => allowedRoles?.includes(role))
// console.log(bhindi);

const roll=auth?.roles
console.log(roll);

const objReturnsArray=Object.values(roll)
console.log(objReturnsArray);

const authCheck=objReturnsArray.find(role => allowedRoles?.includes(role))
console.log(authCheck);

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        : auth?.user
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;