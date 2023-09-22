import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import './blogpost.css'
import Video from "./../../assets/videos/pentestbasic.mp4"; 
import ReactPlayer from 'react-player'

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useNavigate} from 'react-router-dom';


import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/AboutHero';

const Assembly_Data_Types = () => {

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  return (
    <div className='containerblog'>
        <Navbar />
        <AboutHero />
        <button onClick={goBack} style={{background:'none',border:'none',padding:'0',outline:'inherit',cursor:'pointer',color:'inherit'}}>
            <IoIosArrowBack className='iconblo' style={{color:"#fff"}}/>
        </button>
        
        <div className='headingblog'>
            <h1>Common Terms In Pentesting</h1>
        </div>
        <div className='headingdet'>
            <h6>22/9/2023</h6>
            <h6>writer: bl4ckf0xk</h6>
        </div>
        <hr></hr>
        <div className='blogbody'>
        <h1 className='headingblog'>Shell</h1>
            <p className='subheaddes'># On a linux system</p>
            <p className='subheaddes'>shell is a program that takes input from the user via the keyboard and passes these commands to the operating system to perform the specific funtion. </p>
            <p className='subheaddes'>Most Linux systems use a proogram called Bash (Bourne Again Shell) as a shell program to interact with the operating system.</p>
            

        <div className='section'>
            <h2 className='subheading'>"Getting a shell" </h2>
            <p className='subheaddes'>This means that the target host has been exploted, and we have obtained shell-level access and can run commands interactively as if we are sitting logged in to the host</p>
            
        <h1 className='subheading'>Shell Types</h1>
                <h4>&#62; Reverse Shell     <span style={{fontSize:17,color:"darkorchid"}}>&#91;Initiate a connection back to a "listner"&#93;</span></h4>
                <h4>&#62; Bind Shell         <span style={{fontSize:17,color:"darkorchid"}}>&#91;"Bind" to a specific port on the target host and wait for a connection&#93;</span></h4>
                <h4>&#62; Web Shell          <span style={{fontSize:17,color:"darkorchid"}}>&#91;Runs OS commands via the web browser. (Semi interactive)&#93;</span></h4>
                
        <h1 className='headingblog'>Port</h1>
            <p className='subheaddes'>A Port can be thought of as a window or door on a house, if a window or door is left open or not locked correctly, we can often gain unauthorized access to home.</p>
            <p className='subheaddes'>Ports are associated with a specific process or service. Each port is assigned a number, and many are standardized across all network connected devices.</p>

            <h1>There are Two types of ports</h1>
                <h4>&#62; Transmission Control Protocol (TCP)</h4>
                <h4>&#62; User Datagram Protocol (UDP)</h4>
            
        </div>
        <div className='section'>
            <h2 className='subheading'># TCP</h2>
            <p className='subheaddes'> - Connection between a client and a server must be established before data can be sent.</p>

            <h2 className='subheading'># UDP</h2>
            <p className='subheaddes'> - There is no "handshake" and therefor introduces a certain amount of unrealiability. [Suitable for applications that run time-sensitive tasks]</p>
            
            <p className='subheaddes'>Some of the most well-known <span style={{fontSize:17,color:"darkseagreen"}}>TCP</span> and <span style={{fontSize:17,color:"darkseagreen"}}>UDP</span> ports are listed below:</p>
            
                <p><i>Port(s)</i></p>
                <h4>&#62; 20/21 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;FTP&#93;</span></h4>
                <h4>&#62; 22 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;SSH&#93;</span></h4>
                <h4>&#62; 23 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;TELNET&#93;</span></h4>
                <h4>&#62; 25 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;SMTP&#93;</span></h4>
                <h4>&#62; 80 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;HTTP&#93;</span></h4>
                <h4>&#62; 161 (TCP/UDP) <span style={{fontSize:17,color:"darkgray"}}>&#91;SNMP&#93;</span></h4>
                <h4>&#62; 389 (TCP/UDP) <span style={{fontSize:17,color:"darkgray"}}>&#91;LDAP&#93;</span></h4>
                <h4>&#62; 443 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;SSL/TLS(HTTPS)&#93;</span></h4>
                <h4>&#62; 445 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;SMB&#93;</span></h4>
                <h4>&#62; 3389 (TCP) <span style={{fontSize:17,color:"darkgray"}}>&#91;RDP&#93;</span></h4>
        </div>
        <div className='section'>
            <h1 className='headingblog'>Web Server</h1>
            <p className='subheaddes'>A web server is an application that runs on the back-end server, which handles all of the <span style={{fontSize:17,color:"darkseagreen"}}>HTTP</span> traffic from the client-side browser, routes it to the requests destination pages, and finally responds to the client-side browser</p>
            <p className='subheaddes'>Web application provide vast attack surface, making them high-value target for attckers and pentesters</p>
            <p className='subheaddes'>There is a standerdized list of the top 10 web application vulnerabilities maintained by the Open Web Application Security Project  <a href='https://owasp.org/www-project-top-ten/' target="_blank" rel="noreferrer"> <span style={{fontSize:17,color:"red"}}>(OWASP) </span></a> </p>   

            
            
        </div>
        </div>


        <Footer />
    </div>
  )
}

export default Assembly_Data_Types