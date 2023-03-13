import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import React from 'react';
import ProjectDetailsArea from './project-details-area';
import ProjectDetailsBanner from './project-details-banner';

const ProjectDetails = () => {
    return (
        <>
            <Header />
            <ProjectDetailsBanner />
            <ProjectDetailsArea />
            <Footer />
        </>
    );
};

export default ProjectDetails;