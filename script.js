
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu&&links) menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{links?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const qf=document.getElementById('qf');
if(qf)qf.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(qf);const message=`Hello B4S Group, I need ${d.get('need')}.\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nDetails: ${d.get('msg')||'Not provided'}`;window.open(`https://wa.me/919870577121?text=${encodeURIComponent(message)}`,'_blank','noopener');});
