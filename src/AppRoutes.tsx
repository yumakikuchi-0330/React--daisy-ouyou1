import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import List from './List';
import Detail from './Detail';

const AppRoutes = () => {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/users/:userId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;