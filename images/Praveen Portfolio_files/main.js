// console.log('Hello World');

// Global Variables
var menuButton = document.querySelector('i');

// Menu Click Event Listener
menuButton.addEventListener('click', handleMenuClick);

// Handle Menu Click
function handleMenuClick () {
  // console.log('Click!');
  var sidebar = document.querySelector('.sidebar');

  if (sidebar.classList.contains('sidebar-hidden')) {
    sidebar.classList.toggle('sidebar-hidden');
    menuButton.style.color = '#fff';
    menuButton.classList
      .remove('fa-bars')
      .add('fa-times');
  } else {
    sidebar.classList.toggle('sidebar-hidden');
    menuButton.style.color = '#000';
    menuButton.classList.remove('fa-times');
    menuButton.classList.add('fa-bars');
  }
}












// // var slider_content = document.getElementById('box');
// // var image = ['a', 'b', 'c', 'd', 'e'];



// // var i = image.length;
// // function nextImage(){
// //   if(i < image.length){
// //     i = i+1;
// //   }else{
// //     i = 1;
// //   }
// //   slider_content.innerHTML = "<img src="+image[i-1]+".jpeg>";
// //   }
// //       function prewImage(){
// //          if(i < image.length + 1 && i>1){
// //     i = i-1;
// //   }else{
// //     i = image.length;
// //   }
// //   slider_content.innerHTML = "<img src="+image[i-1]+".jpeg>";












// //   }
      

//       $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
// // var i = 0;
// // var images = [];
// // var time = 1000;

// // images[0] = 'image1.jpg';
// // images[1] = 'image2.jpg';
// // images[3] = 'image3.jpd';

// // function changeImg(){
// //   document.slide.src = images[i];

// //   if(i < images.length -1){
// //     i++;
// //   }else {
// //     i = 0;
// //   }
// //   setTimeout("changeImg()", time);
// //   }
// // }



// // var images = ["gallery"]; 
// // var i = 0;
// // function slides(){
// // document.getElementById("gallery").src = images[i];
// // if(i<(images.length-1))
// // i++;
// // else
// // i=0;
// // }
// // setInterval(slides, 2000)

// // Global Variables
// // var menuButton = document.querySelector('i');

// // // Menu Click Event Listener
// // menuButton.addEventListener('click', handleMenuClick);

// // // Handle Menu Click
// // function handleMenuClick () {
// //   // console.log('Click!');
// //   var sidebar = document.querySelector('.sidebar');

// //   if (sidebar.classList.contains('sidebar-hidden')) {
// //     sidebar.classList.toggle('sidebar-hidden');
// //     menuButton.style.color = '#fff';
// //     menuButton.classList
// //       .remove('fa-bars')
// //       .add('fa-times');
// //   } else {
// //     sidebar.classList.toggle('sidebar-hidden');
// //     menuButton.style.color = '#000';
// //     menuButton.classList.remove('fa-times');
// //     menuButton.classList.add('fa-bars');
// //   }
// // }
// // $('.variable-width').slick({
// //   dots: true,
// //   infinite: true,
// //   speed: 300,
// //   slidesToShow: 1,
// //   centerMode: true,
// //   variableWidth: true
// // });