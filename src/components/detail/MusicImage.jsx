import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const MusicImage = () => {
  const settings = {
    infinite: true,
    speed: 400,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: "0px",
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <ImageBox
            id="0"
            url={
              "https://image.bugsm.co.kr/album/images/500/204200/20420099.jpg"
            }
          />
        </div>
        <div>
          <ImageBox
            id="1"
            url={
              "https://image.bugsm.co.kr/album/images/1000/204853/20485378.jpg"
            }
          />
        </div>
        <div>
          {" "}
          <ImageBox
            id="2"
            url={
              "https://image.bugsm.co.kr/album/images/1000/203669/20366914.jpg"
            }
          />
        </div>
        <div>
          {" "}
          <ImageBox
            id="3"
            url={
              "https://image.bugsm.co.kr/album/images/1000/202037/20203701.jpg"
            }
          />
        </div>
        <div>
          <ImageBox
            id="4"
            url={
              "https://image.bugsm.co.kr/album/images/1000/204816/20481665.jpg"
            }
          />
        </div>
        <div>
          <ImageBox
            id="5"
            url={
              "https://image.bugsm.co.kr/album/images/1000/202049/20204975.jpg"
            }
          />
        </div>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 550px;
  margin: 0px auto 0px auto;
  text-align: center;
  padding: 20px;
  font-size: 30px;
`;

const ImageBox = styled.div`
  width: 500px;
  height: 500px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;
const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 60px;
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    position: absolute;
    width: 890px;
    height: 450px;
    margin: 0 auto;
    overflow: hidden;
    top: -30px;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    display: none !important;
  }

  .slick-arrow {
    padding: 4px 6px;
    transform: translate(30px, 150px);
    background-color: transparent;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }

  .slick-prev {
    position: absolute;
    top: -20px;
    right: -800px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-next {
    position: absolute;
    top: -20px;
    left: 810px;
    cursor: pointer;
  }
`;

export default MusicImage;
