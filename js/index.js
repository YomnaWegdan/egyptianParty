$('#icon').on('click' , function(){
    $('.sidebar-box ul').animate({width:'toggle'} , 1000)

})
$('.card h2').on('click' ,function(e){
    $(e.target).next('div').slideToggle()

})


$('a[href^="#"]').on('click', function(e) {

    let hrefLink = e.target.getAttribute('href');
    let offsetSec = $(hrefLink).offset().top;

    console.log(e.target);
    console.log(hrefLink);
    console.log(offsetSec);

    $('body, html').animate({ scrollTop: offsetSec }, 1500);
});

// $('a').on('click', function(e) {
//     e.preventDefault();

//     let hrefLink = e.currentTarget.getAttribute('href');
//     let targetElement = $(hrefLink);

//     console.log('hrefLink:', hrefLink);
//     console.log('targetElement length:', targetElement.length);

//     if (targetElement.length) {
//         let offsetSec = targetElement.offset().top;

//         console.log(e.currentTarget);
//         console.log(offsetSec);

//         $('body, html').animate({ scrollTop: offsetSec }, 2000);
//     }
// });

 const targetDate = new Date('2026-01-19T12:00:00'); 
 function updateCountdown() {
   const currentDate = new Date();
   const timeDifference = targetDate.getTime() - currentDate.getTime();

   const remainingSeconds = Math.floor(timeDifference / 1000) % 60;
   const remainingMinutes = Math.floor(timeDifference / (1000 * 60)) % 60;
   const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
   const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

   $('#days').text(` - ${remainingDays} D`);
   $('#hours').text(`${remainingHours} h`);
   $('#minutes').text(`${remainingMinutes} m`);
   $('#seconds').text(`${remainingSeconds} s`);

   if (remainingDays <= 0 && remainingHours <= 0 && remainingMinutes <= 0 && remainingSeconds <= 0) {
     clearInterval(intervalId);
     $('#countdown').text('Event has occurred!');
   }
 }

 const intervalId = setInterval(updateCountdown, 1000);


 $('textarea').on('input' , function(e){
    let value=  e.target.value
    let length = value.length
    if(length<=100){
        let num = 100 - length
        $('.num').text(`${num} Characyer Reamining`)
    }
    else{
        $('.num').text(`your available character finished `)
    }
});
