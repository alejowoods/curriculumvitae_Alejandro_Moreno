import React from 'react';

const ResumeGerman = () => {
    const resumeData = {
        name: 'Alejandro Moreno',
        title: 'Junior Software-Entwickler',
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
                <h2>Kontaktdaten</h2>
                <h3>Anschrift: {resumeData.adress}</h3>
                <h3>Postleitzahl: {resumeData.postCode}</h3>
                <h3>Stadt: {resumeData.city}</h3>
                <h3>E-mail: {resumeData.email}</h3>
                <h3>Linkedin: <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">{resumeData.linkedin}</a></h3>
            </div>
        </>
    );
};

export default ResumeGerman;