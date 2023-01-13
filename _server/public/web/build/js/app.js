"use strict";
$(document).ready(function () {
	function e(e) {
		$(e).block({
			message: '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>',
			css: {
				border: "none",
				backgroundColor: "transparent"
			},
			overlayCSS: {
				backgroundColor: "#FAFEFF",
				opacity: .5,
				cursor: "wait"
			}
		})
	}
	function o(e) {
		$(e).unblock()
	}
	var i = function () {
		$(".main-sidebar").mCustomScrollbar({
			autoHideScrollbar: !0,
			mouseWheel: {
				scrollAmount: 250
			}
		})
	};
	$.cookie("fixed-header") ? ($("body").addClass("fixed-header"), $("#fixed-header").prop("checked", !0)) : ($("body").removeClass("fixed-header"), $("#fixed-header").prop("checked", !1)),
	$.cookie("fixed-sidebar") ? ($(".main-sidebar").addClass("fixed").removeAttr("style"), 0 == $("#native-scrollbar").prop("checked") ? i() : $(".main-sidebar").css("overflow-y", "auto"), $("#fixed-sidebar").prop("checked", !0)) : ($(".main-sidebar").removeClass("fixed"), 0 == $("#native-scrollbar").prop("checked") ? $(".main-sidebar").mCustomScrollbar("destroy") : $(".main-sidebar").css("overflow-y", ""), $("#fixed-sidebar").prop("checked", !1)),
	$.cookie("pinned-sidebar") ? ($(".main-sidebar").removeClass("pinned"), $("#pinned-sidebar").prop("checked", !1), $(".main-sidebar").addClass("closed"), $("#closed-sidebar").prop("checked", !0)) : ($(".main-sidebar").addClass("pinned"), $("#pinned-sidebar").prop("checked", !0), $("#closed-sidebar").attr("disabled", !0)),
	$.cookie("native-scrollbar") && $.cookie("fixed-sidebar") ? ($(".main-sidebar").mCustomScrollbar("destroy"), $(".main-sidebar").css("overflow-y", "auto"), $("#native-scrollbar").prop("checked", !0)) : !$.cookie("native-scrollbar") && $.cookie("fixed-sidebar") && ($(".main-sidebar").css("overflow-y", ""), i(), $("#native-scrollbar").prop("checked", !1)),
	$(".sidebar-toggle").on("click", function () {
		$(".main-sidebar").toggleClass("closed")
	}),
	$(".search-bar-toggle").on("click", function () {
		$(".search-bar").toggleClass("closed")
	}),
	$(".right-sidebar-toggle").on("click", function () {
		$(".right-sidebar").toggleClass("closed")
	}),
	$(".conversation-toggle").on("click", function () {
		$(".conversation").toggleClass("closed")
	}),
	$(".setting-toggle").on("click", function () {
		$(".setting").toggleClass("closed")
	}),
	$(".fullscreen-toggle").on("click", function () {
		document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
	}),
	$(window).width() < 768 && $(".main-sidebar").addClass("closed"),
	$('[data-toggle="tooltip"]').tooltip(),
	$('[data-toggle="popover"]').popover(),
	$("#fixed-header").on("click", function () {
		$("body").toggleClass("fixed-header"),
		1 == $(this).prop("checked") ? $.cookie("fixed-header", !0) : 0 == $(this).prop("checked") && $.removeCookie("fixed-header")
	}),
	$("#fixed-sidebar").on("click", function () {
		1 == $(this).prop("checked") ? ($(".main-sidebar").addClass("fixed").removeAttr("style"), 0 == $("#native-scrollbar").prop("checked") ? i() : $(".main-sidebar").css("overflow-y", "auto"), $.cookie("fixed-sidebar", !0)) : 0 == $(this).prop("checked") && ($(".main-sidebar").removeClass("fixed"), 0 == $("#native-scrollbar").prop("checked") ? $(".main-sidebar").mCustomScrollbar("destroy") : $(".main-sidebar").css("overflow-y", ""), $.removeCookie("fixed-sidebar"))
	}),
	$("#public-profile").on("click", function () {
		if($("#public-profile").is(':checked'))
		$("#private-profile").prop('checked', false); 
		else
		$("#private-profile").prop('checked', true); 
	}),
	$("#private-profile").on("click", function () {
		if($("#private-profile").is(':checked'))
		$("#public-profile").prop('checked', false); 
		else
		$("#public-profile").prop('checked', true);
	}),
	
	$("#pinned-sidebar").on("click", function () {
		1 == $(this).prop("checked") ? ($(".main-sidebar").addClass("pinned"), $(".main-sidebar").removeClass("closed"), $("#closed-sidebar").prop("checked", !1), $("#closed-sidebar").attr("disabled", !0), $.removeCookie("pinned-sidebar")) : 0 == $(this).prop("checked") && ($(".main-sidebar").removeClass("pinned"), $.cookie("pinned-sidebar", !0), $(".main-sidebar").addClass("closed"), $("#closed-sidebar").prop("checked", !0), $("#closed-sidebar").removeAttr("disabled"))
	}),
	$("#closed-sidebar").on("click", function () {
		$(".main-sidebar").toggleClass("closed")
	}),
	$("#native-scrollbar").on("click", function () {
		1 == $(this).prop("checked") && 1 == $("#fixed-sidebar").prop("checked") ? ($(".main-sidebar").mCustomScrollbar("destroy"), $(".main-sidebar").css("overflow-y", "auto"), $.cookie("native-scrollbar", !0)) : 0 == $(this).prop("checked") && 1 == $("#fixed-sidebar").prop("checked") && ($(".main-sidebar").css("overflow-y", ""), i(), $.removeCookie("native-scrollbar"))
	}),
	$(".widget-collapse").on("click", function () {
		$(this).closest(".widget").find(".widget-body").slideToggle(300)
	}),
	$(".widget-reload").on("click", function () {
		var i = $(this).closest(".widget");
		e(i),
		window.setTimeout(function () {
			o(i)
		},
		3e3)
	}),
	$(".widget-remove").on("click", function () {
		$(this).closest(".widget").hide()
	})
	
});