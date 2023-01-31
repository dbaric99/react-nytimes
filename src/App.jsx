import { Routes, Route } from 'react-router-dom';
import { Home, Top, Popular } from './components';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='top' element={ <Top/> }/>
        <Route path='popular' element={ <Popular/> }/>
      </Routes>
    </div>
  );
}

export default App;