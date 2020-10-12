// var navbar = document.getElementById("nav");

// var sections = navbar.getElementsByClassName("nav-item");

// for (var i = 0; i < sections.length; i++) {
//   sections[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// };

// window.addEventListener("scroll", function() {
//   var elementTarget = document.getElementById("about");
//   if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
//     var current = document.getElementsByClassName("active");
//     var next = current.nextSibling;
//     console.log(next);
//     // current[0].className = current[0].className.replace(" active", "");
//     // next.className += " active";
//   }
// });

var desc = document.getElementsByClassName("program");

for (var i = 0; i < desc.length; i++) {
  desc[i].addEventListener('click', (e) => {
    var more = document.getElementsByClassName("more");
    if (Object.keys(more).length === 0) {
      e.currentTarget.classList.add("more");
    } else if (more[0] === e.currentTarget) {
      more[0].classList.toggle("more");
    } else {
      more[0].classList.remove("more");
      e.currentTarget.classList.add("more");
    }
  });
};

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
    });
}
