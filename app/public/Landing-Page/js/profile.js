 
 var email = "shant_wanes@yahoo.com"

 var currentURL = window.location.origin;
console.log("hello")
//  $.get(currentURL + "/api/profile/" + email, function(data) {
//   renderUsers(data);
//     //console.log(data);
  
// });

 $("#savebtn").on("click", function(event) {
   event.preventDefault();
   console.log("hi")
   if ($("#password").val().trim() !== "") {
    // Here we grab the form elements
    var updateUser = {
      userFname: $("#first_name").val().trim(),
      userLname: $("#last_name").val().trim(),
      userEmail: $("#email").val().trim(),
      userPassword: $("#password").val().trim()
    };
    var currentURL = window.location.origin;

<<<<<<< HEAD
    $.post("/auth/register", {email: updateUser.userEmail, password: updateUser.userPassword})
    .then(function(resp) {
      window.location.assign("/")
    })
    .catch(function(err) {
      console.error(err);
    })
=======
    $.post(currentURL + "/api/profile", updateUser,
        function(data) {});
>>>>>>> 012a4dff98b26884f9b2c253a96c85429726045c
  }
  else
  {
      alert("The Password can't be blank");
  }


 });

  function renderUsers(data) {
    if (data.length !== 0) {
      //console.log(data[0].firstname);
      $("#first_name").val(data[0].firstname);
      $("#last_name").val(data[0].lastname);
      $("#email").val(data[0].email);
      $("#password").val(data[0].user_password);
    //   for (var i = 0; i < data.length; i++) {
    //     var div = $("<div>");
        
    //     div.append("<h2>" + data[i].email + "</h2>");
    //     div.append("<p>Name: " + data[i].firstname + "</p>");
    //     div.append("<p>Lastname: " + data[i].lastname + "</p>");
    //     div.append("<p>Password: " + data[i].user_password + "</p>");
    //     //div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");
    //     $("#test").append(div);
    //   }
    }
 };

//   $.get("/api/profile", function(data) {   
//         console.log(data);
//   });

 