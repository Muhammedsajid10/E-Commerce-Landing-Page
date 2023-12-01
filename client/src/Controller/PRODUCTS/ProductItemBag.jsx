import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { newContext } from '../CONTEXT/GlobalContext';
import { useNavigate } from 'react-router-dom';


const ProductItemBag = () => {
    const disp = useContext(newContext);
    const { ProductBag,addToCart } = disp;
    const navigate = useNavigate()

    const handleBuyNow = (item) => {
        addToCart(item);
        toast.success('Item successfully added to cart', {
            position: 'top-right',
            autoClose: 3000, // 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            navigate('/cart');
        }, 3000);
    };

    return (
        <div>
            <h3 className='productHeader'>Backpack</h3>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4 ROW">
                {ProductBag.map((item) => (
                    <Col className='COLL' key={item.id}>
                        <Card style={{ width: '20rem',marginTop: '10px' }} className="shadow">
                            <Card.Img variant="top" src={item.img} style={{height:'265px'}} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.desc}</Card.Text>
                                <Card.Text className='prise'>${item.prise}</Card.Text>
                                <Button onClick={()=>handleBuyNow(item)} className='cardBtn' >Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

    );
};
export default ProductItemBag
