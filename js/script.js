$(document).ready(function () {

	let itemItem

	$('.item').each(function (index) {
		if ($(this).find('.item-time').length > 4) {
			$(this).find('.item-time').each(function (i) {
				if (i > 2) {
					$(this).css('display', 'none')
					itemItem = $(this).parent('.item__item')
				}
			})
		}
		if (itemItem) {
			itemItem.append('<div class="item-time more">ещё..</div>')
		}
	})

	$('.more').click(function () {
		$(this).siblings().removeAttr('style')
		$(this).remove();
	})

})