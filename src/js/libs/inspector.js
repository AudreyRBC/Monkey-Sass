import $ from "jquery";

var $className;
var $inspectorButton = '<div class="inspector-button"><span class="icon-star"></span></div>'
$('.html-inspector').append($inspectorButton)

$('.html-inspector').mouseenter(function(){
  $(this).find('.inspector-button').addClass('visible')
})
$('.html-inspector').mouseleave(function(){
  $(this).find('.inspector-button').removeClass('visible')
})

$('.inspector-button').on('click', function(){
  var $that = $(this).parent()[0];
  var $this = $('.main__inspector .inspector-content code')
  $this.text($that.innerHTML);
})
