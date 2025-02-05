import LayoutStyle from "@/styles/authenticated-layout.module.scss";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { Power } from "react-bootstrap-icons";
import ApplicationLogo from "../ui/ApplicationLogo";

const AuthenticatedLayout = ({ title, children }) => {
    // router
    const router = useRouter();

    // handlers
    const handleSubmit = () => {
        router.push("/");
    };
    return (
        <>
            <Head>
                <title>
                    {title} | {process.env.NEXT_PUBLIC_APP_NAME ?? "MyApp"}
                </title>
            </Head>
            <div className={LayoutStyle.wrapper}>
                <div className={LayoutStyle.header}>
                    <div className={LayoutStyle.toolbar}>
                        <ApplicationLogo size={24} />
                        <Button
                            size="xs"
                            variant="dark"
                            className="px-1"
                            onClick={handleSubmit}
                        >
                            <Power size={16} />
                        </Button>
                    </div>
                </div>
                <div className={LayoutStyle.body}>
                    <div className={LayoutStyle.section}>
                        <div className={LayoutStyle.card}>
                            <div className={LayoutStyle.inner}>{children}</div>
                        </div>
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

export default AuthenticatedLayout;
