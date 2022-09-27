
var blog = document.querySelectorAll('.blog');
var buttOn = document.querySelectorAll('.btnjs');
var bloghidden = function () {
    blog.forEach (v => v.classList.add('hidden')); 
  };
var addKeyClickHandler = function (buttOns, blogs) {
        buttOns.addEventListener('click', function () {
            bloghidden();
           blogs.classList.remove('hidden');
          });
    };    
    for (var i = 0; i < buttOn.length; i++) {
      addKeyClickHandler(buttOn[i], blog[i]);
    }
