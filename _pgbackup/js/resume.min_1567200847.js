/*!
 * Start Bootstrap - Resume v5.0.7 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
 */
 function counter_fn(){  
     	
        var n = localStorage.getItem('on_load_counter');

        if (n === null) {
            n = 0;
        }

        n++;

        localStorage.setItem("on_load_counter", n);

        document.getElementById('counter').innerHTML = n;
     	WriteToFile(n);
        }
function WriteToFile(n)
{
var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile('Test.txt', true);
s.WriteLine(n);
s.Close();
}
!function(t){"use strict";t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:e.offset().top},1e3,"easeInOutExpo"),!1}}),t(".js-scroll-trigger").click(function(){t(".navbar-collapse").collapse("hide")}),t("body").scrollspy({target:"#sideNav"})}(jQuery);
