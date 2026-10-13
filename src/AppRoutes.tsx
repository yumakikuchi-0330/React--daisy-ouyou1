import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import List from './List';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
	      {/* 「/」にアクセスがあったときにHomeコンポーネントを表示 */}
        {/* <Route path='/' element={<List />} /> */}
        {/* <Route path='/users/:id' element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;