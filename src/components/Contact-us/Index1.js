import React, { Component } from 'react'
import './Index1.css';
import Space from './img/space.jpg';

 class Index1 extends Component {
    componentDidMount() {
        const inputs = document.querySelectorAll(".contact-input");
        inputs.forEach(ipt=>{
         ipt.addEventListener("focus",()=>{
             ipt.parentNode.classList.add("focus");
             ipt.parentNode.classList.add("not-empty");
         })
     
     
     
         ipt.addEventListener("blur" ,()=>{
          if(ipt.value ==""){
             ipt.parentNode.classList.remove("not-empty");
          }
          ipt.parentNode.classList.remove("focus"); 
         })
        })
     
        var cursor = document.querySelector('.cursor');
     var cursor2  = document.querySelector('.cursor2');
     document.addEventListener("mousemove" ,function(e){
     cursor.style.cssText= cursor2.style.cssText= "left:"+e.clientX +"px;top:"
     + e.clientY+"px;";
     });
     
      }




  render() {
    return (
      <>
       
   <section class="contact">
            <div class="container">
                <div class="left">
                <div class="form-wrapper">
                  <div class="heading">
                    <h3>Connect <span>with us</span></h3>
                  </div>
                    <form action="index.html" class="contact-form">
                        <div class="input-wrap">
                            <input type="text" class="contact-input" autocomplete="off" name="First Name" required/>
                            <label for="">First Name</label>
                            <i class="icon fa-solid fa-address-book"></i>
                        </div>
                     


                        <div class="input-wrap">
                            <input type="text" class="contact-input" autocomplete="off" name="last Name" required/>
                            <label for="">Last Name</label>
                            <i class="icon fa-solid fa-address-book"></i>
                        </div>

                        <div class="input-wrap w-100" >
                            <input type="email" class="contact-input" autocomplete="off" name="Email" required/>
                            <label for="">Email</label>
                            <i class="icon fa-solid fa-envelope"></i>
                        </div> 




                        <div class="input-wrap textarea  w-100">
                            <textarea type="" class="contact-input" autocomplete="off" name="Message" required></textarea>
                            <label for="">Message</label>
                            <i class="icon fa-solid fa-message"></i>
                        </div> 

    <div class="contact-button w-100">
    <button type="submit" class="button">Send Message</button>

</div>

                     </form>
                </div>
                </div>
                <div class="rights">
              <div class="image-wrappers">
                <img src={Space} class="imgs" />
                {/* <img src="./img.jpg" alt=""/> */}
                <div class="wave-wraps">
                  <svg
                    id="wave"
                    viewBox="0 0 783 1536"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="wave"
                      d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                    />
                  </svg>
                </div>

                <svg
                  class="dashed-waves"
                  viewBox="0 0 345 877"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="dashed-waves"
                    d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
                  />
                </svg>
              </div>
            </div>
            </div>
        </section>

  

   
   

      </>
    )
  }
}
export default Index1;
