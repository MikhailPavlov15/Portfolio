
var blog = document.querySelectorAll('.blog');
var buttOn = document.querySelectorAll('.btnjs');
var bloghidden = function () {
    blog.forEach (v => v.classList.add('hidden')); 
  };
var buttonhidden = function () {
    buttOn.forEach (v => v.classList.remove('bg-[#FFCC73]','text-black'));
  };
var addKeyClickHandler = function (buttOns, blogs) {
        buttOns.addEventListener('click', function () {
            bloghidden();
            buttonhidden();
           blogs.classList.remove('hidden');
           buttOns.classList.add('bg-[#FFCC73]','text-black');
          });
    };    
    for (var i = 0; i < buttOn.length; i++) {
      addKeyClickHandler(buttOn[i], blog[i]);
    }
