import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faVoicemail,} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion';


function Footer() {

  const containerVariants ={
    hidden:{
      opacity: 0,
      x: -100
    },
    vissible:{
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        staggerChildren: 0.7,
        delay: 0.5,
        duration: 1.5,
        when: 'beforeChild'
      }
    }
  }

return (
    <>
    <div className='footer'>
      <Container>
        
        <Row>
          
        <Col lg={4} md={6} sm={12}>
        <motion.div 
        variants={containerVariants}
        viewport={{once:false}}
                                    initial="hidden"
                                    whileInView="vissible"
                                    
        className='footer1'>
        <h2>TECHNOLOGY & INNOVATION FOR AGENCY SERVICES</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illo error est, facilis consequuntur sed sint earum voluptate quo iusto.</p>
                
                </motion.div>
        </Col>
        
        <Col lg={4} md={6} sm={12}>
        <div className='footer2'>
        <div className='Footermenu'>
        <h4>quick links</h4>
                <ul>
                   <li><a href=""><i class='bx bx-chevrons-right'></i> Home</a></li>
                   <li><a href=""><i class='bx bx-chevrons-right'></i> About</a></li>
                   <li><a href=""><i class='bx bx-chevrons-right'></i> Services</a></li>
                   <li><a href=""><i class='bx bx-chevrons-right'></i> Projects</a></li>
                   <li><a href=""><i class='bx bx-chevrons-right'></i> Contact</a></li>
                </ul>
                </div>
                </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
        <div className='footer3'>

        <h4>get in touch</h4>
                <ul>
                   <li> <FontAwesomeIcon icon={faHouse} />  <a href=""> Callison,USA</a></li>
                   <li> <FontAwesomeIcon icon={faPhone} />  <a href=""><i class='bx bx-mobile-alt'></i> +0(555)458 88 55</a></li>
                   <li> <FontAwesomeIcon icon={faVoicemail} /> <a href=""><i class='bx bxl-gmail'></i> info@jaflong.com</a></li>

                </ul>
                </div>
        </Col>
        </Row>
        
      </Container>
      </div>
    </>
  )
}

export default Footer
