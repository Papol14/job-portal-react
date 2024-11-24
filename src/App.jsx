import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<h1>Sample</h1>} />)
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
