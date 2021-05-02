window.addEventListener('turbolinks:load', () => {
const guide = document.getElementById("guide")
const project = document.getElementById("project")
const instance = document.getElementById("instance")
const news = document.getElementById("news")

guide.addEventListener('click', () => {
 const TargetGuide = document.getElementById("target_guide")
 const rect = TargetGuide.getBoundingClientRect().top;
 const offset = window.pageYOffset;
 const gap = 50;
 const target = rect + offset - gap;
 window.scrollTo({
  top: target,
  behavior: "smooth"
});
});

});