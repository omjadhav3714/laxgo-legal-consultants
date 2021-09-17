import React from "react";

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="containercu">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i class="bi bi-house"></i>
              <div className="topic">Address</div>
              
              <div className="text-one">
              <a href="https://goo.gl/maps/HfeWSJ6uBGVV7DkS8" className="a-style">
                NJ Corporate & Business Hub, N.J HouseOffice No.N.P.1, Old Station
                Road,
                </a>
              </div>
              <div className="text-two">
              <a href="https://goo.gl/maps/HfeWSJ6uBGVV7DkS8" className="a-style">
                Near Post Office, BehindKalyan Court, Gate No. 2,
                Kalyan(W)Dist-Thane. 421 301
                </a>
              </div>
              
            </div>
            <div className="phone details">
              <i class="bi bi-telephone"></i>
              <div className="topic">Phone</div>
              <div className="text-one"><a className="a-style" href="tel:+91 93567 12199">+91 93567 12199</a></div>
              <div className="text-two"><a className="a-style" href="tel:+91 91371 07925">+91 91371 07925</a></div>
            </div>
            <div className="email details">
              <i className="bi bi-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one"><a className="a-style" href="mailto:laxgoofficial@gmail.com">laxgoofficial@gmail.com</a></div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me you can send me message from here. It's
              my pleasure to help you.
            </p>
            <form method="POST" action="https://docs.google.com/forms/u/7/d/e/1FAIpQLSeof55j-LwiQ1NF1G4ITZAM1qQjTvyQGY3AdC8XBJX0TJOokw/formResponse">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" name="entry.2005620554" />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Enter your email" name="entry.1045781291"  />
              </div>

              <div class="input-box message-box">
              <input type="text" placeholder="Enter your message" name="entry.839337160" />
              </div>

              <div className="button">
                <input type="submit" value="Send Now"  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
