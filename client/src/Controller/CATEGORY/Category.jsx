import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Category.css'
import { useNavigate } from 'react-router-dom';

const Category = () => {

    const navigate = useNavigate()
    const navToShoe = () => {
        navigate('/shoeNav')
    }
    const navToBag = () => {
        navigate('/bagNav')
    }

    return (
        <div>
            <Container className='CONT'>
                <Row className='ROWW'>
                    <Col className='COL Watch'>
                        <div className='CateTitle'>Watch</div>
                        <div><img className='CateImg' src="https://guesswatches.com/cdn/shop/products/U0673G3.png?v=1691773336&width=990" alt="" /></div>
                    </Col>
                    <Col className='COL Bag'  onClick={navToBag}>
                        <div className='CateTitle'>Bag</div>
                        <div><img className='CateImg BagImg' src="data:image/jpeg;base64,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" alt="" /></div>
                    </Col>
                    <Col className='COL Shoe'  onClick={navToShoe}>
                        <div className='CateTitle'>Shoe</div>
                        <div><img className='CateImg ShoeImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolVp_EwhQAyzHT_xouvVtDUoVrxaI_vmWyNcjguEKBDWw85iz0Lsx1SynM1p2I6GZQO4&usqp=CAU" alt="" /></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Category
