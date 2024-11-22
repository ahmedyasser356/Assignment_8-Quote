  var quotes =[
    {quotePhrase: "Be yourself; everyone else is already taken." , who : "Oscar Wilde"},
    {quotePhrase: "So many books, so little time." , who : "Frank Zappa"},
    {quotePhrase: "A room without books is like a body without a soul." , who : "Marcus Tullius Cicero"},
    {quotePhrase: "You know you're in love when you can't fall asleep because reality is finally better than your dreams." , who : "Dr. Seuss"},
    {quotePhrase: "You only live once, but if you do it right, once is enough" , who : "Mae West"},
    {quotePhrase: "Be the change that you wish to see in the world." , who : "Mahatma Gandhi"},
    {quotePhrase: "In three words I can sum up everything I've learned about life: it goes on." , who : "Robert Frost"},
    {quotePhrase: "If you tell the truth, you don't have to remember anything." , who : "Mark Twain"},
    {quotePhrase: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." , who : "Maya Angelou"},
    {quotePhrase: "I am so clever that sometimes I don't understand a single word of what I am saying." , who : " Oscar Wilde"},
    {quotePhrase: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment" , who : "Ralph Waldo Emerson"},
  ]

  
var testNum = 10 ;

  function displayQuote(){

    
    do {var num = Math.floor(Math.random()*11) }
    while(num == testNum){
       
    }
    testNum = num;
    console.log(num);
    
    var quoteContent =`  <h4 id="phrase" class="h3 w-75 m-auto mb-4">"${quotes[num].quotePhrase}"</h4>
                         <h3 id="who" class="h3">--${quotes[num].who}</h3> `
    document.getElementById('quote').innerHTML = quoteContent;
    
  }
  