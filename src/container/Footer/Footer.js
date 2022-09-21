import React from 'react';

const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container">
                {/* <div className="row mb-lg-14 mb-md-10 mb-6">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Logo 
                                    image={`/images/logo/footer-logo.png`}
                                />
                            </div>
                            <div className="footer-widget-content">
                                <div className="content">


                                    <p><Link to={"/"}>(+1) 212-946-2701</Link></p>
                                    <p><Link to={"/"}>hello@hasagency.com</Link> </p>
                                </div>
                                <div className="footer-social-inline">
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {FooterData && FooterData.map((single, key) => {
                            return(
                                <div key={key} className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mb-6">
                                    <FooterLinkItem data={single} key={key} />
                                </div>
                            ); 
                    })}


                </div> */}

                        <p className="copyright">&copy; 2022 <strong>CEO - Roundtable</strong>.</p>

            </div>
        </div>
    )
}

export default Footer
