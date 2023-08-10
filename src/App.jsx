import { Routes, Route } from 'react-router-dom';
import Authentication from "./routes/authentication/authentication.component";
import Messenger from "./routes/messenger/messenger.component";
import ProtectedRoute from "./routes/protected-route/protected-route.component";
import { useContext } from "react";
import { UserContext } from "./contexts/user.context";
import './App.scss';

function App() {
	const { currentUser, loading } = useContext(UserContext);
	
  return (
    <Routes>
      <Route 
				path='/*' 
				element={
					<ProtectedRoute isLoggedIn={ currentUser } isLoading={ loading }>
						<Messenger />
					</ProtectedRoute>
				}
			/>
			<Route path='Auth' element={ <Authentication/> }/>
    </Routes>
  )
}

export default App;
