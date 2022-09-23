import React from "react";
import './product.css'
import img1 from '../../image/home1.jpeg'
import img2 from '../../image/home2.png'
import img3 from '../../image/home3.jpg'
import img4 from '../../image/home4.png'
class Product extends React.Component {
    render() {
        return (
            <>
                <>
                    <div className="text">
                        <h1 className="heading">
                            Our Products
                        </h1>
                        <p className="title-border"></p>
                        <p className="info-name">Solution from heart</p>
                    </div>
                    <div className="team-container">
                        <div class="row">
                            <div class="column">
                                <img className="img" src={img1}></img>
                                <h1>EDTech</h1>
                                <div className="info-name">
                                    <p>Serving for education</p>
                                </div>
                            </div>
                            <div class="column">
                                <img className="img" src={img2}></img>
                                <h1>E-learning</h1>
                                <div className="info-name">
                                    <p>Support for teacher</p>
                                </div>
                            </div>
                            <div class="column">
                                <img className="img" src={img1}></img>
                                <h1>TechSolution</h1>
                                <div className="info-name">
                                    <p>Technology Solutions</p>
                                </div>
                            </div>
                            <div class="column">
                                <img className="img" src={img2}></img>
                                <h1>Restaurant</h1>
                                <div className="info-name">
                                    <p>Booking order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </>
        )
    }
}
export default Product;