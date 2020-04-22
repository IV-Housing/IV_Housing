import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function AppNavbar(props) {
  const user = props.user;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref={true}>
          <Navbar.Brand>Next.js Demo App</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Link href="/woof" passHref={true}>
              <Nav.Link>Random Dog</Nav.Link>
            </Link>
            {user && (
              <Link href="/woof-private" passHref={true}>
                <Nav.Link>Random Dog with Auth</Nav.Link>
              </Link>
            )}
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown
                title={
                  <>
                    Hi, {user.name}
                    <Image
                      className="ml-2"
                      src={user.picture}
                      width={24}
                      height={24}
                    />
                  </>
                }
              >
                <NavDropdown.Item className="text-danger" href="/api/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button data-cy="login" href="/api/login">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
