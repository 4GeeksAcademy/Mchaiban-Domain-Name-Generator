import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let articles = ['the', 'a', 'that', 'any'];
  let adjectives = ['mystical', 'blue', 'radiant', 'tall'];
  let nouns = ['castle', 'book', 'galaxy', 'butterfly'];
  let extensions = ['.com', '.net', '.us']

  for(let article = 0; article < articles.length; article++) {
    for(let adjective = 0; adjective < adjectives.length; adjective++) {
      for(let noun = 0; noun < nouns.length; noun++) {
        for (let extension = 0; extension < extensions.length; extension ++) {
          console.log(articles [article] + adjectives[adjective] + nouns[noun]+ extensions[extension]); 
        }
      }
    }
  }
};