import React from "react";
import LogoProjectTemplate from "./logoProjectTemplate";
import one from "../assets/Trident/Trident-logo-final.jpg";
import two from "../assets/Trident/Trident.jpg";
import three from "../assets/Trident/Trident-logo-present.jpg";
import four from "../assets/Trident/Trident-t-shirt.png";
import five from "../assets/Trident/Trident-cap.png";
export default function TridentLogoProject() {
    return (
        <LogoProjectTemplate
            description={<> When creating a visual brand identity and logo, its important to be
                aware of color schemes and imagery.
                <br />
                This Logo design for Video gamer for his brand identity and I had a
                great time designing this logo.
                <br />
                This graphic appeals to trident symbol.</>}
            category={"Tech, Gaming"}
            type={"Lettermark Logo design"}
            images={[one, two, three, four, five]}
        />
    )
}