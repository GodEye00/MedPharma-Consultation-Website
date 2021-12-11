import $ from "jquery"
import "jquery"

import swal from "../../../Javascripts/Swal"

import "../../Buttons/loginForms.css"
import "../../Buttons/sign-up-button.css"  
import "./logout_button.css"


function logout() {

    window.addEventListener('load', () => {

        var account = JSON.parse(sessionStorage.getItem("account"))

        var token = account.jwtToken  

        let current_window_locationUrl = window.location.href


    $('#logout').on('click', function(e) {

        e.preventDefault()
        

        
        $.ajax ({
            type: "POST",
            url: "https://aqueous-atoll-96492.herokuapp.com/accounts/revoke-token",
            headers: {"Authorization" : "Bearer " + token},
            
            dataType: "json ",
           
             async: false,
            timeout: 200,
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function(xhr) { 
                swal('question', 'Logout', 'Are you sure you want to logout?')
        
            },
        
            complete: function() {
          
            },
            
        
            success : function(data) {
        
                window.open(current_window_locationUrl + "/home", "_self") 
              
                },
        
            
            fail: function() { 
        
                    swal('error', 'Error', 'Something went wrong. Please retry')
        
        
                   
                
            },
        
            error: function(data) {
        
                swal('error', 'Error', 'Something went wrong. Retry' + JSON.stringify(data))
            }
        
        
        
            }) 
                
      
      
    })

})

    return (

        <div>

        <button id="logout" 
        className="loginLogoutCreateUpdateDeleteFormSubmit">
            Logout</button>

            </div>
    )
}

export default logout