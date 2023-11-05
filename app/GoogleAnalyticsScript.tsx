/* eslint-disable @next/next/inline-script-id */
import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E720JHXJ2"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-E720JHXJ1');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
