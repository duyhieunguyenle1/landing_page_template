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
window.addEventListener("scroll",()=>{
    // document.body vs document.documentElement is for different browser
    if(document.body.scrollTop>400||document.documentElement.scrollTop>400){
        fixedNav.classList.add('fixed-nav');
    }else{
        fixedNav.classList.remove('fixed-nav');
    }
})

// scroll-smooth when clicking anchor link
document.querySelectorAll('.nav-items a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// scroll-spy
// document.addEventListener('DOMContentLoaded',function(){
//     const activeLinks = document.querySelectorAll('.nav-items a');
//     const activeSections = document.querySelectorAll('.scroll-spy');
//     const addActive = (link)=>{
//         activeLinks[link].classList.add('active');
//     }
//     const removeActive = (link)=>{
//         activeLinks[link].classList.remove('active');
//     }
//     const removeAllActive = ()=>{
//         // convert DOM nodes into array and then loop through each element n remove them
//         [...Array(activeSections.length)].forEach((link)=>removeActive(link));
//         // for(let i=0;i<activeLinks.length;i++){
//         //     activeLinks[i].classList.remove('.active');
//         // }
//     }
//     let currentActive = 0;
//     const sectionMargin=200;
//     window.addEventListener("scroll",()=>{
//         const current = activeSections.length-[...activeSections].reverse()
//         .findIndex(section => window.scrollY >= section.offsetTop - sectionMargin ) - 1
//         if(current!==currentActive){
//             removeAllActive();
//             currentActive=current;
//             addActive(current);
//         }
//     })
// },false)

// swiper-review
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:3,
    loopFillGroupWithBlank: true,
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
  });
