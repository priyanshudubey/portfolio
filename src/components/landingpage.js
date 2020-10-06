import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';
//import profile from './img/MyImage.jpeg';
//import About from './aboutme';
//import Contact from './contact';

class Landing extends Component{
    render(){
        return(
            
            <div style={{width: '100%', margin:'auto', overflow:'auto'}}>
                <Grid className="landing-grid">
                
                    <Cell col={12}>
                        <img
                            // src={profile}
                            src = "https://imgur.com/I80W1Q0.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>A PASSIONATE CODER</h1>
                            <hr/>
                            <p>Python | C/C++ | PHP | Machine Learning | MERN | MySQL </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/priyanshudubey/" 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <i 
                                        className="fa fa-fw fa-linkedin-square"  
                                        aria-hidden="true" 
                                    />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/priyanshudubey" 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                    class="btn-social-header btn-outline"
                                    
                                >
                                    <i 
                                        className="fa fa-fw fa-github"  
                                        aria-hidden="true" 
                                    />
                                </a>
                                {/* Email */}
                                <a href="mailto:priyanshu0dubey@gmail.com?subject=Mail from our Website" 
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    <i 
                                        className="fa fa-envelope-square"  
                                        aria-hidden="true" 
                                    />
                                </a>
                            </div>
                            
                        </div>
                        {/* <Contact/>     */}
                    </Cell>
                    
                </Grid>
                
                
            </div>
            
        )
    }
}
export default Landing;