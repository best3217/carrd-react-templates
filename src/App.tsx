import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home-page";
import Template70 from "./pages/template-70/template-70-page";
import Template72Page from "./pages/template-72/template-72-page";
import Template104Page from "./pages/template-104/template-104-page";
import Template184Page from "./pages/template-184/template-184-page";
import Template230Page from "./pages/template-230/template230Page";
import Template203 from "./pages/template-203/template203";

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
  {
    path: "/carrd-184",
    element: <Template184Page />,
  },
  {
    path: "/carrd-203",
    element: <Template203 />,
  },
  {
    path: "/carrd-230",
    element: <Template230Page />,
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
