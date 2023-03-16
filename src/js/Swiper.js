import React, {useEffect} from 'react';
import Swiper, {Navigation, Autoplay} from 'swiper';
import {Visible, CircularProgress} from "./Main";
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

import 'swiper/css';

export const ProjectsSwiper = () => {
    useEffect(() => {
        const swiper = new Swiper('#projects .swiper-container', {
            modules: [Autoplay, Navigation],

            slidesPerView: 1,
            spaceBetween: 30,

            autoplay: {
                delay: 5000,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                670: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                980: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },

                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
            }
        });
    }, []);

    return (
        <div className="swiper-container" id={"projects-swiper"}>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <a href="https://garageboekestijn.nl/"
                       target="_blank">
                        <img className="project-image"
                             src="/mockupBoekestijn.png"
                             alt=""/>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="https://spacewebs.nl/"
                    target="_blank">
                        <img className="project-image"
                             src="/mockupStalnieuwland.png"
                             alt=""/>
                    </a></div>
                <div className="swiper-slide">
                    <a href="">
                        <img className="project-image"
                             src="/mockupRAC.png"
                             alt=""/>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="">
                        <img className="project-image"
                             src="/mockupPygame.png"
                             alt=""/>
                    </a>
                </div>
                <div className="swiper-slide">
                    <a href="">
                        <img className="project-image"
                             src="/mockupTestCorrect.png"
                             alt=""/>
                    </a>
                </div>
            </div>
            {/*<div className="arrows">*/}
            {/*    <div className="arrow swiper-button-prev">*/}
            {/*        <FaArrowLeft/>*/}
            {/*    </div>*/}
            {/*    <div className="arrow swiper-button-next">*/}
            {/*        <FaArrowRight/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export function SkillsSwiper() {
    useEffect(() => {
        const swiper = new Swiper('#skills .swiper-container', {
            modules: [Autoplay, Navigation],

            slidesPerView: 1,
            spaceBetween: 30,

            autoplay: {
                delay: 2000,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                670: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                980: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },

                1200: {
                    slidesPerView: 5,
                    spaceBetween: 10
                },
            }
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <Visible>
            <div className="skills" id={"skills"}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <CircularProgress percent={90} text={"PHP"}/>
                        <CircularProgress percent={85} text={"Python"}/>
                        <CircularProgress percent={85} text={"Javascript"}/>
                        <CircularProgress percent={95} text={"(S)CCS"}/>
                        <CircularProgress percent={90} text={"Laravel"}/>
                    </div>
                </div>
            </div>
        </Visible>

    )
        ;
}


