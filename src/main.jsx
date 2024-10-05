import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { DataProvider } from "./context/DataContext.jsx";
createRoot(document.getElementById("root")).render(
  <DataProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </DataProvider>
);
