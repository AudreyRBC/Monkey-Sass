import $ from "jquery";

  var $className;

  var $htmlInspector = $('.html-inspector')
  var wrapperCreate = "<div class='wrapper-html-inspector'></div>"
  var $inspectorButton = '<div class="inspector-button"><span class="icon-code"><span class="hidden">Show the code</span></span></div>'
  var $inspector = $('.main__inspector');
  var $close = $('.inspector-close');
  var $copy = $('.inspector-copy');
  var $hiddenInput = $('.hidden-inspector')
  var $wrapperInspect;
  var $value

  $htmlInspector.each(function(){
    var $this = $(this);
    $this.wrap(wrapperCreate);
  })

  $wrapperInspect = $('.wrapper-html-inspector');
  $wrapperInspect.prepend($inspectorButton)

  $wrapperInspect.mouseenter(function(){
    $(this).find('.inspector-button').addClass('visible')
  })

  $wrapperInspect.mouseleave(function(){
    $(this).find('.inspector-button').removeClass('visible')
  })

  $('.inspector-button').on('click', function(){
    var $that = $(this).next()[0];
    var $this = $('.main__inspector .inspector-content code')
    $inspector.removeClass('animate-right-hide').addClass('animate-right-show')
    $this.text($that.outerHTML);
    $hiddenInput.attr('value', $that.outerHTML)
    console.log($that)
  })


  $close.on('click', function(){
    $inspector.removeClass('animate-right-show').addClass('animate-right-hide')
  })

  $copy.on('click', function(){
    $hiddenInput.select()
    // console.log($('.inspector-content code'))
    document.execCommand("copy");
  })
