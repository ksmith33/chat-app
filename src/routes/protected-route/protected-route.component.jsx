import { Navigate } from "react-router-dom";

function ProtectedRoute ({ isLoggedIn, isLoading, children }) {
	if( isLoading ) return null;

	if( !isLoggedIn ){
		return <Navigate to="/auth" />
	}

	return children;
}

export default ProtectedRoute;