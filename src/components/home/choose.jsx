import { Progress } from "antd";
import React from "react";
import "react-circular-progressbar/dist/styles.css";

const Choose = () => {
  return (
    <>
      <section
        className="choose-area grey-bg pt-125 pb-70 tp-box-space"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  who we are
                </span>
                <h3 className="tp-section__title mb-75">Why Choose Us</h3>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="progress-circular tl-progress">
                  <div
                    className="d-flex align-items-center justify-content-center"
                  >
                    
                    <Progress
                      type="circle"
                      percent={100}
                      width={165}
                      height={165}
                      strokeWidth={3.2}
                      strokeColor="#1890ff" // Replace with your desired color
                      trailColor="#f5f5f5" // Replace with your desired color
                      format={() => '100%'}
                    />
                   
                  </div>

                </div>
                <span className="skill-item-title">HONESTY</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="progress-circular tl-progress">
                    <Progress
                      type="circle"
                      percent={100}
                      width={165}
                      height={165}
                      strokeWidth={3.2}
                      strokeColor="#f72a75" // Replace with your desired color
                      trailColor="#f5f5f5" // Replace with your desired color
                      format={() => '100%'}
                    />
                  
                </div>
                <span className="skill-item-title">TRANSPARENCY</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="progress-circular tl-progress">
                    <Progress
                      type="circle"
                      percent={100}
                      width={165}
                      height={165}
                      strokeWidth={3.2}
                      strokeColor="#42bfff" // Replace with your desired color
                      trailColor="#f5f5f5" // Replace with your desired color
                      format={() => '100%'}
                    />
                  
                </div>
                <span className="skill-item-title">CONVENIENCE</span>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="experience-item text-center mb-50 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="progress-circular tl-progress">
                    <Progress
                      type="circle"
                      percent={100}
                      width={165}
                      height={165}
                      strokeWidth={3.2}
                      strokeColor="#10d0a1" // Replace with your desired color
                      trailColor="#f5f5f5" // Replace with your desired color
                      format={() => '100%'}
                    />
                 
                </div>
                <span className="skill-item-title">EASY TO WORK WITH</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
