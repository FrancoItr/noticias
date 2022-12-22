import './App.css';
import PaginaNoticias from './Pagina/PaginaNoticias';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Error from './components/Error/Error';
import PaginaDetalle from './Pagina/PaginaDetalle';


const router = createBrowserRouter([
  {
    path: "/buscador",
    element: <PaginaNoticias />,
  },
  {
    path: "/",
    element: <PaginaNoticias />,
    errorElement: <Error />,
  },
  // {
  //   path: "/:url",
  //   element: <PaginaDetalle />,
  // },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
