import Home from "./route/home/home.components";
import Navigation from "./route/navigation/navigation.components";
import Authentication from "./route/authentication/authentication.component";
import Shop from "./route/shop/shop.component";
import Checkout from "./route/checkout/checkout.component";
import { Route, Routes } from "../node_modules/react-router-dom/index";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      //console.log(user)
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
