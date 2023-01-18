import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => {
    return (
        <Html lang="br">
            <Head title="Ignite Shop" />

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
