import React, { Component } from 'react'

import './FAQ.css';


const FAQs = () => {
    useEffect(()=>{
        let toggles = document.getElementsByClassName("toggle");
        let contentdiv = document.getElementsByClassName("content");
        let icons = document.getElementsByClassName("icon");
        console.log(toggles, contentdiv, icons);
        for (let i = 0; i < toggles.length; i++) {
          toggles[i].addEventListener("click", () => {
            console.log(contentdiv[i].style.height, contentdiv[i].scrollHeight);
            if (parseInt(contentdiv[i].style.height) !== contentdiv[i].scrollHeight) {
              contentdiv[i].style.height = contentdiv[i].scrollHeight + "px";
              toggles[i].style.color = "#0084e9";
              icons[i].classList.remove("fa-plus");
              icons[i].classList.add("fa-minus");
            } else {
              contentdiv[i].style.height = "0px";
              toggles[i].style.color = "#111130";
              icons[i].classList.remove("fa-minus");
              icons[i].classList.add("fa-plus");
            }
      
            for (let j = 0; j < contentdiv.length; j++) {
              if (j !== i) {
                contentdiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove("fa-minus");
                icons[j].classList.add("fa-plus");
              }
            }
          });
        }


    })

  return (
    
    <>
    <div className="container">
      <div className="wrapper">
        <button class="toggle">
          what is return policy
          <i className="icon fa-solid fa-plus"></i>
        </button>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet cicing elit. Magni voluptateus iure
            recusandae, voluptate id, blanditiis in nesciunt numquam possimus a,
            error cupid
          </p>
        </div>
      </div>


      <div className="wrapper">
        <button className="toggle">
          what is return policy
          <i className=" icon fa-solid fa-plus"></i>
        </button>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet cicing elit. Magni voluptateus iure
            recusandae, voluptate id, blanditiis in nesciunt numquam possimus a,
            error cupid
          </p>
        </div>


        
      </div>




      <div className="wrapper">
        <button className="toggle">
          what is return policy
          <i className="icon fa-solid fa-plus"></i>
        </button>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet cicing elit. Magni voluptateus iure
            recusandae, voluptate id, blanditiis in nesciunt numquam possimus a,
            error cupid
          </p>
        </div>


        
      </div>




      
      <div className="wrapper">
        <button className="toggle">
          what is return policy
          <i className="icon fa-solid fa-plus"></i>
        </button>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet cicing elit. Magni voluptateus iure
            recusandae, voluptate id, blanditiis in nesciunt numquam possimus a,
            error cupid
          </p>
        </div>


        
      </div>

      
      <div className="wrapper">
        <button className="toggle">
          what is return policy
          <i className="icon fa-solid fa-plus"></i>
        </button>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet cicing elit. Magni voluptateus iure
            recusandae, voluptate id, blanditiis in nesciunt numquam possimus a,
            error cupid
          </p>
        </div>


        
      </div>
    </div>

    
    </>
  )
}

export default FAQs
