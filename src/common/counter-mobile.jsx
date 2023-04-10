import React from 'react';
import Count from './count';
import useMobileDetector from '../../hooks/useMobileDetector';

const counter_text = [
  {
    id: 1,
    color: 'sky-hard',
    counter: 133,
    text: 'MONTHLY PROCESSING VOLUME',
  },
  {
    id: 2,
    color: 'pink-hard',
    counter: 3,
    text: 'MONTHLY TRANSACTION COUNT',
  },
  {
    id: 3,
    color: 'sky-hard',
    counter: 105,
    text: 'TEAM MEMBERS',
  },
  {
    id: 4,
    color: 'pink-hard',
    counter: 3400,
    text: 'ACTIVE MERCHANTS',
  },
];

const CounterMobile = ({ cls = 'pt-40 pb-40' }) => {
  const isMobile = useMobileDetector();

  return (
    <>
      <section
        className={`counter-area ${cls} theme-light-bg`}
        style={{
          backgroundImage: 'url(/assets/img/shape/shape-bg-06.png)',
        }}
      >
        <div className="container">
          <div className="row counter-font-white justify-content-center">
            {counter_text.map((item, index) => (
              <div
                key={item.id}
                className={`col-xl-3 col-md-6 col-sm-6 col-6 ${
                  index < 2 ? 'mb-4' : ''
                }`}
              >
                <div
                  className="counter__item blue-border mb-5 wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4
                      className="counter__title"
                      style={{
                        fontSize: isMobile ? '25px' : 'inherit',
                      }}
                    >
                      <span className="counter">
                        <Count
                          number={item.counter}
                          suffix={
                            item.id === 1 || item.id === 2 ? 'M' : '+'
                          }
                        />
                      </span>
                    </h4>
                    <p
                      style={{
                        fontSize: isMobile ? '15px' : 'inherit',
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterMobile;