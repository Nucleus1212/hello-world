// javaScript.js

const formInfo =document.getElementById("formInfo")


let hisName = false;

if (hisName){
  showMessage("For more information !!");
} else {
  showMessage("It is incorrect !!");
} 

function showMessage(message){
  formInfo.innerHTML = '<p>' + message + '</p>';

}

function newMessage(){
  formInfo.innerHTML= " "
}

const contactForm = document.getElementById("contactForm"); 
contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    const contact = new Contact(contactForm);
   contact.send();
})

const experience = document.getElementsByClassName("experience");
for (x= 0 ; x < experience.length ; x++){
  const item = experience[x];
  item.addEventListener("mouseenter", function(event){
    event.target.style = "background-color: #707070 ;";
  });
  item.addEventListener("mouseleave", function(event){
    event.target.style = " ";
  });
}


class Contact{

  constructor(form){
      this.fullName = form.elements["fullName"].value;
      this.email = form.elements["email"].value;
      this.subject = form.elements["subject"].value;
      this.body = form.elements["msg"].value;

  }

  fullName = "";
  email= "";
  subject= "";
  body= "";

  send(){
      console.info(this.formatMessage());
      showMessage("We're not sending mails yet");
  }

  formatMessage(){
      return `To: ${this.fullName}
              Email: ${this.email}
              Subject: ${this.subject}
              Body: ${this.body}`;
  }
};