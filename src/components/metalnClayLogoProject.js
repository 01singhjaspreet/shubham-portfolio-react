import React from "react";
import LogoProjectTemplate from "./logoProjectTemplate";
import one from "../assets/Metal-logo/Metal-N-Clay.png";
import two from "../assets/Metal-logo/Metal-n-clay-2.png";
import three from "../assets/Metal-logo/Metal-And-clay-3.jpg";
import four from "../assets/Metal-logo/MetalN-clay-White.jpg";
import five from "../assets/Metal-logo/Metal-and-clay-box.png";
export default function MetalProject() {
    return (
        <LogoProjectTemplate
            description={<>  Did you know that the human brain can process images 60,000X faster
                than words? This is why most businesses select visual branded logos.
                <br />
                It's essential to have a unique and memorable logo for your
                bussiness.
                <br />
                This is why I create every single design from scratch. The style of
                this particular logo is called a wordmark.
                <br />
                A wordmark logo emphasizes the word.
                <br />
                It may seem that wordmarks are "simple" but they can be quite
                complex. It is a challenge to make a word look iconic and memorable.
                <br />
                With this logo design, we focused on creating custom N's that
                reflected the style and identity.
                <br />
                We know that the best logos need to stand out against a lot of
                competition.</>}
            category={"E-Commerce"}
            type={"Wordmark logo design"}
            images={[one, two, three, four, five]}
        />
    )
}