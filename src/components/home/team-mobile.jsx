import { pos_home, term_home } from '@/data/team-home-2';
import React from 'react';

const TeamMobile = () => {
  return (
    <>
      <section className="team-area pt-30">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="tp-section__sub-title left-line right-line mb-25">
            Our Services
          </span>
        </div>
        <div className="container" style={{ marginBottom: '50px' }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <h3
                  className="tp-section__title"
                  style={{
                    textAlign: 'center',
                    paddingLeft: '0px',
                    marginBottom: '18px',
                  }}
                >
                  POS Solutions
                </h3>
              </div>
              <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '5px', marginLeft: '-4px', marginRight: '-4px' }}>
                {pos_home.slice(0, 4).map((item) => (
                  <div className="col-6 col-md-3" key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginBottom: '50px' }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <h3
                  className="tp-section__title"
                  style={{
                    textAlign: 'center',
                    paddingLeft: '0px',
                    marginBottom: '18px',
                  }}
                >
                  Terminal Solutions
                </h3>
              </div>
              <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '5px', marginLeft: '-4px', marginRight: '-4px' }}>
                {term_home.slice(0, 4).map((item) => (
                  <div className="col-6 col-md-3" key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: '80%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMobile;
