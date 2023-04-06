import React,{useState,useEffect} from "react";
import MobileAppBanner from "../Banners/MobileAppBanner";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import Arabic from "../../locales/sa/index.json"
import English from "../../locales/en/index.json"
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
const Layout = ({ children }) => {
  const selectedLang = useSelector((state) => state.language.value);
  const [locale, setLocale] = useState(selectedLang=="AR"?Arabic:English);
  const [messages, setMessages] = useState(selectedLang=="AR"?Arabic:English);
  useEffect(()=>{ 
    if(selectedLang=="AR"){ 
      setLocale(Arabic)
      setMessages(Arabic)
    }else{
      setLocale(English)
      setMessages(English)
    }
  },[selectedLang])
  return (
    <>
     <IntlProvider locale={locale} messages={messages}>
     <Navbar />
        <main>{children}</main>
      <MobileAppBanner />
      <Footer />
     </IntlProvider>
      
    </>
  );
};

export default Layout;
