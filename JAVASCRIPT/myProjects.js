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


document.addEventListener('DOMContentLoaded', function() {
    const filterModal = document.getElementById('filterModal');
    const topicsDropdown = document.querySelector('#filterForm select#topics');
    const yield4goodTab = document.querySelector('[data-tab="yield4good"]');

    filterModal.addEventListener('show.bs.modal', function () {
        if (yield4goodTab.classList.contains('active')) {
            topicsDropdown.closest('.mb-3').style.display = 'none'; 
        } else {
            topicsDropdown.closest('.mb-3').style.display = 'block';
        }
    });
});

function refreshAmount(refreshIcon) {
    const fundingAmountElement = refreshIcon.closest('.project').querySelector('.funding-amount h5');
    let currentAmount = parseInt(fundingAmountElement.getAttribute('data-amount'));
    const minAmount = currentAmount + 1;
    const maxAmount = minAmount + 10000;
    const newAmount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
    fundingAmountElement.setAttribute('data-amount', newAmount);
    fundingAmountElement.textContent = `RM ${newAmount.toLocaleString()}`;
}