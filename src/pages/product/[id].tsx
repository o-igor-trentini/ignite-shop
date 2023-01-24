import { FC, useState } from 'react';
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import { stripe } from '@/lib/stripe';
import Image from 'next/image';
import { setMoneyMask } from '@/utils/string';
import { useRouter } from 'next/router';
import Stripe from 'stripe';
import axios from 'axios';
import Head from 'next/head';

export interface ProductType {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
}

interface ProductProps {
    product: ProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
    const { isFallback } = useRouter();
    const [isCreating, setIsCreating] = useState<boolean>(false);

    const handleBuy = async (): Promise<void> => {
        try {
            setIsCreating(true);

            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId,
            });

            const checkoutUrl = response.data.checkoutUrl;

            window.location.href = checkoutUrl;
        } catch (err: unknown) {
            alert('Falha o redirecionar para o checkout!');
        }
    };

    if (isFallback) return <>Carregando...</>;

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer key={product.id}>
                <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button disabled={isCreating} onClick={handleBuy}>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    );
};

export default Product;

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [{ params: { id: 'prod_NCB5StDaV5cdNq' } }],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<ProductProps, { id: string }> = async ({ params }) => {
    const productId = params?.id ?? '';

    const { id, name, images, default_price, description } = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = default_price as Stripe.Price;

    return {
        props: {
            product: {
                id,
                name,
                imageUrl: images[0],
                price: setMoneyMask(Number(price.unit_amount) / 100),
                description: String(description),
                defaultPriceId: price.id,
            },
        },
        revalidate: 60 * 60 * 1, // 1hr
    };
};
