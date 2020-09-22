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
    terms: $('#terms').is(':checked')
  }
 console.log(formData)

  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:3000/registration",
    data: JSON.stringify(formData),
    dataType: 'json',
    success: function(users) {
      let content = ``;
      for(let i = 0; i < users.length; i++) {
        const user = users[i];

        let row = "<tr>" + "<td>" + user.username  + "</td>" + "<td>" + user.email + "</td></tr>";
        content += row;
      }

      $("#registeredUsers").html(content);
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
