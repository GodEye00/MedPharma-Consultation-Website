import $ from "jquery"
import React from "react"
import "react-dom"


import "../Buttons/loginForms.css"

import "./sign-up-fieldset.css"

import swal from "../../Javascripts/Swal"

// import $ from "jquery"


   
class AdminAccount extends React.Component {

    shouldComponentUpdate() {
   return
 }

 render() {

 
    window.addEventListener('load', () => {  

        let current_window_locationUrl = window.location.href

        $('#nurse-doc-sign-up').on( 'submit', function(e) {
        
            e.preventDefault()
        
        
            var form = $("#nurse-doc-sign-up")
        
        
                
        
        
                $.ajax ( {
                    type: "POST",
                    url: "https://tranquil-temple-70575.herokuapp.com/admin_accounts/register",
                    data: form.serialize() ,
                    
                    dataType: " json ",
                   
                     async: false,
                    timeout: 200,
                    xhrFields: {
                        withCredentials: true
                    },
                    beforeSend: function(xhr) { 
                
                    },                    
                
                    success : function() {
            
                        swal('success', 'Success!', "Your Account has been created. Kindly login")  
                        
                        window.open(current_window_locationUrl + "/home", "_self")                       
                
                        },
                
                    
                    fail: function() { 
                
                            swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')               
                            
                    },
                
                    error: function() {
                
                        swal('error', 'Error', 'Sorry, something went wrong. Please sign up again ')
                    }
                
                    })
                    
            
            
                e.preventDefault()
            
            })
        
        
            
            
        
        })
 
        

    return(
      

        <div className="form-container">

   <form id="nurse-doc-sign-up" class="sign-up" 
        action="https://tranquil-temple-70575.herokuapp.com/admin_accounts/register" method="POST">
        
    <fieldset>
    <legend>ADMIN CREATE AN ACCOUNT</legend>

<label for="title" class="title">Title</label><br />
 <select id="title" name="title" >
     <option value="chosee your title">Please choose a title</option>
     <option value="officer1"  >Dr. </option>
     <option value="officer1"  >Phd. </option>
     <option value="officer1" selected >Mr. </option>
     <option value="officer1"  >Mrs. </option>
     <option value="officer1"  >Master </option>
     <option value="officer1"  >Mistress </option>
     <option value="officer1"  >Snr. </option>
     <option value="officer1"  >Jnr. </option>
     <option value="officer1"  >Sir </option>
     <option value="officer1" >Madam </option>
 </select>
 <br />

<label for="fname" class="sign-up-form-fname">First Name:</label><br />
<input type="text" name="firstName" class="name"  
placeholder = "eg. Nurain"
/><br />

<label for="lname" class="sign-up-form-lname">Last Name:</label><br />
<input type="text" name="lastName" class="name" 
placeholder = "eg. Dawuda"
/><br />

<label for="email" class="sign-up-form-email">Email:</label><br />
<input type="email" name="email" class="email" 
placeholder="eg. lawson@gmail.com"
/><br />

<label for="pwd" class="sign-up-form-pwd">Password:</label><br />
<input type="password" name="password" id="pwd" class="pwd"
/>  
<br />

{ /* <input type="checkbox" id="shwPwd"/>
<label for="showPwd">show</label>  */ }

<label for="pwd" class="sign-up-form-pwd">Confirm Password:</label><br />
<input type="password" name="confirmPassword" class="pwd" id="pwd" />
<br />

{ /* <input type="checkbox" id="shwPwd" onclick = "toggle()" />
<label for="showPwd">show</label>  */ }



 <input type="submit" id="sign-up-form-submit" value="Create Account" 
    className ="loginLogoutCreateUpdateDeleteFormSubmit"
 />

</fieldset>

</form>

</div>

    )

}

}

export default AdminAccount