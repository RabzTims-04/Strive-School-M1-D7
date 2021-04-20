/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

      const changeTitle = function (newTitle) {
        //
        let docTitle = document.querySelector('header h1')

        docTitle.innerText = newTitle
        if(docTitle.classList){
            docTitle.classList.toggle("mystyle")
        }
        else{

        }
        
        docTitle.classList.toggle("mystyle")
      };

      /* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

      const addClassToTitle = function () {
        //
        let classTitle = document.getElementById('mainTitle')
        classTitle.classList.add('myHeading') 

      };

      /* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

      const changePcontent = function () {
        //
        let pDivChangeText = document.querySelectorAll('div p')
        for(let i=0; i<pDivChangeText.length; i++ ){
            pDivChangeText[i].innerText = 'This p is a child of div'
        }
        
      };

      /* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

      const changeUrls = function () {
        //
        let emailChange = document.getElementsByTagName('a')
        for(let i=0; i<emailChange.length; i++){
            emailChange[i].href ="https://www.google.com"
            emailChange[i].innerText = "https://www.google.com"
        }
      };

      /* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

      const addToTheSecond = function (content) {
        //
        let secondListItem = document.createElement('li')
        secondListItem.innerText = content
        secondListItem.style.color = "gold"
        let newParent = document.querySelector('#secondList')
        newParent.appendChild(secondListItem)
      };

      /* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

      const addParagraph = function (content) {
        //
        let secondParagraph = document.createElement('p')
        secondParagraph.innerText = content
        secondParagraph.style.color = "blue"
        let paraParent = document.querySelector('main div')
        paraParent.appendChild(secondParagraph)

      };

      /* EXERCISE 7
      Write a function for making the first UL disappear.
      */

      const firstUlDisappear = function () {
        //
        let firstUl = document.getElementById('firstList')
        firstUl.classList.add('secondUlClass')
        firstUl.style.display = 'none'
      };

      /* EXERCISE 8
      Write a function for making the background of every UL green.
      */

      const paintItGreen = function () {
        //
        let ulBackgroundColor = document.getElementsByTagName('ul')
        for(let i=0; i<ulBackgroundColor.length; i++){
            ulBackgroundColor[i].style.backgroundColor = "green"
        }       
        
      };

      /* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

    //   const colorChange = function(){
    //     makeItClickable()
        
    //   }

      let headingClick = document.getElementById('mainTitle')            
      const makeItClickable = function () {        
        headingClick.style.color = 'blue'           
     };    
     headingClick.addEventListener('click',makeItClickable)   
       

      /* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */
      let footerClick = document.getElementById('foot')
     
      const changeFooterText = function () {
        
        footerClick.innerText = 'This is new footer'
      };
      footerClick.addEventListener('click',changeFooterText)

      /* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

      const userInput = function(){
          console.log(event);
        const inputField = document.getElementById("input-field");
        let inputFieldvalue = inputField.value
      }
      
      
      
    
      

      // ...

      /* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

      const welcomeMessage = function(){

      }
      window.onload = function () {
          alert('Hello, This is a welcome Alert Message')
        //
      };

      /* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */