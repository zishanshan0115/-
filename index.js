document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu');  // 漢堡按鈕
    const menu = document.querySelector('nav > ul');  // 主選單
    const dropdown = document.querySelector('.dropdown > a');  // 「喝玲瑯」項目
    const submenu = document.querySelector('.submenu');  // 子選單

    // 點擊漢堡按鈕切換主選單顯示/隱藏
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');  // 切換主選單顯示
        });
    }

    // 點擊「喝玲瑯」項目，顯示或隱藏子選單
    if (dropdown && submenu) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault(); // 防止跳轉
            submenu.classList.toggle('open');  // 切換子選單顯示
        });
    }
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
