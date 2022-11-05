import Home from './pages/home';
import ListData from './pages/list';
import Edit from './pages/edit'
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/list" element={<ListData/>}/>
    </Routes>
  );
}

export default App;
