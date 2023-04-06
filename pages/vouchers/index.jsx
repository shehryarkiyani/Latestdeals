import Offers from "@/components/Offers";
import React, { useEffect } from "react";
import FilterLayout from "@/components/Layouts/FilterLayout";
import { setVouchers } from "@/redux/offersSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
export async function getStaticProps() {
  const vouchers = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/vouchers/?fields=-details`
  ).then((res) => res.json());

  return {
    props: {
      vouchers,
    },
  };
}

const VouchersPage = ({ vouchers }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setVouchers(vouchers.vouchers))
  }, [vouchers.vouchers, dispatch]);

  return (
    <FilterLayout headTitle="Vouchers">
      <Offers title={<><FormattedMessage id="Todays"/> <FormattedMessage id="Vouchers"/></>  }  offerType="vouchers" />
    </FilterLayout>
  );
};

export default VouchersPage;
