// nav 
{
    // add class for parent exists submenu 
    document.querySelectorAll('#nav li').forEach(item => {
        if(item.children.length > 1){
            item.classList.add('submenu');
        }
    });

    const button = document.createElement('div');
    button.setAttribute('id', 'button-mobile');

    if(window.innerWidth < 996){
        document.getElementById('nav').append(button);
    } else {
        button.remove();
    }

    // mobile
    document.getElementById('button-mobile') && document.getElementById('button-mobile').addEventListener('click', () => {
        document.querySelector('#nav ul').classList.toggle('active');
    });
}

{
    // left button
    const left = document.createElement('div');
    left.setAttribute('id', 'slide-left');

    // right button
    const right = document.createElement('div');
    right.setAttribute('id', 'slide-right');

    // box with slides
    const slides = document.getElementById('slides');

    // wrapper
    const levusSwipeSlider = document.getElementById('levus-swipe-slider');

    // slides 
    let list = document.querySelectorAll('.slide');

    if(list.length > 1) {
        
        // add buttons
        levusSwipeSlider.append(left, right);

        for (let index = 0; index < list.length; index++) {
            
            // clone slides
            document.getElementById('slides').append(list[index].cloneNode(true));
        }

        // shift -100%
        slides.style.left = '-100%';
    }

    /**
     * click
     */

    // left click
    document.getElementById('slide-left') && document.getElementById('slide-left').addEventListener('click', leftScroll);

    // right click
    document.getElementById('slide-right') && document.getElementById('slide-right').addEventListener('click', rightScroll);

    /**
     * swipe
     */

    let startX = null,
        moveX = 0,
        resultX = 0;

    list = document.querySelectorAll('.slide');

    if(list.length > 1){    
        list.forEach(item => {
        
            // touch
            item.addEventListener('touchstart', e => touchStart(e), false);
            item.addEventListener('touchmove', e => touchMove(e), false);
            item.addEventListener('touchend', touchEnd, false);

            // click
            item.addEventListener('mousedown', e => touchStart(e), false);
            item.addEventListener('mousemove', e => touchMove(e), false);
            item.addEventListener('mouseup', touchEnd, false);

            // image preventDefault
            item.querySelectorAll('img').forEach(image => {
                image.addEventListener('dragstart', e => e.preventDefault());
            });

        });
    }

    function touchStart(e){

        // mobile/deskop check
        if(e.type.includes('mouse')){
            startX = e.pageX;
        } else {
            startX = e.targetTouches[0].clientX;
        }
        
    }

    function touchMove(e){
        if(!startX) return false;

        // mobile/deskop check
        if(e.type.includes('mouse')){
            moveX = e.pageX;
        } else {
            moveX = e.targetTouches[0].clientX;
        }

        resultX = moveX - startX;
    }

    function touchEnd(){
        if(resultX > 0) leftScroll();
        else rightScroll();
    }

    function leftScroll(){
        const last = slides.lastElementChild;
        slides.prepend(last);

        slides.style.transition = 'none';
        slides.classList.add('to-right');

        setTimeout(() => {
            slides.classList.remove('to-right');
            slides.style.transition = '.5s';
        }, 50);
    }

    function rightScroll(){
        const first = slides.firstElementChild;
        slides.append(first);

        slides.style.transition = 'none';
        slides.classList.add('to-left');
        
        setTimeout(() => {
            slides.classList.remove('to-left');
            slides.style.transition = '.5s';
        }, 50);
    }
}

// aside tabs
{
    if(document.querySelector('.tabs')){
        const tabs = document.querySelectorAll('.tabs span');
        const panes = document.querySelectorAll('.panes .pane');
    
        panes[0].classList.add('active');
    
        tabs.forEach((item, index) => {
            item.addEventListener('click', () => {            
                tabs.forEach(item => item.classList.remove('active'));
                panes.forEach(item => item.classList.remove('active'));
    
                tabs[index].classList.add('active');
                panes[index].classList.add('active');
            });
        });
    }
}

// social-button 
const e=document.querySelectorAll(".share-facebook"),t=document.querySelectorAll(".share-twitter"),l=document.querySelectorAll(".share-linkedin"),i=document.querySelectorAll(".share-telegram"),r=document.querySelectorAll(".share-viber");e.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://facebook.com/sharer.php?display=popup&u="+window.location.href;window.open(t,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")})}),t.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130"><path d="m63.91483,0.25777c-35.09946,0 -63.65592,28.55646 -63.65592,63.65706c0,35.10174 28.55646,63.65933 63.65592,63.65933c35.10174,0 63.6582,-28.5576 63.6582,-63.65933c-0.00114,-35.1006 -28.5576,-63.65706 -63.6582,-63.65706zm33.87997,47.05463a27.24263,27.24263 0 0 1 -6.21,6.5896c0.01023,0.36937 0.01705,0.73874 0.01705,1.10812c0,18.56409 -14.12593,37.76576 -37.76576,37.76576a37.65893,37.65893 0 0 1 -20.34957,-5.95996a1.13312,1.13312 0 0 1 -0.45689,-1.3377a1.12516,1.12516 0 0 1 1.20018,-0.74784c0.99674,0.11479 1.98438,0.17162 2.93679,0.17162c4.63704,0 9.05587,-1.24677 12.93485,-3.62894a13.99978,13.99978 0 0 1 -10.0492,-9.34342a1.13994,1.13994 0 0 1 0.23185,-1.1013a1.12857,1.12857 0 0 1 1.06607,-0.36028c0.21367,0.04092 0.42847,0.07615 0.64214,0.1057c-3.94717,-2.51514 -6.50777,-6.93738 -6.50777,-11.83355l0,-0.16252a1.13653,1.13653 0 0 1 1.68775,-0.99333c0.49439,0.2739 1.00697,0.51144 1.53318,0.71147a13.99978,13.99978 0 0 1 -3.11637,-8.82175c0,-2.47536 0.65578,-4.91208 1.89573,-7.04535a1.13653,1.13653 0 0 1 1.86391,-0.14775c6.0452,7.41245 14.83286,12.07563 24.28538,12.93485a14.28619,14.28619 0 0 1 -0.10001,-1.69684c0,-7.725 6.28615,-14.01001 14.01228,-14.01001c3.64485,0 7.17151,1.43771 9.77302,3.96308a24.59111,24.59111 0 0 0 7.2181,-2.86292a1.13653,1.13653 0 1 1 1.66388,1.32178a13.89408,13.89408 0 0 1 -2.63675,4.75979a24.18309,24.18309 0 0 0 2.82655,-1.05015a1.13653,1.13653 0 0 1 1.40361,1.67184z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://twitter.com/intent/tweet?text="+document.title+" "+window.location.href;window.open(t,"twitter","toolbar=0,status=0,resizable=1,width=626,height=436")})}),l.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68"><path d="m52.20373,49.19435l0,-13.05399c0,-6.994 -3.73385,-10.24858 -8.71157,-10.24858c-4.01695,0 -5.817,2.21022 -6.82013,3.7606l0,-3.2256l-7.56801,0c0.10031,2.13665 0,22.76757 0,22.76757l7.56801,0l0,-12.71515c0,-0.67878 0.04904,-1.35868 0.24967,-1.84463c0.54615,-1.35979 1.79113,-2.76751 3.88098,-2.76751c2.73964,0 3.83416,2.08761 3.83416,5.14714l0,12.18127l7.5669,0l0,-0.00111zm-31.07232,-25.87503c2.63822,0 4.28222,-1.74989 4.28222,-3.93559c-0.04904,-2.23251 -1.64401,-3.93225 -4.23207,-3.93225s-4.28111,1.69862 -4.28111,3.93225c0,2.1857 1.64289,3.93559 4.18303,3.93559l0.04793,0zm12.3061,43.55564c-18.4664,0 -33.43747,-14.97107 -33.43747,-33.43747c0,-18.46751 14.97107,-33.43747 33.43747,-33.43747s33.43747,14.96995 33.43747,33.43747c0,18.4664 -14.97107,33.43747 -33.43747,33.43747zm-8.5221,-17.68062l0,-22.76757l-7.5669,0l0,22.76757l7.5669,0z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title="+document.title;window.open(t,"linkedin","toolbar=0,status=0,resizable=1,width=626,height=436")})}),i.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="https://telegram.me/share/url?url="+window.location.href+"&text="+document.title;window.open(t,"telegram","toolbar=0,status=0,resizable=1,width=626,height=436")})}),r.forEach(e=>{e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.282 58.282"><path d="m24.186 22.5c-5.4466 3.1445 2.8637 18.724 8.8237 15.283 1.0584 1.8332 4.4676 7.7381 5.526 9.5712-2.5146 1.4519-4.6432 2.3671-7.5585 0.70054-8.0946-4.6273-17.005-20.054-16.751-29.256 0.088046-3.196 1.971-4.4482 4.434-5.8702 1.0584 1.8332 4.4676 7.738 5.526 9.5712z"/><path d="m26.47 22.24c-0.58849 0.33978-1.3458 0.13697-1.6856-0.45158l-5.2095-9.0232c-0.33984-0.58862-0.13704-1.3459 0.45152-1.6857l2.738-1.5808c0.58855-0.33984 1.346-0.13685 1.6858 0.4517l5.2095 9.0231c0.33978 0.58849 0.13691 1.3458-0.45158 1.6856l-2.738 1.5808z"/><path d="m40.702 46.89c-0.58849 0.33978-1.3458 0.13697-1.6856-0.45164l-5.2095-9.0232c-0.33984-0.58855-0.13704-1.3459 0.45152-1.6856l2.738-1.5808c0.58855-0.33978 1.346-0.13679 1.6858 0.4517l5.2095 9.0231c0.33978 0.58855 0.13691 1.3459-0.45158 1.6856l-2.738 1.5808z"/><path d="m29.141-2.845e-15h0.0004319v0.006787c8.05 0.0001234 15.335 3.26 20.604 8.5296 5.2693 5.2693 8.5291 12.554 8.5293 20.604h0.006787v0.0013574h-0.006787c-0.0001234 8.05-3.26 15.335-8.5296 20.604-5.2694 5.2693-12.554 8.5291-20.604 8.5293v0.006787h-0.0013574v-0.006787c-8.05-0.0001234-15.335-3.26-20.604-8.5296-5.2693-5.2694-8.5291-12.554-8.5293-20.604h-0.006787v-0.0013574h0.006787c0.0001234-8.05 3.26-15.335 8.5296-20.604 5.2693-5.2693 12.554-8.5291 20.604-8.5293v-0.006787h0.0009255zm0.0004319 3.4758v0.006787h-0.0013574v-0.006787c-7.0792 0.0001851-13.494 2.8753-18.141 7.5226-4.6477 4.6476-7.5229 11.063-7.5229 18.142h0.006787v0.0013574h-0.006787c0.0001851 7.0792 2.8753 13.494 7.5226 18.141 4.6476 4.6477 11.063 7.5229 18.142 7.5229v-0.006787h0.0013574v0.006787c7.0792-0.0001851 13.494-2.8753 18.141-7.5226 4.6477-4.6476 7.5229-11.063 7.5229-18.142h-0.006787v-0.0013574h0.006787c-0.0001851-7.0792-2.8753-13.494-7.5226-18.141-4.6476-4.6477-11.063-7.5229-18.142-7.5229z"/></svg>',e.addEventListener("click",e=>{e.preventDefault();const t="viber://forward?text="+document.title+" "+window.location.href;window.open(t,"viber","toolbar=0,status=0,resizable=1,width=626,height=436")})});

// awards
{
    const awards = document.querySelectorAll('.awards');

    awards.forEach(item => {

        const header = item.querySelector('header');
        const main = item.querySelector('div');

        header && header.addEventListener('click',() => {
            header.classList.toggle('active');
            main.classList.toggle('active');

            localStorage.victory = 1;
        });

        if(localStorage.victory == 1){
            header && header.classList.add('active');
            main && main.classList.remove('active');            
        }

    });

}