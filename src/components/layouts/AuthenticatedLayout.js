import LayoutStyle from "@/styles/unauthenticated-layout.module.scss";
import Head from "next/head";
import React from "react";

const AuthenticatedLayout = ({ title }) => {
    return (
        <>
            <Head>
                <title>
                    {title} | {process.env.NEXT_PUBLIC_APP_NAME ?? "MyApp"}
                </title>
            </Head>
            <div className={LayoutStyle.dashboard}></div>
        </>
    );
};

export default AuthenticatedLayout;
