    
let featuresOffset  = $("#features").offset().top;

//control appearance of navbar
$(window).scroll(function () {  
   let wScroll=  $(window).scrollTop();
   if(wScroll >  featuresOffset-50)
   {
    $("#btnUp").fadeIn(500);
    $("#navbar").css("backgroundColor","rgba(0,0,0,0.5)");
   }
   else
   {
    $("#btnUp").fadeOut(500);
    $("#navbar").css("backgroundColor","transparent");

   }
    
})

//button up
$("#btnUp").click(function(){

    $("html,body").animate( {scrollTop:'0'}, 1000)
})

//navigation in navbar 
$(".nav a").click(function(){

    let aHref =  $(this).attr("href");//#service#menu

    let sectionOffset  = $(aHref).offset().top;

    $("html,body").animate( {scrollTop:sectionOffset}, 1000);

});


//start color box
(function()
{

    
let colorBoxs = $(".color-box");

colorBoxs.eq(0).css("backgroundColor","orange");
colorBoxs.eq(1).css("backgroundColor","teal");
colorBoxs.eq(2).css("backgroundColor","tomato");
colorBoxs.eq(3).css("backgroundColor","#09c");
colorBoxs.eq(4).css("backgroundColor","purple");


//color change
colorBoxs.click(function(){
    let color = $(this).css("backgroundColor");
    $("body").css("color" , color);
})

//start opening and close

let optionsBoxWidth  = $(".options-box").outerWidth();
$("#options").css("left" , `-${optionsBoxWidth}`);



$("#options i").click(function(){

    if( $("#options").css("left") == "0px" )
    {
        $("#options").animate({left:`-${optionsBoxWidth}`} , 1000);
    }
    else
    {
        $("#options").animate({left:`0px`} , 1000);
    }

})
//end opening and close


/***end color box***/

})();









 
