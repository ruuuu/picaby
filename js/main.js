let menuToggle = document.querySelector('#menu-toggle');//нашди эелме по его id
let menu = document.querySelector('.sidebar');//меню


menuToggle.addEventListener('click', function(event){//отслеживаем клик по ссылка menuToggle, после клика выполянется функуия function(event), котрая описана внутри фигурн скобок
    event.preventDefault(); /*отменеят стандартное поведение ссылки*/
    
       
    menu.classList.toggle('visible');//элементу menu доюавляем/убираем класс .visible
    
});

