
var $className;
$('*').on('click', function(i){
  $that = $(this);
  $className = $that[0].className;
  console.log($className, $that[0], $that);
})
