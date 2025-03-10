"use client";
import Link from "next/link";
import Slider from "rc-slider";
import { useState } from "react";

const TourSidebar = () => {
  const [value, setValue] = useState([10, 30]);
  return (
    <div className="col-lg-3 col-md-6 col-sm-10 rmb-75">
      <div className="shop-sidebar mb-30">
      
        <div
          className="widget widget-activity"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h6 className="widget-title"> popular Tours</h6>
          <ul className="radio-filter">
            <li>
             
              <label htmlFor="activity1">
                Desert Safari <span>15</span>
              </label>
            </li>
            <li>
           
              <label htmlFor="activity2">
                City Tours <span>10</span>
              </label>
            </li>
            <li>
             
              <label htmlFor="activity3">
                Quad & buggy ride <span>5</span>
              </label>
            </li>
            <li>
         
              <label htmlFor="activity4">
                Theme Park <span>4</span>
              </label>
            </li>
            <li>
         
         <label htmlFor="activity4">
           Desert Resort <span>1</span>
         </label>
       </li>
          </ul>
        </div>
        <div
          className="widget widget-reviews"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h6 className="widget-title">By Reviews</h6>
          <ul className="radio-filter">
            <li>
            
              <label htmlFor="review1">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
              </label>
            </li>
            <li>

        
              <label htmlFor="review2">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
            <li>
 
              <label htmlFor="review3">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
            <li>

              <label htmlFor="review4">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
            <li>

              <label htmlFor="review5">
                <span className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star white" />
                  <i className="fas fa-star-half-alt white" />
                </span>
              </label>
            </li>
          </ul>
        </div>
        {/* <div
          className="widget widget-languages"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
          >
          <h6 className="widget-title">By Languages</h6>
          <ul className="radio-filter">
            <li>
              <input
                className="form-check-input"
                type="radio"
                defaultChecked=""
                name="ByLanguages"
                id="language1"
              />
              <label htmlFor="language1">American</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language2"
              />
              <label htmlFor="language2">English</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language3"
              />
              <label htmlFor="language3">German</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language4"
              />
              <label htmlFor="language4">Japanese</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language5"
              />
              <label htmlFor="language5">Vietnamese</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="ByLanguages"
                id="language6"
              />
              <label htmlFor="language6">French</label>
            </li>
          </ul>
        </div> */}
        {/* <div
          className="widget widget-duration"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
           >
          <h6 className="widget-title">Duration</h6>
          <ul className="radio-filter">
            <li>
              <input
                className="form-check-input"
                type="radio"
                defaultChecked=""
                name="Duration"
                id="duration1"
              />
              <label htmlFor="duration1">0 - 2 hours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration2"
              />
              <label htmlFor="duration2">2 - 4 hours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration3"
              />
              <label htmlFor="duration3">4 - 8 hours</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration4"
              />
              <label htmlFor="duration4">Fulda (+8 hours)</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="radio"
                name="Duration"
                id="duration5"
              />
              <label htmlFor="duration5">Multi days</label>
            </li>
          </ul>
        </div> */}



        <div
          className="widget widget-tour"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h6 className="widget-title">Popular Tours</h6>
          <div className="destination-item tour-grid style-three bgc-lighter">
            <div className="image">
              <span className="badge">10% Off</span>
              <img src="assets/images/widgets/yacht2.jpg" alt="Tour" />
            </div>
            <div className="content">
              <div className="destination-header">
                <span className="location">
                  <i className="fal fa-map-marker-alt" /> UAE
                </span>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <span>(4.8)</span>
                </div>
              </div>
              <h6>
                <Link href="tour-details">
                Luxury Yacht Cruising
                </Link>
              </h6>
            </div>
          </div>
          <div className="destination-item tour-grid style-three bgc-lighter">
            <div className="image">
              <img src="assets/images/widgets/yacht.jpg" alt="Tour" />
            </div>
            <div className="content">
              <div className="destination-header">
                <span className="location">
                  <i className="fal fa-map-marker-alt" /> UAE
                </span>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <span>(4.8)</span>
                </div>
              </div>
              <h6>
                <Link href="tour-details">
                Dhow Cruise Marina
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div
        className="widget widget-cta"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        {/* <div className="content text-white">
          <span className="h6">Explore The World</span>
          <h3>Best Tourist Place</h3>
          <Link href="tour-grid" className="theme-btn style-two bgc-secondary">
            <span data-hover="Explore Now">Explore Now</span>
            <i className="fal fa-arrow-right" />
          </Link>
        </div> */}
        <div className="image">
          <img src="assets/images/widgets/cta-widget.png" alt="CTA" />
        </div>
        <div className="cta-shape">
          <img src="assets/images/widgets/cta-shape2.png" alt="Shape" />
        </div>
      </div>
    </div>
  );
};
export default TourSidebar;
