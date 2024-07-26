import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PublicRoutes from "./routes/PublicRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
