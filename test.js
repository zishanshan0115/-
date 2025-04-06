document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('submenu');
    const dropdown = document.getElementById('submenu li');

    // 菜單切換功能
    menuToggle.addEventListener('click', (event) => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation(); // 阻止事件冒泡，防止點擊按鈕時觸發 document 的點擊事件
    });

    // 點擊其他地方時關閉選單
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && event.target !== menuToggle) {
            dropdown.style.display = 'none';
        }
    });
});