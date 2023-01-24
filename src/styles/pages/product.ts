import { styled } from '..';

export const ProductContainer = styled('main', {
    maxWidth: 1180,
    margin: '0 auto',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    padding: '0.25rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    img: {
        objectFit: 'cover',
    },
});

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',

        display: 'block',

        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',

        fontSize: '$md',
        lineHeight: '1.6',
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        padding: '1.25rem',

        color: '$white',
        fontWeight: 'bold',
        fontSize: '$md',

        border: 0,
        borderRadius: 8,
        backgroundColor: '$green500',
        cursor: 'pointer',

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not_allowed',
        },
    },
});
