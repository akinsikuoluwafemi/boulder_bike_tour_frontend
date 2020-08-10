import React from 'react';
import './Home.scss';


export default function FooterContent() {
    return (
        <div className="footer-content">
            <h6 className="footer-heading-text py-3">Boulder Bike Tour</h6>
            <ul className="footer-list">
                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">All Boulder Bike tours</a></li>
                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Summer races</a></li>
                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Winter races</a></li>
                <li className="footer-list-item pb-2"><a style={{ color: '#777' }} href="#">Youth biking races</a></li>
                <li className="footer-list-item"><a style={{ color: '#777' }} href="#">Results</a></li>
            </ul>
        </div>
    )
}
