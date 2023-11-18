
import "../styles/Chat.css";
import image from "../images/bot_image.jpg";
import { useState, useRef } from "react";

function Chatbot() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  );

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 13 2022") {
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words"; 
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 5000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = "";
      }, 2000);
    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "😁";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is Dr Neural Nexus";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner2 = [
      "Who's Dr Neural Nexus|who's Dr Neural Nexus|Who is Dr Neural Nexus|who is Dr Neural Nexus",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Dr Neural Nexus is a programmer based on ReactJS and NodeJS";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner3 = [
      "What are the symptoms of pneumonia?|What are the symptoms of pneumonia",
    ];
    let words20 = new RegExp(owner3);
    if (words20.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Common symptoms of pneumonia include fever, cough, and difficulty breathing.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let pneumoniaQuestions = [
      "What is pneumonia|Tell me about pneumonia|Pneumonia information",
    ];
    let words12 = new RegExp(pneumoniaQuestions);
    if (words12.test(document.querySelector("#input").value)) {
      // if the input contains a pneumonia-related question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Pneumonia is an inflammatory condition of the lung affecting primarily the tiny air sacs known as alveoli.";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let pneumoniaQuest = [
      "What causes pneumonia?|What causes pneumonia",
    ];
    let words200 = new RegExp(pneumoniaQuest);
    if (words200.test(document.querySelector("#input").value)) {
      // if the input contains a pneumonia-related question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =  "Pneumonia can be caused by various factors, including bacteria, viruses, and fungi."
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let pneumoniaQ = [
      "Is pneumonia contagious?|Is pneumonia contagious",
    ];
    let words0 = new RegExp(pneumoniaQ);
    if (words0.test(document.querySelector("#input").value)) {
      // if the input contains a pneumonia-related question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =  "Pneumonia can be contagious, depending on its cause. Bacterial and viral pneumonia can be contagious, while fungal pneumonia is usually not contagious."
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let pneumonia = [
      "Who is at risk of developing pneumonia?| Who is at risk of developing pneumonia",
    ];
    let word = new RegExp(pneumonia);
    if (word.test(document.querySelector("#input").value)) {
      // if the input contains a pneumonia-related question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =  "Individuals at higher risk of developing pneumonia include young children, the elderly, smokers, and individuals with weakened immune systems."
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let pne = [
      "What is influenza?|  What is influenza (the flu)",
    ];
    let wo= new RegExp(pne);
    if (wo.test(document.querySelector("#input").value)) {
      // if the input contains a pneumonia-related question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =  "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. It can lead to a range of symptoms, from mild to severe, and can sometimes result in hospitalization and death."
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let p = [
      "What are the common symptoms of influenza?|What are the common symptoms of influenza",
    ];
    let w= new RegExp(p);
    if (w.test(document.querySelector("#input").value)) {
      // if the input contains a pneumonia-related question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =  "Common symptoms of influenza includee Fever or feeling feverish/chillsCoughSore throatRunny or stuffy nose"
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let lo = [
      "How is influenza diagnosed?|How is influenza diagnosed",
    ];
    let po= new RegExp(lo);
    if (po.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Influenza is often diagnosed based on symptoms and clinical evaluation by a healthcare provider. Laboratory tests, such as a rapid influenza diagnostic test or a viral culture, can confirm the presence of the influenza virus."
        inputRef.value = ""; 
      }, 2000);
    }
    let l = [
      "How is influenza treated?| How is influenza treated",
    ];
    let pe= new RegExp(l);
    if (pe.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText ="Treatment for influenza may include antiviral medications, which can help reduce the severity and duration of symptoms if taken early in the illness. Rest, hydration, and over-the-counter pain relievers can also help alleviate symptoms."
        inputRef.value = "";
      }, 2000);
    }

    

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am 1 year old";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    getHumanMessage.innerText = inputRef.value; // display the message
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleInput(); // Call your existing handleInput function
    }
  };
  return (
    <div className="Apps" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
