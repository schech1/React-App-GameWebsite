import { Route, Routes } from 'react-router-dom';
import Navigationbar from './features/navigationbar/Navigationbar';
import LocalRoutes from './features/LocalRoutes';
import Home from './features/home/Home';
import Demo from './features/demo/Demo';



function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Routes>
        <Route path={LocalRoutes.home} element={<Home />} />
        <Route path={LocalRoutes.demo} element={<Demo />} />
        <Route path={LocalRoutes.devlog} element={<Demo />} />

        {/* <Route path={LocalRoutes.highscore} element={<Highscore />} /> */}
      </Routes>

    </div>
  );
}

export default App;
