import { Inter } from "@next/font/google";
import { getCookie } from "cookies-next";
import Offers from "@/components/Offers";
import FilterLayout from "@/components/Layouts/FilterLayout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { loginUser, logoutUser } from "@/redux/auth/action-creators";
import { setCategories } from "@/redux/selectedCategorySlice";
import { setOffers,setLikedDeals,setlikedVouchers,setSavedDeals,setSavedVouchers,setSharedDeals,setSharedVouchers } from "@/redux/offersSlice";
import { FormattedMessage } from 'react-intl';
const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const categories = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  ).then((res) => res.json());

  const offers = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/offers/?fields=-details`
  ).then((res) => res.json());

  return {
    props: {
      categories,
      offers,
    },
  };
}

export default function Home({ categories, offers }) {
  const dispatch = useDispatch();
  const user = useSelector(state=> state.auth.user);
  const jwt = getCookie("token");
  const router=useRouter();
  useEffect(() => {
    dispatch(setCategories(categories.categories));
    dispatch(setOffers(offers.offers));
    
  }, [categories.categories, dispatch, offers.offers]);

  useEffect(() => {
    console.log("JWT", jwt);
   localStorage.setItem("token",JSON.stringify(jwt))
    if (jwt) {
      const axios = require("axios");
      let url=`${process.env.NEXT_PUBLIC_API_URL}/users/me`
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: url,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
      axios
        .request(config)
        .then((response) => {
          console.log("RES", response.data);
          dispatch(loginUser(response.data.user));
        })
        .catch((error) => {
          console.log(error);
        });
     
    }
  }, [dispatch, jwt]);


  return ( 
    <FilterLayout headTitle="Home">
      <Offers title={<><FormattedMessage id="Todays"/> <FormattedMessage id="Offers"/></>  } />
    </FilterLayout>
  );
}
