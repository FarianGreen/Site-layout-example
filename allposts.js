const anchorsPost = document.querySelector('#posts')
const buttonPosts = document.querySelector('.all-posts')
const posts = document.querySelectorAll('.post')



buttonPosts.addEventListener("click", ()=>{
   posts.forEach((item)=> item.classList.toggle('is-vivible-post'))
   if(!posts[0].matches('is-vivible-post')){
      anchorsPost.scrollIntoView({ behavior: "smooth", block: "start" });
   }
   
})