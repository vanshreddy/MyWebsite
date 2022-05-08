import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import styles from './overlay.module.css'
import { SocialIcon } from 'react-social-icons';
import Backbutton from "./Utils/Back";
import {useState,useRef, useEffect } from "react";
import {isMobile} from 'react-device-detect';
import { useMobileOrientation } from 'react-device-detect';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Overlay() {
  useEffect(() => {
    console.log("Hello");
    if(isMobile){
    
    toast.info('Use Landscape mode for best Mobile experience', {
      position: "top-center",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }

  },[])

  const style_bad = { position: 'absolute', top: 40, left: 40, fontSize: '13px',color:"white"}
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 20, left: 0, fontSize: '13px' }}>
      
      <SocialIcon url="https://linkedin.com/in/vanshreddy" bgColor="#2867b2" style={{ height: '40px', width: '40px', margin:10}} />
      <SocialIcon url="https://github.com/vanshreddy" bgColor="#C7CDD5" style= { {height: 40, width: 40,borderRight: 10}}/>
      </div>
      {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>hello</h1>
      </div> */}
      <div className={styles.flux}>Vansh Reddy</div>
      <div style={{ position: 'absolute', bottom: 20, right: 0, fontSize: '13px', color:"white"
    }}>25/02/2022</div>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
  )
}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App /> <Overlay></Overlay>
  </BrowserRouter>,
  rootElement
);