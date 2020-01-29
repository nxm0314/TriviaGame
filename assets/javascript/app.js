		$(document).ready(function () {


			$(".ans").click(function () {
				
				var qnum = "#" + $(this).parent().attr("id");
			
				$(qnum + " p.ans").removeClass("right wrong");
				$(qnum + " p span").css("display", "none");
			
				var applyclass = "wrong"
                var spancolor = "red"
				if ($(this).hasClass("correct")) {
					applyclass = "right";
                    spancolor = "green";
                    alert('Way to go!!')
                }
                else {
                    applyclass = "wrong";
                    spancolor = "red";
                    alert('Try again')
                }
				
				$(this).addClass(applyclass);
				$(this).children(":first").css("display", "block").css("color", spancolor);
            })
            
		});