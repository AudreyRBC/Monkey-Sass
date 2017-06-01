import $ from "jquery";

var $header = $('.header-stylesheet');
var $section = $('.html-inspector');
var navArray = [];
var $titleChild = []
var $title;
var $subtitle;

$section.each(function(){

  $title = $(this).children('h1').text();
  $subtitle = $(this).children('h2').text();
  if($title){
    navArray.push($title);
  }


})
console.log(navArray)  
