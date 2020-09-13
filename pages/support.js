import React from "react";
import Head from 'next/head'
import ButtonAppBar from "./tab";
import Link from 'next/link';
import { TextField, Typography } from "@material-ui/core";
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
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
      <div id="container"><form style={{backgroundImage:`url(${"https://t3.ftcdn.net/jpg/03/71/22/28/240_F_371222816_mZYLspVzzbXbCnTXiDmADLXd5MJKRJ94.jpg"})`,backgroundRepeat:"none"}}
        onSubmit={this.submitForm}
        action="https://formspree.io/xvovpgkk"
        method="POST"
      >
          
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
        {status === "SUCCESS" ? <p style={{fontSize:"20px"}}>Thanks! Our team will shortly reach to you.</p> : <button>Submit</button>}
        {status === "ERROR" && <p style={{fontSize:"20px"}}>Ooops! Try again.</p>}
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

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}