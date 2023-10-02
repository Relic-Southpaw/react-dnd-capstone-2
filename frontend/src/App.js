import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "./components/routes/AllRoutes"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <AllRoutes />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
