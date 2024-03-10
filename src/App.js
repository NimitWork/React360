import './App.css';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import React, { useState } from 'react';

function App() {
  const imgSrc = 'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg';
  // const imgSrc = 'assets/pexels-borja-lopez-1059078.jpg';
  // console.log(imgSrc);
  const photoSphereRef = React.createRef();
  const [changeImage, setChangeImage] = useState("lok-yiu-cheung-o6k0ZH1eOwg-unsplash.jpg");
  return (
    <div className="App">
      <header className="App-header">
        {/* <ReactPhotoSphereViewer  src={imgSrc} height={'85vh'} width={"100%"}></ReactPhotoSphereViewer> */}
        {/* <ReactPhotoSphereViewer  src="pexels-borja-lopez-1059078.jpg" height={'85vh'} width={"100%"}></ReactPhotoSphereViewer> */}
        {/* <button onClick={() => { setChangeImage("lok-yiu-cheung-o6k0ZH1eOwg-unsplash.jpg"); }} > Image 1 </button>
        <button onClick={() => { setChangeImage("pexels-borja-lopez-1059078.jpg"); }} > Image 2 </button> */}
        <ReactPhotoSphereViewer ref={photoSphereRef} src="lok-yiu-cheung-o6k0ZH1eOwg-unsplash.jpg" height={'90vh'} width={"100%"}></ReactPhotoSphereViewer>
        <a href='https://webnotionitsolutions.in/' target='_blank' style={{ color: 'white', }}>Developed By Webnotion It Solution</a>
      </header>
    </div>
  );
}

export default App;
