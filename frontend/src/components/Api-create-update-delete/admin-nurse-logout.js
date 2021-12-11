import $ from "jquery"
import swal from "../../Javascripts/Swal"


function logout() {

    var account = JSON.parse(sessionStorage.getItem("account"))

    var token = account.jwtToken     


    window.addEventListener('load', () => {

        let current_window_locationUrl = window.location.href

        
            $.ajax ({
            type: "POST",
            url: "https://tranquil-temple-70575.herokuapp.com/admin_accounts/revoke-token",
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
        
            error: function() {
        
                swal('error', 'Error', 'Something went wrong. Retry')
            }
        
        
        
            }) 
                
      
          })
}

    

 export default logout
