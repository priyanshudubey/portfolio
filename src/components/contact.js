import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{overflow:'auto'}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Priyanshu Dubey</h2>
            <img
              //src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              src="https://imgur.com/I80W1Q0.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                I am a passionate developer who loves to code. I love challanges, and that's why debugging is one
                of my most favourite task.     
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 7004189741
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem> */}

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                    priyanshu0dubey@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    priyanshu0dubey@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    /priyanshudubey
                  </ListItemContent>
                </ListItem>

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;