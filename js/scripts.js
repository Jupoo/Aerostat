$(document).ready( function() {
    //Слайдер
    if($(".bxslider").length>0) {
    	var doc_width=$(document).width();
    	if(doc_width>1199) {
    		var minSlides=4;
    		var maxSlides=4;
    		var slideWidth=258;
    		var slideMargin=16;
    	}
    	if(doc_width<1200 && doc_width>767) {
    		var minSlides=1;
    		var maxSlides=1;
    		var slideWidth=718;
    		var slideMargin=0;
    	}
    	if(doc_width<768 && doc_width>359) {
    		var minSlides=1;
    		var maxSlides=1;
    		var slideWidth=0;
    		var slideMargin=16;
    	}
        
        var slider_main=$(".bxslider").bxSlider({
            mode: "horizontal",
            minSlides: minSlides,
            maxSlides: maxSlides,
            moveSlides: 1,
            slideWidth: slideWidth,
            slideMargin: slideMargin,
            auto: false,
            autoHover: false,
            speed: 500,
            pause: 700,
            pager: false,
            controls: true,
            touchEnabled: false
        });
	        
        // установим обработчик события resize
        $(window).resize(function() {
        	if(slider_main) {
        		var doc_width=$(document).width();
		    	if(doc_width>1199) {
		    		var minSlides=4;
		    		var maxSlides=4;
		    		var slideWidth=258;
		    		var slideMargin=16;
		    	}
		    	if(doc_width<1200 && doc_width>767) {
		    		var minSlides=1;
		    		var maxSlides=1;
		    		var slideWidth=718;
		    		var slideMargin=0;
		    	}
		    	if(doc_width<768 && doc_width>359) {
		    		var minSlides=1;
		    		var maxSlides=1;
		    		var slideWidth=0;
		    		var slideMargin=16;
		    	}
	    		
	    		slider_main.reloadSlider({
                	mode: "horizontal",
		            minSlides: minSlides,
		            maxSlides: maxSlides,
		            moveSlides: 1,
		            slideWidth: slideWidth,
		            slideMargin: slideMargin,
		            auto: false,
		            autoHover: false,
		            speed: 500,
		            pause: 700,
		            pager: false,
		            controls: true,
		            touchEnabled: false
                });
            }
        });
    }

    //Отзывы
    if($(".bxslider-reviews").length>0) {
    	var doc_width=$(document).width();
    	if(doc_width>1199) {
    		var minSlides=2;
    		var maxSlides=2;
    		var moveSlides=2;
    		var slideWidth=454;
    		var slideMargin=36;
    	}
    	if(doc_width<1200 && doc_width>767) {
    		var minSlides=1;
    		var maxSlides=1;
    		var moveSlides=1;
    		var slideWidth=584;
    		var slideMargin=0;
    	}
    	if(doc_width<768 && doc_width>359) {
    		var minSlides=1;
    		var maxSlides=1;
    		var moveSlides=1;
    		var slideWidth=312;
    		var slideMargin=0;
    	}
    	
        var slider_reviews=$(".bxslider-reviews").bxSlider({
            mode: "horizontal",
            minSlides: minSlides,
            maxSlides: maxSlides,
            moveSlides: moveSlides,
            slideWidth: slideWidth,
            slideMargin: slideMargin,
            auto: false,
            autoHover: false,
            speed: 500,
            pause: 700,
            pager: false,
            controls: true,
            touchEnabled: false
        });
        
        // установим обработчик события resize
        $(window).resize(function() {
            if(slider_reviews) {
            	var doc_width=$(document).width();
		    	if(doc_width>1199) {
		    		var minSlides=2;
		    		var maxSlides=2;
		    		var moveSlides=2;
		    		var slideWidth=454;
		    		var slideMargin=36;
		    	}
		    	if(doc_width<1200 && doc_width>767) {
		    		var minSlides=1;
		    		var maxSlides=1;
		    		var moveSlides=1;
		    		var slideWidth=584;
		    		var slideMargin=0;
		    	}
		    	if(doc_width<768 && doc_width>359) {
		    		var minSlides=1;
		    		var maxSlides=1;
		    		var moveSlides=1;
		    		var slideWidth=312;
		    		var slideMargin=0;
		    	}
		    	
		    	slider_reviews.reloadSlider({
		    		mode: "horizontal",
		            minSlides: minSlides,
		            maxSlides: maxSlides,
		            moveSlides: moveSlides,
		            slideWidth: slideWidth,
		            slideMargin: slideMargin,
		            auto: false,
		            autoHover: false,
		            speed: 500,
		            pause: 700,
		            pager: false,
		            controls: true,
		            touchEnabled: false
		    	});
            } 
        });
    }

    //Фокус
    $(document).on("focus", ".form-item__input input", function () {
        $(this).addClass("focus");
    });
    $(document).on("blur", ".form-item__input input", function () {
        $(this).removeClass("focus");
    });

    //FAQ
    $(document).on("click", ".faq__title", function () {
        var wrap=$(this).closest(".faq__item");
        $(this).closest(".faq__item").find(".faq__text").slideToggle(function(){
            if(wrap.hasClass("active"))
                wrap.removeClass("active");
            else
                wrap.addClass("active");
        });
    });
    
    //tabs
    $(document).on("click", ".tabs__list-link", function (e) {
        e.preventDefault();//отмена действий по умолчанию
        var tab_id=$(this).attr("href");
        $(".tabs__list").removeClass("tabs--list-active");
        $(this).closest(".tabs__list").addClass("tabs--list-active");
        $(".tabs__text-item").removeClass("tabs--text-active");
        $(tab_id).addClass("tabs--text-active");
    });

	//Кнопка прокрутки наверх
	$(function(){
		var e = $(".scrollTop");
		var	speed = 500;
		e.click(function(){
			$("html:not(:animated),body:not(:animated)").animate({scrollTop: 0},speed);
			return false;
		});
		//появление
		function show_scrollTop(){
			( $(window).scrollTop()>300 ) ? e.fadeIn(600) : e.hide();
		}
		$(window).scroll( function(){show_scrollTop()} ); show_scrollTop();
	});
});