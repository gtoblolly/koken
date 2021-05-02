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

project.addEventListener('click', () => {
  const TargetProject = document.getElementById("target_project")
  const rect = TargetProject.getBoundingClientRect().top;
  const offset = window.pageYOffset;
  const gap = 50;
  const target = rect + offset - gap;
  window.scrollTo({
   top: target,
   behavior: "smooth"
 });
 });

 instance.addEventListener('click', () => {
  const TargetInstance = document.getElementById("target_instance")
  const rect = TargetInstance.getBoundingClientRect().top;
  const offset = window.pageYOffset;
  const gap = 50;
  const target = rect + offset - gap;
  window.scrollTo({
   top: target,
   behavior: "smooth"
 });
 });

 news.addEventListener('click', () => {
  const TargetNews = document.getElementById("target_news")
  const rect = TargetNews.getBoundingClientRect().top;
  const offset = window.pageYOffset;
  const gap = 50;
  const target = rect + offset - gap;
  window.scrollTo({
   top: target,
   behavior: "smooth"
 });
 });

});