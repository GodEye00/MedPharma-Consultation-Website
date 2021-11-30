import React from "react"
import "react-dom"
import $ from "jquery"
import "jquery-ui"



import "../Stylesheets/nurse-admin-accordion.css"
import "../Stylesheets/admin-accordion-styling.css"
import "../Stylesheets/admin-call-user-details.css"


import CreateAccount from "../../../Buttons/patient-doctor-buttons"
import _delete from "../../../Api-create-update-delete/admin-delete"
import   AdminUpdateDelete from "../../../Api-create-update-delete/admin-update-delete"
import Footer from "../../../General-Home/Footer/final-footer"
import users from "../../../Admin-Home/Accordion/Javascript/getAllUser"
import swal from "../../../../Javascripts/Swal"
import { render } from "@testing-library/react"




class AdminAccordion extends React.Component {

     shouldComponentUpdate() {
    return
  }

  render() {


    var my_account = JSON.parse(sessionStorage.getItem("account"))

    var user_account = {}
    var doc_account = {}

    var token = my_account.jwtToken  


        window.addEventListener('load', () => {


          
            $.ajax ( {
                type: "GET",
                url: "http://localhost:4000/accounts/",

                headers: {"Authorization" : "Bearer " + token},
                
                dataType: " json ",
               
                 async: false,
                timeout: 200,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend: function() { 

                    alert("Before calling")
            
                },
            
                complete: function() {
                    alert("Completed")
              
                },
                
            
                success : function(data) {
        
                    swal('success', 'Success!', "All users have been called successfully")  
                    alert("success")

                    user_account = data
                                        
                    },
            
                
                fail: function() { 
            
                        swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')
            
            
                       
                    
                },
            
                error: function(data) {
            
                    swal('error', 'Error', JSON.stringify(data) )
                }
            
            
            
})




    
$.ajax ( {
    type: "GET",
    url: "http://localhost:5000/admin_accounts/",

    headers: {"Authorization" : "Bearer " + token},
    
    dataType: " json ",
   
     async: false,
    timeout: 200,
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function() { 

        alert("Before calling")

    },

    complete: function() {
        alert("Completed")
  
    },
    

    success : function(data) {

        swal('success', 'Success!', "All users have been called successfully")  
        alert("success")

        doc_account = data
                            
        },

    
    fail: function() { 

            swal('error', 'Failed', 'Sorry, something went wrong. Please sign up again')


           
        
    },

    error: function(data) {

        swal('error', 'Error', JSON.stringify(data) )
    }



})

 


    var $ul = $("#list") 
    var $doc_ul = $("#doc-list") 
    var $spec_det = $("#spec-det")
    var $doc_spec_det = $("#doc-spec-det")
    var $cons_symp = $("#cons-symp")
    var i = 0
    var us_len = user_account.length


    while (i < us_len) {
        let details = user_account[user_account.length-(i+1)]
        let id = details.id
        let title = details.title
        let firstName = details.firstName
        let lastName = details.lastName
        let dateCreated = details.created
        let dateBooked  = details.booked
        let symptoms = details.symptoms
        let consultation = details.consultation
        let email = details.email
        let role = details.role

    if (role === 'User') { 

        $ul.prepend( '<li> <div key={'+id+'}> <span><h5>'+ title +' ' + lastName + 
                      '  ' +firstName+ '</h5></span>'  +
                     ' <p> Date Created:  '+ dateCreated +'</p>' +
                     '</div>' +
                    '</li>' )



        $spec_det.prepend('<div id="user-box">' + 
        '<div id="user-nme"><span id="user-ttl"><h2>'+ title +'</h2></span>' +
        '<span id="user-fname"><h2>'+ lastName + '</h2></span>' +
        '<span id="user-lname"><h2>' + firstName + '</h2></span></div>' +
        '<div class="created-updated"><div class="dte-crtd"><h2>Date Patient Created Account</h2><h3>' + dateCreated + '</h3></div>' +
        '<div class="lst-upd"><h2>Date Patient booked Account</h2><h3>'+ dateBooked +'</h3></div></div>' +
        '<span id="yor-symp"> Patient Symptoms</span>' +
        '<div id="symp">'+ symptoms + '</div>' +
        '<span id="yor-const"> Your Provided Consultation</span>' +
        '<div id="const">' + consultation + '</div>' +
        '<button id="del" className="loginLogoutCreateUpdateDeleteFormSubmit" onClick="Del(id)">' +
        'DELETE  '+ firstName.toUpperCase() +'\'S ACCOUNT</button>'+
        ' <button id="nus-email" class="loginLogoutCreateUpdateDeleteFormSubmit change">' +
        '<a class="mailto" href="mailto:" '+ email +
        '> Send Email to Doctor  ' + firstName + '</a> </button>' +
        '</div>' )

    }

    else {

        $doc_ul.prepend( '<li> <div key={'+id+'}> <span><h5>'+ title +' ' + lastName + 
        '  ' +firstName+ '</h5></span>'  +
       '</div>' +
      '</li>' )
        
        
        $doc_spec_det.prepend('<div id="user-box">' + 
        '<div id="user-nme"><span id="user-ttl"><h2>'+ title +'</h2></span>' +
        '<span id="user-fname"><h2>'+ lastName + '</h2></span>' +
        '<span id="user-lname"><h2>' + firstName + '</h2></span></div>' +
        '<span id="yor-symp"> Patient Symptoms</span>' +
        '<div id="symp">'+ symptoms + '</div>' +
        '<span id="yor-const"> Doctor\'s consultation</span>' +
        '<div id="const">' + consultation + '</div>' +
        '<button id="del" className="loginLogoutCreateUpdateDeleteFormSubmit" onClick="Del(id)">' +
        'DELETE  DR. '+ firstName.toUpperCase() +'\'S ACCOUNT</button>'+
        '</div>')

        $cons_symp.prepend('<div id="doctor-consulation">' +
        '<div id="nus-doc-nam">' +
        '<h4>  Doctor: '+ title + '  ' + lastName + '  '
        + firstName + '\'s Consultation</h4></div>'+
        '<div id="nus-u-nam">' +
        '<h4>  For Patient: '+ title + '  ' + lastName + '  '
        + firstName + '</h4></div>'+
        ' <div id="nus-consults">'+ consultation +
        '</div> <br />  <br />'  +
        ' <button id="nus-change" class="loginLogoutCreateUpdateDeleteFormSubmit change">' +
        '<a class="mailto" href="mailto:" '+ email +
        '> Send Email to Doctor  ' + firstName + '</a> </button>')

  

    }

    i++
          
    }


    while (i < us_len) {
        let details = doc_account[doc_account.length-(i+1)]
        let id = details.id
        let title = details.title
        let firstName = details.firstName
        let lastName = details.lastName
        let dateCreated = details.created
        let dateBooked  = details.booked
        let symptoms = details.symptoms
        let consultation = details.consultation
        let email = details.email
        let role = details.role



        $cons_symp.prepend('<div id="doctor-consulation">' +
        '<div id="nus-doc-nam">' +
        '<h4>  Doctor: '+ title + '  ' + lastName + '  '
        + firstName + '\'s Consultation</h4></div>'+
        '<div id="nus-u-nam">' +
        '<h4>  For Patient: '+ title + '  ' + lastName + '  '
        + firstName + '</h4></div>'+
        ' <div id="nus-consults">'+ consultation +
        '</div> <br />  <br />'  +
        ' <button id="nus-change" class="loginLogoutCreateUpdateDeleteFormSubmit change">' +
        '<a class="mailto" href="mailto:" '+ email +
        '> Send Email to Doctor  ' + firstName + '</a> </button>')

    }

})





 

 
 






 































           $.fn.extend({
            easyResponsiveTabs: function (options) {
                //Set the default values, use comma to separate the settings, example:
                var defaults = {
                    type: 'default', //default, vertical, accordion;
                    width: 'auto',
                    fit: true,
                    closed: false,
                    tabidentify: '',
                    activetab_bg: 'white',
                    inactive_bg: '#F5F5F5',
                    active_border_color: '#c1c1c1',
                    active_content_border_color: '#c1c1c1',
                    activate: function () {
                    }
                }
                //Variables
                var options = $.extend(defaults, options);
                var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
                var hash = window.location.hash;
                var historyApi = !!(window.history.replaceState);
    
                //Events
                $(this).bind('tabactivate', function (e, currentTab) {
                    if (typeof options.activate === 'function') {
                        options.activate.call(currentTab, e)
                    }
                });
    
                //Main function
                this.each(function () {
                    var $respTabs = $(this);
                    var $respTabsList = $respTabs.find('ul.resp-tabs-list.' + options.tabidentify);
                    var respTabsId = $respTabs.attr('id');
                    $respTabs.find('ul.resp-tabs-list.' + options.tabidentify + ' li').addClass('resp-tab-item').addClass(options.tabidentify);
                    $respTabs.css({
                        'display': 'block',
                        'width': jwidth
                    });
    
                    if (options.type === 'vertical')
                        $respTabsList.css('margin-top', '3px');
    
                    $respTabs.find('.resp-tabs-container.' + options.tabidentify).css('border-color', options.active_content_border_color);
                    $respTabs.find('.resp-tabs-container.' + options.tabidentify + ' > div').addClass('resp-tab-content').addClass(options.tabidentify);
                    jtab_options();
                    //Properties Function
                    function jtab_options() {
                        if (jtype === vtabs) {
                            $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
                        }
                        if (jfit === true) {
                            $respTabs.css({ width: '100%', margin: '0px' });
                        }
                        if (jtype === accord) {
                            $respTabs.addClass('resp-easy-accordion').addClass(options.tabidentify);
                            $respTabs.find('.resp-tabs-list').css('display', 'none');
                        }
                    }
    
                    //Assigning the h2 markup to accordion title
                    var $tabItemh2;
                    $respTabs.find('.resp-tab-content.' + options.tabidentify).before("<h2 class='resp-accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");
    
                    $respTabs.find('.resp-tab-content.' + options.tabidentify).prev("h2").css({
                        'background-color': options.inactive_bg,
                        'border-color': options.active_border_color
                    });
    
                    var itemCount = 0;
                    $respTabs.find('.resp-accordion').each(function () {
                        $tabItemh2 = $(this);
                        var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                        var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                        $accItem.append($tabItem.html());
                        $accItem.data($tabItem.data());
                        $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + (itemCount));
                        itemCount++;
                    });
    
                    //Assigning the 'aria-controls' to Tab items
                    var count = 0,
                        $tabContent;
                    $respTabs.find('.resp-tab-item').each(function () {
                        var $tabItem = $(this);
                        $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + (count));
                        $tabItem.attr('role', 'tab');
                        $tabItem.css({
                            'background-color': options.inactive_bg,
                            'border-color': 'none'
                        });
    
                        //Assigning the 'aria-labelledby' attr to tab-content
                        var tabcount = 0;
                        $respTabs.find('.resp-tab-content.' + options.tabidentify).each(function () {
                            $tabContent = $(this);
                            $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + (tabcount)).css({
                                'border-color': options.active_border_color
                            });
                            tabcount++;
                        });
                        count++;
                    });
    
                    // Show correct content area
                    var tabNum = 0;
                    if (hash !== '') {
                        var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                        if (matches !== null && matches.length === 2) {
                            tabNum = parseInt(matches[1], 10) - 1;
                            if (tabNum > count) {
                                tabNum = 0;
                            }
                        }
                    }
    
                    //Active correct tab
                    $($respTabs.find('.resp-tab-item.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                        'background-color': options.activetab_bg,
                        'border-color': options.active_border_color
                    });
    
                    //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                    if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                        $($respTabs.find('.resp-accordion.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                            'background-color': options.activetab_bg + ' !important',
                            'border-color': options.active_border_color,
                            'background': 'none'
                        });
    
                        $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-tab-content-active').addClass(options.tabidentify).attr('style', 'display:block');
                    }
                    //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                    else {
                       // $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-accordion-closed'); //removed resp-tab-content-active
                    }
    
                    //Tab Click action function
                    $respTabs.find("[role=tab]").each(function () {
    
                        var $currentTab = $(this);
                        $currentTab.click(function () {
    
                            var $currentTab = $(this);
                            var $tabAria = $currentTab.attr('aria-controls');
    
                            if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                                $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp('', function () {
                                    $(this).addClass('resp-accordion-closed');
                                });
                                $currentTab.removeClass('resp-tab-active').css({
                                    'background-color': options.inactive_bg,
                                    'border-color': 'none'
                                });
                                return false;
                            }
                            if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                                $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                    'background-color': options.inactive_bg,
                                    'border-color': 'none'
                                });
                                $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                                $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                    'background-color': options.activetab_bg,
                                    'border-color': options.active_border_color
                                });
    
                                $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('resp-tab-content-active');
                            } else {
                                $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                    'background-color': options.inactive_bg,
                                    'border-color': 'none'
                                });
    
                                $respTabs.find('.resp-tab-content-active.' + options.tabidentify).removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
    
                                $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                    'background-color': options.activetab_bg,
                                    'border-color': options.active_border_color
                                });
    
                                $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('resp-tab-content-active').attr('style', 'display:block');
                            }
                            //Trigger tab activation event
                            $currentTab.trigger('tabactivate', $currentTab);
    
                            //Update Browser History
                            if (historyApi) {
                                var currentHash = window.location.hash;
                                var tabAriaParts = $tabAria.split('tab_item-');
                                // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                                var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();
                                if (currentHash !== "") {
                                    var re = new RegExp(respTabsId + "[0-9]+");
                                    if (currentHash.match(re) != null) {
                                        newHash = currentHash.replace(re, newHash);
                                    }
                                    else {
                                        newHash = currentHash + "|" + newHash;
                                    }
                                }
                                else {
                                    newHash = '#' + newHash;
                                }
    
                                window.history.replaceState(null, null, newHash);
                            }
                        });
    
                    });
    
                    //Window resize function                   
                    $(window).resize(function () {
                        $respTabs.find('.resp-accordion-closed').removeAttr('style');
                    });
                });
            }
        });
    

































































   window.addEventListener('load', () => {
        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        })

        // Child Tab
        $('#ChildVerticalTab_1').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
        })


                // Child Tab
       $('#ChildVerticalTab_2').easyResponsiveTabs({
                    type: 'vertical',
                    width: 'auto',
                    fit: true,
                    tabidentify: 'ver_1', // The tab groups identifier
                    activetab_bg: '#fff', // background color for active tabs in this group
                    inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
                    active_border_color: '#c1c1c1', // border color for active tabs heads in this group
                    active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
                })

      

    })



    return (
     

    <div id="container">
       
        <div id="parentHorizontalTab">
            <ul class="resp-tabs-list hor_1">
                <li>Patients Accounts</li>
                <li>Doctor's Accounts</li>
                <li>All Consultations</li>
                <li>Create account</li>

            </ul>
            <div class="resp-tabs-container hor_1">
                <div>
                    <p>

                        <div id="ChildVerticalTab_1">
                            <ul class="resp-tabs-list ver_1" id="list">                           
                              
                                <li>Announcemenet</li>

                            </ul>
                            <div class="resp-tabs-container ver_1" id="spec-det">  

                                <div><p><h4>
                                    Announcemenet
                                    </h4></p></div>
                            </div>
                        </div>
                    </p>

                </div>
                <div>
                    <p>

                        <div id="ChildVerticalTab_2">
                            <ul class="resp-tabs-list ver_1" id="doc-list">                           
                              
                                <li>Announcemenet</li>

                            </ul>
                            <div class="resp-tabs-container ver_1" id="doc-spec-det">  

                                <div><p><h4>
                                    Announcemenet
                                    </h4></p></div>
                            </div>
                        </div>
                    </p>

                </div>
                <div className="consults-and-symptoms" id="cons-symp"> 
               
                </div>
                <div id="Create-User-Account">
                   
                       <CreateAccount />
                   
                    <br />
                    <br />
                    <p>Create A New User Account</p>
                </div>
            </div>
        </div>

       <AdminUpdateDelete />

    

        <div id="nested-tabInfo">
            Selected tab: <span class="tabName"></span>
        </div>

        <Footer />

        </div>
     

   

        )

    }

    }

    export default AdminAccordion























    
