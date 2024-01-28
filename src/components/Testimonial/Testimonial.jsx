import PropTypes from "prop-types";
import React from 'react';

const Testimonial = ({ data }) => {
    return (
        <div className="static-testimonial mb-6">
            <div className="testimonial-image">
                <img src={`/${data.image}`} alt="" />
            </div>
            <div className="author-info">
                <div className="cite">
                    <h6 className="name">{data.name}</h6>
                    <span className="position">{data.position}</span>
                    <span className="">{data.description}</span>
                </div>
            </div>
        </div>
    )
}

Testimonial.propTypes = {
    data: PropTypes.object
};

export default Testimonial;
