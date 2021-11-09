

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}




// // Đóng/mở menu mobile
// // var header = document.getElementsByClassName('header')
// // var header = document.getElementsByTagName('header')
// var header = document.getElementById('header');
// console.log(header);
// var mobileMenu = document.getElementById('menu')
// var headerHeight = header.clientHeight;

// mobileMenu.onclick = function() {
//     var isClosed = header.clientHeight === headerHeight;
//     if (isClosed) {
//         header.style.height = 'auto';
//     } else {
//         header.style.height = '60px';
//     }
// }

// //Tự động đóng khi chọn menu
// var menuItems = document.querySelectorAll('.navbar a');
// for (var i = 0 ; i < menuItems.length; i++){
//     var menuItem = menuItems[i];
    
    
//     menuItem.onclick = function() {
        
//             header.style.height = null;
        
//     }    
// }




