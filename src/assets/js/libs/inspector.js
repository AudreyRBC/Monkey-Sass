var $className;
$('.html-inspector').on('click', function(i){
  $that = $(this)[0];
  $this = $('.main__inspector .modal-body code')

  $this.text($that.innerHTML);
})
