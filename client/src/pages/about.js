import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box, Card, Icon } from "@mui/material";
import '../assets.css'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { bgcolor, display, fontFamily, fontWeight, height } from "@mui/system";
import TexasFlag from '../photos/texasflag.jpeg'
import Gary from '../photos/garyfong.jpeg'
import KoreanFlag from '../photos/koreanflag.jpeg'
import Daehee from '../photos/daehee.jpeg'
import Paul from '../photos/paulan.jpeg'
import '../assets.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { ImportContactsSharp } from "@material-ui/icons";
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container={
    mt: '3%',
    ml: '10%',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
}

const profilecontainer={
    mt: "5%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px', 
    fontFamily: "samsung",     
    mb: '70px',
}

const profilecard={
    mt: '0%',
    mb: '-20%',
    width: '250px',
    height: '500px',
    bgcolor: 'white',
    opacity: '5px',
    borderRadius: '30px',
    zIndex: '-3',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
}

const avatarcard={
    position: 'relative',
    width: '150px',
    height: '150px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    borderStyle: 'inset',
    mt: '-75%',
    ml: '17.5%',
}

const avatarcardpaul={
    position: 'relative',
    width: '100px',
    height: '100px',
    zIndex: '0',
    ml: '-1%',
    top: '-101%',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    borderStyle: 'inset',
}


const clippedcard={
    posittion: 'relative',
    width: '250px',
    height: '201px',
    zIndex: '-4',
    clipPath: 'polygon(0 50.5%, 100% 50.5%, 100% 49.5%, 0 49.5%);',
    mt: '',
}

const clippedcardtexan={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '410px',
    height: '232px',
    bgcolor: 'blue',
    zIndex: '-4',
    clipPath: 'polygon(75% 0, 100% 0%, 100% 100%, 75% 100%)',
    borderRadius: '48px',
    backgroundImage: `url(${TexasFlag})`,
    backgroundSize: 'contain',
}

const namecontainer={
 fontSize:'25px',
 color:'black',
 fontWeight: 'bold',
 mt: '7%',
 textAlign: 'center',
 fontFamily: 'samsung',
}

const aboutme={
    pl: '2%',
    mt: '15%',
    mb: '',
    pr: '2%',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'samsungreg'
}

const jobdescpaul={
    color: 'black',
    mt: '7%',
    textAlign: 'center',
    fontWeight: 'bold',
    mb: '2%'
}

const jobdesc={
    color: 'black',
    mt: '15%',
    textAlign: 'center',
    fontWeight: 'bold',
    mb: '2%'
}

const iconcontainer={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '12px'
}
const Icons={
    color: 'black'

}



function About () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  



  return (
    <div className="gridbox">
            <Grid container spacing={0} columns={40} sx={{...container}}  >
        <Grid item xl={10} lg={10} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcard, bgcolor: '#b5838d'}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard, borderColor: '#b5838d'}}/>
            <Box sx={{...namecontainer}}>
                <p>Daehee Hwang</p>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Newest member of our team who started coding in April of 2022. Currently looking for a job!</p>
            </Box>
            <Box  sx={{...jobdesc}}>
            <p >Full Stack Web Developer</p>
            <p >Site Manager</p>
            </Box>
            <Box sx={{...iconcontainer}}>
            <Avatar onClick={() =>  window.open("https://github.com/DaeheeCodes")} className='icons' sx={{ bgcolor: 'white'}} >
                    <GitHubIcon sx={{ color: 'black' }}/>
                    </Avatar><Avatar onClick={() =>  window.open("https://linkedin.com/in/DaeheeCodes")} className='icons' sx={{ bgcolor: 'white'}}>
                    <LinkedInIcon sx={{ color: 'black' }}/>
                    </Avatar  >
                    <Avatar onClick={() =>  navigator.clipboard.writeText('DaeheeCodes@gmail.com')} className='icons' sx={{ bgcolor: 'white'}}>
                    <EmailIcon sx={{ color: 'black' }} onClick={() =>  alert('Email Address Copied!')}/>
                </Avatar>
            </Box>
            </Box>
        </Grid>
        <Grid item xl={10} lg={10} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcard, bgcolor: '#b5838d'}}  ></Box>
            <Avatar elevation={5} alt="Gary Fong" src={`${Gary}`} sx={{...avatarcard, borderColor: '#b5838d'}}/>
            <Box sx={{...namecontainer}}>
                <p>Gary Fong</p>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Software Development Consultant by day and web developer by night. Gary is all about software engineering!</p>
            </Box>
            <Box  sx={{...jobdesc}}>
            <p >Game Developer/Engineer</p>
            <p >Software Consultant</p>
            </Box>
            <Box sx={{...iconcontainer}}>
            <Avatar onClick={() =>  window.open("https://github.com/swimgod")} className='icons' sx={{ bgcolor: 'white'}} >
                    <GitHubIcon sx={{ color: 'black' }}/>
                    </Avatar><Avatar onClick={() =>  window.open("https://linkedin.com/in/gary-j-fong")} className='icons' sx={{ bgcolor: 'white'}}>
                    <LinkedInIcon sx={{ color: 'black' }}/>
                    </Avatar  >
                    <Avatar onClick={() =>  navigator.clipboard.writeText('admin@starryfields.com')} className='icons' sx={{ bgcolor: 'white'}}>
                    <EmailIcon sx={{ color: 'black' }} onClick={() =>  alert('Email Address Copied!')}/>
                </Avatar>
            </Box>
            </Box>
        </Grid>
        <Grid Grid item xl={0} lg={0} sm={0} xs={0}>
            <p></p>
        </Grid>
        <Grid item xl={10} lg={10} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcard, bgcolor: '#b5838d'}}  ></Box>
            <Avatar elevation={5} alt="Paul An" src={`${Paul}`} sx={{...avatarcard, borderColor: '#b5838d'}}/>
            <Box sx={{...namecontainer}}>
                <p>Paul An</p>
            </Box>
            <Box sx={{...aboutme}}>
                <p>As the co-found of our collective, Paul births much of the ideas and designs of our games. Check out his itch.io => pauloboy.itch.io/</p>
            </Box>
            <Box  sx={{...jobdescpaul}}>
            <p >Gameplay Programmer/Designer</p>
            <p >Software Engineer</p>
            </Box>
            <Box sx={{...iconcontainer}}>
            <Avatar onClick={() =>  window.open("https://github.com/paulan94")} className='icons' sx={{ bgcolor: 'white'}} >
                    <GitHubIcon sx={{ color: 'black' }}/>
                    </Avatar><Avatar onClick={() =>  window.open("https://linkedin.com/in/cspaulan")} className='icons' sx={{ bgcolor: 'white'}}>
                    <LinkedInIcon sx={{ color: 'black' }}/>
                    </Avatar  >
                    <Avatar onClick={() =>  navigator.clipboard.writeText('admin@starryfields.com')} className='icons' sx={{ bgcolor: 'white'}}>
                    <EmailIcon sx={{ color: 'black' }} onClick={() =>  alert('Email Address Copied!')}/>
                </Avatar>
            </Box>
            </Box>
        </Grid>
        </Grid>
    </div>
  );
}



export default About



