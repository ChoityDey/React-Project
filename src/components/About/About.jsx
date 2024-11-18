import React from 'react'
import { Col, Container } from 'react-bootstrap'
import 'video-react/dist/video-react.css';
import { Player, VolumeMenuButton,ClosedCaptionButton, BigPlayButton, ControlBar, ForwardControl } from 'video-react';
import AnaImage from '../../assets/images/analysis.jpg'


const About = () => {
  return (
    <>
    <Container fluid={true} className= 'text-center mt mb'>
    <Col sm={12} md={12} lg={12}>
    <Player poster={AnaImage}
    src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    >
        <source
        src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4"
        type="video/mp4"
      />
      <source
        src="//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.ogg"
        type="video/ogg"
      />

      <track
        kind="captions"
        src="/assets/elephantsdream/captions.en.vtt"
        srcLang="en"
        label="English"
        default
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.sv.vtt"
        srcLang="sv"
        label="Swedish"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ru.vtt"
        srcLang="ru"
        label="Russian"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ja.vtt"
        srcLang="ja"
        label="Japanese"
      />
      <track
        kind="captions"
        src="/assets/elephantsdream/captions.ar.vtt"
        srcLang="ar"
        label="Arabic"
      />

      <track
        kind="descriptions"
        src="/assets/elephantsdream/descriptions.en.vtt"
        srcLang="en"
        label="English"
      />

      <track
        kind="chapters"
        src="/assets/elephantsdream/chapters.en.vtt"
        srcLang="en"
        label="English"
      />
        <ControlBar autoHide={false}>
        <ForwardControl seconds={5} order={3.1} />
        <ForwardControl seconds={10} order={3.2} />
        <ForwardControl seconds={30} order={3.3} />
        <VolumeMenuButton vertical />
        <ClosedCaptionButton order={7} />
        </ControlBar>
      <BigPlayButton position="center"/>
    </Player>
    </Col>
    </Container>
    </>
  )
}

export default About
