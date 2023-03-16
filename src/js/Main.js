import React, {useState, useEffect, useRef} from 'react';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function scrollToSection(section) {
    console.log("scrollToSection called with section: ", section);

    const element = document.getElementById(section);
    const elementPosition = element.offsetTop - 100;
    console.log("Element position: ", elementPosition);
    window.scrollTo({top: elementPosition, behavior: 'smooth'});
}

export function projectScrollWidth(setAboutMeWidth) {
    // select the section
    const projectSection = document.querySelector('.projects');

    // get the height of the viewport
    const viewportHeight = window.innerHeight - 150;

    // get the top and bottom positions of the section
    const sectionTop = projectSection.getBoundingClientRect().top;
    const sectionBottom = projectSection.getBoundingClientRect().bottom;

    // check if the section is visible in the viewport
    if (sectionTop < viewportHeight && sectionBottom >= 0) {
        const newWidth = 100;

        // set the new width of the section
        setAboutMeWidth(newWidth);
    } else {
        // reset the width of the section to its original value
        setAboutMeWidth(80);
    }
}


export const Visible = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.querySelector(`#${children.props.id}`);
        if (element) {
            const position = element.getBoundingClientRect();
            if (position.bottom <= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            {React.cloneElement(children, {
                className: `${children.props.className} ${isVisible ? '' : 'invisible'}`,
            })}
        </>
    );
};

export function CircularProgress({percent, text}) {
    const strokeWidth = 5;
    const valueStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        fill: "#FFFFFF",
    };
    const progressStyle = {
        stroke: "red",
        strokeLinecap: "round",
        strokeWidth: `${strokeWidth}px`,
    };
    const currentValue = percent < 100 ? percent : 100;

    return (
        <div className="swiper-slide">
            <div className="skill">
                <CircularProgressbar
                    value={currentValue}
                    text={`${currentValue}%`}
                    strokeWidth={strokeWidth}
                    styles={{
                        path: progressStyle,
                        text: valueStyle,
                    }}
                />
                <p>{text}</p>
            </div>
        </div>
    );
}


