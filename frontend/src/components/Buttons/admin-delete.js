import $ from "jquery"

import swal from "../../Javascripts/Swal"

import "./admin-update-delete.css"






function _delete(id) {


    window.addEventListener('load', () => {  

    var account = JSON.parse(sessionStorage.getItem("account"))

    let current_window_locationUrl = window.location.href

    $('#admin-delete').on( 'click', function(e) {

    e.preventDefault()


    $.ajax ( {
    type: "DELETE",
    url: "https://tranquil-temple-70575.herokuapp.com/admin_accounts/" + account.id,
    data: {
        id : account.id
    },
    
    dataType: " json ",
   
     async: false,
    timeout: 500,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function(xhr) { 

        swal('warning', 'Irreversible action!', 'Are you sure you want to delete your account?')

    },   

    success : function(data) {

        swal('success', 'Account Deleted!', data)

        window.open(current_window_locationUrl + "/home", "_self") 

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
    <button id="admin-delete" 
    className="loginLogoutCreateUpdateDeleteFormSubmit"
            >Delete  Account</button>
)

}




export default _delete