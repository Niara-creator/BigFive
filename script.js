$(document).ready(function(){
    $(".blurb").hide();
    $(".button").click(function(){
      addData(data.bayarea);
     $(".blurb").show();
     $(".flex-grid").show();
     $(".boxOne").hide();
    });
    $(".laButton").click(function(){
      addData(data.socal);
      $(".blurb").show();
      $(".boxOne").hide();
      $(".flex-grid").show();
    });
  $(".explaining").hide();
    $(".aboutButton").click(function(){
    $(".explaining").toggle();
  });
  $("#back").click(function(){
    $(".flex-grid").hide();
    $(".blurb").hide();
    $(".boxOne").show();
  });
});


function addData(obj){
  $("#art-content").html("");
  $("#culture-content").html("");
  $("#music-content").html("");
  for(let i = 0; i < obj.link.length; i++){ 
    $("#art-content").append(`<img src=${obj.link[i]}>`);
  }
  for(let i = 0; i < obj.article.links.length; i++){
    $("#culture-content").append(`<div><a target=”_blank” href=${obj.article.links[i]}>${obj.article.title[i]}</a></div>`);
  }
  for(let i = 0; i < obj.music.length; i++){
    $("#music-content").append(`
    <iframe width="560" height="315" src=${obj.music[i]} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  }
}
