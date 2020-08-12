const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};


// let's destructure
// 
// 

const {twitter, facebook} = wes.links.social;
console.log(twitter,facebook)

const {blog} = wes.links.web;
console.log(blog)
