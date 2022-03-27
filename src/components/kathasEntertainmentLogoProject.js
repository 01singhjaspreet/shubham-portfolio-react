import React from "react";
import LogoProjectTemplate from "./logoProjectTemplate";
import one from "../assets/Kathas/Kathas-Entertainments-Final-logo.jpg";
import two from "../assets/Kathas/Kathas-entertaiment.png";
import three from "../assets/Kathas/Kathas-Entertainments-Icons.jpg";
import four from "../assets/Kathas/Kathas-t-shirt.png";
import five from "../assets/Kathas/Web-kathas-ID.png";
export default function KathasProject() {
    return (
        <LogoProjectTemplate
            description={<>   A custom logo for a tech company is a key element of branding.
                <br />
                I designed this logo for a start-up company in the Video game
                development. I kept the design professional looking to build a sense
                of trust with potential users.
                <br />
                it's essential to have a unique and memorable logo for your
                bussiness.
                <br />
                This is why I create every single design from scratch. The style of
                this particular logo is called a wordmark.
                <br />
                A wordmark logo emphasizes the word.

                <br />
                It may seem that wordmarks are “simple” but they can be quite
                complex. It is a challenge to make a word look iconic and memorable.
                <br />
                With this logo design, we focused on creating custom K's and E's
                that reflected the style and identity.
                <br />
                We know that the best logos need to stand out against a lot of
                competition.</>}
            category={"Tech"}
            type={"Lettermark Logo design"}
            images={[one, two, three, four, five]}
        />
    )
}