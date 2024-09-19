export const HeroSection = () => {
    return (
        <>
        <section style={{backgroundColor: '#ebeae8' }}>
            <div className="container-xxl feature py-5" style={{ marginTop: '50px', }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            {/* <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                                Why Choosing Us!
                            </p> */}
                            <h1 className="display-5 mb-4">More Than Just
                                a <span style={{ color: '#ed8f09' }}>Website .</span></h1>
                            <p className="mb-4">
                                ecDigi empowers your business and flourishes on the online market. Unleash your brand and power up your digital presence with the best e-Commerce platform. Growing your business with ecDigi is easier than ever.
                            </p>
                            <div className="d-inline-flex">
                                <div className=""><a className="btn btn-light py-3 px-5" href="/about">
                                    Demo Website
                                </a></div>
                                <div className="ps-3">
                                    <a className="btn btn-primary py-3 px-5" href="/about">
                                        Pay Now
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <img src="assets/images/abt-img.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}