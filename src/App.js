import Home from "./components/route/home/home.components";
import Navigation from "./components/route/navigation/navigation.components";
import Authentication from "./components/route/authentication/authentication.component";
import Shop from "./components/route/shop/shop-data.component";
import Checkout from "./components/route/checkout/checkout.component";
import { Route, Routes } from "../node_modules/react-router-dom/index";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./store/user/user.action";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";
import { CATEGORIES_ACTION_TYPE } from "./store/categories/categories.type";

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
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch({
        type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
        payload: categoryMap,
      });
      //console.log(categoriesMap)
    };
    return getCategoriesMap;
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
