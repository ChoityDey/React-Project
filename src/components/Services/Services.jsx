import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {motion} from 'framer-motion';


const Services = () => {
  const containerVariants ={
    hidden:{
      opacity: 0,
      
    },
    vissible:{
      opacity:1,
      y: 0,
      transition: {
        type: 'tween',
        staggerChildren: 0.7,
        delay: 1.5,
        duration: 1.5,
        when: 'beforeChild'
      }
    }
  }
  return (
    <>
      <Container   
      className='Services'>
        <div className='ServiceTitle'>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <motion.h1
                viewport={{once:false}}
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{type:"tween",
                  duration:1,
                  delay:.5
                }}
                animate={{fontSize:"50px"}}
                >Our Services</motion.h1>
                <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</p>
                </Col>
            </Row>
        </div>
        <div className='ServiceContent'>
            <Row>
                
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <motion.h4
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="vissible"> IT consulting</motion.h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>IT support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>IT Management</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>IT security</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>technology consulting </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>Business Stratagy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
            </Row>
        </div>

      </Container>
    </>
  )
}

export default Services
