// $(document).ready(function() {
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    spaceBetween: 30,
    mousewheel: true,
    effect: 'coverflow',
    slidesPerView: 1,
    centeredSlides: true,
    pagination: '.swiper-pagination',
    paginationType: 'custom',
    paginationCustomRender: function(swiper, current, total) {
        var _html = '';
        for (var i = 1; i <= total; i++) {
            if (current == i) {
                _html += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
                _html += '<span class="swiper-pagination-customs"></span>';
            }
        }
        return _html; //返回所有的页码html
    },
    onReachEnd: function(swiper) {
        console.log('到了最后一个slide');
    }
});
// })