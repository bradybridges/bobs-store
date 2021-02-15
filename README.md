# Bobs Store
# Table of contents
* [Live Site](#Live-Site)
* [Project Board](#Project-Board)
* [Technologies Used](#Technologies-Used)
* [Issues / Future Improvements](#Issues-/-Future-Improvements)
* [Screenshots](#Screenshots) 

# Live Site

<p>
  Live Site
  <a href="https://bobs-store.netlify.app">Here</a>
</p>

# Project Board

Check out the project board I used for this project [here](https://github.com/bradybridges/bobs-store/projects/1).

I really like using GitHub Projects for keeping track of progress. The built in automation is awesome!

# Technologies Used
- [React](https://reactjs.org)
- [Gatsby](https://gatsbyjs.org)
- [SASS/SCSS](https://sass-lang.com)
- [GitHub](https://github.com)
- [Netlify](https://netlify.com)

<p>

  I chose to use Gatsby as my framework for this project. Using Gatsby is definitely overkill for the size of this project, but entertaining the idea that this site is real and will be built out further, Gatsby is a great choice. Using Gatsby allowed me to get rolling on the project quickly by making it easy to get started with a base project and React. Not only is it easy to get going with Gatsby, but I am able to take advantage of Gatsby's build in page loading optimization and other features, as well as the ability to easily implement a blog or payment processing. This sets this project up to be scaled if we chose to continue building out Bob's Site.
  
  React was also a bit of overkill, I could have easily have completed this site with vanilla JS and CSS, but using React allowed me to keep my code more organized and speed up my development times.

  SCSS is also a very handy tool to me. The features built in to SCSS allowed me to target and manipulate elements more easily. Saving me some time. In the future if this site gains complexity we could add mixins and other things to alleviate repeated styles.

  Global CSS vars are nice to use to make commonly occurring styles easy to access and update. I commonly use CSS vars to store variables relating to spacing, color, typography, and etc.

  I chose to host Bob's Store on Netlify, primarily because of the ease of deployment and built in features. I find it very useful being able to see a "deploy preview" on a branch before code is merged.

</p>

# Issues / Future Improvements
- [ ] When data is being fetched loading indicators should be displayed to the user.
- [ ] There is a lot more data that we can display about our products from search results. It would be a great improvement to display some of this additional data.
- [ ] When there is an error displaying a remote image either display a placeholder or no image.
- [ ] Pagination could use improvement. When there are many pages of results it would be better to only show pages within a specified range of the current page.
- [ ] Snapshot Testing
- [ ] Unit Testing
- [ ] Configure TravisCI to handle CI/CD after we have some tests.

# Screenshots

![screencapture-localhost-8000-2021-02-15-09_36_36](https://user-images.githubusercontent.com/25031031/107972605-5439e500-6f71-11eb-9c86-e0f2b8cbb917.png)

