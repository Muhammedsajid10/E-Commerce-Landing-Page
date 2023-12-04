// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { GiShoppingCart } from 'react-icons/gi';
// import { useNavigate } from 'react-router-dom';
// import './Navb.css'; 

// const Navb = () => {
//   const navigate = useNavigate();

//   const goToCart = () => {
//     navigate('/cart');
//   };

//   const navToHome = () => {
//     navigate('/')
//   }

//   return (
//     <div>
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link onClick={navToHome}>Home</Nav.Link>
//               <Nav.Link href="#link">Shoe</Nav.Link>
//               <Nav.Link href="#home">Backpack</Nav.Link>
//               <Nav.Link href="#link">Contact</Nav.Link>
//             </Nav>

//             <Nav className="d-flex">
//               <div className="cart-icon-container" onClick={goToCart}>
//                 <GiShoppingCart size={40} />
//               </div>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Navb;
















import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiShoppingCart } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import './Navb.css';


const Navb = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const navToHome = () => {
    navigate('/');
  };

  const navToShoe = () => {
    navigate('/shoeNav')
}
const navToBag = () => {
    navigate('/bagNav')
}

const navToCont = () => {
  navigate('/navCont')
}
  

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={navToHome} className="nav-link">Home</Nav.Link>
              <Nav.Link onClick={navToShoe} className="nav-link">Shoe</Nav.Link>
              <Nav.Link onClick={navToBag} className="nav-link">Backpack</Nav.Link>
              <Nav.Link onClick={navToCont} className="nav-link">Contact</Nav.Link>
            </Nav>

            <Nav className="d-flex">
              <div className="cart-icon-container" onClick={goToCart}>
                <GiShoppingCart size={40} className="cart-icon" />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navb;

