import {} from "react";

const MainContainer = ({ children }) => {
    return (
        <main className="main flex-grow-1 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-10 col-lg-5 mx-auto">
                        <div className="text-center">
                            <img
                                src="/assets/img/tritek-logo.png"
                                className="img-fluid"
                                style={{ height: 60 }}
                            />
                        </div>
                        <h6 className="text-center">
                            Welcome to Tritek Careers
                        </h6>
                        {children}
                        <div className="row">
                            <div className="col-4">
                                <a href="/contact" className="btn btn-link">
                                    Contact Us
                                </a>
                            </div>
                            <div className="col-8">
                                <div className="row container d-flex justify-content-end">
                                    <a
                                        href="https://www.facebook.com/tritekconsultingltd"
                                        target="_blank"
                                        className="btn btn-social-icon btn-outline-facebook mr-1"
                                    >
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a
                                        href="https://twitter.com/Tritek_Consult"
                                        target="_blank"
                                        className="btn btn-social-icon btn-outline-twitter mr-1"
                                    >
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/tritek-consulting-limited"
                                        target="_blank"
                                        className="btn btn-social-icon btn-outline-linkedin mr-1"
                                    >
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/tritekconsultingltd/"
                                        target="_blank"
                                        className="btn btn-social-icon btn-outline-instagram mr-1"
                                    >
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mt-3">
                            Copyright &copy;{""}{" "}
                            <a href="#"> Tritek Consulting Limited </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContainer;
