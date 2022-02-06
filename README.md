<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TEESH</h3>

  <p align="center">
    Front End challenge
    <br />
    <a href="https://wonderful-meitner-40ec12.netlify.app/">View demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-development">Project development</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Project development

The first thing whe notice is that in this type of landing pages its important to keep in mind the use of semantic elements as `<article></article>`, `<section></section>`, `<aside></aside>` etc...

### Hero

This part was kind of hard to complete, because the tricky thing was the image, but I could solve it with a `transform: translate` css propertie, and then I had to manage the imaginary extra height of the image with some margin-bottom on the hero.

### Why Us Section

This was easy, its a simple flex container, that will turn into a flex container in column direction at a certain breakpoint. The interaction also was easy. I decided to make bigger the clickable area because its a common UX problem that its hard for users to click on small areas when its being used from mobile devices.

### Footer or CTA section

This one can be done in a lot of ways, just respecting the aspect ratio of the image. About overlay on the image, I did it just putting the `background-color: black` and then setting the opacity of the image in 0.6. For me this is the easier way to do it.

### Modal

I thing this was a very important part, because I had to consume an API, so, when we fetch and endpoint, at least, we must be prepared with 3 states.

<strong>Loading: </strong>
You have show to the user an indicator to know that the data is being prepared, I decided to use the skeleton loading technique, which you can see that is used for example in Uber, Uber Eats, Mercado libre, LinkedIn and a lot more...<br/>
(Simulation of a very slow connection)

https://user-images.githubusercontent.com/42155516/152661948-2c28691a-32e1-4f2d-a739-960b12d9ae41.mp4

<br/>
<strong>Success: </strong> In this case I only have to show the data to the user:
<br />
<img src="https://awesomescreenshot.s3.amazonaws.com/image/2541708/21614666-adf2ed79d654668f2c05cab047b0e434.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220205T230846Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=ff3ff4127d216a5904a6cdc289d8b90e4d34bf73778e8a03de6507a69ea41cc4" width='800' />
<br/>
<strong>Error: </strong>
This is a simulation if the promise of the fetch is rejected, you have to indicate to the user that something is not working, and also a solution, in this case, try again later and a button to close the modal.
<br/>
<img src="https://awesomescreenshot.s3.amazonaws.com/image/2541708/21614690-7b1f202895ed53e69e4473e8cc7e3081.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220205T231001Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=8598543d31ac058fc172f8c90a4bf74d6c325ac7f5cde38cfba85e279e3fd427" width='800' />
<br/>

In the modal, I also had to make the design for the modal in smaller versions, so, I made a research on Dribble, and I also saw how other big platforms manage it, such as Amazon, MercadoLibre, Facebook, Microsoft Teams etc... I selected the best thing of each one and make my design.

### Tools used

As the test require to test HTML, CSS and JS skills I decided to use React js but with nothing on it.
I didn't use any state manager because of the size of the project it was very overkill to use context or redux, also, this was not a React interview.

I used pure CSS following <a href="https://github.com/airbnb/css">the Airbnb styleguides with BEM</a>

### Prerequisites

To run the project on local you must have node installed

https://nodejs.org/es/download/

### Installation

To see the deployed proyect visit:
https://wonderful-meitner-40ec12.netlify.app/

And to install it locally follow these steps:

1. Clone the repo
   ```sh
   git clone https://github.com/Jesuscc9/frontend-challenge
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the app
   ```sh
   npm start
   ```
