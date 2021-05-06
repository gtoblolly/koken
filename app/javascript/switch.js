window.addEventListener('turbolinks:load', () => {
  const thumbs1 = document.querySelectorAll('.thumb1');
  thumbs1.forEach(function(item,index){
  item.onclick = function(){
    document.getElementById("bigimg1").src = this.dataset.image;
  }
});

  const thumbs2 = document.querySelectorAll('.thumb2');
  thumbs2.forEach(function(item,index){
  item.onclick = function(){
    document.getElementById("bigimg2").src = this.dataset.image;
  }
});

  const thumbs3 = document.querySelectorAll('.thumb3');
  thumbs3.forEach(function(item,index){
  item.onclick = function(){
    document.getElementById("bigimg3").src = this.dataset.image;
  }
});

  const thumbs4 = document.querySelectorAll('.thumb4');
  thumbs4.forEach(function(item,index){
  item.onclick = function(){
    document.getElementById("bigimg4").src = this.dataset.image;
  }
});

});