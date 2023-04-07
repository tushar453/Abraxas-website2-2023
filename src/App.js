import './App.css';
import Home from './components/home/Home';
import { useEffect } from 'react';
import Index1 from './components/Index1';
import Index2 from './components/Contact-us/Index1';
// import Index3 from './components/FAq/Index1';
// import faqs from './components/FAq/FAQ';

function App() {

useEffect(()=>{
  var cursor = document.querySelector('.cursor');
  var cursor2  = document.querySelector('.cursor2');
  document.addEventListener("mousemove" ,function(e){
 cursor.style.cssText= cursor2.style.cssText= "left:"+e.clientX +"px;top:"
 + e.clientY+"px;";
  });
});

  return (
    <div>
      <Home />
      <Index1/>
     <Index2/>
     {/* <faqs/> */}
     

      <div class="cursor"></div>
    <div class="cursor2"></div>
    </div>
  );
}

export default App;
