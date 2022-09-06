document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__accordion-item').forEach(function(tabBtn) {
        tabBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.catalog__card').forEach(function(tabBlock) {
            tabBlock.classList.remove('tab-content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})