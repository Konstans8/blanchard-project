document.addEventListener('DOMContentLoaded', function() {

    let intervalId;

    document.querySelectorAll('.header__dropdown-btn').forEach(item => {
        item.addEventListener('click', item => {
            const menu = item.currentTarget.dataset.path;
            document.querySelectorAll('.header__dropdown-menu').forEach(item => {
                if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                    item.classList.remove('header__dropdown-menu-active');
                    item.classList.remove('open');
                    document.querySelector(`[data-target=${menu}]`).classList.add('header__dropdown-menu-active');
                    document.querySelector(`[data-path=${menu}]`).classList.add('active');
                    intervalId = setTimeout(() => {
                        document.querySelector(`[data-target=${menu}]`).classList.add('open');
                    }, 0);
                }

                if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                    clearTimeout(intervalId);
                    document.querySelector(`[data-target=${menu}]`).classList.remove('header__dropdown-menu-active');
                    document.querySelector(`[data-path=${menu}]`).classList.remove('active');
                    intervalId = setTimeout(() => {
                        document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                    }, 0); 
                }

                window.onclick = item => {
                    if (item.target == document.querySelector(`[data-target=${menu}]`) || item.target == document.querySelector(`[data-path=${menu}]`)) {
                        return;
                    } else {
                        document.querySelector(`[data-target=${menu}]`).classList.remove('header__dropdown-menu-active');
                        document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                        document.querySelector(`[data-path=${menu}]`).classList.remove('active');
                    }
                };
            });
        });
    });

});