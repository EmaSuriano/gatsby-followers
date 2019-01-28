import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 19rem;
  height: 22.5rem;
  background-color: #f9fbfb;
  border-radius: 6px;
  position: relative;
  /* display: flex; */
  /* flex-direction: column; */
  color: #5a6c7a;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  box-shadow: 0 1rem 3rem #aac1c7;

  display: grid;
  grid-template-columns: 19rem;
  grid-template-rows: auto;
  grid-template-areas:
    'icon'
    'icon'
    'followers'
    'platform';
`

const IconSection = styled.section`
  grid-area: icon;
  display: flex;
`

const FollowersSection = styled.section`
  grid-area: followers;
`

const PlatformSection = styled.section`
  grid-area: platform;

  margin: 0 20px;
  border-top: 2px solid #e7edef;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  padding: 2rem;
  background: ${props => props.color};

  font-size: 3em;
  color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

type CardProps = {
  Icon: React.ReactNode
  platform: string
  followers: number
  color: string
}

const Card = ({ Icon, platform, followers, color }: CardProps) => (
  <Container>
    <IconSection>
      <IconWrapper color={color}>{Icon}</IconWrapper>
    </IconSection>
    <FollowersSection>{followers}</FollowersSection>
    <PlatformSection>{platform}</PlatformSection>
    {/* <div className="card__svg-container">
      <div className="card__svg-wrapper">
        {SVG}
        
      </div>
    </div>
    <div className="card__count-container">
      <div className="card__count-text">
        <span className="card__count-text--big">250</span> Million
      </div>
    </div>
    <div className="card__stuff-container">
      <div className="card__stuff-icon">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 13"
        >
          <path
            fill="#6a7a87"
            d="M9.4,2L9.2,2.3v0.4v7.6v0.4L9.4,11H3.6l0.3-0.3v-0.4V2.7V2.3L3.6,2H9.4 M12,1H1l1.8,1.7v7.6L1,12h11l-1.8-1.7V2.7L12,1L12,1z"
          />
          <line
            fill="none"
            stroke="#6a7a87"
            className="st0"
            x1="3"
            y1="6.5"
            x2="10"
            y2="6.5"
          />
        </svg>
      </div>
      <div className="card__stuff-text"> Gallons of oil</div>
    </div> */}
  </Container>
)

export default Card
