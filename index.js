// 選取所有有子選單的選單項目
document.querySelectorAll('.dropdown').forEach(menuItem => {
    menuItem.addEventListener('click', (event) => {
        // 確保僅處理子選單的開關
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            event.preventDefault(); // 阻止預設連結行為
            // 切換子選單的顯示狀態
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// 點擊其他區域關閉子選單
document.addEventListener('click', (event) => {
    document.querySelectorAll('.submenu').forEach(submenu => {
        if (!submenu.contains(event.target) && !submenu.parentElement.contains(event.target)) {
            submenu.style.display = 'none';
        }
    });
});