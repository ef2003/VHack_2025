function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(div => {
        div.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    document.querySelectorAll('.tab').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}