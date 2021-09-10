const btn = document.querySelectorAll('.btn__more'),
      list = document.querySelectorAll('.product__content-hide'),
      parent = document.querySelectorAll('.product'),
      title = document.querySelectorAll('.product__content-title');


btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        active();
        parent[index].classList.toggle('active');
        title[index].classList.toggle('active');
    });
});

function active(){
    list.forEach(item => {
        if(item.classList.contains('active')){
            item.classList.remove('active');
        } else{
            item.classList.add('active');
        }
    });
}