const btn = document.getElementById('btn');
const tooltip = document.getElementById('tooltip');
const arrow = document.getElementById('arrow');


btn.addEventListener('mouseover', () => {
   let dim = btn.getBoundingClientRect();
   let xl = dim.left, xr = dim.right;
   let yt = dim.top,  yb = dim.bottom;
   let iw = window.innerWidth;
   let ih = window.innerHeight;
   console.log(dim);

   if(xr - xl < xr){
      tooltip.classList.add('tooltip__left');
      arrow.classList.add('arrow__right');
   }else if(iw - xr > xr-xl) {
      tooltip.classList.add('tooltip__right');
      arrow.classList.add('arrow__left');
   }else if(yt < 100){
      tooltip.classList.add('tooltip__bottom');
      arrow.classList.add('arrow__top');
   }else if( ih - yb > 100){
      tooltip.classList.add('tooltip__top')
      arrow.classList.add('arrow__bottom');
   }
   else {
      tooltip.classList.add('hide');
   }

   tooltip.classList.toggle('hide');
})

btn.addEventListener('mouseout', () => {
   tooltip.classList.toggle('hide');
})
