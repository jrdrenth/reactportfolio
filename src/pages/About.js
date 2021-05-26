import React from "react";

function About() {
  return (
    <div className="container">
        <section className="row">
          <div className="col-md-9">
            <article className="box">
              <h1 className="box-header">About Me</h1>
              <hr />
              <img src="/assets/images/BathtubLake.jpg" alt="John Drenth overlooking Bathtub Lake in the high sierra wilderness" id="lake-image" />
              <p>
                As a great outdoors enthusiast I enjoy activities such as waterskiing, wakeboarding, 
                jet skiing, snowboarding, backpacking, day hiking, bike riding, or just hangin outside
                for the day.  Some of my favorite locations to visit are Shasta Lake in northern CA,
                Lake Tahoe, Big Bear, and the beautiful sierra mountains.
              </p>
              <br />
              <p>
                I also love Hawaii.  The gorgeous, green landscape, warm welcoming air, perfect beaches,
                and laidback  local culture make it an amazing destination.  Yosemite and Glacier National
                Parks are a couple more really good ones.  I hope to continue to see and experience all the
                amazing natural wonders this world offers.
              </p>
            </article>
          </div>
        </section>
      </div>
  );
}

export default About;
