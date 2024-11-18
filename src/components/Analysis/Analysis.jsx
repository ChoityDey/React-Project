import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AnaImage from '../../assets/images/analysis.jpg'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { delay } from 'framer-motion';

// import Analysis from '../../assets/images/analysis.jpg'
import {motion} from 'framer-motion';

const Analysis = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const containerVariants ={
        hidden:{
          opacity: 0,
          y: '-100vh',
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
    <Container className="Analysis">
         <div>
            <Container>
                <Row>
                     <Col sm={12} md={6} lg={8}>
                        <Container>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <motion.h1
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="vissible"
                                    className='AnalysisContent'>What do we do?</motion.h1>
                                    <p className='AnalysisContentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim ex et qui, modi repellendus aperiam reprehenderit dignissimos aut laborum ipsum impedit similique! Enim non rerum omnis reiciendis debitis officiis!</p>

                                </Col>
                                <Col sm={12} md={12} lg={12}>
                                    <motion.h4 
                                    viewport={{once:false}}
                                    initial={{opacity:0, x:-50}}
                                    whileInView={{opacity:1, x:0}}
                                    transition={{type:'easeIn',
                                      duration:1,
                                      delay:.7 
                                    }}
                                    >Our Working Process.</motion.h4>
                                    <div style={{width:'100%',height:'300px'}} >
                                        <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                width={500}
                                                height={300}
                                                data={data}
                                                barSize={30}
                                                >
                                                <XAxis dataKey="name"  />
                                                <YAxis  />
                                                <Tooltip />                                       
                                                <Bar dataKey="percentages" fill="#333" background={{ fill: '#eee' }} />
                                                </BarChart>
                                        </ResponsiveContainer>

                                    </div>

                                </Col>
                            </Row>
                        </Container>
                    
                    </Col>

                    <Col
                      
                    className='Image' sm={12} md={6} lg={4}>
                        <motion.img
                        initial={{x:100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        viewport={{once:false}}
                        transition={{
                          delay:0.2,
                          x:{type:"spring", stiffness:60},
                          opacity:{duration:1},
                          ease:"easeIn",
                          duration:1
                        }}
                        src={AnaImage} />
                      
                        
                      
                      
                    </Col>

                </Row>

            </Container>
         </div>

      </Container>
    </>
  )
}

export default Analysis
