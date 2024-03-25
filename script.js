
 function sendMessage() {
     var userInput = document.getElementById('userInput').value.toLowerCase();
     var chatbox = document.getElementById('chatbox');
     var sectionMap = {
 'contact': 'http://127.0.0.1:5501/contact.html',
 'blogs': 'http://127.0.0.1:5501/blog.html',
 'home': 'http://127.0.0.1:5501/index.html',
 'solutions': 'http://127.0.0.1:5501/solutions.html',
 'about us':'http://127.0.0.1:5501/about.html'
     };
 
     var bestMatch = findBestMatch(userInput, Object.keys(sectionMap));
     if (bestMatch) {
 var url = sectionMap[bestMatch];
 chatbox.innerHTML += `<p>Here is the specific URL for ${bestMatch}: <a href="${url}">${url}</a></p>`;
     } else {
 chatbox.innerHTML += '<p>Sorry, no matching section found.</p>';
     }
     chatbox.scrollTop = chatbox.scrollHeight;
     document.getElementById('userInput').value = '';
 }
 
 function findBestMatch(input, sectionIds) {
     var bestMatch = '';
     var bestScore = -1;
 
     sectionIds.forEach(sectionId => {
 var score = calculateScore(input, sectionId);
 if (score > bestScore) {
     bestMatch = sectionId;
     bestScore = score;
 }
     });
 
     return bestMatch;
 }
 
 function calculateScore(input, sectionId) {
     var matches = 0;
     for (var i = 0; i < input.length; i++) {
 if (sectionId.includes(input[i])) {
     matches++;
 }
     }
     return matches;
 }



 function closeChatbox() {
    //var chatboxContainer = document.getElementById("chatbox-container");
    var chatboxContainer2=document.getElementById("chatbox-container2")
    //chatboxContainer.classList.add("invisible");
    chatboxContainer2.classList.add("invisible");
}

function openBot1(){
    var elem=document.getElementById("chatbox-container");
    var elem2=document.getElementById("chatbox-container2");
    if ("invisible" in elem2.classList){
        //do nothing
        elem.classList.remove("invisible");
        elem.animate([{opacity: '0'}, {opacity:'1'}], {duration:300});
    }
    else{
        elem2.classList.add("invisible");
        elem.classList.remove("invisible");
        elem.animate([{opacity: '0'}, {opacity:'1'}], {duration:300});
    }

}

function openBot2(){
    //var elem=document.getElementById("chatbox-container");
    var elem2=document.getElementById("chatbox-container2");
    elem2.classList.remove("invisible");
    elem2.animate([{opacity: '0'}, {opacity:'1'}], {duration:300});
    

}

