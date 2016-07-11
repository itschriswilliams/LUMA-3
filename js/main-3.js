  // LUMA 2016 \\



///////////////////////// Material Initializers \\\\\\\\\\\\\\\\\\\\\\\\\
// Material Scroll To

$('.catalog-description').hide();    
$('.catalog-products').hide();


$(document).ready(function(){
    $('.scrollspy').scrollSpy(); 
  });

// Material Slideout Nav
$(".button-collapse").sideNav(
    {
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor

    });

$(".cart-collapse").sideNav(
    {
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });




  ///// Fancy Box 
    $(".comparePop").fancybox({
    maxWidth  : 800,
    maxHeight : 400,
    fitToView : false,
    width   : '70%',
    height    : 'auto',
    padding   : '0',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });
    $(".needHelp").fancybox({
    // maxWidth  : 800,
    // maxHeight : 400,
    fitToView : true,
    width   : '610',
    // height    : 'auto',
    padding   : '0',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });    
  // $('#SPLASHTrigger').fancybox({
  //   'scrolling': 'no',
  //   'padding': 0,
  //   'margin': 0,
  //   "onClosed": function() {
  //     console.log('SPLASH modal closed.');
  //     $.cookie('SPLASH_Modal-300', 'true', {
  //       width: 480,
  //       expires: 3,
  //       path: '/'
  //     });
  //     console.log('cookie created');
  //   }
  // });

  // var cookieValue = $.cookie("SPLASH_Modal-300");
  // console.log("cookie value:" + cookieValue);

  // if (cookieValue != "true") {
  //   console.log('the cookie does not exist');

  //   setTimeout(function() {
  //     $('#SPLASHTrigger').trigger('click');
  //   }, 100);

  //   console.log('SPLASH modal triggered');

  // }








$(".compareListItem").click(function(){
  var brandID = $(this).attr("id");
  console.log("Brand ID " + brandID);

  // FadeOut List and FadeIn Closer
  $(this).hide();
  $(this).siblings(".compareListItem").hide();
  $(this).siblings(".closeCompare").fadeIn();  

  // FadeInItem
  $(this).siblings("#"+brandID).fadeIn();  
});

$(".closeCompare").click(function(){
  $(this).hide();  
  $(this).siblings(".compareItem").hide();
  $(this).siblings(".compareListItem").fadeIn();  
});



// function compareBrands() {
//   var brandID = $(this).attr("id");
//   $(".compareList").fadeOut();
//   $(".closeCompare").fadeIn();

//   // FadeInItem
//   $("#"+brandID).fadeIn();  
// }

// $(".compareListItem").click(compareBrands);


///////

// item.clickFuncion
//   var brandID = this.id
//   this.sibling.itemSelector.hide
//   this.sibling.indivBrand#brandID.fadeIn



$(document).ready(function(){
              
  /////* Global variables */////
  Loc=document.location.href;
  Dir0 = Loc.split('/')[3];
  Dir1 = Loc.split('/')[4];
  Dir2 = Loc.split('/')[5];
  Dir3 = Loc.split('/')[6];
  Uns1 = Loc.split('_')[1];
  section="";

  console.log("---------------");            
  console.log("----DIRLOG-----");              
  console.log("---------------");              
  console.log("DIR0 " + Dir0);    
  console.log("DIR1 " + Dir1);        
  console.log("DIR2 " + Dir2);    
  console.log("DIR3 " + Dir3);        
  console.log("---------------");            

  // URL Scripts
  // if(Dir0 == "mattresses" || Dir0 == "accessories") { // all but the portal
  //   $('.catalog-description').fadeIn();    
  //   $('.catalog-products').hide();
  //   console.log("hiding product list");
  // }  
  // if((Dir0 == "mattresses" || Dir0 == "accessories") && (Dir1 != "" || Dir1 == undefined)){ // all but the portal
  //   $('.catalog-description').hide();    
  //   $('.catalog-products').fadeIn();
  //   console.log("hiding catalog description");
  // }  

  if (Dir0 != undefined && (Dir1 == undefined || Dir1 == '')) { 
    $('.catalog-description').fadeIn();    
    $('.catalog-products').hide();
    console.log("on the catalog page");
  }  
    if (Dir0 != undefined && (Dir1 != undefined && Dir1 != '')) { 
    $('.catalog-description').hide();    
    $('.catalog-products').fadeIn();
    console.log("-------------------");
    console.log("on the product page");
    console.log("-------------------");
  }    

  // if (Dir0 == "mattresses"){ 
  //   // if (Dir1 == undefined || Dir1 == '') { 
  //   //   $('.catalog-description').fadeIn();    
  //   //   $('.catalog-products').hide();
  //   //   console.log("on the catalog page");
  //   // }
  // };





  if(Dir0 == "blog" && (Dir1 == undefined || Dir1 == "" || Dir1 == "#")){ // all but the portal
    $('.blog-header.main').fadeIn();
    $('.blog-footer').fadeIn();    
    console.log("showing main header");
  }
  if(Dir0 == "blog" && Dir1 != "" && Dir1 != undefined && Dir1 != "#"){ // all but the portal
      $('.blog-header.sub').fadeIn();
      console.log("showing sub header");    
    }





// $('#FirmnessFinder input').click(function () {
//     firmSum = 
// });

$('.result').hide();

function firmScore(){
    var score = 0;
    $("#FirmnessFinder input:checked").each(function(){
        score+=parseInt($(this).val(),10);
    });
    
    

    if (score < 12) {
      // $("input[name=sum]").val(score)  
      $('.result').hide();      
    }
    if (score >= 12 && score <= 18) {
      // $("input[name=sum]").val(score)  
      $('.result').hide();      
      $('.result-default').hide();            
      $('.pl').fadeIn();
    }
    if (score >= 19 && score <= 44) {
      // $("input[name=sum]").val(score)  
      $('.result').hide();      
      $('.result-default').hide();                  
      $('.md').fadeIn();      
    }    
    if (score >= 45 && score <= 60) {
      // $("input[name=sum]").val(score)  
      $('.result').hide();      
      $('.result-default').hide();                  
      $('.fm').fadeIn();
    }        

}
$().ready(function(){
    $("#FirmnessFinder input").change(function(){
        firmScore()
    });
});




}); // DOCREADY END





//////








// Product Attribute Name ReWrite f(n)

// $(document).ready(function(){
//     setTimeout(function() {
//       $('.catProdAttributeItem select option').each(function() {  
//         var attrName = $(this).text();
//         attrName = attrName.substring(-1, attrName.lastIndexOf(" "));
//         $(this).text(attrName);
//         console.log(attrName);
//       });
//     }, 2000);
// });



$(document).ready(function(){
  if ($('.assistly-widget').length > 0) { 
      $('#deskChatNow').fadeIn();
      console.log("fadedIn");
  }
});



// Modal 
  
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal({
      dismissible: true
    });
  });
// Material Parallax
  // $(document).ready(function(){
  //     $('.parallax').parallax(); 
  //   });

// Material Slider
  // $(document).ready(function(){
  //     $('.slider').slider({full_width: true});
  //   });

// Instagram Embed
 // var feed = new Instafeed({
 //        get: 'user',
 //        userId: 228374247,
 //        accessToken: '418313457.467ede5.2657d1b3985f4fa7b3dd2fb8d5eb5e9e',
 //        template: '<div class="col s6 m4"><a target="_blank" href="{{link}}" class="sml-2 med-3 bloks purple bg-cover bg-center" style="background-image: url({{image}});"></a></div>',
 //        sortBy: 'most-recent',
 //        limit: 6,
 //        resolution: 'standard_resolution'
 //    });
 //    feed.run();

// Arrow

$('.main-nav li.turner').hover(function () {
    $(this).find('.arrow').toggleClass('turnt');
});


$('a.collapsible-header.first').click(function () {
    $('a.first .arrow').toggleClass('turnt');
});

$('a.collapsible-header.second').click(function () {
    $('a.second .arrow').toggleClass('turnt');
});


$('.button-collapse').click(function () {
    $('.button-collapse').toggleClass('faqOpen');
});


// FAQs Toggle
$( ".faqSectionTitle" ).click(function() {
  $(this).next(".faqSectionContent").stop().toggle("slow");
  $(this).stop().toggleClass("faqOpen");
});

$( ".faqQ" ).click(function() {
  $(this).next().stop().toggle( "slow");
  $(this).stop().toggleClass("faqOpen");  
});


// Drop Down
  $(document).ready(function(){
     $(".dropdown-button").dropdown({
        hover: true,
        belowOrigin: true
     });
    });

// $(document).ready(function(){
//     $('.pushKick').pushpin({ top: $('.pushKick').offset().top });
//   });
       

 // $(document).ready(function() {
 //    $('select').material_select();
 //  });

$(document).ready(function(){
   var swiper = new Swiper('.sub-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 8000,
        speed: 300,
        spaceBetween: 30
    });


    var swiper = new Swiper('.home1-slider', {
         nextButton: '.next-doe',
         prevButton: '.prev-doe',
         pagination: '.pag-doe',
         autoplay: 8000,
         speed: 300,
         paginationClickable: true,
         spaceBetween: 30
    });


    var swiper = new Swiper('.home2-slider', {
        nextButton: '.next-rey',
        prevButton: '.prev-rey',
        pagination: '.pag-rey',
        autoplay: 8000,
        speed: 300,
        paginationClickable: true,
        spaceBetween: 30
    });

    var swiper = new Swiper('.one-slide-slider', {
        paginationHide: true,
        autoplay: 8000,
        speed: 300,
        spaceBetween: 30
    });    
  });
       
        $(document).ready(function(){
    $('.flexslider').flexslider({
slideshow: false, 
prevText: "",       
nextText: "", 

      });
    });


 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });



$(document).ready(function(){
    //call select_changed() function if any 'select'
    //element with name starting from 'kode_kursi_' is changed
    $("select[name*='color-picker']").change(function(){
        select_changed();
    });

     $("li.flex-nav-prev").click(function(){
        prev();
    });

       $("li.flex-nav-next").click(function(){
        prev();
    });


   var check_value = $(".hide-fix").val();

    if(check_value==null){

    $(".hide-fix").hide();

    }
});

// $('#myDropdown').ddslick({
//     onSelected: function(selectedData){
//         //callback function: do something with selectedData;
//     }   
// });

// $('#sites input:radio').addClass('input_hidden');
$('#sites img').click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
});


$('#sites input').click(function() {
   var selected = $(this).attr('id');
  $('ul.slides li').removeClass('flex-active-slide').css({'opacity': '0' , 'z-index': '1'});
  $('#'+selected).toggleClass('flex-active-slide').css({'opacity': '1' , 'z-index': '2'});
});

// $('img.pop-under').click(function() {
//       var selected = $(this).attr('src');
//       $('#'+selected).toggleClass('flex-active-slide').css({'opacity': '1' , 'z-index': '2'});
// });

$('img.pop-under').click(function() {
      var selected = $(this).attr('src');
      $('ul.slides li').removeClass('flex-active-slide').css({'opacity': '0' , 'z-index': '1'});
      $('#poplet-changer').toggleClass('flex-active-slide').css({'opacity': '1' , 'z-index': '2'});
      $('#poplet-changer img').attr('src',selected);

});

function prev(){
  $('ul.slides li').each(function(){
       $(this).removeClass('flex-active-slide').css({'opacity': '0' , 'z-index': '1'});
    });
}


// function select_changed(){
//     remove yellow backgrounds from all div
//     $('ul.slides li').each(function(){
//        $(this).removeClass('flex-active-slide').css({'opacity': '0' , 'z-index': '1'});
//     });
//     match the id with the selected option and
//     add background css class
//     $("select[name*='color-picker']").each(function(){
//         var selected = $(this).val();
//         $('#'+selected).addClass('flex-active-slide').css({'opacity': '1' , 'z-index': '2'});
//     });



//    $(".radio-image").onClick(function(){
//         var selected = $(this).id();
//         $('#'+selected).addClass('flex-active-slide').css({'opacity': '1' , 'z-index': '2'});
//     });
// }



///////////////////////// Plugins \\\\\\\\\\\\\\\\\\\\\\\\\\\

          



function groupingChange() {

  var $ = jQuery;


  // FlexSlider Init
  $('.flexslider').flexslider({
    slideshow: false, 
    prevText: "",       
    nextText: "", 
  });

  // FlexSlider Custom F(n)s
  $("li.flex-nav-prev").click(function(){
    prev();
  });
  $("li.flex-nav-next").click(function(){
    prev();
  });

  var check_value = $(".hide-fix").val();
  if(check_value==null){
    $(".hide-fix").hide();
  }


  $('#sites img').click(function() {
      $(this).addClass('selected').siblings().removeClass('selected');
  });

  $('#sites input').click(function() {
     var selected = $(this).attr('id');
    $('ul.slides li').removeClass('flex-active-slide').css({'opacity': '0' , 'z-index': '1'});
    $('#'+selected).toggleClass('flex-active-slide').css({'opacity': '1' , 'z-index': '2'});
  });

  $('img.pop-under').click(function() {
        var selected = $(this).attr('src');
        $('ul.slides li').removeClass('flex-active-slide').css({'opacity': '0' , 'z-index': '1'});
        $('#poplet-changer').toggleClass('flex-active-slide').css({'opacity': '1' , 'z-index': '2'});
        $('#poplet-changer img').attr('src',selected);

  });

  function prev(){
    $('ul.slides li').each(function(){
         $(this).removeClass('flex-active-slide').css({'opacity': '0' , 'z-index': '1'});
      });
  }

};


// $('.groupingSelect').change(function() {
//   jQuery.ready(groupingChange());
// });





