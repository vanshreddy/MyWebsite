import React from 'react';
import { Html } from "@react-three/drei";
import { Card,Button,CardGroup } from 'react-bootstrap';
import rl from './assets/rl.jpg';
import yt from './assets/yt.png';
import c from './assets/c.png';
import twenty from './assets/twenty.png';
import Header from '../header';
import Back from '../Back.js';


export default function MyCard(props) {

    return (
      <>
        <Html position={[-6,3,0]}>
          <CardGroup bg={'light'} text={'dark'} style={{width:'75vw',overflow:'auto'}} >
  <Card>
    <Card.Img variant="top" src={rl}  />
    <Card.Body style={{paddingBottom:"20px"}}>
      <Card.Title border='dark'>Autonomous Rocket League Bot</Card.Title>
      <Card.Text>
      A Rocket League Bot which uses game data(100k datapoints) to train a Neural Network to play the Game.
      Processed game file to extract data from each frame and feed it to the Neural Network. Implemented a custom Loss
      function to effectively train.

      </Card.Text>
      
    </Card.Body>
    <Card.Footer >
      <small className="text-muted">Technologies Used: TensorFlow, Numpy, Pandas, RequestsAPI</small>   
    </Card.Footer>
 
        <Card.Footer >
        <Button variant="dark" onClick= {() => {
            window.open('https://github.com/vanshreddy/Deep-learning-Rocket-league-bot')
        }}>GitHub</Button>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={yt}  />
    <Card.Body>
      <Card.Title>Community Response</Card.Title>
      <Card.Text>
        Chrome extension which allows users to view in-depth analysis of a Youtube video comment
        section. Extension uses Sentiment Analysis(VADER) and NLP to generate graphs. NodeJS backend
        is used to manage a database of comments.
      </Card.Text>
    </Card.Body >
    <Card.Footer>
    <small className="text-muted">Technologies Used: ReactJS,NodeJS,Express,MongoDB,Tensorflow</small>
    </Card.Footer>
        <Card.Footer style={{padding:"10px"}}>
        <Button variant="dark" onClick= {() => {
            window.open("https://github.com/vanshreddy/Community-Response")
        }}>GitHub</Button>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={twenty} />
    <Card.Body>
      <Card.Title>2048 Solver using Reinforcement Learning</Card.Title>
      <Card.Text>
        A 2048 solver which uses Reinforcement Learning to solve the game. Implemented Actor-Critic model and Q learning algorithm from
        scratch. Currently working on implementing more algorithms and comparing the performance of each model.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Technologies Used: ReactJS,NodeJS,Express,MongoDB,Tensorflow</small>
    </Card.Footer>
        <Card.Footer style={{padding:"10px"}}>
        <Button variant="dark" onClick= {() => {
            window.open("https://github.com/vanshreddy/2048Reinforcement")
        }}>GitHub</Button>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={c} />
    <Card.Body>
      <Card.Title>Visual C++ Debugger</Card.Title>
      <Card.Text>
        Currently working on creating a Visual C++ Debugger application which allows users to watch variables
        and breakpoints with a graphical interface. Front end uses ReactJS and Html Canvas to draw the interface.
        Backend uses Babel and AST manipulation to display the data.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Technologies Used: ReactJS,Babel,Express,Sockets.io</small>
    </Card.Footer>
        <Card.Footer style={{padding:"10px"}}>
        <Button variant="dark" onClick= {() => {
            window.open('https://github.com/vanshreddy')
        }}>GitHub</Button>
    </Card.Footer>
  </Card>

</CardGroup>
        </Html>
        </>
        


      
    );
  }