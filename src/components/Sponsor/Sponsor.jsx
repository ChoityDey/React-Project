import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spon1 from '../../assets/images/brand-01.png'
import Spon2 from '../../assets/images/brand-03.png'
import Spon3 from '../../assets/images/brand-04.png'
import Spon4 from '../../assets/images/brand-02.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className= {className}
        style={{ ...style, display: "block", background: "black"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }



const Sponsor = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear", 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <Container className='sponsor mt-5'>
        <Slider {...settings}>  
          
        <div>
          <img src={Spon1} />
          
         
        </div>
        <div >
          <img src={Spon2} />
          
         
        </div>
        <div >
          <img src={Spon3} />
          
         
        </div>
        <div >
          <img src={Spon4} />
          
         </div>
        

        </Slider>
            
        </Container>
    </>
  )
}

export default Sponsor
