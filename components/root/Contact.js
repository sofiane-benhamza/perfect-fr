const Contact = () => {
    return (
        <section className="section contact" data-section="section6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Let’s Keep In Touch</h2>
              </div>
            </div>
            <div className="col-md-6">
              {/* Do you need a working HTML contact-form script?
                
                  Please visit https://templatemo.com/contact page */}
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows={6}
                        className="form-control"
                        id="message"
                        placeholder="Your message..."
                        required=""
                        defaultValue={""}
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">
                        Send Message Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.7143825708636!2d-6.840398123502249!3d34.02554167316702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c7434ba7149%3A0x587f80b5d5227f64!2sMedinatech!5e0!3m2!1sfr!2sma!4v1716247927336!5m2!1sfr!2sma"
                  width="100%"
                  height="422px"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact