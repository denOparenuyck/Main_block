





//Open hide list on page.

// $(document).ready(function() {
//     const btn = $('.btn__more');
//     const list = $('.product__content-hide');
//     $(btn).each(function(index, item){
//         $(item).click(function(){
//             $(list[index]).toggle('active');
//         });
//     });
// });

const btn = document.querySelectorAll('.btn__more');
const list = document.querySelectorAll('.product__content-hide');
const parent = document.querySelectorAll('.product');
const title = document.querySelectorAll('.product__content-title');





btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        list[index].classList.toggle('active');
        parent[index].classList.toggle('active');
        title[index].classList.toggle('active');
    });
});
