// import toast from other file
import toast,{showSuccessToast,showErrorToast} from './toast.js';
    // declare global module
    window.showSuccessToast=showSuccessToast;
    window.showErrorToast=showErrorToast;
    window.toast=toast;

// toast
const btnSub = document.querySelector('.btn-subscribe');
const formValue = document.forms['form-contact']["email"];

btnSub.onclick=function(){
    if(formValue.value==""){
        showErrorToast();
        btnSub.setAttribute('type','button');
    }else{
        // when input form gets a value then button type -> submit 
        btnSub.setAttribute('type','submit');
        showSuccessToast();
    }
}

// modal-toggle
    // modal-open
    let modal = document.querySelector('.modal')
    let modalContainer = document.querySelector('.modal-container')
    let contactBtn = document.querySelector('.nav_contact')
    let closeBtn = document.querySelector('.modal-btn1')

    function openModal(){
        modal.classList.add('modal-open');
        document.body.style.overflow='hidden';
        setConfig(true);
    }
    contactBtn.onclick=openModal;

    // modal-close
    function closeModal(){
        modal.classList.remove('modal-open');
        document.body.style.overflow='auto';
        setConfig(false);
    }
    
    closeBtn.onclick=closeModal;
    modal.addEventListener('click',closeModal)
    modalContainer.addEventListener('click',(eventClick)=>{
        eventClick.stopPropagation();
    })

    // modal-refreshing

        // localStorage

        const PLAYER_STORAGE_KEY = 'isContactOpen';

        function setConfig(value){
            localStorage.setItem(PLAYER_STORAGE_KEY,value);
        }

    window.onload=()=>{
        // check if modal in localStorage is open
        if(JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)))openModal();
    }

    // modal-textarea
    let modalTextarea = document.querySelector('textarea')
    modalTextarea.oninput = ()=>{
        modalTextarea.style.height=modalTextarea.scrollHeight+"px";
    }
    
// fixed-nav
let fixedNav = document.getElementById('header');
let resBtnNav = document.querySelector('.nav_btn_res');
window.addEventListener("scroll",()=>{
    // document.body vs document.documentElement is for different browser
    if(document.body.scrollTop>300||document.documentElement.scrollTop>300){
        fixedNav.classList.add('fixed-nav');
        resBtnNav.style.backgroundColor='#fff';
    }else{
        fixedNav.classList.remove('fixed-nav');
        resBtnNav.style.backgroundColor='inherit';
    }
})

// nav-collapse
const openBtn = document.querySelector('.nav_btn_res');
const bgBlack = document.querySelector('.nav-bar');
const navOpen = document.querySelector('.nav_container_left');
const navRes = document.querySelector('.nav-collapse-item');
const closeNavBtn = document.querySelector('.res-close button');

    //open-nav
openBtn.addEventListener('click',()=>{
    contactBtn.style.padding='10px 20px';
    bgBlack.classList.add('side-bar');
    navOpen.classList.add('nav_wrapper');
    navOpen.classList.add('nav-collapse-container');
    navRes.classList.remove('nav-hide');
})
    // close-nav
function closeNav(){
    bgBlack.classList.remove('side-bar');
    navRes.classList.add('nav-hide');
    navOpen.classList.remove('nav-collapse-container');
    navOpen.classList.remove('nav_wrapper');
}
closeNavBtn.onclick=closeNav;
window.onresize=()=>{
    if(window.innerWidth>991){
        closeNav();
    }
}

// scroll-smooth when clicking anchor link
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// aos
    // how aos-library work but this not 100% correct
const aosRight = document.querySelectorAll('.aos-right');
const aosLeft = document.querySelectorAll('.aos-left');
const about = document.getElementById('about');

window.addEventListener('scroll',()=>{
    let top=window.scrollY||document.documentElement.scrollTop;
    aosRight.forEach(slide=>{
        if(top+about.offsetWidth>slide.offsetTop){
            slide.classList.add('slide-right');
        }
    })
    aosLeft.forEach(slide=>{
        if(top+about.offsetWidth>slide.offsetTop){
            slide.classList.add('slide-left');
        }
    })
})
    // aos-library
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger 
    disable: "mobile" // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  });

// scroll-spy
const activeLinks = document.querySelectorAll('.nav-link');
const activeSections = document.querySelectorAll('.scroll-spy');

window.addEventListener('scroll',()=>{
    activeSections.forEach(sec=>{
        let top=window.scrollY;
        let id= sec.getAttribute('id');
        
        if(top>=sec.offsetTop-10&&top+10<=sec.offsetTop+sec.offsetHeight){
            activeLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('.nav-link[href*='+id+']').classList.add('active');
            })
        }
    })
})

// swiper-review
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:3,
    loopFillGroupWithBlank: false,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        enabled: true,
        delay: 4000,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
            slidesPerGroup:1
        },
        600:{
            slidesPerView:2,
            slidesPerGroup:2
        },
        1200:{
            slidesPerView:3,
            slidesPerGroup:3
        }
    }
  });
