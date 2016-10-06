$(function() {

	// $(".red-box").fadeOut(2000);
	// $(".green-box").fadeOut(2000);
	// $(".red-box").fadeIn(1000);
	// $(".red-box").fadeTo(1000, 0.5);

	// $(".red-box").fadeTo(3000, 0.2);
	// $(".green-box").fadeTo(2000, 0.5);
	// $(".blue-box").fadeTo(1000, 0.5);

	// $(".green-box").fadeToggle();
	// $(".green-box").fadeToggle();

	// $(".green-box").fadeTo(1000, 0)

	// $(".blue-box").hide();

	// $(".blue-box").slideUp(500);
	// $(".blue-box").slideDown()

	// $("p").hide();
	// $("p").slideDown(2000);

	// $('.blue-box').slideToggle(2000)
	//++++++++++++++++++++++++++++++++++++++++++++++++++++

	// CUSTOM ANIMATION
	//__________________

	// $(".blue-box").animate({
	// 	"margin-left" : "200px"
	// })
	// $(".blue-box").animate({
	// 	"margin-left" : "-=80px"
	// }, 1000)
	// $(".blue-box").animate({
	// 	"margin-left" : "-=120px"
	// }, 200)

	// $(".blue-box").animate({
	// 	marginLeft : "200px",
	// 	opacity : "0",
	// 	marginTop : "25px",
	// 	width : "50px",
	// 	height : "50px"
	// }, 1000)

	// $("p").animate({
	// 	fontSize : "20px"
	// }, 1000)


	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// USING DELAY ANIMATION
	//___________________

	// $(".red-box").fadeTo(1000, 0.2)
	// $(".green-box").delay(1000).fadeTo(1000, 0.5)
	// $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut(1000).fadeIn()

	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// call-back function
	//___________________

	// $(".red-box").fadeTo(1000, 0, function() {
	// 	$(".green-box").fadeTo(1000, 0, function() {
	// 		$(".blue-box").fadeTo(1000, 0)
	// 	})
	// })

	// $(".red-box").fadeTo(1000, 0, function() {
	// 	$(".green-box").fadeTo(1000, 0, function() {
	// 		$(".blue-box").animate({
	// 			marginLeft : "200px"
	// 		}, 500, function() {
	// 			$(".blue-box").animate({
	// 				marginLeft : "-=200px"
	// 			}, 1000, function() {
	// 				$(".green-box").fadeTo(500, 0.9, function() {
	// 					$(".red-box").fadeTo(2000, 1)
	// 				})
	// 			})		
	// 		})
	// 	})
	// })
	// $('.lightbox').delay(1000).fadeIn(1000);


	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// SELECTORES
	//___________________

	// $("p").css("background-color", "rgba(180, 180, 30, 0.8)")
	// $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)")
	// $("input[type='submit']").css("background-color", "rgba(180, 180, 30, 0.8)")
	// $("input").css("background-color", "rgba(180, 180, 30, 0.8)")

	// $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)")
	// $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)")


	// $("#list").find("li").css("background-color", "grey")
	// $("#list").children("li").css("background-color", "grey")

	// $(":header").next().css("background-color", "yellow")

	// $("form").children("input[type='text']").css("background-color", "yellow")

	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// DOM
	//___________________

	// $("ul ul:first").append("<li>this is just an apended li </li>")

	// $("<li>this is just an apended li </li>").appendTo($("ul ul:first"))

	// $("ul ul:first").prepend("<li>this is pre pended</li>")

	// $("<li>this is pre pended</li>").prependTo($("ul ul:first"))

	// $(".red-box").after("<div class='red-box'> New Red</div>")

	// $(".blue-box").before("<div class='blue-box'> Blue friend</div>")

	// $(".blue-box").before("<div class='blue-box'> Blue friend </div>")

	// $(".red-box").after("<div class='red-box'> New Red</div>")
	// $(".green-box").before("<div class='green-box'> green sep</div>")
	// $(".blue-box").after(function() {
	// 	return "<div class='blue-box'> Blue Again </div>"
	// })

	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// REPLACING  
	//___________________

	// $("li").replaceWith("<li> I'm Replacing every list item</li>")
	// $('.red-box, .blue-box').replaceWith("<div class='green-box'> replacing</div>")

	// $("<div class='green-box'> replacing</div>").replaceAll(".red-box, .blue-box")


	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// REMOVING  
	//___________________

	// $("li").remove()

	// $("form").children().not("input:text, textarea, br").remove()

	// $("li").detach()

	// $("p").empty()

	// $(".red-box, .green-box, .blue-box").empty()

	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// MANIPULATING ATTRIBUTES  
	// attr(), prop(), val()
	//___________________

	// var specialLink = $("#specialLink")
	// console.log(specialLink.attr("href"))

	// specialLink.attr("href", "http://www.ahmedsoliman.net")

	// var checkbox = $("input:checkbox")

	// console.log(checkbox.prop("checked"))

	// checkbox.prop()

	// var textInput = $("input:text")
	// console.log(textInput.val())
	// textInput.val("Ahmed Soliman")

	// var rangeInput = $("input[type='range']")
	// console.log(rangeInput.val())


	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// Project photo Galarry 
	//___________________

	// var galleryImage = $(".gallery").find("img").first()
	// var images = [
	// 	"images/laptop-mobile_small.jpg",
	// 	"images/laptop-on-table_small.jpg",
	// 	"images/people-office-group-team_small.jpg",
	// 	]

	// 	var i = 0
	// 	setInterval(function() {
	// 		i = (i + 1) % images.length // 0,1,2,0,1,... 
	// 		galleryImage.fadeOut(function() {
	// 			$(this).attr("src", images[i])
	// 			$(this).fadeIn()
	// 		})
	// 	}, 2000)


	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// CSS properties 
	//___________________

	// $(".gallery").css("display", "none")

	// var redBox = $(".red-box")
	// console.log(redBox.css("width"))

	// redBox.css("background-color", "#AA7700")
	// $("p").css("font-size", "18px")
	// redBox.css("width", "+=20px")

	// var pProperties = $("p").css(["font-size", "color"])
	// console.log(pProperties)

	// redBox.css("user-select", "none")

	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// CSS adding rmoving classes 
	//___________________

	// $("a").addClass("fancy-link")
	// $("p:first").addClass("large emphasize")

	// $("div").addClass(function(index, currentClass) {
	// 	if(currentClass === "dumy") {
	// 		return "red-box"
	// 	}
	// })

	// $(".red-box").removeClass("red-box").addClass("blue-box")

	// $(".dumy").removeClass("dumy").addClass("green-box")


	// //================================================================
	// // Changing the data of an element
	// //=================================================================
	// var gallery = $(".gallery")
	// var images = [
	// "images/laptop-mobile_small",
	// "images/laptop-on-table_small",
	// "images/people-office-group-team_small"
	// ]
	// gallery.data("availableImages", images)
	// console.log(gallery.data("availableImages"))


	// gallery.data("name", "The awesome gallery")
	// console.log(gallery.data())

	// gallery.removeData("name")
	// console.log(gallery.data("name")) // should give undefined

	// //============ using the data props in html ===========
	// var red = $(".red-box")

	// console.log(red.data("name"))

	// //================================================================
	// // Retriving / changing content 
	// // text() , html()
	// //=================================================================

	// var firstPar = $("p:first")

	// console.log(firstPar.html())
	// console.log(firstPar.text())

	// // firstPar.text("<strong>Ahmed</strong> was here!")
	// // firstPar.html("<strong>Ahmed</strong> was here!")

	// firstPar.html(firstPar.html() + "<strong>Did you see me!?</strong>")


	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	//++++++++++++++++++++++++++++++++++++++++++++++++++++
	// Handling Events
	//___________________
	// $("#btn-click").click(function(event) {
	// 	console.log(event)
	// 	alert("you got it!")
	// })
	// $(".red-box").click(function() {
	// 	$(this).fadeTo(1000, 0.5)
	// })

	// $("#btn-hover").hover(function() {
	// 	$(this).css("background-color", "black")
	// 	$(this).css("color", "wheat")
	// })

	// $(".green-box").hover(function() {
	// 	$(this).text("I was hoverd!")
	// })

	// var blueBox = $(".blue-box")
	// var redBox = $(".red-box")
	// var greenBox = $(".green-box")

	// blueBox.mouseenter(function() {
	// 	$(this).stop().fadeTo(500, 0.5)
	// })
	// blueBox.mouseleave(function() {
	// 	$(this).stop().fadeTo(500, 1)
	// })



	// //hover(handlerIn, hamdlerOut)
	// greenBox.hover(function(){
	// 	$(this).stop().fadeTo(500, 0.5)
	// }, function() {
	// 	$(this).stop().fadeTo(500, 1)
	// })



	// attaching the same elements to diffrent events
	// .on('click', function() {.....})
	//==================
	// var galleryImage = $(".gallery").find("img")

	// galleryImage.on("click", changeImage)

	// function changeImage() {
	// 	var images = [
	// 	"images/laptop-mobile_small.jpg",
	// 	"images/laptop-on-table_small.jpg",
	// 	"images/people-office-group-team_small.jpg"
	// 	]
	// 	var i = 0 
	// 	i = ( i + 1 ) % images.length
	//  	$(this).fadeOut(function() {
	//  		$(this).attr("src", images[i]).fadeIn()
	//  	})
	// }

	//=======================================================
	// Delegated Events
	//(parent).on("event", "")
	//=======================================================

	// $("body").on("mouseenter", "li", function() {
	// 	$(this).css("color", "red")
	// })


	//=======================================================
	// Passing data to events
	//=======================================================

	$("#btn-click").click({
		name: "Ahmed",
		email: "ahmed.soliman@programmer.net",
		domain: "www.ahmedsoliman.net"
	}, function(event) {
		greetUser(event.data)
	})

	function greetUser(userdata) {
		username = userdata.name
		userMail = userdata.email
		userDomain = userdata.domain

		alert("Welcome " + username + " your Email: " + userMail + "your domain " + userDomain)
	}

	//=======================================================
	// CREATING AN IMAGE GALLERY WITH LIGHTBOX PREVIEW
	//=======================================================

	var galleryItems = $(".gallery").find("img")
	galleryItems.css("width", "33%").css("opacity", "0.6")

	galleryItems.mouseenter(function() {
		$(this).stop().fadeTo(500, 1)
	})

	galleryItems.mouseleave(function() {
		$(this).stop().fadeTo(500, 0.6)
	})
	galleryItems.click(function() {
		var source = $(this).attr("src")
		var image = $("<img>").attr("src", source).css("width", "100%")
		$(".lightbox").empty().append(image).fadeIn(2000)
	})

	$(".lightbox").click(function() {
		$(this).stop().fadeOut()
	})


	//=======================================================
	// Handling keyboard events
	//=======================================================
	$("html").keydown(function() {
		console.log(event.which)

		var rightArrow = 39
		var leftArrow = 37

		if(event.which === 39) {
			$(".blue-box").stop().css("margin-Left", "+=10px")
		}else if(event.which === 37) {
			$(".blue-box").stop().css("margin-left", "-=10px")
		}

	})

	// var inputFilds = $("input, textarea").not("input:submit")
	// inputFilds.focus(function() {
	// 	$(this).css("box-shadow", "0 0 4px #666")
	// })

	// inputFilds.blur(function() {
	// 	$(this).css("box-shadow", "none")
	// })

	// $("input:text").blur(function() {
	// 	var value = $(this).val()
	// 	if(value < 4 ) {
	// 		alert("hey yoo! normal name..")
	// 		$(this).css("box-shadow", "0 0 4px red")
	// 	}else {
	// 		$(this).css("box-shadow", "0 0 4px green ")
	// 	}
	// })


	// $("#checkbox").change(function() {
	// 	var isChecked = $(this).is(":checked") // prop("checked")
	// 	if(isChecked) {
	// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181")
	// 	} else {
	// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811")
	// 	}

	// })
	// $("select").change(function() {
	// 	var selectedOption = $(this).find(":selected").text()
	// 	alert(selectedOption)

	// })

	// $("#form").submit(function() {
	// 	var textarea = $("#message")

	// 	if (textarea.val().trim() == "" || textarea.val() < 6 ) {
	// 		$("#message").css("box-shadow", "0 0 4px #811")
	// 		event.preventDefault()
	// 	}
	// })

	// var form = $("#form")
	// enableFastFeedback(form)

	// form.submit(function(event) {
	// 	var name = $("#name").val()
	// 	var password = $("#password").val()
	// 	var message = $("#message").val()
	// 	var checkbox = $("#checkbox").is(":checked")
		
	// 	validateNameField(name, event)
	// 	validetePasswordField(password, event)
	// 	validateMessageField(message, event)
	// 	checkedBox(checkbox, event)
	// })

	// function enableFastFeedback(formElement) {
	// 	var nameInput = formElement.find("#name")
	// 	var passwordInput = formElement.find("#password")
	// 	var messageInput = formElement.find("#message")
	// 	var checkboxInput = formElement.find("#checkbox")	
	
	// 	nameInput.blur(function() {
	// 		var name = $(this).val()
	// 		validateNameField(name, event)

	// 		if(!isValidName(name)) {
	// 			$(this).css("box-shadow" , "0 0 4px #811") 
	// 			$(this).css("border" , "1px solid #600")
	// 		} else {
	// 			$(this).css("box-shadow" , "0 0 4px #181") 
	// 			$(this).css("border" , "1px solid #060")
	// 		}
	// 	})
	// 	passwordInput.blur(function() {
	// 		var password = $(this).val()
	// 		validetePasswordField(password, event)

	// 		if(!isValidPassword(password)) {
	// 			$(this).css("box-shadow" , "0 0 4px #811") 
	// 			$(this).css("border" , "1px solid #600")
	// 		} else {
	// 			$(this).css("box-shadow" , "0 0 4px #181") 
	// 			$(this).css("border" , "1px solid #060")
	// 		}
	// 	})
	// 	messageInput.blur(function() {
	// 		var message = $(this).val()
	// 		validateMessageField(message, event)

	// 		if(!isValidMessage(message)) {
	// 			$(this).css("box-shadow" , "0 0 4px #811") 
	// 			$(this).css("border" , "1px solid #600")
	// 		} else {
	// 			$(this).css("box-shadow" , "0 0 4px #181") 
	// 			$(this).css("border" , "1px solid #060")
	// 		}
	// 	})
	// 	checkboxInput.blur(function() {
	// 		var checkbox = $(this).add("label[for='cb']")
	// 		var isChecked = $(this).prop("checked")
	// 		if(!isChecked) {
	// 			$(this).add("label[for='cb']").css("box-shadow" , "0 0 4px #811") 
	// 			$(this).add("label[for='cb']").css("border" , "1px solid #600")
	// 		} else {
	// 			$(this).add("label[for='cb']").css("box-shadow" , "0 0 4px #181") 
	// 			$(this).add("label[for='cb']").css("border" , "1px solid #060")
	// 		}
	// 	})
	// }


	// function validateNameField(name, event) {
	// 	if (!isValidName(name)) {
	// 		$("#name-feedback").text("Please type your name!").css("color", "#811")
	// 		event.preventDefault()
	// 	}else {
	// 		$("#name-feedback").text("")
	// 	}
	// }

	// function validetePasswordField(password, event) {
	// 	if(!isValidPassword(password)) {
	// 		$("#password-feedback").text("Password should contain least of 6 chr.").css("color", "#811")
	// 		event.preventDefault()
	// 	}else {
	// 		$("#password-feedback").text("")
	// 	}
	// }

	// function validateMessageField(message, event) {
	// 	if(!isValidMessage(message)) {
	// 		$("#message-feedback").text("Please type your message!").css("color", "#811")
	// 		event.preventDefault()
	// 	}else {
	// 		$("#message-feedback").text("")	
	// 	}
	// }
	// function checkedBox(checkbox, event) {
	// 	if(($("#checkbox").prop("checked")) === false) {
	// 		$("#checkbox-feedback").text("you must check the box!").css("color", "#811")
	// 		event.preventDefault()
	// 	}else {
	// 		$("#checkbox-feedback").text("")
	// 	}
	// }


	// function isValidName(name) {
	// 	return name.length >= 2
	// }
	// function isValidPassword(password) {
	// 	return password.length >= 6
	// }
	// function isValidMessage(message) {
	// 	return message.length >= 8
	// }
	// function isChecked(checkbox) {
	// 	return checkbox = true
	// }

	// $("#code").load("js/script.js")

	// $("#code").load("js/script.js", function(response, status) {
	// 	if (status == "error") {
	// 		alert("could not find file")
	// 	}
	// 	console.log(response)
	// })

	//================================================================
	//================================================================
	//================================================================
	//================================================================
	//JSON, $.getJSON()

	//++++++++++++++++++++++++++++++++


	// var flickerApiUrl ="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

	// $.getJSON(flickerApiUrl, {
	// 	tags: "sun, beach",
	// 	tagmode: "any",
	// 	format: "json"
	// }).done(function(data) {
	// 	$.each(data.items, function(index, item) {
	// 		console.log(item)
	// 		$("<img>").attr("src", item.media.m).appendTo("#flicker")

	// 		if (index == 4 ) {
	// 			return false
	// 		}
	// 	})
	// }).fail(function() {
	// 	alert("AJAX call failed!")
	// })


	//=============================================================
	//Pokemon JSON API

	var pokeapiUrl = "http://pokeapi.co/api/v2/generation/1"

	




});
	
