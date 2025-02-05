import LayoutStyle from "@/styles/unauthenticated-layout.module.scss";
import Head from "next/head";
import Image from "next/image";
import ApplicationLogo from "@/components/ui/ApplicationLogo";

const UnauthenticatedLayout = ({
    children,
    footer,
    title,
    cardAs: Component = "div",
}) => {
    return (
        <>
            <Head>
                <title>
                    {title} | {process.env.NEXT_PUBLIC_APP_NAME ?? "MyApp"}
                </title>
            </Head>

            <div className={LayoutStyle.wrapper}>
                <div className={LayoutStyle.body}>
                    <div className={LayoutStyle.section}>
                        <Component className={LayoutStyle.card}>
                            <div className="d-flex flex-column align-items-center gap-3">
                                <ApplicationLogo size={32} href="/" />
                                <h5 className="h5">{title}</h5>
                            </div>
                            {children}
                            {footer && footer}
                        </Component>
                    </div>
                </div>
                <div className={LayoutStyle.footer}>
                    &copy; 2012 - {new Date().getFullYear()} All Rights Reserved
                </div>

                <Image
                    src="/images/bg-main.jpg"
                    alt="Background"
                    fill
                    priority
                />
            </div>
        </>
    );
};

export default UnauthenticatedLayout;
