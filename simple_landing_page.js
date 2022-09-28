// modal-toggle
    // modal-open
    let modal = document.querySelector('.modal')
    let modalContainer = document.querySelector('.modal-container')
    let contactBtn = document.querySelector('.nav_contact')
    let closeBtn = document.querySelector('.modal-btn1')

    contactBtn.onclick=()=>{
        modal.classList.add('modal-open');
    }
    // modal-close
    function closeModal(){
        modal.classList.remove('modal-open');
    }
    
    closeBtn.onclick=closeModal;
    modal.addEventListener('click',closeModal)
    modalContainer.addEventListener('click',(eventClick)=>{
        eventClick.stopPropagation();
    })
    // modal-textarea
    let modalTextarea = document.querySelector('textarea')
    modalTextarea.oninput = ()=>{
        modalTextarea.style.height=modalTextarea.scrollHeight+"px"
    }
    
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
        delay: 5000,
    },
  });
