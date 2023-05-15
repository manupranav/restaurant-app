import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxrSRkKbCX2m35wa-5uA5rEfXKAyACVXnFYj6A5UQdatOTs_CtpAIkMvEU47LMJnal7w&usqp=CAU"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"    "}
          Restaurant App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
