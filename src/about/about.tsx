import * as React from "react";
import "./about.scss";

export default class About extends React.Component {
  render() {
    return <div>
        <h4>About me</h4>
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
          <h5>Experiense</h5>
          <ul>
            <li className="experianseBlock"><b>Web Developer</b><br/>
            GMCS<br/>
            <p className="date">May 2020 - Present<br/></p>
            </li>
            <li className="experianseBlock"><b>Process simulation engineer</b><br/>
            Infrastractura TK company<br/>
            <p className="date">Dec 2014 - May 2020<br/></p>
            </li>
          </ul>
        </div>
        <div>
          <h5>Education</h5>
        </div>
    </div>;
  }
}
