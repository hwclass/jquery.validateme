/*!
 * jquery.validateme. The jQuery validation plugin
 *
 * Copyright (c) 2014 Barış Güler
 * http://hwclass.github.io
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * http://docs.jquery.com/Plugins/Authoring
 * jQuery authoring guidelines
 *
 * Launch  : March 2014
 * Version : 1.0
 * Released: March 1st, 2014
 *
 *
 * validation plugin for plain, password and e-mail texts
 */
(function ($) {
	$.fn.validateMe = function (options) {
		if ($(this).data('validate') == "yes") {
			var config = {
				error : {
					messages : {
						empty : 'Please fill in the empty input.',
						notValidEmailAddress : 'Please fill in with a valid email address.'
					}
				}
			}
			var $form = $(this);
			var $inputList = $form.find($('input[data-validate-me]'));
			var lengthOfInputValidated = $inputList.length;
			var validCounter = 0;
			for (var count = 0; count < lengthOfInputValidated; count++) {
				if (isEmpty($($inputList)[count])) {
					showErrorTooltip($($inputList)[count], count, config.error.messages.empty);
					validCounter++;
				} else {
					if ($(($inputList)[count]).data('validate-email')) {
						if (!isValidEmailAddress($($($inputList)[count]).val())) {
							showErrorTooltip($($inputList)[count], count, config.error.messages.notValidEmailAddress);
							validCounter++;
						}
					}
				}
			}  
		}
			
		if (validCounter < 1) {
				$($form).submit();
		}
			
		function isEmpty (_el) {
			var isEmpty = true;
			if ($(_el).val() === '') {
					isEmpty = true;
			} else {
					isEmpty = false;
			}
			return isEmpty;
		}
			
		function isValidEmailAddress(emailAddress) {
			var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
			if (filter.test(emailAddress)) {
					return true;
			} else {
					return false;
			}
		}
			
		function showErrorTooltip (_el, _idx, _message) {
			var offset = $(_el).offset();
			var $errToolTip = $('<div/>', {
					'id':'errorToolTip'+count,
					'class':'errorToolTip',
					'text':_message,
					'css' : {'top':offset.top + $(_el).outerHeight(true) ,'left':offset.left, 'max-width':$(_el).width()} 
			}).on('click', function(){
					alert(this.id);
			}).appendTo('body');
			$errToolTip.show();
		}
			
		return this;

	}
})(jQuery);