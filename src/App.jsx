import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./components/Page";
import { CartProvider } from "./contexts/cartContext";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Page />
        <ToastContainer />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
