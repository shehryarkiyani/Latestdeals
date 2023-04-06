import { HomeIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TermsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary px-5 pt-20 pb-5">
      <div className="w-full max-w-2xl">
        <HomeIcon className="h-4 w-4 mb-4 mx-1" />
      </div>
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl break-words font-[350]">
        <h1 className="text-2xl font-bold">Terms of Use</h1>
        <p className="mt-5">
          Welcome to Prix Offers. These Terms of Service (the &quot;Terms&quot;)
          are a binding legal agreement between you and Prix Offers (&quot;Prix
          Offers&quot; or &quot;we&quot;, &quot;us&quot;, &quot;our&quot;),
          regarding your use of the Prix Offers website and services at Prix
          Offers (the website and services are collectively referred to as the
          &quot;Service&quot;). Please read this agreement carefully.
          <br />
          <br />
          The following conditions apply to the use of the Prix Offers
          service:Acceptance of TermsWe may periodically make changes to these
          Terms. By accessing or using the Service, you accept this Agreement
          and any modifications that we may make to the Agreement. It is your
          responsibility to review the most recent version of the Terms
          frequently and remain informed of any changes to it. If you do not
          agree to any provision of these Terms, you should not use the
          Service.CopyrightThe term &quot;copyright&quot; protects rights to the
          intellectual property created and published online at Prix Offers.
          <br />
          <br />
          It includes visual design, layout, code and processes. No person or
          organization may use or reproduce in any form any part of Prix Offers
          without prior written consent. This prohibition applies to
          unauthorized uses or reproduction for public or private use. Prix
          Offers does not permit reproduction, transmission, or storage of
          content on any other website or in any other form of electronic
          retrieval system. Nor may content form part of third party sites or
          electronic database or retrieval systems without express written
          permission.The ServiceWe provide online vouchers to our users. Prix
          Offers is not responsible for the redemption, errors, omissions, or
          expiration of online vouchers. It is your responsibility to make sure
          that a discount, special pricing, or free offer is present in the
          checkout process at the applicable merchant website. All offers and
          promotions featured as a part of the Service are subject to change
          without notice and we have no control over the legality of any
          vouchers or the ability of any merchant to complete the sale in
          accordance with the offers.
          <br />
          <br />
          Prix Offers does not sell or share your personal information with
          anyone.Trademarks Prix Offers, the Prix Offers logo, and any other
          product or service name or slogan contained on the Service and in any
          Content are trademarks of Prix Offers and its suppliers or licensors;
          they may not be copied, imitated or used, in whole or in part, without
          the prior written permission of Prix Offers or the applicable
          trademark holder. All other trademarks, registered trademarks, product
          names and company names or logos mentioned on the Service or in any
          Content are the properties of their respective owners.
          <br />
          <br />
          Reference to any products, services, processes, or other information,
          by trade name, trademark, manufacturer, and supplier or otherwise,
          does not constitute or imply endorsement, sponsorship, or
          recommendation thereof by Prix Offers.
          <br />
          <br />
          DisclosureOur goal is helping save time and money for your online
          shopping! Occasionally, we have chances to receive gifts, products or
          services from our affiliated partners who we promote or post about.
          <br />
          <br />
          We publish advertisements, blogs, suitable email copy with regard to
          companies, products, services on our website.
          <br />
          <br />
          Sometimes we maybe get complimentary for our behaviors depicted
          herein, including but not limited to posting and publishing.
          <br />
          <br />
          The received would consist of such as sales commissions for
          shoppers&apos; ordered merchandise, referral fees for clicks received
          by advertisers or other third parties, advertising revenue.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
