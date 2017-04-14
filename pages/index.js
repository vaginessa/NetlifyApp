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
      {/* Rank your 5 favorite, and least favorite, activities from this 
          list: https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6 */}  
        <ul className="collection with-header">
          <li className="collection-header"><h4>My Top 5 Support Activities</h4></li>
          <li className="collection-item">5. Respond to 60+ support requests via email or chat every day</li>
          <li className="collection-item">4. Debug a customer's build using a programming language and framework that you've never seen before</li>
          <li className="collection-item">3. Write and maintain documentation for our software and blog posts for our website.</li>
          <li className="collection-item">2. Work with the development team to help design a new feature based on feedback from customers</li>
          <li className="collection-item">1. Work with people to figure out if Netlify's service can solve a particular workflow or integration challenge they have</li>
        </ul>
      {/* What is your favorite thing about providing technical support? */}      
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <span className="white-text"><strong>My favorite thing about providing technical support is</strong> the variety. It’s 
                difficult to pick only one thing, since I love the challenges, working with different technologies, and working with both technical and non-technical 
                people. I love being in that intersection between humanity and technology. But in the end the best way to summarize 
                everything I love about providing technical support is the variety. I get to work with many different types of companies, 
                people, and technologies. I get to apply my skills in many ways, and the growth potential is almost limitless.
              </span>
            </div>
          </div>
        </div>
      {/* What did you think of our service during the time you used it?  Be honest!  “it sucked” 
          isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;) */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <span className="white-text"><strong>I think Netlify is a pretty awesome service.</strong> I’m not just saying that! 
                Before finding the job listing I never knew it existed. I have only recently begun looking in to learning how to use 
                Docker, and github deployments. I didn’t know that a service like Netlify automated the process in addition to providing 
                a CDN. Getting this single page up and running didn’t take long at all, and it’s faster than the hosting I have setup 
                with digitalocean. One thing I’m curious about is what the bandwidth and storage limits are since it’s not immediately 
                obvious when looking at the pricing page.
              </span>
            </div>
          </div>
        </div>
      {/* Tell about how you made your site and why you chose the tools you did.
          Briefly explain a challenge you experienced in setting up this site and how you solved it. */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <span className="white-text"><strong>The biggest challenge I faced while building this site was using Gatsby. </strong> 
                While I have experience using React to build full web apps, and I’m currently learning React Native, I have never used 
                Gatsby before this project. Luckily building React components is familiar to me, but much was changed since Gatsby uses 
                templates, does not give direct access to React Router, and uses a different directory structure with some new files. 
                It also has a different ways of setting up the default html file. I read through the Github repo, looked at some examples, 
                added materialize.css to help with styling, then I was up and running pretty quickly. I’m also using React’s inline 
                styling, and JS based styling in some places rather than a separate CSS file.
              </span>
            </div>
          </div>
        </div>
      {/* Could you give us a suggestion to improve this test or the job posting? */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <span className="white-text"><strong>It's difficult to provide suggestions on the testing and job posting. </strong> 
                Particularly so because I’m still a bit in the dark about what the actual moment to moment work will be like. 
                Based on that, the best advice I can give is to provide more information on what a day is like for a Support Engineer 
                at Netlify. That would add context the information already given so that candidates will have a better feel for the job, 
                and be better able to answer the questions asked.
              </span>
            </div>
          </div>
        </div>
      {/* Provide a link to documentation for a technical/developer-focused product, that you think are well done, 
          and briefly explain why you think they are well done. */}
        <div className="row">
          <div className="col s12">
            <div className="card grey darken-2">
              <div className="card-content white-text">
                <span className="card-title">Digital Ocean Tutorials</span>
                <p>I love the tutorials at Digital Ocean! The instructions are easy to follow and provide explanations as to what each step 
                   does, and why it’s important. They also include tangential information that you may not have been looking for, but is 
                   otherwise useful when performing the action you are reading the tutorial for. Where it’s applicable, they also explain 
                   concepts to help you understand the tutorial better.</p>
              </div>
              <div className="card-action">
                <a href="https://www.digitalocean.com/community/tutorials">https://www.digitalocean.com/community/tutorials</a>
              </div>
            </div>
          </div>
        </div>
      {/* Why do you think SSL/HTTPS is important? */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <span className="white-text"><strong>It's difficult to provide suggestions on the testing and job posting. </strong> 
                Particularly so because I’m still a bit in the dark about what the actual moment to moment work will be like. 
                Based on that, the best advice I can give is to provide more information on what a day is like for a Support Engineer 
                at Netlify. That would add context the information already given so that candidates will have a better feel for the job, 
                and be better able to answer the questions asked.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;