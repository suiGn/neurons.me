$(document).ready(function(){$(function(){function t(){return o}var o,e=-1,n=0,a=function(){var t=["Hello, my name is <strong>TOASTR</strong>","Welcome to <strong>Umega app!</strong>"];return e++,e===t.length&&(e=0),t[e]},s=function(t){return t=t?t:"Clear itself?",t+='<br /><br /><button type="button" class="btn clear">Yes</button>'};$("#showtoast").click(function(){var t=$("#toastTypeGroup input:radio:checked").val(),e=$("#message").val(),r=$("#title").val()||"",i=$("#showDuration"),l=$("#hideDuration"),c=$("#timeOut"),p=$("#extendedTimeOut"),u=$("#showEasing"),d=$("#hideEasing"),h=$("#showMethod"),g=$("#hideMethod"),v=n++,f=$("#addClear").prop("checked");toastr.options={closeButton:$("#closeButton").prop("checked"),debug:$("#debugInfo").prop("checked"),newestOnTop:$("#newestOnTop").prop("checked"),progressBar:$("#progressBar").prop("checked"),positionClass:$("#positionGroup input:radio:checked").val()||"toast-top-right",preventDuplicates:$("#preventDuplicates").prop("checked"),onclick:null},$("#addBehaviorOnToastClick").prop("checked")&&(toastr.options.onclick=function(){alert("You can perform some custom action after a toast goes away")}),i.val().length&&(toastr.options.showDuration=i.val()),l.val().length&&(toastr.options.hideDuration=l.val()),c.val().length&&(toastr.options.timeOut=f?0:c.val()),p.val().length&&(toastr.options.extendedTimeOut=f?0:p.val()),u.val().length&&(toastr.options.showEasing=u.val()),d.val().length&&(toastr.options.hideEasing=d.val()),h.val().length&&(toastr.options.showMethod=h.val()),g.val().length&&(toastr.options.hideMethod=g.val()),f&&(e=s(e),toastr.options.tapToDismiss=!1),e||(e=a()),$("#toastrOptions").text('Command: toastr["'+t+'"]("'+e+(r?'", "'+r:"")+'")\n\ntoastr.options = '+JSON.stringify(toastr.options,null,2));var k=toastr[t](e,r);o=k,"undefined"!=typeof k&&(k.find("#okBtn").length&&k.delegate("#okBtn","click",function(){alert("you clicked me. i was toast #"+v+". goodbye!"),k.remove()}),k.find("#surpriseBtn").length&&k.delegate("#surpriseBtn","click",function(){alert("Surprise! you clicked me. i was toast #"+v+". You could perform an action here.")}),k.find(".clear").length&&k.delegate(".clear","click",function(){toastr.clear(k,{force:!0})}))}),$("#clearlasttoast").click(function(){toastr.clear(t())}),$("#cleartoasts").click(function(){toastr.clear()})})});