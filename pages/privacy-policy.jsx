import { HomeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary px-5 pt-20 pb-5">
      <div className="w-full max-w-2xl">
        <HomeIcon className="h-4 w-4 mb-4 mx-1" />
      </div>
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl break-words font-[350]">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p className="mt-5">
          Privacy Statement Prix Offers is committed to safeguarding your
          privacy online.
          <br />
          <br />
          Please read the following policy to understand how your personal
          information will be treated as you make full use of our offerings.
          This policy may change from time to time so please check back
          periodically. This Privacy Statement only covers the site Prix Offers.
          <br />
          <br />
          Personal DataOnly a user&apos;s email address is collected when users
          provide registration to Prix Offers. By registering, you agree that
          Prix Offers may send you periodical emails promoting vouchers and
          specials from the Prix Offers merchant base that may be of interest to
          you. Email addresses are never shared or sold to third-party marketers
          or third-party agencies.
          <br />
          <br />
          Aggregated InformationAggregated information, such as which page users
          access or visit, and information volunteered by users is collected
          through various methods.
          <br />
          <br />
          Use of Cookies Prix Offers uses cookies for this site. A cookie is a
          small data file that most major websites write to your hard drive for
          record-keeping purposes. Cookies allow Prix Offers to measure activity
          on the site and to improve your user experience, for example by
          remembering your passwords and viewing preferences.Children and
          Privacy Prix Offers encourages parents and guardians to spend time
          with their children online, and to be fully familiar with the sites
          visited by their children.Individuals under 13No information should be
          submitted to or posted on Prix Offers by users under the age of 13
          years without consent of their parent or guardian. Prix Offers does
          not provide any personally-identifying information for users under the
          age of 13, regardless of its source, to any third party for any
          purpose whatsoever unless disclosed during collection.
          <br />
          <br />
          We may update this privacy policy to this page, and we encourage you
          to periodically review this page for the latest information about our
          privacy practices.Contact UsPlease contact us if you have any
          questions or comments about our privacy policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
