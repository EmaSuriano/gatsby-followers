import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/Card'
import { FaTwitter } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="title">
      <p>One Year of</p>
      <p>Receipts Takes</p>
    </section>
    <section class="cards">
      <Card
        platform="Twitter"
        followers={12312}
        Icon={<FaTwitter />}
        color="#1da1f2"
      />
      {/* <div class="card card--tree">
        <div class="card__svg-container">
          <div class="card__svg-wrapper">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
            >
              <circle cx="40" cy="40" r="39" fill="#6abf60" />
              <g id="Branches">
                <polygon
                  id="topBranches"
                  fill="#FFFFFF"
                  points="40.1,19.8 51.2,43.1 29,43.1"
                />
                <polygon
                  id="botBranches"
                  fill="#FFFFFF"
                  points="40,28 52,54.3 28,54.3"
                />
              </g>
              <rect
                id="Trunk"
                x="37.7"
                y="53.8"
                fill="#FFFFFF"
                width="4.7"
                height="6"
              />
              <rect
                id="Particle"
                x="37.9"
                y="54.3"
                fill="#FFFFFF"
                width="2"
                height="2"
              />
              <polygon
                id="Axe"
                fill="#FFFFFF"
                points="0.7,5.3 7.3,5.3 7.3,10.2 4,20.3 0.7,10.2"
              />
            </svg>
          </div>
        </div>
        <div class="card__count-container">
          <div class="card__count-text">
            <span class="card__count-text--big">10</span> Million
          </div>
        </div>
        <div class="card__stuff-container">
          <div class="card__stuff-icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13 13"
            >
              <polygon
                fill="none"
                stroke="#6a7a87"
                points="3.5,1.5 5.5,1.5 5.5,5 9.5,1.5 9.5,9 11,11.5 2,11.5 3.5,9 "
              />
            </svg>
          </div>
          <div class="card__stuff-text"> Trees cut </div>
        </div>
      </div>
      <div class="card card--water">
        <div class="card__svg-container">
          <div class="card__svg-wrapper">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
            >
              <circle cx="40" cy="40" r="39" fill="#60cbe7" />
              <g id="waveGroup">
                <path
                  id="waveTop"
                  fill="#FFFFFF"
                  d="M93,34.1c-3.5,0-5.8-1.1-8.1-4.1h0c-1.6,3-4.9,4.3-8.4,4.3c-3.5,0-6.1-1.3-8.4-4.3h0c-1.6,3-5.1,4.1-8.6,4.1
	c-3.5,0-6.6-2-8.6-4.6v0c-2,2.6-4.5,4.3-8,4.3c-3.5,0-6-1.7-8-4.3v0c-2,2.6-5.1,4.5-8.6,4.5c-3.5,0-6.3-1.1-8.5-4.1h0
	c-1.6,3-4.9,4.3-8.4,4.3C6,34.3,3.3,33,1.1,30h0c-1.6,3-4.5,4.1-8,4.1c-3.5,0-6-2-8-4.6v0c-2,2.6-5.5,4.3-9,4.3c-3.5,0-6-1.7-9-4.3
	v6.6c3,1.5,5.6,2.3,8.6,2.3s6.2-0.9,8.5-2.3c2.2,1.5,5.4,2.3,8.5,2.3s6.1-0.9,8.4-2.3c2.2,1.5,5.4,2.3,8.4,2.3s6.1-0.9,8.4-2.3
	c2.2,1.5,5.4,2.3,8.4,2.3s6.1-0.9,8.4-2.3c2.2,1.5,5.3,2.3,8.4,2.3s6.1-0.9,8.4-2.3c2.2,1.5,5.3,2.3,8.4,2.3s6.1-0.9,8.4-2.3
	c2.2,1.5,5.3,2.3,8.4,2.3s6.1-0.9,8.4-2.3c2.2,1.5,5,2.3,8,2.3s6-0.9,8-2.3v-6.6C100,32.1,96.5,34.1,93,34.1z"
                />
                <path
                  id="waveBot"
                  fill="#FFFFFF"
                  d="M98,46.1c-3.5,0-5.8-1.1-8.1-4.1h0c-1.6,3-4.9,4.3-8.4,4.3c-3.5,0-6.1-1.3-8.4-4.3h0c-1.6,3-5.1,4.1-8.6,4.1
	c-3.5,0-6.6-2-8.6-4.6v0c-2,2.6-4.5,4.3-8,4.3c-3.5,0-6-1.7-8-4.3v0c-2,2.6-5.1,4.5-8.6,4.5c-3.5,0-6.3-1.1-8.5-4.1h0
	c-1.6,3-4.9,4.3-8.4,4.3C11,46.3,8.3,45,6.1,42h0c-1.6,3-4.5,4.1-8,4.1c-3.5,0-6-2-8-4.6v0c-2,2.6-5.5,4.3-9,4.3c-3.5,0-6-1.7-9-4.3
	v6.6c3,1.5,5.6,2.3,8.6,2.3s6.2-0.9,8.5-2.3c2.2,1.5,5.4,2.3,8.5,2.3s6.1-0.9,8.4-2.3c2.2,1.5,5.4,2.3,8.4,2.3s6.1-0.9,8.4-2.3
	c2.2,1.5,5.4,2.3,8.4,2.3c3,0,6.1-0.9,8.4-2.3c2.2,1.5,5.3,2.3,8.4,2.3s6.1-0.9,8.4-2.3c2.2,1.5,5.3,2.3,8.4,2.3
	c3,0,6.1-0.9,8.4-2.3c2.2,1.5,5.3,2.3,8.4,2.3s6.1-0.9,8.4-2.3c2.2,1.5,5,2.3,8,2.3s6-0.9,8-2.3v-6.6C105,44.1,101.5,46.1,98,46.1z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div class="card__count-container">
          <div class="card__count-text">
            <span class="card__count-text--big">One</span> Billion
          </div>
        </div>
        <div class="card__stuff-container">
          <div class="card__stuff-icon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13 13"
            >
              <path
                fill="none"
                stroke="#6a7a87"
                d="M1,1.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2"
              />
              <path
                fill="none"
                stroke="#6a7a87"
                d="M1,5.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2"
              />
              <path
                fill="none"
                stroke="#6a7a87"
                d="M1,9.5c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2c0.9,0,0.9-2,1.8-2c0.9,0,0.9,2,1.8,2s0.9-2,1.8-2"
              />
            </svg>
          </div>
          <div class="card__stuff-text"> Gallons of water</div>
        </div>
      </div> */}
    </section>
  </Layout>
)

export default IndexPage
