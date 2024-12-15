import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function for navbar
function Nav(props) {
  return (<>
    <li className="nav-item">
      <a className="nav-link text-white" href={props.link}>{props.text}</a>
    </li>
  </>);
}

//function for buttons of slider
function SliderButton(props) {
  let name = ''
  if (props.name !== undefined)
    name = "active";
  return (<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={props.link} className={name} />);
}

//function for slider images
function SliderImages(props) {
  let item = ''
  if (props.item !== undefined)
    item = 'active';
  return (<>
    <div className={"carousel-item " + item}>
      <img src={props.image} className="d-block w-100" height={470} loading='lazy'/>
    </div></>);
}

//function for slider arrows of previous and next
function SliderPrevNext(props) {
  return (<><button className={props.controlto} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide={props.slideto}>
    <span className={props.icon} aria-hidden="true" />
    <span className="visually-hidden">{props.text}</span>
  </button></>);
}

//function for services section
function Services(props) {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 mb-3">
      <div className="card text-bg-dark shadow" style={{ cursor: 'default' }}>
        <div className="card-body">
          <h6 className="text-uppercase text-center fw-bold">{props.text}</h6>
        </div>
      </div>
    </div>
  );
}


//function for brands section
function Brands(props) {
  return (<><div className="col-lg-2 col-md-2 col-sm-3 col-4">
    <img src={props.image} className="img-fluid" loading='lazy'/>
  </div></>)
}

//function for feedbacks of customers
function Reviews(props) {
  return (<><div className="col-sm-4 col-12">
    <div className="card">
      <img src={props.image} className="card-img-top" loading='lazy'/>
      <div className="card-body">
        <p>
          {props.text}<br /><b>{props.name}</b>
        </p>
      </div>
    </div>
  </div></>);
}

// main function
function Site() {
  return (<div>
    {/* header */}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3 sticky-top">
      <a class="navbar-brand" href="#">Car-Care Services</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <Nav link='#' text='Home' />
          <Nav link='#whatwedo' text='What we do' />
          <Nav link='#service' text='Service' />
          <Nav link='#brands' text='Brands' />
          <Nav link='#reviews' text='Customer Reviews' />
          <Nav link='#book' text='Book Appointment' />
        </ul>
      </div>
    </nav>
    {/* header */}

    {/* Slider */}
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <SliderButton link='0' name='active' />
        <SliderButton link='1' />
        <SliderButton link='2' />
      </div>
      <div className="carousel-inner">
        <SliderImages image='./images/slider-1.jpg' item='active' />
        <SliderImages image='./images/slider-2.jpg' />
        <SliderImages image='./images/slider-3.jpg' />
      </div>
      <SliderPrevNext controlto='carousel-control-prev' slideto='prev' icon='carousel-control-prev-icon' text='prev' />
      <SliderPrevNext controlto='carousel-control-next' slideto='next' icon='carousel-control-next-icon' text='next' />
    </div>
    {/* Slider */}

    {/* what we do */}
    <div className="container text-center">
      <div className="row my-3 ">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header text-bg-dark">
              <h3>What we do</h3>
            </div>
            <div className="card-body">
              <div className="row" id="whatwedo">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <img src="images/aboutus.jpg" className="img-fluid img-thumbnail" loading='lazy'/>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 fs-5 mt-4 text-capitalize">
                  <p>
                    CarCare is a premier establishment dedicated to providing exceptional and expert repair services
                    exclusively for luxury vehicles. We understand the challenges that come with owning and maintaining a
                    premium car, which often hinder us from fully enjoying our driving experience. Recognizing the
                    exorbitant costs associated with authorized service centers for even the most basic car maintenance,
                    we aim to alleviate this burden and offer an affordable alternative without compromising on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* what we do */}

    {/* services */}
    <div class="container-fluid bg-light">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <h3 class="text-center text-uppercase fw-bold my-3">Services</h3>
            </div>
          </div>
          <div class="row pb-3 service-row" id="service">
            <Services text='Regular maintainance' />
            <Services text='Body &amp; Paintwork' />
            <Services text='Mechanical repair' />
            <Services text='BRAKE SERVICE' />
            <Services text='Oil Change' />
            <Services text='Cooling System Maintenance' />
            <Services text='SUSPENSION REPAIR' />
            <Services text='ENGINE &amp; TRANSMISSION REBUILD' />
            <Services text='Battery Inspection &amp;   Replacement' />
            <Services text='ELECTRICAL &amp; ELECTRONICS REPAIR' />
            <Services text='Car Restoring' />
            <Services text='Modify Car' />
          </div>
        </div>
      </div>
    </div>
    {/* services */}

    {/* brands */}
    <div className="container">
      <div className="row my-3">
        <div className="col-12">
          <h3 className="text-center text-uppercase fw-bold">Brands</h3>
        </div>
      </div>
      <div className="row" id="brands">
        <Brands image='images/bmw.png' />
        <Brands image='images/ford.png' />
        <Brands image='images/honda.png' />
        <Brands image='images/hundai.png' />
        <Brands image='images/kia.png' />
        <Brands image='images/toyota.png' />
      </div>
    </div>
    {/* brands */}

    {/* customer reviews */}
    <div className="container-fluid bg-light pb-3">
      <div className="row py-3">
        <div className="col-12 ">
          <h3 className="text-center text-uppercase fw-bold">Customer Reviews</h3>
        </div>
      </div>
      <div className="row" id="reviews">
        <div className="col-10 offset-1 text-center text-capitalize">
          <div className="row">
            <Reviews image='images/customer-1.jpg' text='I recently had my car serviced at CarCare, and I must say, it was an outstanding experience from start
                    to finish. The staff was incredibly friendly and professional, making me feel confident that my
                    vehicle was in good hands. The service itself was top-notch; they thoroughly inspected my car,
                    addressed all the necessary maintenance tasks. The turnaround time was impressive, and the pricing was
                    fair and transparent. I highly recommend their services to anyone seeking reliable and trustworthy car
                    servicing.' name='Mr. Hitesh Singh' />
            <Reviews image='images/customer-3.jpg' text='I recently experienced a sudden breakdown on the road and reached out to CarCare Services for help. I
                    must say, their response was nothing short of remarkable. Their team arrived promptly, equipped with
                    the necessary tools and expertise to diagnose and resolve the issue. They were incredibly professional
                    and understanding, keeping me informed throughout the process. Their swift and efficient repairs got
                    my car up and running in no time. The pricing was reasonable, and the service was worth every penny. I
                    am immensely grateful to CarCare Services for their reliable breakdown assistance. They truly saved
                    the day and earned my highest recommendation.' name='Ms. Riddhi Bose' />
            <Reviews image='images/customer-2.jpg' text='I recently had my car repainted at CarCare Services, and I am absolutely thrilled with the results.
                    The level of craftsmanship and attention to detail displayed by their team was truly exceptional. They
                    meticulously prepared the surface, ensuring a smooth and flawless finish. The color matching was
                    spot-on, and the new paint gave my car a stunning, showroom-like appearance. The turnaround time was
                    surprisingly quick, and the pricing was reasonable considering the quality of work.I highly recommend
                    their car repaint services for an outstanding and remarkable outcome.' name='Mr. Suresh desai' />
          </div>
        </div>
      </div>
    </div>
    {/* customer reviews */}

    {/* form */}
    <div className="container-fluid bg-dark py-2">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-uppercase fw-bold text-white">Let us work upon your car
          </h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row py-3">
        <div className="col-12 ">
          <h3 className="text-center text-uppercase fw-bold">Book Appointment</h3>
        </div>
      </div>
      <div className="row" id="book">
        <div className="card shadow">
          <div className="card-body">
            <form action='https://formsubmit.co/dynamonsworld2015@gmail.com' method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">Preferred Time to Call</label>
                <input type="time" className="form-control" id="time" name="time" required />
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* form */}

    {/* footer */}
    <div className="container-fluid bg-dark py-3 mt-3">
      <div className="row">
        <div className="col-sm-8 col-12">
          <h3 className="text-white mb-3">Map</h3>
          <iframe frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.openstreetmap.org/export/embed.html?bbox=72.13657379150392%2C21.75992321650511%2C72.14219570159914%2C21.76239435569958&layer=mapnik&marker=21.761158791420442%2C72.13938474655151" style={{ "border": "1px solid black", "width": "100%", "height": "200px" }} /><br /><small><a href="https://www.openstreetmap.org/?mlat=21.76116&mlon=72.13938#map=18/21.76116/72.13938">View Full Map</a></small>
        </div>
        <div className="col-sm-4 col-12 mt-3 text-white">
          <h3 className="text-white mt-4 fw-bolder border-bottom">Car-Care Services</h3>
          <p className="text-white mt-3">
            Address: 123, ABC Building, XYZ Road <br />
            City: Bhavnagar Pin 364001 <br />
            State: Gujarat <br />
            Country: India
          </p>
          <hr />
          <span className='mt-3'> &#169; Copyright 2023 | All Rights Reserved By Car-Care Services</span>
        </div>
      </div>
    </div>
    {/* footer */}
  </div >
  );
}
root.render(<Site />)

