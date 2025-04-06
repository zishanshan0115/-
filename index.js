// 選取所有有子選單的選單項目
document.querySelectorAll('dropdown').forEach(menuItem => {
    menuItem.addEventListener('click', (event) => {
        // 確保僅處理子選單的開關
        const submenu = menuItem.querySelector('submenu');
        if (submenu) {
            event.preventDefault(); // 阻止預設連結行為
            // 切換子選單的顯示狀態
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded',function () {
    const menult = document.querySelector('.menu');
    const nav = document.querySelector('nav ul');
    
    menult.addEventListener('click',() => {
        if(nav.style.display === "block"){
            nav.style.display = "none";
        }else{
            nav.style.display = "block";
        }
    });
}); 

const audioPlayer = document.getElementById('audioPlayer');
function playMedia() {
    var audioPlayer =  document.getElementById('audioPlayer');  
    audioPlayer.play();
}


function pauseMedia() { 
    var audioPlayer =  document.getElementById('audioPlayer');
    audioPlayer.pause();
}
