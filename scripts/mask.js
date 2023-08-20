
     

    
    $.fn.setCursorPosition = function (pos) {
            if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
        $('.data-section__form-input--date').click(function () {
            $(this).setCursorPosition(0);
        });
        $('.data-section__form-input--seriya').click(function () {
            $(this).setCursorPosition(0);
        });
        $('.data-section__form-input--number').click(function () {
            $(this).setCursorPosition(0);
        });
        $('.data-section__form-input--kogda').click(function () {
            $(this).setCursorPosition(0);
        });
        $('.data-section__form-input--tel').click(function () {
            $(this).setCursorPosition(4);
        });
        $('.data-section__form-input--date').mask('99.99.9999');
        $('.data-section__form-input--seriya').mask('99 99');
        $('.data-section__form-input--number').mask('999 999');
        $('.data-section__form-input--kogda').mask('99.99.9999 г.');
        $('.data-section__form-input--tel').mask('+7 (999) 999-99-99');