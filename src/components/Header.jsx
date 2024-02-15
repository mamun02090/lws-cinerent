import { useState } from "react";
import { useCartData } from "../contexts/cartContext";
import { useThemeToggle } from "../contexts/themeContext";
import CartModal from "./CartModal";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useCartData();
  const { isDarkMode, setIsDarkMode } = useThemeToggle();
  return (
    <header>
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src="/logo.svg" width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src="/ring.svg" width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <img
                src={`/icons/${isDarkMode ? "sun" : "moon"}.svg`}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
          <li className="relative">
            <a
              className="bg-primary/20 dark:bg-primary/[7%]   rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => setShowCart(true)}
            >
              <img src="/shopping-cart.svg" width="24" height="24" alt="" />
            </a>
            <span className="absolute -top-2 -right-2 text-xs bg-green-300 h-4 w-4 rounded-full flex items-center justify-center">
              {cartData.length}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
