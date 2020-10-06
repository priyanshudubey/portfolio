import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://imgur.com/I80W1Q0.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Priyanshu Dubey</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              I am a final year undergrad student majoring in CSE
              . I love to write codes, debug, learn new technologies
              and implement my learnings to projects.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Ranchi, Jharkhand</p>
            <h5>Phone</h5>
            <p>(+91) 7004189741</p>
            <h5>Email</h5>
            <p>priyanshu0dubey@gmail.com</p>
            <h5>Web</h5>
            <p><a href="https://priyanshudubey.me/" rel="noopener noreferrer"  target="_blank">priyanshudubey.me</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2017}
              endYear={2021}
              schoolName="Sagar Institute of Science and Technology, Bhopal"
              schoolDescription="Computer Science Engineering with current CGPA of 7.2"
               />

               <Education
                 startYear={2014}
                 endYear={2016}
                 schoolName="Guru Gobind Singh Public School, Bokaro Steel City"
                 schoolDescription="PCM + Multimedia and Web Technology"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={'Sept 2019'}
              endYear={'December 2019'}
              jobName="Associate NLP Engineer at EMPHSASI CORP"
              jobDescription="Developed an AI-based Chatbot for IT-help desk. The technologies used in this 
              project was Google Dailogflow, MySQL, NLP, Node.js"
              />

              {/* <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                /> */}
              <hr style={{ borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={90}
              />
              <Skills
                skill="C/C++"
                progress={80}
              />
              <Skills
                skill=" PHP "
                progress={80}
              />
              <Skills
                skill=" NLP "
                progress={50}
              />
              <Skills
                skill="MERN"
                progress={50}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;