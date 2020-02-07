$(document).ready(function(){
  $("button").click(function(){
    console.log("clicked");
    addData(data.bayarea);
  });
  $("#back").click(function(){
    $(".flex-grid").hide();
    $(".blurb").hide();
  });
});


function addData(obj){
  $("#art-content").html("");
  $("#culture-content").html("");
  $("#music-content").html("");
      let array = [];
  for(let i = 0; i < obj.link.length; i++){ 
    $("#art-content").append(`<img src=${obj.link[i]}>`);
  }
  for(let i = 0; i < obj.article.length; i++){
    debugger;
    array.push(`<div><a href=${obj.article[i]}>Link${i}</a></div>`);
  }
  $("culture-content").html(array);
  for(let i = 0; i < obj.music.length; i++){
    $("#music-content").append(`<iframe class="vid" id="link1" width="420" height="315"
    src=${obj.music[i]}</iframe>`);
  }
}
