import $ from "jquery"

import SignUpFiedset from "./sign-up-fieldset"

import swal from "../../Javascripts/Swal"



function signUpForms() {

window.addEventListener('load', () => {  

    let current_window_locationUrl = window.location.href


$('#sign-up-forms').on( 'submit', function(e) {

    e.preventDefault()


    var form = $("#sign-up-forms")


        


        $.ajax ( {
            type: "POST",
            url: "https://aqueous-atoll-96492.herokuapp.com/accounts/register",
            data: form.serialize() ,
            
            dataType: " json ",
           
             async: false,
            timeout: 200,
            xhrFields: {
                withCredentials: true
            },            
        
            success : function(data) {
    
                swal('success', 'Success!', "Your Account has been created. Kindly login")  
                
                window.open(current_window_locationUrl + "/home")                       
        
                },
        
            
            fail: function() { 
        
                    swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')
        
        
                   
                
            },
        
            error: function() {
        
                swal('error', 'Error', 'Sorry, something went wrong. Please sign up again')
            }
        
        
        
            })
            
    
    
        e.preventDefault()
    
    })


    
    

})
 

    return (


    <div class="sign-up-form-container">
        <form id="sign-up-forms" class="sign-up" 
    action="https://aqueous-atoll-96492.herokuapp.com/accounts/register" method="POST">

        <SignUpFiedset />

  </form> 


</div>



)

}



export default signUpForms