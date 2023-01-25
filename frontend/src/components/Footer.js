import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>THICC MEMES INC</h4>
                        <ul className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Moscow, Russia</li>
                            <li>123 Street South North</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>DANK MEMEs</li>
                            <li>OTHER STUFF</li>
                            <li>GUD STUFF</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>WELL ANOTHER COLUMN</h4>
                        <ul className="list-unstyled">
                            <li>EXAMPLE</li>
                            <li>EXAMPLE EXAMPLE</li>
                            <li>123 EXAMPLE</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THICC MEMES INC | All right reserved | Terms of service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer