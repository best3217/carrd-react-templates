import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import Template70 from "./pages/template-70/template-70-page";
import Template72Page from "./pages/template-72/template-72-page";
import Template104Page from "./pages/template-104/template-104-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/carrd-70",
    element: <Template70 />,
  },
  {
    path: "/carrd-72",
    element: <Template72Page />,
  },
  {
    path: "/carrd-104",
    element: <Template104Page />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
