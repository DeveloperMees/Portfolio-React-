import React, {useState} from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import {FaArrowDown} from 'react-icons/fa';
import ContactForm from "./partials/Contactform";
import {ProjectsSwiper, SkillsSwiper} from "../js/Swiper";
import {projectScrollWidth, scrollToSection, Visible, CircularProgress} from '../js/Main';

<SkillsSwiper/>

function Home() {
    const [projectWidth, setProjectMeWidth] = useState(85);
    window.addEventListener('scroll', () => projectScrollWidth(setProjectMeWidth));


    return (
        <div>
            {/* Header Content */}
            <Header/>

            <div className="container">
                <div className="header-content">
                    <div className="text-content">
                        <h1>Hi, mijn naam is Mees</h1>
                        <p>Ik ben een full-stack webontwikkelaar gespecialiseerd in het bouwen van op maat gemaakte
                            software-oplossingen. Met mijn kennis van verschillende programmeertalen en frameworks kan
                            ik je helpen om jouw ideeën om te zetten in werkende software. Neem contact met me op om te
                            bespreken hoe ik je kan helpen bij het realiseren van jouw digitale doelen.</p>
                        <div className="bottom-content">
                            <a href="#" onClick={() => scrollToSection('scrollToContact')} className={"button"}>Contact</a>
                            <a href="" className="cv">Download CV</a>
                        </div>
                        {/* Scroll to section */}

                        <a href="#content" onClick={() => scrollToSection('projects')} className="scroll smooth-scroll">
                            <span className="button-scroll">
                                <i>
                                    <FaArrowDown/>
                                </i>
                            </span>

                        </a>

                    </div>
                    <div className="image-wrapper">
                        <img src="/illustration.png" alt=""/>
                    </div>
                </div>
            </div>

            <div className="projects" id={"projects"} style={{width: `${projectWidth}%`}}>
                <div className="container">
                    <div>
                        <Visible>
                            <h2 id="projects-title">Mijn projecten</h2>
                        </Visible>

                        <Visible>
                            <div className="swiper" id={"swiper"}>
                                <ProjectsSwiper/>
                            </div>
                        </Visible>
                    </div>
                </div>
            </div>

            <div className="container"  id={'scrollToSkills'}>
                <div className="skills-content">
                    <Visible>
                        <h2 id="skills-title">Vaardigenheden</h2>
                    </Visible>
                    <SkillsSwiper/>
                </div>
            </div>

            <div className="container"  id={'scrollToContact'}>
                <div className="contact-content">
                    <Visible>
                        <h2 id="skills-title">Contact</h2>
                    </Visible>

                    <ContactForm/>
                </div>
            </div>

            {/* Gradients Content */}

            <div className="gradients">
                <div className="gradient purple" id="gradient-1"></div>
                <div className="gradient blue" id="gradient-2"></div>
                <div className="gradient purple" id="gradient-3"></div>
                <div className="gradient blue" id="gradient-4"></div>
            </div>

            {/* Footer Content */}
            <Footer/>
        </div>
    );
}

export default Home;
