import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const Brand = ({ data }) => {
    return (
        <div className="brand">
            <Link to={"/"}>
                <img src={`/${data.image}`} alt="logo image" />
            </Link>
        </div>
    )
}

Brand.propTypes = {
    data: PropTypes.object
}



export default Brand;
