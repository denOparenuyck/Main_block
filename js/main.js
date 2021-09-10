const btn = document.querySelectorAll('.btn__more'),
    list = document.querySelectorAll('.product__content-hide'),
    itemList = document.querySelectorAll('.product__content-item');
    parent = document.querySelectorAll('.product'),
    title = document.querySelectorAll('.product__content-title'),
    btnNum = document.querySelectorAll('.btn__num'),
    mainList = document.querySelectorAll('.product__content-main');


let num = 0;

btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        list[index].classList.toggle('active');
        parent[index].classList.toggle('active');
        title[index].classList.toggle('active');
        num = mainList[index].children.length;



        if (num % 2) {
            list[index].firstElementChild.classList.add('position');
            list[index].firstElementChild.style.width = '50%';
        } else {
            list[index].firstElementChild.style.width = '100%';
            list[index].firstElementChild.classList.remove('position');
        }


        if (list[index].classList.contains('active')) {
            item.innerText = 'Свернуть';
        } else {
            item.innerText = 'Показать еще ' + list[index].children.length;
        }
    });
});

list.forEach((item, index) => {
    let num = item.children.length;
    btnNum[index].innerText = num;
});




