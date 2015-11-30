//Make a container for div for future
var container = document.getElementById('verbFinder');
/*console.log(container);

searchInput = document.createElement('input');
searchInput.className = 'search_input';
searchInput.setAttribute('placeholder', 'Enter a verb...');

searchBtn = document.createElement('div');
searchBtn.className = 'search_btn';

container.appendChild(searchInput);
container.appendChild(searchBtn);
*/

function verbFinder(id) {

var container;
var searchInput;
var searchBtn;

  //Initialise the main elements of the plugin

    //Make a container for div for future
    container = document.getElementById(id);
    //console.log(container);

    searchInput = document.createElement('input');
    searchInput.className = 'search_input';
    searchInput.setAttribute('placeholder', 'Enter 1st form of the verb...');
    searchInput.setAttribute('value', ' ');

    searchBtn = document.createElement('div');
    searchBtn.className = 'search_btn';

    container.appendChild(searchInput);
    container.appendChild(searchBtn);

    console.log(searchInput);

    function verbSearch() {
      var lookingWord = searchInput.value();
      for ( var key in verbBase) {
        for ( var i = 0; i < verbBase[key].length; i++ ) {
          if ( verbBase[key][i] == lookingWord ) {
            console.log('Find similar');
          } else {
            console.log('No match');
          }
        }
      }
    }

    searchBtn.addEventListener('click', verbSearch);




  //Base of all irrelgular verbs
  var verbBase = {
    "see" : ["see", "saw", "seen"],
    "eat" : ["eat", "ate", "eaten"],

  };
}


new verbFinder('verbFinder');
