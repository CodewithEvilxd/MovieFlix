import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// find and resolve the issue with dotenv file this is temporry solution
const REACT_APP_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODUxMmJlZWM5NGM3ZDNiNmQ0ZjJmNzNjMmUzNzc2ZCIsInN1YiI6IjY2NDVlMzU2MDI0NmY2YzE4MzgyY2YxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2OKCBtsVzgarpz3mhL8wBQp0nct32JeotjxEJ468kYI";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${REACT_APP_ACCESS_TOKEN}`;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
