// modal-toggle
    // modal-open
    let modal = document.querySelector('.modal')
    let modalContainer = document.querySelector('.modal-container')
    let contactBtn = document.querySelector('.nav_contact')
    let closeBtn = document.querySelector('.modal-btn1')

    contactBtn.onclick=()=>{
        modal.classList.add('modal-open');
        document.body.style.overflow='hidden';
    }
    // modal-close
    function closeModal(){
        modal.classList.remove('modal-open');
        document.body.style.overflow='auto';
    }
    
    closeBtn.onclick=closeModal;
    modal.addEventListener('click',closeModal)
    modalContainer.addEventListener('click',(eventClick)=>{
        eventClick.stopPropagation();
    })
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

// scroll-smooth when clicking anchor link
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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
