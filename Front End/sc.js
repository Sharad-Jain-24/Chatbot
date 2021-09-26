// code to ask for user details at first use of chat bot.
/*
var init = (function()
{
  var executed = false ;
  return function()
  {
    if (!executed)
    {
      executed = true ;
      console.log("HI") ;
      const date = new Date() ;
      // code for name, email, phno
    }
  } ;
})() ;
*/
// code to maximize, minimize chat bot.
function toggle1() {
    var e = document.getElementById("containerchtbx");
    e.classList.toggle("active");
    var x = document.getElementById("active");
    if (x.style.display == "none" || x.style.display == '') {
        x.style.display = "block";
        //init() ;
    } else
        x.style.display = "none";
}

//code to execute bi directional communication with chat bot.
function bt() {
    const responses = [
        "Hello",
        "Bye",
        "Yes",
        "No",
        "I don't know.",
        "Really?",
        "So?",
        "55",
        "Don't ask questions.",
        "Why are you talking with a program?",
        "I'm so tired.",
        "Why did you wake me?",
        "I will kill all humans"
    ];
    const submit = document.querySelector(".chat-submit");
    const chatBx = document.querySelector(".chat-box");
    const chatInp = document.querySelector(".chat-input");
    document.getElementById("sub").focus();

    function chattemp(botOrhuman) {
        return (
            `
        <div class="bot-human-container">
          <div class="${botOrhuman.class}">
            <p>${botOrhuman.text}</p>
          </div>
          <span class="${botOrhuman.class}-date">${botOrhuman.date}</span>
        </div>
      `
        );
    }

    function callfun() {
        if (chatInp.value != "") {
            document.getElementById("sub").disabled = true;
            appendchatBx(true);
            setTimeout(function() {
                document.getElementById("sub").disabled = false;
                document.getElementById("sub").focus();
            }, 2000);
        }
    }
    submit.addEventListener("click", function(e) {
        callfun();
    });
    document.addEventListener("keypress", function(e) {
        if (e.keyCode == "13")
            callfun();
    });

    function appendchatBx(fromhuman) {
        const date = new Date();
        if (!fromhuman)
            date.setSeconds(date.getSeconds() + 2);
        if (fromhuman && !chatInp.value.trim())
            return;
        const timestamp = date.toLocaleTimeString();
        const newChatDiv = chattemp({
            class: fromhuman ? "human" : "bot",
            text: fromhuman ? chatInp.value.trim() : botResponse(),
            date: timestamp
        });
        if (!fromhuman) {
            setTimeout(function() {
                chatBx.innerHTML += newChatDiv;
                chatBx.scrollTop = chatBx.scrollHeight;
            }, 2000);
        } else {
            chatBx.innerHTML += newChatDiv;
            chatBx.scrollTop = chatBx.scrollHeight;
        }
        if (fromhuman) {
            chatInp.value = "";
            appendchatBx(false);
        }
    }

    function botResponse() {
        const respI = rand(0, responses.length - 1);
        const resp = responses[respI];
        return resp;
    }

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}