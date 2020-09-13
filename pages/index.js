import React from 'react';
import emailjs from 'emailjs-com';
import ButtonAppBar from "./tab";
import Head from 'next/head'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Input, TextField } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';



export default function ContactUs() {
 (function() {
    var exLog = console.log;
    console.log = function(msg) {
        exLog.apply(this, arguments);
        alert(msg);
    }
})()
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_y4xuhot', e.target, 'user_WutoPfimdC8JAiJgCfrlg')
      .then((result) => {
        console.log('Thank you for your feedback!', result.status, result.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  }

  return (<>
    <Head><title>IHS</title>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      <script src="/cdn-cgi/apps/head/6kU11nKgEkfrA6ZInbd7H1KCWSY.js"></script>
      <script src="https://www.googletagmanager.com/gtag/js?id=UA-86020000-1"></script>
      <meta name="author" content="Procheta Bhattacharyya"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta></Head>
      <ButtonAppBar/>
      <br></br>< div id="bi">
      <div id="container"><Grid container spacing={2}><Grid item xs={12} sm={6}><Card style={{flex:"1",padding:"3rem 3rem 3rem 3rem",backgroundImage:`url(${"https://t4.ftcdn.net/jpg/03/56/08/21/240_F_356082102_iPkxJ1QoiJ7iPZEUbqBYWVVSlazfK3vt.jpg"})`,backgroundRepeat:"none",boxShadow:" 10px 10px 10px 10px #BDBDBD"}}>
    <form className="contact-form" onSubmit={sendEmail}>
    <center><Typography variant="h4">Contact Us!</Typography></center>
        <center>_____</center>
        <center style={{color:"#848484",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus at risus at volutpat. Ut non ipsum et libero sagittis egestas non a mi. Nunc a fringilla diam. </center>
        <br></br>
        <TextField id="standard-search"  label="Name" type="text" fullWidth inputProps={{style: {fontSize: 15,lineHeight:1}}} name="name" required/>
        <br></br>
        <br></br>
        <TextField type="email" id="standard-search" label="Email" fullWidth inputProps={{style: {fontSize: 15,lineHeight:1}}} name="email" required/>
        <br></br>
        <br></br>
        <TextField type="text" id="standard-search" name="message" fullWidth inputProps={{style: {fontSize: 15,lineHeight:1}}} label="Message" multiline required/><br></br>
        <br></br>
      <input type="submit" value="Send"/>
      
    </form></Card><br></br></Grid><Grid item xs={12} sm={6}><center ><div id="i"><Card style={{flex:"1",padding:"3rem 3rem 3rem 3rem",backgroundImage:`url(${"https://t4.ftcdn.net/jpg/03/56/08/21/240_F_356082102_iPkxJ1QoiJ7iPZEUbqBYWVVSlazfK3vt.jpg"})`,backgroundRepeat:"none",boxShadow:" 10px 10px 10px 10px #BDBDBD"}}><center><Typography variant="h4">Contact Information</Typography></center><br></br>
    <Typography variant="h5">Inovocare Healthsoft Solutions</Typography><br></br><Typography variant="h6">Contact: 128932794</Typography><br></br><Typography variant="h6">Email:someone@example.com</Typography><br></br><Typography variant="h6">Address: 543,Miller Lane Kolkata-700091</Typography></Card></div></center></Grid></Grid>
 <br></br>     <div id="help"><Typography variant="h4">Need help from our team?</Typography><div>_____________________________</div><br></br><Link href="./support"><a><Typography variant="h5">Go to our support page.</Typography></a></Link></div></div></ div>
 <style jsx>{`
      #help{
padding:0.5rem 0.5rem 0.5rem 0.5rem;
      }
      @media screen and (min-width:900px)
     {
       #help{
padding:0;
       }
      #bi{
        background-image:url("https://t3.ftcdn.net/jpg/03/71/22/28/240_F_371222816_mZYLspVzzbXbCnTXiDmADLXd5MJKRJ94.jpg");
        background position:center top;
        background-size: cover;
        
      }
      #i{
        padding:1rem 0.5em 0.5rem 0.5rem;
        width:270px;
        
      }
      @media screen and (min-width:900px)
     {
       #i{
padding: 0.5rem 20rem 10rem 15rem;
width:450px;
       }
      Card{
        background-image:url("https://t3.ftcdn.net/jpg/03/77/06/12/240_F_377061247_EHmpAc60IgVsZwfIqE2re01ZNBC1K3PO.jpg");
      }
     #container{
      max-width: 10px;
      padding: 3rem 1rem 1rem 0.5rem;
     }
     @media screen and (min-width:900px)
     {
       #container{
        max-width: 800px;
        padding: 4rem 15rem 15rem 15rem;
       }
      `}</style>
    </>
    );
  }