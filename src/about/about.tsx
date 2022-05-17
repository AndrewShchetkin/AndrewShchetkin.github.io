import * as React from "react";
import "./about.scss";
import {Experience} from './components/experience'

export default class About extends React.Component {
  render() {
    return <div>
        <div>
          <h5>Summarry information</h5>
          <p>Hi, I'm Andrew Shchetkin. I'm Web developer. 
            For cooperation proposals, write to the mail <a href= "mailto:andrewasdr@gmail.com">andrewasdr@gmail.com</a>
          </p>
        </div>
        <div>
          <h5>Skills</h5>
          <ul>
            <li>Programming languages
              <ul>
                <li>C#</li>
                <li>JavaScript/TypeScript</li>
                <li>SQL/TSQL</li>
              </ul>
            </li>
            <li>Backend
              <ul>
                <li>Asp.Net</li>
                <li>Node.js, Next.js</li>
              </ul>
            </li>
            <li>Frontend
              <ul>
                <li>Css, HTML</li>
                <li>Reactjs</li>
                <li>Webpack</li>
                <li>Babel</li>
                <li>JQuery</li>
              </ul>
            </li>
            <li>
              MS Dynamics 365
              <ul>
                <li>Plugins</li>
                <li>Code Activity</li>
                <li>Unit Tests</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h5>Experience</h5>
          <ul>
            <Experience jobTitle={'Web Developer'} 
              company={"GMCS"} 
              startDate={new Date(2020, 4)} 
              description={''}/>
            <Experience jobTitle={'Process simulation engineer'} 
              company={"Infrastractura TK company"} 
              startDate={new Date(2020, 4)}
              endDate={new Date(2014, 4)}
              description={''} />
          </ul>
        </div>
        <div>
          <h5>Education</h5>
        </div>
    </div>;
  }
}
