const icons = document.querySelectorAll('.role-icon');
icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        icons.forEach(function(iconn) {
            if (iconn !== icon) {
                iconn.classList.remove('active');
            }
        });
        icon.classList.toggle('active');
    });
});