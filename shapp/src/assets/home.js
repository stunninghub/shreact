function Homepage() {

    const bubble_img = {
        background: "url(https://stunninghub.in/wp-content/uploads/2022/07/overlay_bubble.png)center no-repeat",
        backgroundSize: "60%",
    }
    const team_img = {
        background:"url('https://stunninghub.in/wp-content/uploads/2022/07/UI-face-2.jpg')center no-repeat",
        backgroundSize:"cover"
    }


    return (
        <>
            <section className="hero_sec pt-5 pt-sm-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-5 text-light d-flex justify-content-center align-items-center">
                            <div className="hero-side-content">
                                <h1 className="main-title mb-4 mt-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="300">Learn, <span data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="2000">&lt;Code&gt;</span><br />& Develop</h1>
                                <p className="sub-title mb-5 pt-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="600">
                                    Design that inspires, app that completes the goals of your company. it would be great to be a full stack developer of your company.
                                </p>
                                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="900">
                                    <a href="#service_section_" className="cta-btn">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-center align-items-center" style={ bubble_img } data-aos="fade-in" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1500" data-aos-delay="100">
                            <div className="hero-team-bubble">
                                <div className="team-bubble-item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="1400">
                                    <div className="team-bubble" style={ team_img }>
                                    </div>
                                </div>
                                <div className="team-bubble-item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="1000">
                                    <div className="team-bubble" style={ team_img }>
                                    </div>
                                </div>
                                <div className="team-bubble-item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="600">
                                    <div className="team-bubble" style={ team_img }>
                                    </div>
                                </div>
                                <div className="team-bubble-item" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="1800">
                                    <div className="team-bubble" style={ team_img }>
                                    </div>
                                </div>

                                <div className="code-simulation" id="code-simulation" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="2000">echo "stunninghub";</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="service_section" id="service_section_">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="800" data-aos-delay="0">
                                <div className="card-body">
                                    <div className="card_main_title d-flex">
                                        <i className="fa-solid fa-paintbrush-pencil"></i>
                                        <h2>Designing</h2>
                                    </div>
                                    <p>Static, Dynamic, Ecommerce, WordPress, HTML5, Bootstrap, Mobile Friendly Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="800" data-aos-delay="300">
                                <div className="card-body">
                                    <div className="card_main_title d-flex">
                                        <i className="fa-solid fa-display-code"></i>
                                        <h2>Development</h2>
                                    </div>
                                    <p>Advanced Custom Fields, Core PHP, MySQL, Wordpress, WooCommerce, Python, javascript & jQuery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="800" data-aos-delay="600">
                                <div className="card-body">
                                    <div className="card_main_title d-flex">
                                        <i className="fa-solid fa-screwdriver-wrench"></i>
                                        <h2>Maintenance</h2>
                                    </div>
                                    <p>Major to minor changes or maintaining the existing websites with the cost of per hour.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <div className="side_image d-flex justify-content-center side_image_left image_shoadow">
                                <img src="https://stunninghub.in/wp-content/uploads/2022/09/sh_ilus_png-_1_-1.webp" alt="" data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="0" />
                            </div>
                        </div>
                        <div className="col-md-6 text-white" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="0">
                            <h2>The Story</h2>
                            <h3>About Us</h3>
                            <p>A web designing and development company established since 2018. Got the honor by making the 100+ clients happy. We create websites according to our client's satisfaction. We help our clients to achive their company's goal in the right and affective way. Our goal is to make the remarkable piece of art with technology.</p>
                            <div className="main_cta my-5">
                                <a href="#landing_ground_">Get a quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="info_analytic_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="col-inner">
                                <h2><span data-count="90">0</span>+</h2>
                                <p>Developed</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="col-inner">
                                <h2><span data-count="40">0</span>+</h2>
                                <p>Designed</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="col-inner">
                                <h2><span data-count="10">0</span>+</h2>
                                <p>Maintaining</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="col-inner">
                                <h2><span data-count="359">0</span>+</h2>
                                <p>Subscribers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq_section text-light">
                <div className="container">
                    <div className="faq_main_title mb-4" data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="0">
                        <h2>Question & Answer</h2>
                        <h3>Frequently Asked Questions</h3>
                    </div>
                    <div className="container">
                        <button className="accordion" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="0">How long does it take to build a website?</button>
                        <div className="panel">
                            <p>This completely depends on what you need. It takes longer to build a 1000 page megasite than a smaller eight page brochure website.</p>
                        </div>

                        <button className="accordion" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="300">Do you redesign/redevelop the existing website?</button>
                        <div className="panel">
                            <p>We certainly can do! It’s important to approach website redesignssensitively to make sure your reasons for redesigning are valid. This will ensure the project is an overall success from your ROI point of view.</p>
                        </div>

                        <button className="accordion" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="600">What happens to the copyright of my website if I move to another agency?</button>
                        <div className="panel">
                            <p>Your site is yours. You can move if you like, and we will never penalise you for it.</p>
                        </div>

                        <button className="accordion" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="900">What are the payment terms for the design and development of my website?</button>
                        <div className="panel">
                            <p>We like to work on a 30% upfront basis with 30% payable after the designs are agreed and the outstanding 40% payable when the development has been completed and signed off.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="landing_ground" id="landing_ground_">
                <div className="container">
                    <div className="landing_ground_inner text-light">
                        <h2 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="0">Join the hub to be the part of<br /><span>stunner's</span> world.</h2>
                        <div className="social_links d-felx my-5 justify-content-center">
                            <a href="https://instagram.com/stunninghub" target="_blank" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="0">
                                Instagram
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/stunninghub" target="_blank" data-aos="fade-doup" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="300">
                                Twitter
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://facebook.com/stunninghub" target="_blank" data-aos="fade-dup" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="600">
                                Facebook
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://pinterest.com/stunninghub" target="_blank" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="900">
                                Pinterest
                                <i className="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                        <div className="subscribe_form mt-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="1200">
                        </div>
                        <div className="main_cta my-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-ease" data-aos-duration="1000" data-aos-delay="1500">
                            <a href="https://wa.me/917652980918?text=Hi%20There" target="_blank"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a>
                            <a href="https://github.com/stunninghub" target="_blank"><i className="fa-brands fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Homepage;