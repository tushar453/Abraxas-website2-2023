
import './App.css';
import background from "./img/back.png";




function App() {
  var cursor = document.querySelector('.cursor');
  var cursor2  = document.querySelector('.cursor2');
  document.addEventListener("mousemove" ,function(e){
 cursor.style.cssText= cursor2.style.cssText= "left:"+e.clientX +"px;top:"
 + e.clientY+"px;";
  });






  return (

    <>
   <div class="roadmap">
        <h3 class="h3" style={ {  backgroundImage: 'url('+background+')' } } >TimeLine</h3>
        <div class="roadmap-contaoner">
            <div class="container-1">
                  <div class="headline">December 2022</div>
                    <div class="content">
                        <ul class="timeline-list">
                       
                              

                            <li class="timeline-list-text">
                                <div class="dot"></div>
                                <div class="text">Club Launch</div>
                            </li>

                            <li class="timeline-list-text">
                                <div class="dot"></div>
                                <div class="text">Workshop</div>
                            </li>

                            <li class="timeline-list-text">
                                <div class="dot"></div>
                                <div class="text">Workshop</div>
                            </li>

                        </ul>
                    </div>

                <div class="bottom">
                    <div class="bottom-dot"></div>
                    <div class="right-line"></div>
                    <div class="left-line"></div>

                </div>
                
            </div>

















            <div class="container-2">
                <div class="headline">January 2022</div>
                <div class="content">
                    <ul class="timeline-list">
                        <li class="timeline-list-text">
                            <div class="dot"></div>
                            <div class="text">2013-2014</div>
                        </li>
                          

                        <li class="timeline-list-text">
                            <div class="dot"></div>
                            <div class="text">2013-2014</div>
                        </li>

                        <li class="timeline-list-text">
                            <div class="dot"></div>
                            <div class="text">2013-2014</div>
                        </li>

                        <li class="timeline-list-text">
                            <div class="dot"></div>
                            <div class="text">2013-2014</div>
                        </li>

                    </ul>
                </div>

            <div class="bottom">
                <div class="bottom-dot"></div>
                <div class="right-line"></div>
                <div class="left-line"></div>

            </div>
            
        </div>






        <div class="container-2">
            <div class="headline">February 2022</div>
            <div class="content">
                <ul class="timeline-list">
                    <li class="timeline-list-text">
                        <div class="dot"></div>
                        <div class="text">2013-2014</div>
                    </li>
                      

                    <li class="timeline-list-text">
                        <div class="dot"></div>
                        <div class="text">2013-2014</div>
                    </li>

                    <li class="timeline-list-text">
                        <div class="dot"></div>
                        <div class="text">2013-2014</div>
                    </li>

                    <li class="timeline-list-text">
                        <div class="dot"></div>
                        <div class="text">2013-2014</div>
                    </li>

                </ul>
            </div>

        <div class="bottom">
            <div class="bottom-dot" onfocus=""></div>
            <div class="right-line"></div>
            <div class="left-line"></div>

        </div>
        
    </div>













    <div class="container-2">
        <div class="headline">March 2022</div> 
        <div class="content">
            <ul class="timeline-list">
                <li class="timeline-list-text">
                    <div class="dot"></div>
                    <div class="text">2013-2014</div>
                </li>
                  

                <li class="timeline-list-text">
                    <div class="dot"></div>
                    <div class="text">2013-2014</div>
                </li>

                <li class="timeline-list-text">
                    <div class="dot"></div>
                    <div class="text">2013-2014</div>
                </li>

                <li class="timeline-list-text">
                    <div class="dot"></div>
                    <div class="text">2013-2014</div>
                </li>

            </ul>
        </div>

    <div class="bottom">
        <div class="bottom-dot"></div>
        <div class="right-line"></div>
        <div class="left-line"></div>

    </div>
    
</div>





















        </div>
    </div>

    <div class="cursor"></div>
    <div class="cursor2"></div>
    
 </>
  );
}

export default App;
