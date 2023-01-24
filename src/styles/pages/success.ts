import { styled } from '@/styles';

export const SuccessContainer = styled('main', {
    height: 656,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        maxWidth: 560,
        marginTop: '2rem',

        fontSize: '$xl',
        color: '$gray300',
        textAlign: 'center',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: 'block',

        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        },
    },
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 130,
    height: 145,
    marginTop: '4rem',
    padding: '0.25rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    img: {
        objectFit: 'conver',
    },
});
