/* This will display an alert button when being called.
When you press submit you should see a popup that says:
The message has been sent to us. We may contact you back soon.

 */
function PopupMessageFinishTheFormWorked(){
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var Email = document.getElementById('Email').value;
        var txtarea = document.getElementById('txtarea').value;

        if(firstname==""){
            //do something
            return false;
            //this will not submit your form
        }
        else if(lastname==""){
            //do something
            //alert("phone can not be null");
            return false;
            //this will not submit your form
        }
        else if(Email==""){
            return false;
        }
        else if(txtarea == ""){
            return false;
        }
        else{
            alert("The message has been sent to us. We may contact you back soon.");

        }
    }