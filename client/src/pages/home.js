import * as React from "react";
import Grid from '@mui/material/Grid';
import "./home.css"
import CardMedia from '@mui/material/CardMedia';
import '../assets.css'
import iphone  from '../photos/taliphone.png';
import pixel from '../photos/pixel.jpg';
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container ={
    ml: "5%",
    mt: "0%",
    fontFamily: "samsung",

}





const textbody = {
    mt: '5%',
    mb: '%',
    fontFamily: "samsung",
    color: 'black',
}

const titles = {
    ml: '-4%',
    mt: "3%",
    color: 'gray',
    fontSize: '24px',
    borderBottom: '1px solid',

}

const titlestwo = {
    ml: '-4%',
    mt: "12%",
    color: 'gray',
    fontSize: '24px',
    borderBottom: '1px solid',
}

const projects = {
    mt: "2%",
    color: 'black',
    fontSize: '45px',
}

const projectstwo = {
    mt: "10%",
    color: 'black',
    fontSize: '45px',
}

const projectdesc = {
    mt: "2%",
    ml: "0%",
    color: 'black',
    fontSize: '30px',
}

const projectdet = {
    mt: "3%",
    ml: "0%",
    color: 'black',
    fontSize: '18px',
    fontFamily: 'samsungreg',
    fontWeight: 'bold',
    lineHeight: '1.5',
}
const marketing = {
    mt: "3%",
    ml: "7%",
    color: 'blue',
    fontSize: '15px',
    lineHeight: '2',
}



function Home () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  

  return (
    <div className="gridbox">
            <Grid container spacing={0} columns={40} sx={{...container}} >
        <Grid item xs={8}>
            <p></p>
        </Grid>
        <Grid item xs={24} sx={{...textbody}}>
            <p>
            We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design. Follow our journey here and see what we have brewing!
            </p>
        </Grid>
        <Grid item xs={8}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={40} sx={{...titles}}>
            <p>
                Personal Projects: Daehee Hwang
            </p>
        </Grid>
        <Grid item xs={0}>
        </Grid>
        <Grid item xs={28} sx={{...projects}}>
            <p>
                Task-a-Lyzer
            </p>
        </Grid>
        <Grid item xs={12}>
        <CardMedia component="img" src = {iphone} style={{ width: 300, height: 600, position: 'absolute', marginTop: '25px'}}/>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={25} sx={{...projectdesc}}>
            <p>
            Bridging the gap for iOS based learning for low-income families.
            </p>
        </Grid>
        <Grid item xs={15}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={25} sx={{...projectdet}}>
            <p>
            Over 54% of the world population is still without a computer in their household while 84% of people have a personal smartphone.
Task-a-Lyzer attempts to bridge the equipment-gap for iOS based learning for people without personal computers or multiple iOS devices by providing them a <span style= {{  color: "red", fontWeight: 'bold'}}>frictionless </span>support for <span style= {{ color: "red"}}>split-screen</span> learning on their single iOS device. While allowing them to familiarize themselves with using a mobile device for productivity - as pen and paper becomes more antiquated every year.
<br></br><span style= {{ textDecoration: "underline", marginLeft: "0px"}}>Currently, iPhones do not support split-screen natively and iPads do not support top-down multiscreen view. Users do not have an option to do two things at once on iPhones, Task-a-Lyzer changes that.</span> </p>
        </Grid>
        <Grid item xs={15}>
            <p></p>
        </Grid>
        <Grid item xs={40} sx={{...marketing}}>
            <p>View Full Documentation</p>
            <p>Download on the Appstore</p>
        </Grid>
        <Grid item xs={28} sx={{...projectstwo}}>
            <p>
                PxILoveYou<span style= {{  fontSize: "25px", marginLeft: "20px"}}>  In Dev in Unity</span>
            </p>
        </Grid>
        <Grid item xs={12}>
        <CardMedia component="img" src = {pixel} style={{ width: 200, height: 400, position: 'absolute', marginTop: "180px", marginLeft: "90px"}}/>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={25} sx={{...projectdesc}}>
            <p>
            When Life Throws You <s>Lemons</s> <em>Pixels</em>, What do you make of it?
            </p>
        </Grid>
        <Grid item xs={15}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={25} sx={{...projectdet}}>
            <p>
            PxILoveYou is a Story-Driven mobile game that explores adulthood, nihilism, quarter-life crisis, and finding Love in-midst of all of that.
            <br></br>You follow a recent college graduate Fred who feels that the world (including himself) is becoming edgier as time passes. After an extremely difficult day at work, he collapses. When he wakes up he finds that everything he sees and feels has become pixelated.
            </p>
        </Grid>
        <Grid item xs={15}>
            <p></p>
        </Grid>
        <Grid item xs={40} sx={{...marketing}}>
            <p>Currently in Development</p>
        </Grid>
        <Grid item xs={8}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={40} sx={{...titlestwo}}>
            <p>
                Team Project: Paul An and Gary Fong
            </p>
        </Grid>
        <Grid item xs={0}>
        </Grid>
        <Grid item xs={28} sx={{...projects}}>
            <p>
                Wind Walker<span style= {{  fontSize: "25px", marginLeft: "20px"}}>  In Dev in Unity</span>
            </p>
        </Grid>
        <Grid item xs={12}>
        <CardMedia style={{ minWidth:'270px', border: "solid beige", boxShadow: "none", aspectRatio: '16/9', position: "absolute", marginLeft: "-20px", marginTop: "40px" }} component="iframe" image={"https://www.youtube.com/embed/qbc_xPeVLtg"} autoplay control sx={{ height: '30vh', width: '33vw'}} />
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={25} sx={{...projectdesc}}>
            <p>
            Wizard Yamanu, the strongest wizard in all of Jupauldy, only appears before the worthy... Are you worthy?
            </p>
        </Grid>
        <Grid item xs={15}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={25} sx={{...projectdet}}>
            <p>
            Windwalker is a mobile RPG with a unique encounter system that is heavily combat oriented. Players progress via a leveling system, job advancements, and a 100000+ item system. Windwalker features an up-to 3v3 turn-based combat system with 100+ unique skills. Enjoy a hand-crafted fantasy world, taming powerful creatures to fight alongside you.
            </p>
        </Grid>
        <Grid item xs={15}>
            <p></p>
        </Grid>
        <Grid item xs={40} sx={{...marketing}}>
            <p>View Full Documentation</p>
        </Grid>
        </Grid>
    </div>
  );
}



export default Home



