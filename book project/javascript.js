window.onscroll=()=>{
if (window.scrollY > 80) {
	document.querySelector(".header .header_2").classList.add("active");
}
else{
	document.querySelector(".header .header_2").classList.remove("active");
}
}

window.onload=()=>{
if (window.scrollY > 80) {
	document.querySelector(".header .header_2").classList.add("active");
}
else{
	document.querySelector(".header .header_2").classList.remove("active");
}
}



var showForm = document.querySelector(".login_form_container");
var closeForm = document.querySelector("#login_btn");
var close1Form = document.querySelector("#close_login_btn");

closeForm.onclick=()=>{
	showForm.classList.toggle('active');
}

close1Form.onclick=()=>{
	showForm.classList.remove('active');
}



var swiper = new Swiper(".book_slider", {
        loop:true,
        centeredSlides:true,
        autoplay:{
        	delay:9500,
        	disableOnInteraction:false,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView:3,
          },
        },
      });


var swiper = new Swiper(".feature_slider", {
        loop:true,
        centeredSlides:true,
        autoplay:{
          delay:9500,
          disableOnInteraction:false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView:4,
          },
        },
      });


var swiper = new Swiper(".arrivels_slider", {
        loop:true,
        centeredSlides:true,
        autoplay:{
          delay:9500,
          disableOnInteraction:false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });


var swiper = new Swiper(".review_slider", {
        loop:true,
        centeredSlides:true,
        autoplay:{
          delay:9500,
          disableOnInteraction:false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });





var element;

console.log(document.domain);











