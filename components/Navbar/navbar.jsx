import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Container } from 'semantic-ui-react';
import CartNavItem from './cartNavItem';
import Avocado from '../SVGIcons/Avocado';

const Navbar = () => {

	const { pathname } = useRouter();

	return (
		<Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los productos"
          >
            <Avocado />
            Avo Store
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === '/cart'}>
              <CartNavItem />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
	);
}

export default Navbar;