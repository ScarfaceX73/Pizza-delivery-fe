export default function Footer() {
    return (
        <div className="container-fluid">

            <div className="row footer align-items-center">
                <div className="col-md-8 footer-left">
                    <div className="row">
                        <div className="col-sm-4 text-center">
                            <i className="fas fa-phone"> <span className="footer-text"> +91-12345-12345</span></i>
                        </div>
                        <div className="col-sm-4 text-center">
                            <i className="fas fa-map-marker-alt">
                                <span className="footer-text"> Shop Number 4012, Minas Tirith </span>
                                <br />
                                <span className="footer-text-muted"> Easternmost point of the White Mountains, close to the Anduin</span>
                            </i>
                        </div>
                        <div className="col-sm-4 text-center">
                            <i className="fas fa-clock">
                                <span className="footer-text"> Open 24 * 7</span> <br />
                                <span className="footer-text-muted"> Order on call or place your order here</span>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 footer-right">
                    <div className="row h-100 align-items-center">

                        <div className="col-sm-4 text-center">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="col-sm-4 text-center">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="col-sm-4 text-center">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}