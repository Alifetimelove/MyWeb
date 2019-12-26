$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: "custom",
            autoplayDisableOnInteraction: false,
            renderCustom: function(swiper, current, total) {
                var paginationHtml = " ";
                for (var i = 0; i < total; i++) {
                    // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                    if (i === (current - 1)) {
                        paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                    } else {
                        paginationHtml += '<span class="swiper-pagination-customs"></span>';
                    }
                }
                return paginationHtml;
            },
        },
    });
})