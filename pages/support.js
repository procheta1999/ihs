import React from 'react';
import emailjs from 'emailjs-com';
import Head from 'next/head'
import ButtonAppBar from "./tab";
import Link from 'next/link';
import { TextField, Typography } from "@material-ui/core";
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('ggo', 'template_qy5y9ds', e.target, 'user_WutoPfimdC8JAiJgCfrlg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
      <ButtonAppBar/><br></br><br></br><center><Typography variant="h4">Customer Support</Typography></center>
        <center>_____</center>
        <center style={{color:"#848484",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus at risus at volutpat. Ut non ipsum et libero sagittis egestas non a mi. Nunc a fringilla diam. </center>
<br></br>
<div id="container">   <form className="contact-form" onSubmit={sendEmail} style={{backgroundImage:`url(${"https://t3.ftcdn.net/jpg/03/71/22/28/240_F_371222816_mZYLspVzzbXbCnTXiDmADLXd5MJKRJ94.jpg"})`,backgroundRepeat:"none"}}>
<TextField 
          fullWidth
          id="standard-number"
          label="Full Name"
          type="text"
          name="name"
          inputProps={{style: {fontSize: 20,lineHeight:1}}}
          InputLabelProps={{
            shrink: true,
            fontSize:10,
          }}
        /><br></br><br></br>
        <TextField
        fullWidth
          id="standard-number"
          label="Contact"
          type="number"
          name="contact"
          inputProps={{style: {fontSize: 20,lineHeight:1}}}
          InputLabelProps={{
            shrink: true,
          }}
        /><br></br><br></br>
        <TextField
        fullWidth
          id="standard-number"
          label="Email"
          type="email"
          name="email"
          inputProps={{style: {fontSize: 20,lineHeight:1}}}
          InputLabelProps={{
            shrink: true,
          }}/><br></br><br></br><br></br>
        <TextField
        fullWidth
        multiline
          id="standard-number"
          label="Complaint"
          type="text"
          name="message"
          inputProps={{style: {fontSize: 20,lineHeight:1}}}
          InputLabelProps={{
            shrink: true,
          }}/><br></br><br></br>
      <input type="submit" value="Send" />
    </form><br></br><div id="help"><Typography variant="h5">Have feedback for our team?</Typography><div>_____________________________</div><br></br><Link href="./index"><a><Typography variant="h6">Go to our Contact page.</Typography></a></Link></div></div>
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
      padding: 7rem 1rem 1rem 0.5rem;
     }
     @media screen and (min-width:900px)
     {
       #container{
        max-width: 800px;
        padding: 4rem 15rem 15rem 15rem;
       }
      `}</style></> );
  }