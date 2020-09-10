const sandwich_active_class = 'active';
const target_expand_class = 'expanded';

window.onload = function() {
    let sandwiches = document.querySelectorAll('.collapse-sandwich');
    Array.prototype.forEach.call(sandwiches, function(element) {
        element.addEventListener('click', function(event) {
            let sandwich = event.target;
            let collapse_target = document.getElementById(sandwich.getAttribute('target-id'));

            if (sandwich.classList.contains(sandwich_active_class)) {
                sandwich.classList.remove(sandwich_active_class);
                if (collapse_target && collapse_target.classList.contains(target_expand_class))
                    collapse_target.classList.remove(target_expand_class);
            }
            else {
                sandwich.classList.add(sandwich_active_class);
                if (collapse_target && !collapse_target.classList.contains(target_expand_class))
                    collapse_target.classList.add(target_expand_class);
            }
        });
    });
}