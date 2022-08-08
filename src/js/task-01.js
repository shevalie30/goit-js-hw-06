/*Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и
выведет в консоль текст заголовка элемента(тега < h2 >) и
количество элементов в категории(всех вложенных в него < li >).*/

const navEl = document.querySelector(`#categories`);
console.log(navEl.children);
const heroTitleEl = navEl.querySelectorAll(`.item`);
for (let i = 0; i < heroTitleEl.length; i++) {
    console.log(heroTitleEl[i].querySelector('h2').textContent);
    console.log(heroTitleEl[i].querySelectorAll('li').length)


}


