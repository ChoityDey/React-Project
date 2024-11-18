import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {
  return (
    <Container fluid={true} className='text-center mt mb' >
         <div className="Summary">
              <Container>
                <Row>
                  <Col >
                     <div className="topContent">
                        <Row>
                            <Col lg={3} md={6} sm={12}className='counter-bg'>
                               <h4 className='SummaryContent'>Clients</h4>
                               <p className='SummaryContent2'>
                               <CountUp start={0} end={50}>
                                {({ countUpRef, start }) => (
                                    <div>
                                    <VisibilitySensor  onChange={start} delayedCall >
                                    <span ref={countUpRef} />
                                    </VisibilitySensor >
                                    
                                   + </div>
                                )}
                                </CountUp>



                               </p>
                            </Col>

                            <Col lg={3} md={6} sm={12} className='counter-bg'>
                               <h4 className='SummaryContent'>Clients</h4>
                               <p className='SummaryContent2'>
                               <CountUp start={0} end={100}>
                                {({ countUpRef, start }) => (
                                    <div>
                                    <VisibilitySensor  onChange={start} delayedCall >
                                    <span ref={countUpRef} />
                                    </VisibilitySensor >
                                    
                                   + </div>
                                )}
                                </CountUp>
                               </p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className='counter-bg'>
                               <h4 className='SummaryContent'>Clients</h4>
                               <p className='SummaryContent2'>
                               <CountUp start={0} end={100}>
                                {({ countUpRef, start }) => (
                                    <div>
                                    <VisibilitySensor  onChange={start} delayedCall >
                                    <span ref={countUpRef} />
                                    </VisibilitySensor >
                                    
                                   + </div>
                                )}
                                </CountUp>
                               </p>
                            </Col>

                            <Col lg={3} md={6} sm={12}className='counter-bg'>
                               <h4 className='SummaryContent'>Clients</h4>
                               <p className='SummaryContent2'>
                               <CountUp start={0} end={10}>
                                {({ countUpRef, start }) => (
                                    <div>
                                    <VisibilitySensor  onChange={start} delayedCall >
                                    <span ref={countUpRef} />
                                    </VisibilitySensor >
                                    
                                   + </div>
                                )}
                                </CountUp>
                               </p>
                            </Col>
                        </Row>
                   
                      </div>
                  </Col>
                </Row>
              </Container>
          </div>

         </Container>
  )
}

export default Counter
