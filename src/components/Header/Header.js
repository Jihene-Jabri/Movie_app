import React from "react";
import ReactStars from "react-star-rating-component";
import { Form, FormControl } from "react-bootstrap";
import "./Header.css";

function Header({ setTitleSearch, setRateSearch, rateSearch }) {
   
    return ( 
        <div className="navbarContainer">
            
            <div className="navbar">
                <h1>Trending Movies</h1>
                <Form className="FormContainer">
                    <FormControl
                        type="text"
                        className="search_container"
                        placeholder="Search"
                        onChange={(e) => {setTitleSearch(e.target.value); console.log(rateSearch)}}
                    />
                </Form>
                <ReactStars
                    count={5}
                    onChange={setRateSearch}
                    size={30}
                    activeColor="#ffd700"
                    
                />
            </div>
        </div>
    );
}

export default Header;
