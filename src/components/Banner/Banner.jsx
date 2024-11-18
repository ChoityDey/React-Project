import React from 'react'
import {Button, Container, Row} from 'react-bootstrap';
import { motion } from "framer-motion"
 

const Banner = () => {
  return (
    <>
    <Container fluid={true} className="TopFixedBanner p-0">
      <div className='topBannerOverlay'>
        <Container>
          <Row>
            <col />
            <div className='bannerContent'>
            <motion.span 
            initial={{y:-100, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once:false}}
            animate={
              {fontSize: '32px',
                color: '#ff2994',
                
              }
            }
            transition={{delay: .5, duration: 1.5}}
            className='bannerTitle'>WE ARE AGENCY</motion.span>
            <motion.h2 
            animate={{
              fontSize: '26px',
              color: 'white'

            }}
            transition={{
              delay:.5,
              duration: 1.5,
              type: 'spring'


            }}
            className='bannerHeading'>TECHNOLOGY & INNOVATION FOR AGENCY SERVICES.</motion.h2>
            <motion.a
            whileHover={{
              scale: '1.5',
              boxShadow: '0 0 8px rgb(255,255,255)'
            }}
            className='bannerLink' href="">Contact</motion.a>
            </div>
            <col/>
            
          </Row>
        </Container>

      </div>

    </Container>
  </>
  )
}

export default Banner
