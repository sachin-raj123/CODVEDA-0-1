import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./Routes/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.element}>
            {route.children?.map((child, j) => (
              <Route key={j} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
