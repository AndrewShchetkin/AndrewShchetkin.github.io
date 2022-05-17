import * as React from "react";


type ExperienseProps = {
    jobTitle: string;
    company: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
}

/**
 * @param {string} jobTitle Job title
 * @param {string} company Company name
 * @param {string} description Description of your Job
 * @param {Date} startDate Month and Year when you started this job
 * @param {Date} endDate Month and Year when job is ended or null if Present
*/
export const Experience = ({
                                      jobTitle,
                                      company,
                                      description,
                                      endDate,
                                      startDate}: ExperienseProps): JSX.Element =>
    <div><li className="experianceBlock"><b>{jobTitle}</b><br/>
        {company}<br/>
        <p className="date">{startDate.toLocaleString('en', { month: 'long' })} {startDate.getFullYear()} -
            {endDate? ` ${endDate.toLocaleString('en', { month: 'long' })} ${endDate.getFullYear()}` : ' Present'}<br/></p>
        <p>{description}</p>
    </li>
    </div>;