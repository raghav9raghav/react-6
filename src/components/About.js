// About.js
import React from 'react';

function About() {
  return (
    
    <section className="about-container">
      <img class="image" src="https://cdn3d.iconscout.com/3d/premium/thumb/freelancer-working-from-home-3079946-2569229.png"/>
        
      <div className="translucent-box">
        
        <div className="box-content">
          <div className="about-heading">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <p>
                  I'm Raghav, and my creative journey commences with a fervent passion for Web Development.<br />
            </p>
          </div>
          <br/>
          <div className="about-heading">
            <h2>SKILLS</h2>
          </div>
          <div className='buttons'>
          <button type="button" class="btn  btn-outline-dark ">HTML</button>
          <button  type="button"class="btn  btn-outline-dark b" >CSS</button>
          <button type="button"class="btn  btn-outline-dark b" >JAVASCRIPT</button>
          <button type="button"class="btn  btn-outline-dark b">BOOTSTRAP</button>
          <button type="button"class="btn  btn-outline-dark b" >REACT JS</button>
          <button type="button"class="btn btn-outline-dark b" >C</button>
          <button type="button"class="btn  btn-outline-dark b" >C++</button>
          <button type="button"class="btn btn-outline-dark b" >JAVA</button>
          <button type="button"class="btn  btn-outline-dark b" >PYTHON</button>
          </div>
          


        </div>
        
        
      </div>
      
    </section>
  );
}

export default About;
