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
  $('#frame-solution .swiper-pagination-bullet').eq(data).trigger('click');

  $('.content-item-solutions').removeClass('activet');
  $this.closest('.content-item-solutions').addClass('activet');

	/*
  $('.sub-items-solutions').closest('.content-item-solutions').find('.tab-responsive').removeClass('tab-active');
	$this.closest('.content-item-solutions').find('.tab-responsive').addClass('tab-active');
	$('.solutions-frame').addClass('none');
	$(data).removeClass('none');*/
});

$('.videoResponsiveJS').on('click',function(){
	let $this = $(this);	
	$this.closest('.tab-responsive').find('.videoResponsive').toggle();
});


$('.img-full').on('click',function(){
  $('.move-r').addClass('active');
});
$('.close-move-r').on('click',function(){
  $('.move-r').removeClass('active');
});
$('.close-modal').on('click',function(){
  $('.modalShow').hide();
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
    $('.modalShow').show();
    //
    /*$.ajax({
      url: ajaxUrl,
      method: 'POST',
      data: formData
    })
      .done((data, xhrStatus, xhr) => {
       	//openmodal
        $('.modalShow').show();
      })
      .fail(xhr => {
        let err = JSON.parse(xhr.responseText);
        validator.showErrors(err);
      });*/
  }
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  autoplay: {
    delay: 7000,
  },
  on: {
    slideChangeTransitionEnd: function(){
      let $bullet = $('#frame-solution .swiper-pagination-bullet');
      for (let i=0;i<$bullet.length;i++) {    
        if ($bullet.eq(i).hasClass('swiper-pagination-bullet-active')){
          $('.sub-items-solutions').removeClass('active');
          $('.sub-items-solutions').eq(i).addClass('active');
        }
      }
    }
  }
});