const { NavbarBrand } = require("react-bootstrap");

function NavLink({ children, ...props }) {
  return (
    <ReactRouterDOM.NavLink className="nav-link" activeClassName="xxx-active" {...props}>
      {children}
    </ReactRouterDOM.NavLink>
  );
}

function NavBar() {
  const currentUser = useCurrentUser();
  const { Container, Nav, Navbar } = ReactBootstrap;
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
      <Navbar.Brand>
          <img
            src="mm.png"
            width="50"
            className="mm"
            alt="MM Bank logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
            <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavLink to="/" exact>
              {currentUser ? null : "Home"}
            </NavLink>
            <NavLink to="/CreateAccount/" title="Create new account">
              {currentUser ? null : "Create Account"}
            </NavLink>
            <NavLink to="/login/" title="Login">
              {currentUser ? `Log Out` : "Login"}
            </NavLink>
            {currentUser && (
              <>
                <NavLink to="/deposit/" title="Deposit to account">
                  Deposit
                </NavLink>
                <NavLink to="/withdraw/" title="Withdraw from account">
                  Withdraw
                </NavLink>
                <NavLink to="/balance" title="Check balance">
                  Balance
                </NavLink>
                <NavLink to="/alldata" title="Check activity">
              All Data
            </NavLink>
            <Navbar.Brand className= "welcome">Welcome, {currentUser.name}!</Navbar.Brand>

              </>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
