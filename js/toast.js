export default function toast({
    title='',
    message='',
    type='',
    duration
}){
    const main= document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');

        const autoRemove=setTimeout(function(){
            main.removeChild(toast);
        },duration+1000)

        toast.onclick=function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }
        const icons={
            success:'fas fa-circle-check',
            error:'fa-solid fa-circle-exclamation'
        }
        const icon=icons[type];
        const delay = (duration/1000).toFixed(2);

        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation=`slideIn ease .3s,fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML=`
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-xmark"></i>
            </div>
        `
        main.appendChild(toast);
    }
}

export function showSuccessToast(){
    toast({
        title:'Success',
        message:'Anyone with access can view your invited visitors.',
        type:'success',
        duration:3000
    })
}
export function showErrorToast(){
    toast({
        title:'Error',
        message:'Anyone without access cannot view your invited visitors.',
        type:'error',
        duration:3000
    })
}