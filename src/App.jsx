import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PublicRoutes from "./routes/PublicRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import  { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
