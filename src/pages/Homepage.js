import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import Banner from '../components/banner.js';
import './Homepage.css';
import NavBar from '../components/navibar.js';
import '../styles/main.scss'
import Footer from '../components/footer.js';
import { headerImagePaths, pongImage } from '../imagePaths.config.js'

const headerImages = [
    headerImage1, 
    headerImage2, 
    headerImage3, 
    headerImage4, 
    headerImage5, 
    headerImage6,
    headerImage7 
];


const Homepage = () => {

    const imageRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 1 }); // Delay before the images start

        headerImages.forEach((image, index) => {
            if (index === 0) {
                tl.fromTo(imageRef.current, 
                    { opacity: 0, backgroundImage: `url(${image})` }, 
                    { opacity: 1, duration: 2.5 });
            } else {
                tl.to(imageRef.current, 
                    { backgroundImage: `url(${image})`})
                  .to(imageRef.current, 
                    { opacity: 1, duration: 2.5 });
            }
            if (index < headerImages.length - 1) {
                tl.to(imageRef.current, { opacity: 0, duration: 2.5 }, "+=2");
            }
        });

        tl.to(imageRef.current, { opacity: 0, duration: 2.5}, "+=2")
          .to(imageRef.current, { backgroundImage: `url(${headerImages[0]})`, duration: 2.5 });

        gsap.set(imageRef.current, { opacity: 0 });

        // Animate the H1 element with a delay
        gsap.fromTo(headingRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, delay: 1.9 });

        return () => tl.kill();
    }, []);

    return (
        <div>
            <Banner />
            <NavBar />
            <div ref={imageRef} className="header-image" style={{ 
                height: '400px', 
                width: '100%', 
                backgroundPosition: 'center', 
                backgroundSize: 'cover' 
            }}></div>

            <h1 ref={headingRef} className="welcome">Welcome to Toledo Club Squash</h1>

            <div className="container-fluid main-content">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 class="first-heading"></h4>
                    </div>
                </div>

                <div className = "row">

                    <div className = 'col-lg-8'>
                        <div className = "text-box">
                            <p><strong style = {{textDecoration: 'underline', fontSize: '1.15em'}}>This website is your one-stop destination for everything Toledo Club Squash!</strong></p>
                            <p>Here you'll find:</p>
                            <ul>
                                <li><strong>Up-to-date Information:</strong> Stay informed with the latest news and announcements</li>
                                <li><strong>Event Calendar:</strong>  Never miss out on upcoming matches, tournaments, and social gatherings</li>
                                <li><strong>Community Engagement:</strong> Connect with fellow squash enthusiasts, share tips, and engage in discussions</li>
                                <li><strong>New Proshop Items:</strong> Discover the latest gear and equipment to elevate your game</li>

                            </ul>
                            <p>And more that will enhance your experience and involvement in our squash community!</p>
                        </div>
                    </div>

                        <div className = 'col-lg-4'>

                        <div class="trim"><img className = "pong-img" src={{pongImage}}/></div>

                        </div>

                </div>

            </div>
            <Footer/>
        </div>
    );
}
export default Homepage;