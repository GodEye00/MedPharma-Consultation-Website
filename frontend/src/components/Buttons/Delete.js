import $ from "jquery"

import swal from "../../Javascripts/Swal"

import "./delete.css"






function _delete() {


    window.addEventListener('load', () => {  

        var account = JSON.parse(sessionStorage.getItem("account"))


        let current_window_locationUrl = window.location.href

 

$('#delete').on( 'click', function(e) {

    e.preventDefault()


    $.ajax ( {
    type: "DELETE",
    url: "https://aqueous-atoll-96492.herokuapp.com/accounts/" + account.id,
    data: {
        id : account.id
    },
    
    dataType: " json ",
   
     async: false,
    timeout: 5000,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function(xhr) { 

        swal('warning', 'Irreversible action!', 'Are you sure you want to delete your account?')

    },

    complete: function() {
  
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
    <button id="delete" 
    className="loginLogoutCreateUpdateDeleteFormSubmit"
            >Delete  Account</button>
)

}






export default _delete