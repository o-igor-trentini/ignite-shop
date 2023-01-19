import { FC } from 'react';
import { HomeContainer, Product } from '@/styles/pages/home';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { GetStaticProps } from 'next';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

interface ProductType {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
}

interface HomeProps {
    products: ProductType[];
}

const Home: FC<HomeProps> = ({ products }) => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,
        },
    });

    return (
        <HomeContainer ref={sliderRef}>
            {products.map(({ id, name, imageUrl, price }) => (
                <Product key={id} className="keen-slider__slide">
                    <Image src={imageUrl} alt="" width={520} height={520} />

                    <footer>
                        <strong>{name}</strong>
                        <span>{price}</span>
                    </footer>
                </Product>
            ))}
        </HomeContainer>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const response = await stripe.products.list({ expand: ['data.default_price'] });

    const products: ProductType[] = response.data.map(({ id, name, images, default_price }) => {
        const { unit_amount } = default_price as Stripe.Price;

        return {
            id,
            name,
            imageUrl: images[0],
            price: new Intl.NumberFormat('pt-Br', {
                style: 'currency',
                currency: 'BRL',
            }).format(Number(unit_amount) / 100),
        } as ProductType;
    });

    return {
        props: {
            products,
        },
        revalidate: 60 * 60 * 2, // 2hrs
    };
};
