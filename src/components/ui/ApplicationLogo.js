import LogoStyle from "@/styles/application-logo.module.scss";
import Image from "next/image";
import Link from "next/link";

const ApplicationLogo = ({ href, size = 32 }) => {
    const Component = href ? Link : "div";

    return (
        <Component
            href={href ? href : null}
            className={LogoStyle.logo}
            style={{ height: size }}
        >
            <Image
                src="/images/app-logo-dark.svg"
                alt={process.env.NEXT_PUBLIC_APP_NAME ?? "MyApp"}
                width={250}
                height={50}
            />
        </Component>
    );
};

export default ApplicationLogo;
