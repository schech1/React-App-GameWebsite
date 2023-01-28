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
          width="50%"
          height="50%"
          alt='Logo'
        />
        <Group className='list-pages' spacing={5}>
          <Link className='link-item' to='/home'>
            Home
          </Link>
          <Link className='link-item' to='/demo'>
            Demo
          </Link>
          <Link className='link-item' to='/highscore'>
            Highscore
          </Link>
        </Group>
      </Container>
    </Header>
  );
}
