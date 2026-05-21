javascript:(function(){const style=document.createElement('style');style.textContent=`
  .main-menu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: 3px solid #fff;
    border-radius: 15px;
    padding: 30px;
    z-index: 999999;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    font-family: Arial, sans-serif;
    color: white;
    min-width: 300px;
    text-align: center;
  }
  .main-menu h1 {
    margin: 0 0 20px 0;
    font-size: 24px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  .menu-close {
    margin-top: 20px;
    background: #f44336;
    padding: 12px;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    transition: all 0.3s;
  }
  .menu-close:hover {
    background: #da190b;
    transform: scale(1.05);
  }
  .overlay-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999998;
  }
`;
document.head.appendChild(style);

const overlay=document.createElement('div');
overlay.className='overlay-bg';
document.body.appendChild(overlay);

const menu=document.createElement('div');
menu.className='main-menu';
menu.innerHTML=`
  <h1>Blooket Hacks</h1>
  <button class="menu-close">Close</button>
`;
document.body.appendChild(menu);

document.querySelector('.menu-close').onclick=function(){
  overlay.remove();
  menu.remove();
};

overlay.onclick=function(){
  overlay.remove();
  menu.remove();
};
})();
