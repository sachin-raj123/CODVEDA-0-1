import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
