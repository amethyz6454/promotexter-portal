import { Head, Html, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/images/app-icon-dark.png" as="image" />
                <style>
                    {`#appLoader { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: white; z-index: 9999; } .loader-content { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: grid; place-items: center; }`}
                </style>
                <script
                    src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
                    crossorigin
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                    crossorigin
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin
                ></script>

                <script>var Alert = ReactBootstrap.Alert;</script>
            </Head>
            <body>
                <div id="appLoader">
                    <div className="loader-content">
                        <Image
                            priority
                            src="/images/app-logo-dark.svg"
                            width={250}
                            height={50}
                            alt={process.env.NEXT_PUBLIC_APP_NAME}
                        />
                    </div>
                </div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
