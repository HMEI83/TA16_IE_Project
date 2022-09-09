import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, BtnWrap, Button,
  Heading, Subtitle, Img, ImgWrap, Column2, CardWrapper, CardLayout, CardH2, CardP} from './element';
import { Link } from "react-router-dom";

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, showCard, cards,
  headline, darkText, description, img, alt, topSpace, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText} topspace={topSpace}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
              {showCard && cards.map((card, ind) => (
                  // <Link key={ind} to={card.nav} style={{ textDecoration: 'none' }}>
                  // <CardLayout>
                  //   <CardH2>{card.title}</CardH2>
                  // </CardLayout>
                  // </Link>
                  <BtnWrap>
                    <Button to={card.nav} smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                    col={card.col} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0} 
                    style={{ textDecoration: 'none' }}>{card.title}</Button>
                </BtnWrap>
              ))}
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} style={{height: "470px", width: "560px", float: "left"}}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
