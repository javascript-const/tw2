 // 封装的缓动动画
 function jsAnimate1(ele, target) {
     // 清除上一次的定时器
     clearInterval(ele.timerId);
     // 设置动画定制器
     ele.timerId = setInterval(function() {
         if (ele.offsetLeft == target) {
             clearInterval(ele.timerId);
         } else {
             var step = (target - ele.offsetLeft) / 10;
             // 40
             //36
             //32.2
             //29.17
             // ----108.2
             step = step > 0 ? Math.ceil(step) : Math.floor(step);
             ele.style.left = step + ele.offsetLeft + 'px';
         };
     }, 10);
 };
 //  匀速的动画
 function jsAnimate2(ele, target) {
     // 清除上一次的定时器
     clearInterval(ele.timerId);
     // 设置动画定制器
     ele.timerId = setInterval(function() {
         if (ele.offsetLeft == target) {
             clearInterval(ele.timerId);
             // 向右走
         } else if (ele.offsetLeft < target) {
             var step = (ele.offsetLeft + 13) > target ? target : ele.offsetLeft + 13;
             ele.style.left = step + 'px';
             // 向左走
         } else if (ele.offsetLeft > target) {
             var step = (ele.offsetLeft - 13) < target ? target : ele.offsetLeft - 13;
             ele.style.left = step + 'px';
         }
     }, 50);

 };