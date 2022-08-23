import * as React from "react";
import "./about.scss";
import { Experience } from './components/experience';

export default class About extends React.Component {
  render() {
    const aboutData = require('./aboutData.json');

    return <div>
      <div>
        <h5>Summary information</h5>
        <p>Hi, I'm Andrew Shchetkin. I'm Web developer.
          For cooperation proposals, write to the mail <a href="mailto:andrewasdr@gmail.com">andrewasdr@gmail.com</a>
        </p>
      </div>
      <div>

        <h5>Skills</h5>
        <ul>
          {aboutData.skills.map((t: { subject: string, skills: string[] }) =>
            <li>{t.subject}
              <ul>
                {t.skills.map(s => <li>{s}</li>)}
              </ul>
            </li>)}
        </ul>
      </div>
      <div>
        <h5>Experience</h5>
        <ul>
          {aboutData.experience.map((j: { title: string; company: string; startDate: Date; endDate: Date | undefined; description: string | undefined; }) =>
            <Experience jobTitle={j.title}
              company={j.company}
              startDate={new Date(j.startDate)}
              endDate={j.endDate ? new Date(j.endDate) : undefined}
              description={j.description} />
          )}

        </ul>
      </div>
      <div>
        <h5>Education</h5>
      </div>
    </div>;
  }
}
