import logo from "./components/images/portfolio/logo.png";
import './App.css';
// images
import img1 from "./components/images/portfolio/rida.jpg"
import img2 from "./components/images/portfolio/rida.jpg"
import img3 from "./components/images/portfolio/rida.jpg"
import img4 from "./components/images/portfolio/samina.jpg"
import img5 from "./components/images/portfolio/rida.jpg"
import img6 from "./components/images/portfolio/faisal.png"
import img7 from "./components/images/portfolio/rida.jpg"
// components
import Form from "./components/Form/Form.js"

function App() {
  return (
    <div className="App">
      <header id="header">
        <div className="header-content clearfix"> <a className="logo" href="/"><img style={{height: "60px", width: "60px", verticalAlign: "middle", marginTop: "-14px"}} src={logo} alt="logo"/></a>
        <nav className="navigation" role="navigation">
          <ul className="primary-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#services">Issue Archive</a></li>
            <li><a href="https://www.facebook.com/pg/aftabNYU/events/?ref=page_internal">Events</a></li>
            <li><a href="#portfolio">Staff</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href="/#" className="nav-toggle">Menu<span></span></a> </div>
      </header>
      <section id="services" className="section services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="services-content">
                <h4 style={{fontWeight: "bold"}}>A New York University Based Literary Magazine.</h4>
                <p>For over a decade, Aftab has built itself into a voice for Muslims and minorities as a platform for self-discovery and stories of identity. Born in the Islamic Center at NYU, Aftab is a publication that serves as an outlet for cultural, spiritual, and self-expressive pieces made by students and community members. </p>
                <p>No matter who you are, we invite you to take part in our narrative by submitting something of your own. We showcase poetry, prose, short stories, creative writing, essays, artwork, illustrations, photography, and more.</p>
                <h3>Fall/Winter 2019 issue now available!</h3>
                <h3>Submit your work for Fall 2020 <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFiKrfpKAXc2lG0_zb8IfLTzOUNREvZ5ac6mZwkxek8_YYLQ/viewform">here</a>.</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="services-content">
                <h5 style={{fontWeight: "bold"}}>ISSUE ARCHIVE </h5>
                <ul>
                  <li><h5><a href="https://drive.google.com/file/d/1KcXWMRNvDdpRbhGUFRcy2ScnlJEZxxtt/view?usp=sharing" target="_blank" rel="noreferrer">Fall/Winter 2019</a></h5></li>
                  <li><h5><a href="https://drive.google.com/open?id=19Av-SW4tkHydvCzafbgyCJJrPsnukM7Z" target="_blank" rel="noreferrer">Spring/Summer 2019</a></h5></li>
                  <li><h5><a href="https://drive.google.com/file/d/1itMg_aAYN9U3KLdUVb-Hv9lbNr-CyLzT/view?usp=sharing" target="_blank" rel="noreferrer">Fall/Winter 2018</a></h5></li>
                  <li><h5><a href="https://drive.google.com/file/d/1QueAZbsmPDEXkVLgc50Is8gc95EOyQs9/view?usp=sharing" target="_blank" rel="noreferrer">Spring 2018</a></h5></li>
                  <li><h5><a href="issues/aftabfall2017-test-final.pdf" target="_blank">Fall 2017</a></h5></li>
                  <li><h5><a href="/#">Spring '17</a></h5></li>
                  <li><h5><a href="/#">Fall '16</a></h5></li>
                  <li><h5><a href="/#">Spring '16</a></h5></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="services-content">
                <h5 style={{fontWeight: "bold"}}>Submit</h5>
                <ul>
                  <li><h5><a href="https://docs.google.com/forms/d/e/1FAIpQLSfFiKrfpKAXc2lG0_zb8IfLTzOUNREvZ5ac6mZwkxek8_YYLQ/viewform">Poetry</a></h5></li>
                  <li><h5><a href="https://docs.google.com/forms/d/e/1FAIpQLSfFiKrfpKAXc2lG0_zb8IfLTzOUNREvZ5ac6mZwkxek8_YYLQ/viewform">Short Story</a></h5></li>
                  <li><h5><a href="https://docs.google.com/forms/d/e/1FAIpQLSfFiKrfpKAXc2lG0_zb8IfLTzOUNREvZ5ac6mZwkxek8_YYLQ/viewform">Art/Photography</a></h5></li>
                  <li><h5><a href="https://docs.google.com/forms/d/e/1FAIpQLSfFiKrfpKAXc2lG0_zb8IfLTzOUNREvZ5ac6mZwkxek8_YYLQ/viewform">Songs</a></h5></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h3 id="testimonials" style={{textAlign: "center",
        fontSize: "30px",
        color: "#2d3033",
        textTransform: "uppercase",
        paddingTop: "2cm",
        paddingBottom: "0.97cm",
        margin: "auto",
        backgroundColor: "white"}}>LATEST POSTS</h3>
      <section className="section testimonials no-padding">
        <div className="container-fluid">
          <div className='embedsocial-instagram' data-ref="cc0a1ff005096287bbd67d9e437f5d4f18104339"></div>{(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"))}
        </div>
      </section>
      <section id="portfolio" className="section portfolio">
        <div className="container-fluid">
          <h3 style={{textAlign: "center",
              fontSize: "30px",
              color: "#2d3033",
              textTransform: "uppercase",
              paddingBottom: "0.97cm"}}>
                2020-2021 E-Board
              </h3>
          <div className="row">
          {/*eslint-disable-next-line*/}
          <div className="col portfolio-item"> <a className="portfolio-link">
              <div className="caption">
                <div className="caption-content">
                  <h3>Rida Ali</h3>
                  <h4>President</h4>
                </div>
              </div>
              <img src={img1} className="img-responsive" alt=""/> </a> </div>
      
      
            {/*eslint-disable-next-line*/}
            <div className="col portfolio-item"> <a className="portfolio-link">
              <div className="caption">
                <div className="caption-content">
                  <h3>Aronno Shafi</h3>
                  <h4>Vice President</h4>
                </div>
              </div>
              <img src={img2} className="img-responsive" alt=""/> </a> </div>
      
              {/*eslint-disable-next-line*/}
              <div className="col portfolio-item"> <a className="portfolio-link">
                  <div className="caption">
                    <div className="caption-content">
                      <h3>Reham Perry</h3>
                      <h4>Editor in Chief</h4>
                    </div>
                  </div>
                  <img src={img3} className="img-responsive" alt=""/> </a> </div>
      
              {/*eslint-disable-next-line*/}
              <div className="col portfolio-item"> <a className="portfolio-link">
                <div className="caption">
                  <div className="caption-content">
                    <h3>Samina Saifee</h3>
                    <h4>Treasurer</h4>
                  </div>
                </div>
                <img src={img4} className="img-responsive" alt=""/> </a> </div>
              </div>
              <div className = "row">
              {/*eslint-disable-next-line*/}
              <div className="col-3 portfolio-item"> <a className="portfolio-link">
              <div className="caption">
                <div className="caption-content">
                  <h3>Halimatou Diallo</h3>
                  <h4>Secretary</h4>
                </div>
              </div>
              <img src={img5} className="img-responsive" alt=""/> </a> </div>
      
              {/*eslint-disable-next-line*/}
              <div className="col-3 portfolio-item"> <a className="portfolio-link">
                <div className="caption">
                  <div className="caption-content">
                    <h3>Faisal Karim</h3>
                    <h4>Creative Head</h4>
                  </div>
                </div>
                <img src={img6} className="img-responsive" alt=""/> </a> </div>

              {/*eslint-disable-next-line*/}
              <div className="col-3 portfolio-item"> <a className="portfolio-link">
                <div className="caption">
                  <div className="caption-content">
                    <h3>Muhammad Aziz</h3>
                    <h4>Creative Head</h4>
                  </div>
                </div>
                <img src={img7} className="img-responsive" alt=""/> </a> </div>

          </div>
        </div>
      </section>
      <section id = "form">
        <Form></Form>
      </section>
      <footer id="contact" className="footer">
        <div className="container-fluid">
          <div className = "row">
            <div className="col">
              <h4>Location</h4>
              <p> Global Spiritual Life - NYU 4th Floor
                <br/>
                  238 Thompson St, New York, NY 10012
              </p>
            </div>
            <div className="col">
              <h4>Contact Us</h4>
              <p> Email : <a href="mailto:aftabicnyu@gmail.com"> aftabicnyu@gmail.com </a></p>
            </div>
            <div className="col">
              <h4>Follow Us!</h4>
              <ul className="footer-share">
                <li><a href="https://www.facebook.com/aftabNYU/?ref=br_rs"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/aftabicnyu"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Development</h4>
              <p>Made with <i className="fa fa-heart pulse"></i> by <a href="http://fkarim.com">Faisal Karim</a> and <a href="/#">Muhammad Aziz</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
