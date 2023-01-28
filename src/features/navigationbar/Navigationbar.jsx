import { Link } from 'react-router-dom';
import { Group, Header, Container } from '@mantine/core';
import './Navigationbar.style.css';



export default function Navigationbar() {
  return (
    <Header className='headerNav'>
      <Container className='inner-container' fluid>
        <img
          className='logo-navbar'
          src="/images/logo.png"

          alt='Logo'
        />
        <Group className='list-pages' spacing={5}>
          <Link className='link-item' to='/home'>
            Home
          </Link>
          <Link className='link-item' to='/demo'>
            Demo
          </Link>
          <Link to={{ pathname: "https://game.scherbeck.tech/webgl" }} target="_blank" className='link-item' >
            Play
          </Link>

        </Group>
      </Container>
    </Header>
  );
}
