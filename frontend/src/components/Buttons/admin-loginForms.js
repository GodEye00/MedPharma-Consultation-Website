import $ from "jquery"
import React from 'react'

import swal from "../../Javascripts/Swal"

import "./loginForms.css"
import "./admin-loginForms.css"


function AdminLoginForm() {
    

    window.addEventListener('load', () => {  

        let current_window_locationUrl = window.location.href

        var ssoAction = function (data) { 

            if(data.role === "Nurse") {

                window.open(current_window_locationUrl + "/nurse", "_self") 
            }
      
         else if (data.role === "Doctor") {
            window.open(current_window_locationUrl + "/admin", "_self") 
         }

    }

        

     

       


$('#login-Form').on( 'submit', function(e) {

    e.preventDefault()

  var form = $(this)


function makeBaseAuth(user, pswd){ 
    var token = user + ':' + pswd;
    var hash = "";
    if (btoa) {
       hash = btoa(token);
    }
    return "Basic " + hash;
 }

 var mail = $('.email').val().toString()
 var pwd = $('.pwd').val().toString()
    

    $.ajax ( {
    type: "POST",
    url: " https://tranquil-temple-70575.herokuapp.com/admin_accounts/authenticate",
    data: form.serialize(),
    
    dataType: " json ",
   
     async: false,
    timeout: 5000,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function(xhr) { 
        xhr.setRequestHeader('Authorization', makeBaseAuth(mail, pwd));

    },

    complete: function() {
  
    },
    

    success : function(data) {

    sessionStorage.setItem("account", JSON.stringify(data))                      

        ssoAction(data)


        },

    
    fail: function() { 

            swal('error', 'Sorry', 'Something went wrong. Retry')


           
        
    },

    error: function() {

        swal('error', 'Error', 'Something went wrong. Retry')
    }



    }) 

    e.preventDefault()

})




  })

    



    return (
        <div id="background">
        <div className="loginFormContainer" id="admin-login">
            <form id ="login-Form" className="login" name="form"
                action=" https://tranquil-temple-70575.herokuapp.com/admin_accounts/authenticate" method="POST" > 
                <label for="name" className="admin">Email</label>
                <input className="email admin" type="email" name="email" />
                <label for="pwd" className="password-label admin">Password</label>
                <input className="pwd admin" type="password"  name="password" />
                <input id="login" type="submit" value="Login" 
                className="loginLogoutCreateUpdateDeleteFormSubmit log admin"/>
            </form>

             </div> 

             </div>

    )
}

export default AdminLoginForm