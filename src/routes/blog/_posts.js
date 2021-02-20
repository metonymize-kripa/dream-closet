// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: 'What is the dream closet?',
    slug: 'dream-closet',
    html: `
			<p> - We have a "vanilla" closet to start
<br>- Based on what the customer looked at, you get the closet getting filled in with #, $ value, brand, color, use case
<br>- As customers enter more info, the closet gets filled differently
<br>- In an evolved state, they can remove things from the closet, replace it... add things to it from other websites
<br>- It also becomes an idea generator over time
<br>- It also serves as an inventory of what you have
<br>- You could create plugins with Poshmark if you wanted to sell something </strong></p>
		`
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
