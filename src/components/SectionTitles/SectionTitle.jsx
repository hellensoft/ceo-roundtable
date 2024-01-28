import PropTypes from "prop-types";
import React from 'react';

const SectionTitle = ({ title, subTitle, titleOption, headingOption, subMaxWidth }) => {
    return (
        <div className={`section-title ${titleOption}`} data-aos="fade-up">
            <h2 className={`title ${headingOption}`} dangerouslySetInnerHTML={{__html: title}}></h2>
            <p className={`sub-title ${subMaxWidth}`}>{subTitle}</p>
        </div>
    )
}

SectionTitle.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    titleOption: PropTypes.string,
    headingOption: PropTypes.string,
    subMaxWidth: PropTypes.string
};
SectionTitle.defaultProps = {
    titleOption: "text-center",
    headingOption: "title"
};

export default SectionTitle;
