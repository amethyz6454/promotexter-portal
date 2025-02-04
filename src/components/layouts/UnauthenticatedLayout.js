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
                <Component className={LayoutStyle.card}>
                    <div className="d-flex flex-column align-items-center gap-3">
                        <ApplicationLogo size={32} />
                        <h5 className="h5">{title}</h5>
                    </div>
                    {children}
                    {footer && footer}
                </Component>

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
