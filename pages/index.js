import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

class Index extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />

        <ul className="collection with-header">
          <li className="collection-header"><h4>My Top 5 Support Activities</h4></li>
          <li className="collection-item">5. Work with people to figure out if Netlify's service can solve a particular workflow or integration challenge they have</li>
          <li className="collection-item">4. Debug a customer's build using a programming language and framework that you've never seen before</li>
          <li className="collection-item">3. Write and maintain documentation for our software and blog posts for our website.</li>
          <li className="collection-item">2. Work with the development team to help design a new feature based on feedback from customers</li>
          <li className="collection-item">1. Respond to 60+ support requests via email or chat every day</li>
        </ul>
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <span className="white-text"><strong>My favorite thing about providing technical support is</strong> The variety. It’s 
                difficult to pick only one thing, since I love the challenge, and the ability to work with technical and non-technical 
                people. I also love being in that intersection between humanity and technology. But in the end the best way to summarize 
                everything I love about providing technical support is the variety. I get to work with many different types of companies, 
                people, and technologies. I get to apply my skills in many ways, and the growth potential is almost limitless.
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <span className="white-text"><strong>I think Netlify is a pretty awesome service.</strong> I’m not just saying that! 
                Before finding the job listing I never knew it existed. I have only recently begun looking in to learning how to use 
                Docker, and attempting to setup deployments. I didn’t know that a service like Netlify automated the process. Getting 
                this single page up and running didn’t take long at all, and it’s faster than the hosting I have setup with 
                digitalocean. One thing I’m curious about is what the bandwidth and storage limits are since it’s not immediately 
                obvious when looking at the pricing page.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;