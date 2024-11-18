import React  from 'react'
import { Fragment,useEffect, useState} from 'react'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'






const Contact = () => {
    const [input, setInput] = useState('');
     const [ isValid,setIsValid] = useState('');

     const inputHandler = (e) => {
        setInput(e.target.value);
    };
   useEffect(() => {
        if (input.length < 5 || /\d/.test(input)) {
        setIsValid(false);
        } else {
        setIsValid(true);
       }
         }, [input]);
        

  return (
    <>
        <Container className='mt mb'>
            <Row>
                <Col sm={12} md={6} lg={6}>
                 <h2>Contact Us.</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={inputHandler} >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    `<Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={inputHandler} >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={inputHandler} >
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="danger">Danger</Button>
                    <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem' } : { backgroundColor: 'lightpink', padding: '.5rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>


                </Form>
                </Col>

                <Col className='mt-5 ' sm={12} md={6} lg={6}>
                  <p><FontAwesomeIcon icon={faHouse} /> Adress:</p>
                  <p>Mobile:</p>
                  <p>email:</p>
                  <p><FontAwesomeIcon icon={['fab', 'facebook-f']} />facebook:</p>
               
                  
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact