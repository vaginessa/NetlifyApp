import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

class Index extends Component {
  render () {
    return (
      <div>
      {/* Helmet has the metadata for the index */}
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
              <p className="white-text"><strong>My favorite thing about providing technical support is</strong> the variety. It’s 
                difficult to pick only one thing, since I love the challenges, working with different technologies, and working with both technical and non-technical 
                people. I love being in that intersection between humanity and technology. But in the end the best way to summarize 
                everything I love about providing technical support is the variety. I get to work with many different types of companies, 
                people, and technologies. I get to apply my skills in many ways, and the growth potential is almost limitless.
              </p>
            </div>
          </div>
        </div>
      {/* What did you think of our service during the time you used it?  Be honest!  “it sucked” 
          isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;) */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <p className="white-text"><strong>I think Netlify is a pretty awesome service.</strong> I’m not just saying that! 
                Before finding the job listing I never knew it existed. I have only recently begun looking in to learning how to use 
                Docker, and github deployments. I didn’t know that a service like Netlify automated the process in addition to providing 
                a CDN. Getting this single page up and running didn’t take long at all, and it’s faster than the hosting I have setup 
                with digitalocean. One thing I’m curious about is what the bandwidth and storage limits are since it’s not immediately 
                obvious when looking at the pricing page.
              </p>
            </div>
          </div>
        </div>
      {/* Tell about how you made your site and why you chose the tools you did.
          Briefly explain a challenge you experienced in setting up this site and how you solved it. */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <p className="white-text"><strong>The biggest challenge I faced while building this site was using Gatsby. </strong> 
                While I have experience using React to build full web apps, and I’m currently learning React Native, I have never used 
                Gatsby before this project. Luckily building React components is familiar to me, but much was changed since Gatsby uses 
                templates, does not give direct access to React Router, and uses a different directory structure with some new files. 
                It also has a different ways of setting up the default html file. I read through the Github repo, looked at some examples, 
                added materialize.css to help with styling, then I was up and running pretty quickly. I spent more time getting the Webpack
                File-loader working properly to get the _redirects file in the root directory during the build process than I did getting
                Gatsby up and running.
              </p>
            </div>
          </div>
        </div>
      {/* Could you give us a suggestion to improve this test or the job posting? */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <p className="white-text"><strong>It's difficult to provide suggestions on the testing and job posting. </strong> 
                Particularly so because I’m still a bit in the dark about what the actual moment to moment work will be like. 
                Based on that, the best advice I can give is to provide more information on what a day is like for a Support Engineer 
                at Netlify. That would add context to the information already given so that candidates will have a better feel for the job, 
                and also be better able to answer the questions asked.
              </p>
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
              <p className="white-text"><strong>SSL/HTTPS is important because security and privacy are important. </strong> 
                People share a lot personal information online. From private details about their lives to payment information. 
                I believe that they have a right to have their data secure. They also have a right to a certain level of privacy and 
                security from malicious groups and in some cases, governments. It is good practice for sites and services to encrypt 
                connections via SSL and use HTTPS to ensure there that data can be transferred securely across the internet.</p>
                <p className="white-text">
                I personally pushed for the company I currently work for to implement SSL everywhere, instead of only when logging in. 
                This is because it also gives people peace of mind. It is more than just keeping your private information secure from 
                hackers. This is particularly of importance in recent years with ISP’s selling web surfing data and logging user actions 
                not just when surfing, but also the various IoT devices they are using on their neworks. More SSL and a greater emphasis 
                on security and privacy is a good thing, and a net win for society as a whole, and the protection of individual liberties.
        
              </p>
            </div>
          </div>
        </div>
      {/* Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for 
          less-technical internet end-users */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <p className="white-text"><strong>Two major challenges for non-tech savvy users configuring DNS are it's complexity,
                and the the different setup options. </strong> The broad definition for DNS is simple to understand, but there are multiple 
                ways and combinations to setup DNS for domain names, and services. “A” records for IP resolution, "CNAME" to point to another 
                domain, "MX" for e-mail, "SRV" records, etc.  If you use your domain for Google Apps, or Microsoft’s 365 suite, you end up 
                configuring so many things that if you aren’t trained in this technology, you’ll quickly be lost. DNS can be used not just 
                for pointing a domain at an IP but to help with load balancing and other concepts that someone who is not tech-savvy will 
                have a hard time understanding. </p>
      
                <p className="white-text">
                An extension of this complexity is that there are also multiple ways of using DNS to achieve similar goals. For instance, 
                you may setup "CNAME" to point your domain to another server that has a domain setup, or “A” records to point straight at 
                your servers IP, the IP of your load balancer, etc., 301 redirect to send visitors to another URL, and so forth. These all 
                use DNS to send people going to your domain to a particular server, but they each have slightly different use-cases. 
                Because of the variety and complexity of DNS, in addition to the adjacent concepts and technologies related to using DNS, 
                it can be hard for non-tech savvy users to get a handle on it.

              </p>
            </div>
          </div>
        </div>
       {/* A customer writes in saying their “site won’t build”.  Compose your best short (2-paragraph) customer-facing answer without 
           any additional data, that could be useful in the generic case but would also lead to a customer providing a more actionable 
           response. */}
        <div className="row">
          <div className="col s12">
            <div className="card-panel blue darken-1">
              <p className="white-text"><strong>Thank you for contacting us. I’m Gerald and I’d be happy to assist you. </strong> 
                Are you able to build the site on your own development machines? If so, please note that our build environments may be 
                different from yours. We have an article that describes our build environment, and some debugging suggestions, along 
                with instructions on how to setup your own docker container that is configured the same as ours. You can find this 
                information at: <Link style={styles.link} to="https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/">
                https://www.netlify.com/blog/2016/10/18/how-our-build-bots-build-sites/</Link></p>

                <p className="white-text">
                We also provide build logs from the deploy tab of your app page. I certainly understand how frustrating this process can 
                be; If you are still having trouble, feel free to reply to this e-mail with copies of your logs and we’ll go through them 
                to find where the build is breaking. In either case we’ll follow up with you to see how things are coming along. If there
                is anything else that we can assist you with, or if you have any other questions, please ask. Thanks again. </p>
                
                <p className="white-text">
                Gerald O.

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  link: {
    color: "#f5f5f5",
    textDecoration: "underline"
  }
}

export default Index;