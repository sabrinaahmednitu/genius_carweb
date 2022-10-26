import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import photo1 from '../../imags/photo1.png';
import photo2 from '../../imags/photo2.jpg';
import photo3 from '../../imags/photo3.png';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className='container' >
       <PageTitle title="About" ></PageTitle>
           <h3>About us
               <br /> 
           <Button variant="warning" onClick={handleShow}>
              more about our service
         </Button>
           </h3>
           <p>
          car mechanic (automotive technician in most of North America, light vehicle technician in British English, and motor mechanic in Australian English) is a mechanic who services automobiles, sometimes specializing in one or more automobile brands or sometimes working with any brand. In repairing cars, their main role is to diagnose the problem accurately and quickly. They often have to quote prices for their customers before commencing work or after partial disassembly for inspection. Their job may involve the repair of a specific part or the replacement of one or more parts as assemblies.
           </p>
            <img src={photo1} alt="" />
           
            <p>
            ABasic vehicle maintenance is a fundamental part of a mechanic's work in modern industrialized countries, while in others they are only consulted when a vehicle is already showing signs of malfunction. Preventive maintenance is also a fundamental part of a mechanic's job, but this is not possible in the case of vehicles that are not regularly maintained by a mechanic. One misunderstood aspect of preventive maintenance is scheduled replacement of various parts, which occurs before failure to avoid far more expensive damage.
            </p>
            <img src={photo3} alt="" />
            <p>
            <br />
            With the rapid advancement in technology, the mechanic's job has evolved from purely mechanical, to include electronic technology. Because vehicles today possess complex computer and electronic systems, mechanics need to have a broader base of knowledge than in the past.
            </p>
            <div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>more about us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        An auto mechanic (automotive technician in most of North America, light vehicle technician in British English, and motor mechanic in Australian English) is a mechanic who services automobiles, sometimes specializing in one or more automobile brands or sometimes working with any brand. In repairing cars, their main role is to diagnose the problem accurately and quickly. They often have to quote prices for their customers before commencing work or after partial disassembly for inspection. Their job may involve the repair of a specific part or the replacement of one or more parts as assemblies.
        <img style={{width:'100%'}} src={photo2} alt="" />
        </Offcanvas.Body>
      </Offcanvas>
 
            </div>
        </div>
    );
};

export default About;