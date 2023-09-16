import './App.css';
import React from 'react';
import myImage1 from './assets/logo2.png';
import myImage2 from './assets/ar1.png';
import myImage3 from './assets/sample33d.jpg';
import myImage4 from './assets/image4.png';
import myImage5 from './assets/image7.webp';
import myImage6 from './assets/img5.png';
import myImage7 from './assets/image5.png';
import myImage8 from './assets/delivery.png';
import myImage9 from './assets/refund.png';
import myImage10 from './assets/face.png';
import myImage11 from './assets/twitter.png';
import myImage12 from './assets/insta.png';

function App() {
  return (
    <div className="App">
    <header id="header" >
        <div class="container1">
            
            <div >
                <img class="logo"src={myImage1} alt="" srcset=""/>
            </div>

            <nav>
                <ul>
                    <li ><a href="#about">About Us</a></li>
                    <li ><a href="#products">Products</a></li>
                    <li ><a href="#contact">Contact</a></li>
                    <li ><a href="login.html">Login</a></li>
                </ul>
            </nav>
            <div class="ar">
                <a href="https://www.example.com">
                    <img src={myImage2} alt="Clickable Image" class="ar.img"/>
                </a>
            </div>
        </div>
    </header>
    
    <section class="hero">
        <div class="hero-content1">
            <div class="hero-content">
                <div >
                    <h1>Experience the Innovation</h1>
                    <h1>of Shopping</h1>
                </div>
                <p>Try on clothes and accessories virtually!</p>
                <a href="#products" class="cta-button">Try-On</a>
            </div>
            <div class="img45">
                    <img src={myImage3} class="img46"/>
            </div>
        </div>
        <div class="cont2">
            <img src={myImage4} class="img"/>
            <div class="cont3">
                <h3>Virtual Clothes Try-On</h3>
                <p>Step into the world of virtual fashion with <b>IZU</b>. Our AR Web-Application allows you to try on virtual clothes and see how they look on you in real-time. Say Goodbye to the hassle to the world of physical shopping and embrace the convenience of virtual Try-Ons</p>
            </div>
        </div>
    </section>

    <section id="products" class="products">
        <div class="product-card">
            <img src="product1.jpg" alt="Product 1"/>
            <h3>Product 1</h3>
            <p>Description of Product 1.</p>
        </div>

        <div class="product-card">
            <img src="product2.jpg" alt="Product 2"/>
            <h3>Product 2</h3>
            <p>Description of Product 2.</p>
        </div>

        <div class="product-card">
            <img src="product3.jpg" alt="Product 3"/>
            <h3>Product 3</h3>
            <p>Description of Product 3.</p>
        </div>
    </section>

    <div class="image-container">
        <div class="image-box" >
            <img src={myImage5} class="suzu"/>
            <h2>Know what looks good on you !!</h2>
        </div>

        <div class="image-box" >
            <img src={myImage6} class="suzu"/>
            <h2>Discover your perfect look with IZU</h2>
        </div>

        <div class="image-box" >
            <img src={myImage7} class="suzu"/>
            <h2>Match with your exact fitted clothing</h2>
        </div>
    </div>

    <div class="closing">
        <div class="delivery">
            <img src={myImage8} class="delivery"/>
            <h1>Fast and Reliable Delivery</h1>
            <p>At IZU , we prioritize fast and reliable delivery. We understand that you're excited to receive your new outfits, so we make sure to ship them as quickly as possible. Expect your order to arrive in no time.</p>
        </div>
        <div class="refund">
            <img src={myImage9} class="refund"/>
            <h1>Refund</h1>
            <p>We offer a hassle-free refund policy for any items that do not meet your expectations. Please contact our customer support team within 14 days of receiving your order for assistance.</p>
        </div>
    </div>

    <section id="about" class="about">
        <div class="about-content">
            <h2>About Us</h2>
            <p>tbd</p>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="contact-content">
            <h2>Contact Us</h2>
            <p>Feel free to get in touch with us for any inquiries or collaborations.</p>
            <a href="mailto:contact@example.com" class="cta-button">Contact</a>
        </div>
    </section>
    <div class="merge">

    </div>
    <footer class="footer">
        <h1 class="heading1">Subscribe Newsletter</h1>
        <input class="input1" placeholder="Enter your Email" type="text" id="input"/>
        <a href="#subscribe" class="subscribe">Subscribe</a>
        <div class="cc">
            <div class="email">
                <p>izu@email.com</p>
                <p>123-456-7890</p>
            </div>
            <div class="social">
                <ul class="social-icons">
                    <li><a href="https://facebook.com"><img src={myImage10} alt="Facebook"/></a></li>
                    <li><a href="https://twitter.com"><img src={myImage11} alt="Twitter"/></a></li>
                    <li><a href="https://instagram.com"><img src={myImage12} alt="Instagram"/></a></li>
                </ul>
                  
            </div>
            <div class="address">
                <p>32-Industrial Avenue, KoregaonPark ,Pune</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import { ClerkAuthProvider } from './clerk';

ReactDOM.render(
  <React.StrictMode>
    <ClerkAuthProvider>
      <App />
    </ClerkAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
