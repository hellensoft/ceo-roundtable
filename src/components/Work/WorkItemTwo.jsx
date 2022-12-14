import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const WorkItemTwo = ({ data }) => {
    return (
        <div className="work">
            <div className="thumbnail">
                <Link className="image" to={`/work-details/${data.id}`}><img src={`/${data.image}`} alt="work" /></Link>
            </div>
            <div className="info">
                <h3 className="title"><Link to={`/work-details/${data.id}`}>{data.title}</Link></h3>
                <p className="desc">{data.excerpt}</p>
                <Link to={`/work-details/${data.id}`}>View Project</Link>
            </div>
        </div>
    )
}

WorkItemTwo.propTypes = {
    data: PropTypes.object
};

export default WorkItemTwo;
