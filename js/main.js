
$(document).ready(function()  {

    /* Function for carousel display*/
    carousel_item_idx = 0;
    _carousel_demo_prefix = 'demo-btn-';
    CarouselDots = [];
    demo_number = 4;
    for (let i = 0; i < demo_number; i++) {
        CarouselDots.push(document.getElementById(_carousel_demo_prefix + i.toString()));
        CarouselDots[i].addEventListener('click', _change_active_dot.bind(this, i));
    }


    carousel_comp_item_idx = 0;
    _carousel_comp_prefix = 'compare-btn-';
    CarouselCompDots = [];
    compare_number = 5;
    for (let i = 0; i < compare_number; i++) {
        CarouselCompDots.push(document.getElementById(_carousel_comp_prefix + i.toString()));
        CarouselCompDots[i].addEventListener('click', _change_active_comp_dot.bind(this, i));
    }
});


function _change_active_dot (idx) {
    CarouselDots[idx].classList.add("active");
    if (carousel_item_idx != idx) {
        CarouselDots[carousel_item_idx].classList.remove("active");
    }
    carousel_item_idx = idx;
}
function _change_active_comp_dot (idx) {
    CarouselCompDots[idx].classList.add("active");
    if (carousel_comp_item_idx != idx) {
        CarouselCompDots[carousel_comp_item_idx].classList.remove("active");
    }
    carousel_comp_item_idx = idx;
}


