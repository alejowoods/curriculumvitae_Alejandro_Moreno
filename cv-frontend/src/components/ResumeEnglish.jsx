import React from 'react';

const ResumeEnglish = () => {
    const resumeData = {
        name: 'Alejandro Moreno',
        title: 'Junior Software Developer',
        adress: 'Rudolfstrasse 14',
        postCode: '01097',
        city: 'Dresden',
        email: 'lamorenos@upn.edu.co',
        linkedin: 'https://www.linkedin.com/in/lamorenos/'
    };

    return (
        <>
            <div>
                <h1>{resumeData.name}</h1>
                <h2>{resumeData.title}</h2>
                <h2>Contact Information</h2>
                <h3>Adress: {resumeData.adress}</h3>
                <h3>Post Code: {resumeData.postCode}</h3>
                <h3>City: {resumeData.city}</h3>
                <h3>E-mail: {resumeData.email}</h3>
                <h3>Linkedin: <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">{resumeData.linkedin}</a></h3>
            </div>
        </>
    );
};

export default ResumeEnglish;