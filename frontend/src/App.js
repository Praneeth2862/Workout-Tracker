
import './App.css';
import Home from './pages/Home';
import WorkoutsHome from './pages/WorkoutsHome';
import { useAuthContext } from './hooks/useAuthContext';
import {Routes,Route, Navigate} from 'react-router-dom'
function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user?<Navigate to="/workouts"/>:<Home/>} />
        <Route path='/workouts' element={!user?<Navigate to="/"/>:<WorkoutsHome/>}/>
      </Routes>
    </div>
  );
}


export default App;
