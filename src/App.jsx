import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import About from "./Pages/About";
import CartIteams from "./Pages/CartIteams";
import Contact from "./Pages/Contact";
import CartDetails from "./Pages/CartDetails";
import WhishList from "./Pages/WhishList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/cart/" element={<CartIteams />}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/Contact" element= {<Contact/>}></Route>
          <Route path="/cartdetail/:id" element= {<CartDetails/>}></Route>
          <Route path="/whishList" element= {<WhishList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
