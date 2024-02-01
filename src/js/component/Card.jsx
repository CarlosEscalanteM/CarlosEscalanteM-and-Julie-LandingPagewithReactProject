// Card: Julie

import React from "react";

// consider having if...else with 2 different card formations then to put both into home.jsx twice

const Card = () => {
    return (
        <div className="my-3">
            <div className="row row-cols-1 row-cols-lg-4 g-4 text-center">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://loremflickr.com/500/325" className="card-img-top" alt="stock-image" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://loremflickr.com/500/325" className="card-img-top" alt="stock-image" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://loremflickr.com/500/325" className="card-img-top" alt="stock-image" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://loremflickr.com/500/325" className="card-img-top" alt="stock-image" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;