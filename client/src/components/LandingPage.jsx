import React from "react";
import {Link} from 'react-router-dom';
import { Button, Div } from "../styled components/LandingPage";

export default function LandingPage(){
    return(
        <body className="landingBody">
        <div>
        <Div>
            <Link to='/home'>
                <Button>Get In!</Button>
            </Link>
        </Div>
        </div>
        </body>
    )
}