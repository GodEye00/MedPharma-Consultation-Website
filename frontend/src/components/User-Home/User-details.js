import $ from "jquery"
import CreateUpdateDelete from "../Api-create-update-delete/api-create-update-delete"
import swal from "../../Javascripts/Swal"


import "./User-details.css"
import "../Api-create-update-delete/user-update-button.css"



function userDetails() {

    var accounts = {}

    window.addEventListener('load', () => {

      accounts = JSON.parse(sessionStorage.getItem("account"))


        var new_accounts = {}

        var text = $("#text")
        var text_appear = $("#type-symp")
        var symp = $("#symptoms")
        var submit = $("#sub-mit")
        var update = $("#update")

    
    submit.on('click', () => {
        symp.css('display', 'block')
        if (!new_accounts) {
            symp.text(accounts.symptoms)
        } else {
          symp.text(new_accounts.symptoms)
        }
        submit.css('display', 'none')
        text.css('display', 'none')
        text_appear.css('display', 'none')
        update.css('display', 'block')
    })
 

    update.on('click', () => {
        text.css('display', 'block')
        symp.css('display', 'none')
        text_appear.css('display', 'block')
        submit.css('display', 'block')
        update.css('display', 'none')

    })

    let my_text = text_appear.value
 
    

  
      submit.on('click', function() {
     
    $.ajax ( {
        type: "PUT",
        url: "https://aqueous-atoll-96492.herokuapp.com/accounts/:" + accounts.id,
     //   headers: {"Authorization" : "Bearer " + token},
        dataType: " json ",
        data: {
            title: accounts.title,
            firstName: accounts.firstName,
            lastName: accounts.lastName,
            email: accounts.email,
            symptoms: accounts.symptoms,
            consultation: my_text,
            bookDate: accounts.dateBooked,
            doctor: accounts.doctor
        },
       
         async: false,
        timeout: 200,
        xhrFields: {
            withCredentials: true
        },        
    
        success : function(data) {
    
            swal('success', 'Submitted', 'Updated symptoms sent!')     
            
            new_accounts  = data
     
            },
    
        
        fail: function() { 
    
                swal('error', 'Sorry', 'Something went wrong. Retry')
    
    
               
            
        },
    
        error: function() {
    
            swal('error', 'Error', 'Something went wrong. Retry')
        }
    
    
    
        }) 
               

    

})


})










    return (
        <div id="user-details"> 
        
        <div className="userame"><span className="user-title"><h2>{accounts.title}</h2></span>
                <span className="user-firstname"><h2>{accounts.firstName}</h2></span>
                <span className="user-lastname"><h2>{accounts.lastName}</h2></span></div>
            <div className="created-updated"><div className="date-created"><h5>Date Created:</h5><h6>{accounts.created}</h6></div>
            <div className="last-update"><h5>Booked Date:</h5><h6>{accounts.bookDate}</h6></div></div>
            <span className="your-symptoms"> Your Symptoms</span>
            <span className="your-consultation"> Your Consultation</span>
            <div id="text">Enter your most current symptoms below</div>
            <textarea id="type-symp"></textarea>
            <div className="node-symp"><div id="symptoms">{accounts.symptoms}</div> </div>
            <div className="consults">{accounts.consultation}</div> 
            <button id="update" className="loginLogoutCreateUpdateDeleteFormSubmit">
                Update Symptoms</button>
            <button id="sub-mit" className="loginLogoutCreateUpdateDeleteFormSubmit" >
               Submit </button>
            <CreateUpdateDelete /> 
            
            
        
        </div>

    )

} 

export default userDetails