import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import persistStore from "redux-persist/es/persistStore";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { AppContextProvider } from "./context/app";
import "./index.css";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>
);
