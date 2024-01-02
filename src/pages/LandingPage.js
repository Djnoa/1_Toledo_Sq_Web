import React, {useRef, useEffect } from 'react';
import gsap from 'gsap';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const squashBallRef = useRef(null);
    const toledoClubTextRef = useRef(null);
    const squashTextRef = useRef(null);
    const landingPageRef = useRef(null);
    const wrapperRef = useRef(null); 
    const navigate = useNavigate(null);

    useEffect(() => {
        const squashBall = squashBallRef.current;
        const toledoClubText = toledoClubTextRef.current;
        const squashText = squashTextRef.current;
        const landingPage = landingPageRef.current;


        // Initialize the animation timeline
        const tl = gsap.timeline();

        // Set initial states
        gsap.set([toledoClubText, squashText], { opacity: 0 });

        tl.to(squashBall, {
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(wrapperRef.current, 
                    { 
                        delay: 0.25,
                        x: '+=10', 
                        y: '+=20', 
                        yoyo: true,
                        repeat: 3,
                        duration:0.06,
                        ease: "power2.inOut",

                    });
                
            },
        })
        .to(squashBall, {
            scale: 7,
            y: 200,
            x: -100,
            duration: 0.4,
            ease: 'power2.out',
        })
        .to(squashBall, {
            scale: 0.8,
            y: -20,
            x: 10,
            duration: 0.2,
            ease: 'power2.out',
        })
        .to(squashBall, {
            scale: 1,
            y: 0,
            x: 0,
            duration: 0.2,
            ease: 'bounce.out',
            onComplete: () => {
                // Fade in the text elements
                gsap.to([toledoClubText, squashText], {
                    delay: 0.4,
                    opacity: 1,
                    duration: 0.9,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.to(landingPage, {
                            delay: 0.3,
                            height: "22vh",
                            duration: 0.7,
                            ease: "power1.in",
                            onComplete: () => {
                                setTimeout(() => {
                                    navigate('/home');
                                  }, 1000);
                            },
                        });
                    },
                });
            },
        });

        // Start the animation
        tl.play();
    }, [navigate]);

    return (
        <div className="wrapper" ref={wrapperRef}>
        <div className="landing-page" ref={landingPageRef}>
    <svg className="red-line left-line">
        <line x1="100%" y1="50%" x2="0" y2="50%" stroke="#961717" strokeWidth="3" />
    </svg>

    <svg className="toledo-club">
        <text x="75" y="85" className="toledo-club-text" ref={toledoClubTextRef}>Toledo Club</text>
    </svg>

    <svg className="squash-ball" ref={squashBallRef}>
        <circle cx="50" cy="50" r="50" fill="black" />
        <circle cx="55" cy="22" r="3.5" fill="yellow" className="dot-1" />
        <circle cx="63" cy="32" r="3.5" fill="yellow" className="dot-2" />
        <text x="7" y="57" className="squash-text" ref={squashTextRef}>Squash.</text>
    </svg>

    <svg className="red-line right-line" style={{ marginLeft: '20px' }}>
        <line x1="100%" y1="50%" x2="0" y2="50%" stroke="#961717" strokeWidth="3" />
    </svg>
</div>
</div>

    );
};

export default LandingPage;
