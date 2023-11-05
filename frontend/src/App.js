import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "./components/routes/AllRoutes"
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <NavBar />
          <main>
            <AllRoutes />
          </main>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
