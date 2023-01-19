import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';
import { getCssText } from '../styles';

const Document: FC = () => {
    return (
        <Html lang="br">
            <Head title="Ignite Shop" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
