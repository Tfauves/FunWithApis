import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home"
import AppRouter from "./components/Routers/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
