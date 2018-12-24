document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $collapsibleMessageHeader = Array.prototype.slice.call(document.querySelectorAll('.collapsible-message-header'), 0);

    // Check if there are any navbar burgers
    if ($collapsibleMessageHeader.length > 0) {

        // Add a click event on each of them
        $collapsibleMessageHeader.forEach(function ($el) {
            // let header = $el.dataset
            // console.info(header)
            $el.addEventListener('click', function () {
                this.classList.toggle("active")
                this.nextElementSibling.classList.toggle("is-hidden")
                //console.log($el)


                // // Get the target from the "data-target" attribute
                // var target = $el.dataset.target;
                // var $target = document.getElementById(target);

                // // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                // $el.classList.toggle('is-active');
                // $target.classList.toggle('is-active');

            });
        });
    }

});
