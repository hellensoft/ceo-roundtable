import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const BlogItem = ({ data }) => {
    return (
        <div className="blog">
            <div className="thumbnail">
                <Link to={`/blog-details/${data.id}`} className="image"><img src={`/${data.image}`} alt="Blog Image" /></Link>
            </div>
            <div className="info">
                <ul className="meta">
                    <li><i className="far fa-calendar"></i>{data.date}</li>
                    <li><i className="far fa-eye"></i>{data.view}</li>
                </ul>
                <h3 className="title"><Link to={`/blog-details/${data.id}`}>{data.title}</Link></h3>
                <Link to={`/blog-details/${data.id}`} className="link"> <mark>Read More</mark> </Link>
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    data: PropTypes.object
};

export default BlogItem
