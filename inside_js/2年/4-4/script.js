
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(btn.textContent === 'ダークモードにする'){
        btn.textContent = 'ライトモードにするモー';
    } else {
        btn.textContent = 'ダークモードにする';
    }
})