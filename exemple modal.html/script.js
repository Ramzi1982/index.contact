function sendEmail(){
    
    var name = document.getElementById("name").value;
    var sujet = document.getElementById("sujet").value;
    var mail = document.getElementById("email").value;
    var re = /\S+@\S+\.\S+/;
    
        if (name != null && sujet != null && mail.match(re)) {
         
              Email.send({
                Host : "nextwebplus.fr",
                Username : " support@nextwebplus.fr",
                Password : "Kk345$xm",
                To : document.getElementById("email").value ,
                From : 'noreply@nextwebplus.fr' ,
                Subject : "New Contact Form Enquiry",
                Body : "Name: " + document.getElementById("name").value
                    + "<br> Email:" + document.getElementById("email").value
                    + "<br> phone:" + document.getElementById("phone").value
                    + "<br> sujet:" + document.getElementById("sujet").value
                    + "<br> message:"+ document.getElementById("message").value
            }).then(res=>{
              name = "";
              mail = "";
              sujet = ""
              document.getElementById("email").value = "";
              document.getElementById("message").value = ""
              }).cache(error=>{
                  const errorMsg = document.getElementById("submitErrorMessage");
                   errorMsg.classList.remove("d-none");
              })
        }else{
             const errorMsg = document.getElementById("submitErrorMessage");
            errorMsg.classList.remove("d-none");
        }
    }
    
    //get modal element
    var modal = document.getElementById('reponseModal');
    
    //get open modal button
    var modalBtn = document.getElementById('submitButton');
    
    //get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
    
    //Listen for open Click
    modalBtn.addEventListener('click',openModal);
    
    //Listen for close Click
    closeBtn.addEventListener('click',closeModal);
    
    //Listen for outside click
    window.addEventListener('click',outsideClick);
    
    //function to open modal
    function openModal(){
        modal.style.display ='block';
        const errorMsg = document.getElementById("submitErrorMessage");
        if (!errorMsg.classList.contains("d-none")) { errorMsg.classList.add("d-none");}
    }
    
    //function to close modal
    function closeModal(){
        modal.style.display ='none';
    }
    
    //function to close modal if outside click
    function outsideClick(e){
        if(e.target==modal)
        modal.style.display ='none';
    }
    
    
