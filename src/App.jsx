import Navbar from "./components/navbar/Navbar"
import "./layout.scss"
import HomePage from "./routes/homePage/homePage"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/list",
      element: <ListPage />,
    },
  ]);

  return (


    // <div className="layout">

    //   <div className="navbar">
    //     <Navbar />
    //   </div>

    //   <div className="content">
    //     <HomePage />
    //   </div>

    // </div>

    <RouterProvider router={router} />
  )
}

export default App