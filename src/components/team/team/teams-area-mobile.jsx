import team_one_data from '@/data/team-one-data'
import React from 'react'

const TeamMobile = () => {
    return (
        <>
            <section className="team-area pt-30">
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="tp-section__sub-title left-line right-line mb-25">
                        Meet Our Partners
                    </span>
                </div>
                <div className="container" style={{ marginBottom: '50px' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="row"
                                style={{
                                    border: '1px solid lightgrey',
                                    borderRadius: '10px',
                                    padding: '5px',
                                    marginLeft: '-4px',
                                    marginRight: '-4px',
                                }}
                            >
                                {team_one_data?.map((item) => (
                                    <div
                                        className="col-6 col-md-3"
                                        key={item.id}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{
                                                width: '80%',
                                                height: 'auto',
                                                objectFit: 'contain',
                                                marginBottom: '10px',
                                            }}
                                        />
                                        <h5 className="team-item__title mb-15">
                                            {item.name}
                                        </h5>
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .team-item__title {
                    font-size: 16px;
                    font-weight: bold;
                }
            `}</style>
        </>
    )
}

export default TeamMobile
