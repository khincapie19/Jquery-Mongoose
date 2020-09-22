$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    ajaxPost();
  })
})

function ajaxPost(){
  var formData = {
    username: $('#user-github').val(),
    email: $('#passcode').val(),
    terms: $('#terms').val()
  }
 console.log(formData)

  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:3000/registration",
    data: JSON.stringify(formData),
    dataType: 'json',
    success: function(users) {
      $("#registeredUsers").html("<tr>" + "<td>" + users.user  + "</td>" + "<td>" + users.email + "</td></tr>");
      $("#form").hide();
      $("#table").removeClass("hidden");
    },
    error: function(e) {
      alert("Error!")
      console.log("ERROR: ", e);
    }
  })

}




//crear una ruta a a que le voy a mandar los aprametros del Formulario, e imprime los parametros cuando los reciba e la ruta
