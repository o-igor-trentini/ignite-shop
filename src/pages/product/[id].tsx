import { FC } from 'react';
import { useRouter } from 'next/router';

const Product: FC = () => {
    const { query } = useRouter();

    return <>Product: {query.id}</>;
};

export default Product;
