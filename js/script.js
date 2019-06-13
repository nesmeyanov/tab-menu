$('#main-content .main-content-card__head').on('click', showMe);

function showMe(){
	$('.main-content-card__head').removeClass("active-field");
	$(this).addClass(" active-field");
	$('#main-content .main-content-card__item').not($(this).next()).slideUp(250);
	$(this).next().fadeToggle(250);
}

