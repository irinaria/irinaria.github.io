$(document).ready(function(){
    // toggle mobile menu
    $('.icon-menu').click(function () {
        $('body').toggleClass('menu-shown');
        $('.header__menu').slideToggle(400);

        // $('.header_wrapper').animate({
        //     scrollTop: 0
        // }, 300);
    });


    // custom selectbox
    $(".selectbox")
        .select2({
            placeholder: "Выберите тип системы",
            //allowClear: true,
            minimumResultsForSearch: Infinity
        })
        .on('select2:open', function () {
            var optionsContainer = $('.select2-results__options').get(0);

            setTimeout(function () {
                new SimpleBar(optionsContainer, {
                    autoHide: false
                });
            }, 0);
        });


    // range slider
    var rangeSlider = document.querySelector('.range-field__slider');
    noUiSlider.create(rangeSlider, {
        start: [75],
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        },
        format: {
            to: function (value) {
                return value;
            },
            from: function (value) {
                return Number(value);
            }
        }
    });
    var stepSliderValueElement = document.querySelector('.range-field__value');

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        stepSliderValueElement.innerHTML = values[handle] + ' %';
    });


    // upload file
    $('.file-field input').change(function(){
        var $upload = $(this);
        if ($upload[0].files[0]){
            $('.file-field span').text($upload[0].files[0]['name']);
        } else {
            $('.file-field span').text('Прикрепить файл');
        }

    });


    // animation
    var wp_intro = $('.intro__content').waypoint(function(direction) {
        for (var i = 1; i <= 3; i++){
            $('.waypoint-'+i).addClass('activated');
        }
    }, {
        offset: '66%'
    });
    var wp_order = $('.order__steps').waypoint(function(direction) {
        for (var i = 4; i <= 8; i++){
            $('.waypoint-'+i).addClass('activated');
        }
    }, {
        offset: '66%'
    });
});