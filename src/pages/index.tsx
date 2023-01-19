import { FC } from 'react';
import { HomeContainer, Product } from '@/styles/pages/home';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import camisa1 from '@/assets/camisetas/1.png';
import camisa2 from '@/assets/camisetas/2.png';
import camisa3 from '@/assets/camisetas/3.png';

const Home: FC = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,
        },
    });

    return (
        <HomeContainer ref={sliderRef}>
            <Product className="keen-slider__slide">
                <Image src={camisa1} alt="" width={520} height={520} />

                <footer>
                    <strong>Camiseta X</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={camisa2} alt="" width={520} height={520} />

                <footer>
                    <strong>Camiseta X</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={camisa3} alt="" width={520} height={520} />

                <footer>
                    <strong>Camiseta X</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={camisa3} alt="" width={520} height={520} />

                <footer>
                    <strong>Camiseta X</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>
        </HomeContainer>
    );
};

export default Home;
