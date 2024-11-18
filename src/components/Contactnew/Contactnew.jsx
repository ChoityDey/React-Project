import React from 'react'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import Iframe from 'react-iframe'
import  { useState } from 'react';
import {motion} from 'framer-motion';






const Contactnew = () => {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        } else if (data.username.length < 4) {
            errors.username = 'Username must be at least 4 characters long';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };
    const containerVariants = {
        hidden: { 
          opacity: 0, 
          x: '-100vh' 
        },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { type: 'spring', delay: 0.5 }
        }
      };
      

  return (
    <>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={6}>
                 <div className="form-container">
            <motion.h2 
            variants={containerVariants}
            initial= "hidden"
            animate= "visible"
            className="form-title">Form Validation</motion.h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">
                        Username:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && (
                        <span className="error-message">
                            {errors.username}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Email:
                    </label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    )}
                </div>
                <motion.button
                animate= {{
                    backgroundColor: '#111'
                }}
                transition={{delay:1.5}}
                 className="submit-button" type="submit">Submit</motion.button>
            </form>
        </div>
    
                </Col>

                <Col className='mt-5 ' sm={12} md={6} lg={6}>
                
                <Iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7236.563094932561!2d91.8639756078896!3d24.922476861186013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x3750551e7da58bcd%3A0x7cd35cba3faa14e7!2z4Ka44Ka_4Kay4KeH4KafIOCmhuCmqOCnjeCmpOCmsOCnjeCmnOCmvuCmpOCmv-CmlSDgppXgp43gprDgpr_gppXgp4fgpp8g4Ka44KeN4Kaf4KeH4Kah4Ka_4Kav4Ka84Ka-4Kau!3m2!1d24.920976!2d91.8686125!4m3!3m2!1d24.921499299999997!2d91.8728806!5e0!3m2!1sbn!2sbd!4v1726510971130!5m2!1sbn!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                
               
                </Col>
            </Row>
        </Container>
    </>
  )
};
export default Contactnew