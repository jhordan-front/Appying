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
	if (mytop > $('#building').offset().top){
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