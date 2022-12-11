import Head from "next/head";
import React from "react";

const DefaultTemplate: React.FC<{
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
}> = ({
  title = "TG App",
  description = "TG App",
  keywords = "TG App",
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <main>
        <div
          className="
            flex min-h-screen
            flex-col
            bg-gray-100
            text-gray-900
            dark:bg-gray-900
            dark:text-gray-100
        "
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultTemplate;
