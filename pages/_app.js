import React from "react";
import Layout from "@/components/Layouts/Layout";
import { persistor, store } from "@/redux/store";
import "@/styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

 function App({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
       
        <Component {...pageProps} />
         
          
        </Layout>
      </PersistGate>
    </Provider>
  );
}
export default App;