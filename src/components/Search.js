import React, { useState } from 'react';
import FoodData from './FoodData'
import Cards from './Cards';
import Form from 'react-bootstrap/Form';
import './style.css';

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

    <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search Restaurants ..." />
        </Form.Group>
        <button type="button" class="btn text-light col-lg-1" style={{background:'#ed4c67'}}>Submit</button>
    </Form>

    <section className="item_section mt-4 container">
      <h2 className='px-4' style={{fontWeight:400}}>
      Restaurants in Ahmedabad Open Now
      </h2>
    </section>

    <div className="row mt-2">
      <Cards/>
    </div>
    
    </>
  )
}

export default Search