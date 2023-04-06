import Offers from "@/components/Offers";
import React, { useEffect } from "react";
import FilterLayout from "@/components/Layouts/FilterLayout";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setDeals } from "@/redux/offersSlice";
import { FormattedMessage } from "react-intl";
export async function getStaticProps() {
  const deals = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/deals/?fields=-details`
  ).then((res) => res.json());

  return {
    props: {
      deals,
    },
  };
}

const DealsPage = ({ deals }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(setDeals(deals.deals));
  }, [deals.deals, dispatch]);

  return (
    <FilterLayout headTitle="Deals">
      <Offers title={<><FormattedMessage id="Todays"/> <FormattedMessage id="Deals"/></>  }  offerType="deals" />
    </FilterLayout> 
  );
};

export default DealsPage;
