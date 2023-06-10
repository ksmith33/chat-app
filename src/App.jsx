import Authentication from "./routes/authentication/authentication.component";
import { Routes, Route, Navigate } from 'react-router-dom';
import Messenger from "./routes/messenger/messenger.component";
import './App.scss';

function App() {
  return (
    <Routes>
      <Route 
				path='/' 
				element= {
					true ? 
					<Navigate to='Messenger'/> : 
					<Authentication />
				}
			/>
			<Route path='Messenger' element={<Messenger />} />
    </Routes>
  )
}

export default App;
