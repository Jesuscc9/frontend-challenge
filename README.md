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
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
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
## About The Project

The first thing whe notice is that in this type of landing pages its important to keep in mind the use of semantic elements as `<article></article>`, `<section></section>`, `<aside></aside>` etc...

### Hero
This part was kind of hard to complete, because the tricky thing was the image, but we could solve it with a `transform: translate` css propertie, and then we had to manage the imaginary extra height image with some margin-bottom on the hero.

### Why Us Section
This was easy, its a simple flex container, that will turn into a flex container in column direction at a certain breakpoint. The interaction also was easy. I decided to make bigger the clickable area because its a common UX problem that its hard to users to click on small areas when its being used from mobile devices.

### Footer or CTA section
This one can be done o a lot of ways, just respecting the aspect ratio of the image. Also, the overlay on the image I did it just putting the background-color: black and then setting the opacity of the image in 0.6, which for me is the easier way to do it.

### Modal
I thing this was a very important part, because we were consuming an API, so, when we fetch and endpoint, at least, we must expect and be prepared for 3 states.


1-. Loading
We should show to the user an indicator to know that the data is being prepared, I decided to use the skeleton loading technique, which you can see that is used for example in Uber, Uber Eats, Mercado libre, LinkedIn and a lot more...<br/>
(Simulation of a very slow connection)


https://user-images.githubusercontent.com/42155516/152661948-2c28691a-32e1-4f2d-a739-960b12d9ae41.mp4


<br/>
2-. Success
In this case I only have to show the data to the user:
<img src="https://awesomescreenshot.s3.amazonaws.com/image/2541708/21614666-adf2ed79d654668f2c05cab047b0e434.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220205T230846Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=ff3ff4127d216a5904a6cdc289d8b90e4d34bf73778e8a03de6507a69ea41cc4" width='800' />
<br/>
3-. Error
This is a simulation if the promise of the fetch is rejected, we have to indicate to the user that something is not working, and also a solution, in this case, try again later and a button to close the modal.
<img src="https://awesomescreenshot.s3.amazonaws.com/image/2541708/21614690-7b1f202895ed53e69e4473e8cc7e3081.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220205T231001Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=8598543d31ac058fc172f8c90a4bf74d6c325ac7f5cde38cfba85e279e3fd427" width='800' />
<br/>

### Tools used

As the test require to test the basic HTML, CSS and JS skills I decided to use React.Js but with nothing on it.
I didnt use any state manager because of the size of the project it was very overkill to use context or redux, also, this was not a React interview.
* [React.js](https://reactjs.org/)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

