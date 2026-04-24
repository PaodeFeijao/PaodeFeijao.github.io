const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50));

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target);}});
},{threshold:0.1});
document.querySelectorAll('.fade-up,.fade-left,.fade-right').forEach(el=>obs.observe(el));

function toggleFaq(btn){
  const item=btn.closest('.faq-item');
  const open=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-body').style.maxHeight='0';});
  if(!open){item.classList.add('open');item.querySelector('.faq-body').style.maxHeight=item.querySelector('.faq-body').scrollHeight+'px';}
}

const barObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.prog-bar-fill').forEach(b=>{b.style.width=b.dataset.w+'%';});
      barObs.unobserve(e.target);
    }
  });
},{threshold:0.3});
const bv=document.querySelector('.beneficios-visual');
if(bv)barObs.observe(bv);

const numObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('[data-target]').forEach(el=>{
        const t=+el.dataset.target,dur=1600;
        let s=null;
        const step=ts=>{
          if(!s)s=ts;
          const p=Math.min((ts-s)/dur,1);
          const ease=1-Math.pow(1-p,3);
          el.textContent=Math.floor(ease*t)+(t>=100?'+':t===8?'+':'');
          if(p<1)requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
      numObs.unobserve(e.target);
    }
  });
},{threshold:0.3});
const ng=document.querySelector('.numeros-grid');
if(ng)numObs.observe(ng);