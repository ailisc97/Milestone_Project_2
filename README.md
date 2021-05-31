# Milestone Project 2

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
## Table of Contents
* [Purpose](#Purpose)
* [User Experience Design (UX)](#User-Experience-Design)
  * [User stories](#User-Stories)
    * [First Time Visitor Goals](#First-Time-Visitor-Goals)
    * [Returning Visitor Goals](#Returning-Visitor-Goals)
    * [Frequent User Goals](#Frequent-User-Goals)
  * [Structure](#Structure)
  * [Design](#Design)
    * [Colour Scheme](#Colour-Scheme)
    * [Typography](#Typography)
    * [Wireframes](#Wireframes)
* [Limitations](#Limitations)
- [Features](#Features)
    * [Existing Features](#Existing-Features)
    * [Future Features](#Features-Left-to-Implement)
* [Technologies](#Technologies)
* [Testing](#Testing)
    * [Test Strategy](#Test-Strategy)
      * [Summary](#Summary)
      * [High Level Test Cases](#High-Level-Test-Cases)
      * [Out of Scope](#Out-of-Scope)
    * [Test Results](#Test-Results)
    * [Testing Issues](#Issues-and-Resolutions-to-issues-found-during-testing)
* [Deployment](#Deployment)
    * [Project Creation](#Project-Creation)
    * [GitHub Pages](#Using-Github-Pages)
    * [Locally](Run-Locally)
* [Credits](#Credits)
  * [Content](#Content)
  * [Acknowledgements](#Acknowledgements)
  * [Comments](#Comments)


## Purpose
This website was created for Milestone Project 2 in the Software Development Course for Code Insitute. The languages used in the project are the languages which have been thought in the course up until now, which include, HTML, CSS, JS, User Centric Design and Interactive Front End Development.

The live website can be found [here](https://github.com/ailisc97/Milestone_Project_2.git)

## Ping Pong Game Responsive Website

![Website Mock Up] (assets/images/)

Ping Pong Game is based on the popular, and one of the first video games ever created, Pong. Pong was developed in 1972 with the game simulating a Ping Pong Game. User goes up against the computer and is a two dimensional graphic game. Another element of this website is the Contact Form which incorporates the use of EmailJS which is another JavaScript component which I've learned on the course. It gives the user a chance to show off their top score in the hopes to win stickers of the popular game, Pong.


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
## User Experience Design

### User stories
#### First Time Visitor Goals
* As a First Time user,I want to easily and quickly navigate the website to play the Pong Game.
* As a First Time user, I want to easily and quickly navigate the website to send my Ping Pong Scores.
* As a First Time user, I want to access the Social Media links.
* As a First Time user, I want to where the website was made.

#### Returning Visitor Goals
* As a Returning User, I want to know how to contact the makers of the game.
* As a Returning user, I want to keep inputting my scores into the form, to recieve stickers.

#### Frequent Visitor Goals
* As a Frequent user, I want to get better and better at playing the game so my score can increase. 
* As a Frequent user, I want to keep inputting my scores into the form, to recieve stickers.

### Structure
All Pages will have a Navigation bar (using Bootstrap) at the top of the Webpage that allows the User to easily navigate between the different pages of the site.
The purpose of this is to fulfill user story:
> As a First Time user, I want to easily and quickly navigate the website to send my Ping Pong Scores.

The Home Page will contain the Ping Pong Game. The purpose of this is to fulfill user story:
> As a First Time user,I want to easily and quickly navigate the website to play the Pong Game.
> As a Frequent user, I want to get better and better at playing the game so my score can increase.

In the Footer there will be links to find the Social Media pages.
> As a First Time user, I want to access the Social Media links.

The Footer will also inform the user when and where the website was made.
>As a First Time user, I want to where the website was made.

The Footer will have contact information for the user to get in touch with the game developers.
> As a Returning User, I want to know how to contact the makers of the game.

The contact page will allow users to tell the people who made the website what score they got, and if they are in with a chance of winning sticker.
> As a First Time user, I want to easily and quickly navigate the website to send my Ping Pong Scores.
> As a Returning user, I want to keep inputting my scores into the form, to recieve stickers.
> As a Frequent user, I want to keep inputting my scores into the form, to recieve stickers.

### Design
#### Colour Scheme
The background colour used is Grey as is the nav bar and the footer. The Ping Pong game has a black background and a white score, ball and paddle.

In the form page (result.html) the form it's self is a blue (#1d9677).

In the footer all components are a navy blue (#072bf7) and when hovered over the media links and phone and email number it is the same colour as the form (#1d9677).

####  Typography
The font on the website is **Roboto**. This font was off Google Fonts.

#### Wireframes
Home Page-Desktop<br>
![Home Page Wireframe](asssets/)


- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

### Limitations
The biggest limitation I faced is that when playing the Pong game the ball seems to get stuck on the computer paddle. This is most likely something to do with the y-axis positioning. I did play around with this but I had no luck. Once this happens the game can be restarted by hitting the refresh button on the browser.

Another limitation I faced is that then the page is in the browser you can to select the src folder, then the game and the pages work.

A small limitation was getting a net on the game to work, it was more of a cosmetic choice that I could have liked to have.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

## Features
 
### Existing Features
The Nav bar, footer and form were all from Bootstrap.

### Features Left to Implement
If I could have fixed the issue with the ball getting stuck in the paddle, as mentioned in the limitation section, that would have been most important to next implement.

## Technologies
  
* HTML
	* This project uses HTML as the main language used for the Website.
* CSS
	* This project uses CSS to style the Website.
* JavaScript
    * This project uses JS to have the game being able to function and the sendEmail which sends me an email when someone clicks  submit on the form.
* [Bootstrap](https://getbootstrap.com/)
	* The Bootstrap framework is used for Navigation bar, the carousel and the contact us form.
* [Font Awesome](https://fontawesome.com/)
	* Font awesome Icons are used for the Social media links on the footer of every page.
* [Google Fonts](https://fonts.google.com/)
	* Google fonts are used throughout the project to import the *Roboto* font.
* [GitPod](https://www.gitpod.io/)
    *GitPod is used to develop the website and where the code for the website was wrote.
* [GitHub](https://github.com/)
	* GitHub is the site used to store the code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
* [Git](https://git-scm.com/)
	* Git is used as software to commit and push code to the GitHub repository where the source code is stored.
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
	* Google chromes built in developer tools are used to inspect page elements in various different sized. It also helped debug issues and test different CSS styles.
* [Techsini](http://techsini.com/multi-mockup/index.php)
    * tecnisih.com Multi Device Website Mockup Generator was used to create the Mock up image in this README

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
## Testing

### Test Strategy 

#### Summary 

Testing is required on Milestone Project 2.


The live Project can be found [here](https://github.com/ailisc97/Milestone_Project_2.git).</br>
#### High Level Test Cases 
![Test Cases](assets/images/)

#### Out of Scope  
* There is no way to save forms.

### Test Results
Testing results can be found [here](assets/images/)<br>
This results are a .xlsx file and will need excel to open. <br>
All Pages were run through the [W3C HTML Validator](https://validator.w3.org/), there was no errors.<br>
CSS Stylesheet was run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_uri),there was no errors.<br>

* As a First Time user,

* As a Returning user, 

* As a Frequent user, 

### Issues and Resolutions to issues found during testing

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
## Deployment

### Project Creation
I created a repository in Github and called it Milestone_Project 2, I selected to add a README into the project. When I went into the repository, I clicked the GitPod button on the top right and that opened GitPod for me. I used Git to add, commit and push all my saved work from GitPod.

* git add . -This would add all the work from the different pages to the GitHub.
* git add index.html -Would only save the work from Index.html
* git pull - This would pull the GitHub version of my project.
* git commit -m "MESSAGE" - This would commit the added work from git add . and leave a message beside it.
* git push- This pushed the added work to GitHub
* python3 -m http.server - This opened the website on the right hand side of the page.

### Using Github Pages
1. On the GitHub [Repository:](https://github.com/ailisc97/Milestone_Project_2.git)
1. Click the 'Settings' Tab on the right hand side.
1. Click on options.
1. Scroll Down to the Git Hub Pages Heading.
1. Select 'main' as the source.
1. Click the Save button.
1. Click on the link to go to the deployed page

### Run Locally
1. On the GitHub [Repository:](https://github.com/ailisc97/Milestone_Project_2.git)
1. Click on the download code button, you will get options to clone the GitHub Repository or Download the Zip file.
1. If you downloaded the zip file open the file using one of your IDE application.
1. Or if you choice to clone the GitHub Repository, then open up a terminal and get to a directory of your choice then type in "git clone" followed by the GitHub Repository URL.
1. The clone will be created on your loacal machine. 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
## Credits

### Code
Code for the Navigation bar, form and the contact us form. was taken from [Bootstrap](https://getbootstrap.com/).

I took insperation from different youtube videos and webpages that discribed what needed to be done for the Ping Pong Game.
[YouTube](https://www.youtube.com/watch?v=3UjU7r5qOxY).
[YouTube](https://www.youtube.com/watch?v=nl0KXCa5pJk)
[YouTube](https://www.youtube.com/watch?v=x3Z4nLs7bnw)
[YouTube](https://www.youtube.com/watch?v=ju09womACpQ)
[YouTube](https://www.youtube.com/watch?v=nl0KXCa5pJk&list=RDCMUC8n8ftV94ZU_DJLOLtrpORA&start_radio=1&t=2790s)
[YouTube](https://www.youtube.com/watch?v=IIrC5Qcb2G4)
[YouTube](https://www.youtube.com/watch?v=m6H6SHIdAhQ)
[Webpage](https://thecodingpie.com/post/learn-to-code-ping-pong-game-using-javascript-and-html5)
[Webpage](https://codepen.io/gdube/pen/JybxxZ)
[Webpage](https://kellylougheed.medium.com/javascript-pong-with-p5-js-3ae1b859418c)

One page linked below is the YouTube video, which helped me with the sendEmail.js
[YouTube](https://www.youtube.com/watch?v=NgWGllOjkbs)
### Content
Content was created by Ailis Curran.

### Acknowledgements
I would like to thank my mentor Spencer Barriball for all his help throughout the project.

### Comments
README.md insperation was taken from my previous Milestone Project. It gave me a template to complete my README, all README content is my own.

When loading the page from the browser please select the src folder and then the pages will load correctly. 