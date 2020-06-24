$('.menu-header a').on('click',function(e){
    e.preventDefault();
    let $this = $(this);
    let href = $this.attr('href');
    $('html, body').stop().animate({scrollTop: $(href).offset().top - 80}, 800);
});
$('.scrollTopJs').on('click',function(e){
    e.preventDefault();
    let $this = $(this);
    let href = $this.attr('href');
    $('html, body').stop().animate({scrollTop: $(href).offset().top - 0}, 800);
});

$(window).scroll(function(){
	let mytop = $(window).scrollTop();	
	if (mytop > $('.consulting-parter').offset().top){
		$('.scrollTopJs').addClass('active');
	} else {
		$('.scrollTopJs').removeClass('active');
	}
});

$('.sub-items-solutions').on('click',function(){
	let $this = $(this);
	let data = $this.attr('data');
	$('.sub-items-solutions').removeClass('active');
	$this.addClass('active');

	$('.sub-items-solutions').closest('.content-item-solutions').find('.tab-responsive').removeClass('tab-active');
	$this.closest('.content-item-solutions').find('.tab-responsive').addClass('tab-active');
	$('.solutions-frame').addClass('none');
	$(data).removeClass('none');
});

$('.videoResponsiveJS').on('click',function(){
	let $this = $(this);	
	$this.closest('.tab-responsive').find('.videoResponsive').toggle();
});



const validator = $('#contact').validate({
  errorPlacement: (error, element) => {
    $(element)
      .parent()
      .append(error);
  },
  rules: {
  	name: "required",
	email: {
		required: true,
		email: true
	},
	phone: {
		required: true,
		number: true
	},
	solution: "required"
  },
  messages: {
  	name: "* Campo requerido.",
	email: {
		required: "* Campo requerido.",
		email: "Formato de Email inválido"
	},
	phone: {
		required: "* Campo requerido.",
		number: "Formato de teléfono inválido"
	}
  },
  submitHandler: form => {
    let formData = $(form).serialize();
    //url 
    let ajaxUrl = '';
    //
    $.ajax({
      url: ajaxUrl,
      method: 'POST',
      data: formData
    })
      .done((data, xhrStatus, xhr) => {
       	//openmodal

      })
      .fail(xhr => {
        let err = JSON.parse(xhr.responseText);
        validator.showErrors(err);
      });
  }
});