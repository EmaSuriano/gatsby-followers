# Context

Without any doubts, 2018 was the year of Static Site Generator, there has been a huge explosion of new SSG just to name a few: GatsbyJS, Docz and many more. Also, inside the blog of Netlify they made a top 10 in 2018 which I highly recommend to check it!
https://www.netlify.com/blog/2018/08/09/10-static-site-generators-and-popular-uses-for-them-in-2018/

In this article I'm not going to talk about why you should build a static (for that I suggest reading this article --> https://www.netlify.com/blog/2016/05/18/9-reasons-your-site-should-be-static/), instead I'm going to talk about something that most of the people using it don't know about it, and it's the drawbacks of having a static web site

# Introducing the problem

If we look for the definition, the one I like the most is this one:

> A static website contains Web pages with fixed content. Each page is coded in HTML and displays the same information to every visitor. A static site can be built by simply creating a few HTML pages and publishing them to a Web server. **Since static Web pages contain fixed code, the content of each page does not change unless it is manually updated by the webmaster. ** - source

The same problem exists inside the Static Website Generator: if you want to change the content of the page, you MUST build the whole project again.

This may sound obvious because you are used to triggering a new deploy every time you add a new feature, but you don't trigger a new deploy when there is a new entry in your database change!

You can solve this issue by manually triggering a new deploy when something in your data source change, but once your application start to manage multiple data sources you have to start "watching" for more and more changes.

# Real example

I wrote a small application using [GatsbyJS](gatsby.com) which shows the followers of an user in different platforms:

- Github
- Twitter
- Medium
- Instagram

Each of the platform will be part of one data source in our application. In case you want to check the code, you can check [its repository](github.com/EmaSuriano/gatsby-followers).

To deploy the application, I picked Netlify. This may seems trivial for the post, but in the following the section this fact will be important. You can check the live page [here](gatsby-followers.netlify.com)

// Screenshot of the application

Okay everything seems okay, someone access to the URL and see the information. BUT, what if someone starts to follow that user after the application was deployed, then the number of followers won't change inside the site.

This is not problem of your code, Gatsby neither your hosting, it's the nature of Static Sites! You can see the deployed site as an instance of the application in a particular time. So in case one of our dependencies change its state we have to create a new instance of the application (deploy it).

Translating that into this project will be something like

> "Trigger a new deploy, everytime someone follows you on any of the platform"

// Gif de cansancio

# Solution

Fortunately there is a solution out there that can automatize this annoying task for us, and the best thing is that you don't need to write a single line of code 😄 Let me introduce you to Zapier.

// Logo de zapier

Zapier is an application that can create flows between different services, allowing you to define something that needs to happen on X service and its consequence on Y service.

For our example, everytime someone follows you on a platform then trigger a new deploy fo the application. The only drawback is that you need to one flow per platform you have integrated inside the application.

Therefore for the example you have to create 4 flows in total, but just to keep this article shorter I'm going to explain how to automatize Twitter. Nevertheless the process of adding the others is the same!

# Implementation

In order to create a new flow in Zapier, you have to click on the "Make a Zap" located in the top bar of the application. Here you will see the following interface, where they divide the creation process into two section:

- Trigger: What need to happen
- Action: What will happened after

Let's start with the Trigger then:

- Choose a Trigger App: search and select Twitter
- Select Twitter Trigger: New follower of Me.
- Choose Account: you might have to sign in and authorize Zapier to read some values from your account. After that, you are ready to start wathing new followers from your account.
- Test This Step: You can trigger a new fake follower so you can check if everything is in order. You can skip this step if you want.

Now that we have our trigger, let's set up our deploy step!

- Chose an Action App: search and select Netlify (or your deployment service).
- Choose Action: Pick Start a Deploy
- Choose Account: Log in with Netlify in order to see and select which project you want to deploy.
- Set up Template: Pick your site
