import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RegistrationContextProvider } from "./Context/RegistrationContextProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



root.render(
  <StrictMode>
    <RegistrationContextProvider>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </RegistrationContextProvider>
   
  </StrictMode>
);



