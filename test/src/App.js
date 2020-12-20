import react from 'react';
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.png';

 function App() {
   return (
<>
<div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className='title red'>Your name here</h1>

<br/>

<img src={imageInSrc} alt='cat'/>

<br/>

<img src='/imageInPublic.jpg'  width="420" height="440" alt='dog' />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
 </>
     
   );
 }
export default App;
