import { styled } from '..';

export const Container = styled('div', {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
});

export const Header = styled('header', {
    width: '100%',
    maxWidth: 1180,
    padding: '2rem 0',
    margin: '0 auto',
});
