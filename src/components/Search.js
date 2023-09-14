import React, { useState } from 'react';
import FoodData from './FoodData'
import './style.css';
import Form from 'react-bootstrap/Form';

const Search = () => {
  const [fdata, setFdata] = useState(FoodData);
  const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
  // console.log(fdata);
  return (
    <>
    <div className="container d-flex justify-content-between align-items-center">
        <img src={zomatologo} style={{ 'max-width': '14rem', height: '2.7rem', position: 'relative', left: '2%', cursor: 'pointer' }} alt="" />
        <h2 style={{ color: '#1b1464', cursor: 'pointer', 'margin-top': '3px' }}>Search Filter App</h2>
    </div>

    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
    </Form>
    </>
  )
}

export default Search