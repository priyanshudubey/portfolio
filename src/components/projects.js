import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://preview.redd.it/rxezjyf4ojx41.png?auto=webp&s=f0cde794697d0904e44ca09a4f1e703cfecaf60a) center / cover'}} >
                Library management system
            </CardTitle>
            <CardText>
                In this poject I have developed a Liabrary management system
                With file handling of python. It is fully Object oriented project.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://preview.redd.it/rxezjyf4ojx41.png?auto=webp&s=f0cde794697d0904e44ca09a4f1e703cfecaf60a) center / cover'}} >
                Broken Line Fixing
            </CardTitle>
            <CardText>
                In this poject I have developed a Liabrary management system
                With file handling of python. It is fully Object oriented project.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://preview.redd.it/rxezjyf4ojx41.png?auto=webp&s=f0cde794697d0904e44ca09a4f1e703cfecaf60a) center / cover'}} >
                COVID-19 Live update
            </CardTitle>
            <CardText>
              A webscrapping project in Python for COVID-19 data of India. 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsd0kIi4aE0_kjTlGpjNA-wKz6yk0FzBRDhQ&usqp=CAU) center / cover'}} >
                CRUD Operations
            </CardTitle>
            <CardText>
              This is developed in Node.js only.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsd0kIi4aE0_kjTlGpjNA-wKz6yk0FzBRDhQ&usqp=CAU) center / cover'}} >
                Wallpaper Store
            </CardTitle>
            <CardText>
              This is developed in React only.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>

      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWfWO02pF2EkUu71U8so9QcdSyg_bGgkbU6Q&usqp=CAU) center / cover'}} >
                Kcable
            </CardTitle>
            <CardText>
              This is a CRM website for cable operators.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWfWO02pF2EkUu71U8so9QcdSyg_bGgkbU6Q&usqp=CAU) center / cover'}} >
                Sciencegenius
            </CardTitle>
            <CardText>
              This is business website
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 
            'url(https://vivaldi.com/wp-content/uploads/Linux-more-secure-than-Windows.png) center / cover'}} >
                System Meter
            </CardTitle>
            <CardText>
              It monitors the RAM and CPU usage and will send you an alert when crosses the threshold
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Python / ML</Tab>
          <Tab>MERN</Tab>
          <Tab>WEbsites</Tab>
          <Tab>Others</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;