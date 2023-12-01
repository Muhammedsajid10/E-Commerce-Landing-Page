import React, { useContext, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { newContext } from '../CONTEXT/GlobalContext';
import './Cart.css';

const Cart = () => {
  const disp = useContext(newContext);
  const { Cart } = disp;

  const [itemCounts, setItemCounts] = useState({});

  const incrementCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  const decrementCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 0),
    }));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    Cart.forEach((item) => {
      const count = itemCounts[item.id] || 0;
      total += item.prise * count;
    });
    return total;
  };

  return (
    <div className="cart-container">
      <Table className='tbl' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {Cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.prise}</td>
              <td>
                <img className='imgg' src={item.img} alt='' />
              </td>
              <td>
                <Button
                  variant='outline-success'
                  size='sm'
                  onClick={() => incrementCount(item.id)}
                >
                  +
                </Button>{' '}
                {itemCounts[item.id] || 0}{' '}
                
                <Button
                  variant='outline-danger'
                  size='sm'
                  onClick={() => decrementCount(item.id)}
                >
                  -
                </Button>
              </td>
              <td>{item.prise * (itemCounts[item.id] || 0)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='5' className='text-end'>
              Total:
            </td>
            <td>{calculateTotalPrice()}</td>
          </tr>
          <tr>
            <td colSpan='6'>
            <Button variant="success">
          Order Now
        </Button>
            </td>
          </tr>
        </tfoot>
       
      </Table>

      
      
    </div>
  );
};

export default Cart;
