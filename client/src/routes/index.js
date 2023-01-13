import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Collection from "../components/Collection/Collection";
import Home from "../layouts/Home/Home";
import SingleProduct from "../components/SingleProduct/SingleProduct";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/forgot", component: ForgotPassword },
  { path: "/products", component: Collection },
  { path: "/product/:id", component: SingleProduct },
];

export { publicRoutes };
