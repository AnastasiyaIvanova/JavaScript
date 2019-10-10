import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Head/head.js';
import Welcome from './Components/Welcome/welcome.js';
import About from './Components/About/about.js';
import Skills from './Components/Skills/skills.js';
import Work from './Components/Work/work.js';
import Examples from './Components/Examples/examples.js';
import Process from './Components/Process/process.js';
import Services from './Components/Services/services.js';
import Testimonials from './Components/Testimonials/testimonials.js';
import Clients from './Components/Clients/clients.js';
import Form from './Components/Form/form.js';
import FooterBlocks from './Components/FooterBlocks/blocks.js';

class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <main>
          <Welcome />
          <About />
          <Skills info={bar} />
          <Work info={pict}/>
          <Examples img={img} />
          <Process />
          <Services serv={service} />
          <Testimonials />
          <Clients img={clients} />
          <Form />
        </main>
        <footer>
          <FooterBlocks />
        </footer>
      </>
    )
  }
}



const bar = [
  {name:'UI/UX DESIGN',
  percent: 75},
  {name:'WEB DEVELOPMENT',
  percent: 90},
  {name:'MARKETING',
  percent: 65}
]


const pict = [
  {pic:'portfolio',
  numb:548,
  name:'PROJECTS COMPLETED'},
  {pic:'clock',
  numb:1465,
  name:'WORKING HOURS'},
  {pic:'star',
  numb:612,
  name:'POSITIVE FEEDBACKS'},
  {pic:'like',
  numb:735,
  name:'HAPPY CLIENTS'},
];


const img = [
  {name: 'img3.jpg'},
  {name: 'img4.jpg'},
  {name: 'img3.jpg'},
  {name: 'img4.jpg'},
  {name: 'img4.jpg'},
  {name: 'img3.jpg'},
  {name: 'img4.jpg'},
  {name: 'img3.jpg'},
];

const clients = [
  {name: '1.png'},
  {name: '2.png'},
  {name: '3.png'},
  {name: '4.png'},
  {name: '5.png'},
];

const service = [
  {pic:'pdiamond',
  text:'Be set fourth land god darkness make it wherein own',
  name:'UI/UX DESIGN'},
  {pic:'arc',
  text:'A she\'d them bring void moving third she\'d kind fill',
  name:'WEB DEVELOPMENT'},
  {pic:'phone',
  text:'Dominion man second spirit he, earth they\'re creeping',
  name:'APP/MOBILE'},
  {pic:'joy',
  text:'Morning his saying moveth it multiply appear life be',
  name:'GAME DESIGN'},
  {pic:'plane',
  text:'Give won\'t after land fill creeping meat you, may',
  name:'SEO/MARKETING'},
  {pic:'star',
  text:'Creepeth one seas cattle grass give moving saw give',
  name:'PHOTOGRAPHY'},
  {pic:'magic-wand',
  text:'Open, great whales air rule for, fourth life whales',
  name:'GRAPHIC DESIGN'},
  {pic:'paint-bucket',
  text:'Whales likeness hath, man kind for them air two won\'t',
  name:'ILLUSTRATIONS'},
];

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
