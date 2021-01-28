import React from 'react';

const Cardpic = ({ title = "Anime", buttonText = "Register", imgLink = "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", cardText = "Welcome To My Channel" }) => (

    <div className="card" style={{ width: "18rem" }}>
        <img
            src={imgLink}
            className="card-img-top"
            alt="..."
        />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {cardText}
            </p>
            <a href="#" className="btn btn-success">{buttonText}</a>
        </div>
    </div>

);

export default Cardpic;