import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";

const routs = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  }
            ]
      }
])
export default routs;


