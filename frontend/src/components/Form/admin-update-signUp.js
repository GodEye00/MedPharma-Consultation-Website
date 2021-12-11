import $ from "jquery"

import swal from "../../Javascripts/Swal"

import "./sign-up-fieldset.css"

function updateSignUpForms() {

    var account = {} 


    window.addEventListener('load', () => {  

        account = JSON.parse(sessionStorage.getItem("account"))

        var token = account.jwtToken   

        $('#admin-update-sign-up-forms').on( 'submit', function(e) {
        
            e.preventDefault()
        
        
            var form = $("#admin-update-sign-up-forms")
        

             var url = "https://aqueous-atoll-96492.herokuapp.com/accounts/" + account.id 
             var ad_url = "https://tranquil-temple-70575.herokuapp.com/admin_accounts/" + account.id 

             account.Role = 'Nurse' ?
        
                $.ajax ( {
                type: "PUT",
                url: ad_url,
                data: form.serialize() ,
                headers: {"Authorization" : "Bearer " + token},

                
                dataType: " json ",
               
                 async: false,
                timeout: 5000,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend: function(xhr) { 
            
                },
            
                complete: function() {
              
                },
                
            
                success : function(data) {
        
                    swal('success', 'Success!', data)                         
            
                    },
            
                
                fail: function() { 
            
                        swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')
            
            
                       
                    
                },
            
                error: function() {
            
                    swal('error', 'Error', 'Sorry, something went wrong. Please sign up again')
                }
            
            
            
                }) 

                : 

                $.ajax ( {
                    type: "PUT",
                    url: url,
                    data: form.serialize() ,
                    headers: {"Authorization" : "Bearer " + token},

                    
                    dataType: " json ",
                   
                     async: false,
                    timeout: 5000,
                    xhrFields: {
                        withCredentials: true
                    },
                    beforeSend: function(xhr) { 
                
                    },
                
                    complete: function() {
                  
                    },
                    
                
                    success : function(data) {
            
                        swal('success', 'Success!', data)                         
                
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
        <form id="admin-update-sign-up-forms" class="sign-up" 
     method="put">

    <fieldset>
    <legend>ADMIN UPDATE YOUR ACCOUNT</legend>

    <label for="title" class="title">Title</label><br />
 <select id="title" name="title" value = {account.title} required>
     <option value="chosee your title">Please choose a title</option>
     <option value="Dr."  >Dr. </option>
     <option value="Phd."  >Phd. </option>
     <option value="Mr." selected >Mr. </option>
     <option value="Mrs."  >Mrs. </option>
     <option value="Master"  >Master </option>
     <option value="Mistress"  >Mistress </option>
     <option value="Snr."  >Snr. </option>
     <option value="Jnr."  >Jnr. </option>
     <option value="Sir"  >Sir </option>
     <option value="Madam" >Madam </option>
 </select>
 <br />


<label for="fname" class="sign-up-form-fname">First Name:</label><br />
<input type="text" name="name" class="name"  required
placeholder = "eg. Nurain"
 value={account.firstName}
/><br />

<label for="lname" class="sign-up-form-lname">Last Name:</label><br />
<input type="text" name="name"   class="name" required
placeholder = "eg. Dawuda"
value={account.lastName}
/><br />

<label for="email" class="sign-up-form-email">Email:</label><br />
<input type="email" name="email" class="email" required
placeholder="eg. lawson@gmail.com"
value={account.enail}
/><br />

<label for="pwd" class="sign-up-form-pwd">Password:</label><br />
<input type="password" name="password" id="pwd" class="pwd" 
required
/> 


<label for="pwd" class="sign-up-form-pwd">Confirm Password:</label><br />
<input type="password" name="passwrod" class="pwd" id="pwd" required />


 <input type="submit" id="sign-up-from-submit" value="Update Account" 
 className ="loginLogoutCreateUpdateDeleteFormSubmit"/>

</fieldset>
</form> 


</div>



)

}

export default updateSignUpForms