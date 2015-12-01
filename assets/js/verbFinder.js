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
var vResultsContainer;

  //Initialise the main elements of the plugin

    //Make a container for div for future
    container = document.getElementById(id);
    //console.log(container);

    searchInput = document.createElement('input');
    searchInput.className = 'search_input';
    searchInput.setAttribute('id', 'v_input');
    searchInput.setAttribute('placeholder', 'Enter 1st form of the verb...');
    searchInput.setAttribute('value', '');

    searchBtn = document.createElement('button');
    searchBtn.className = 'search_btn';

    container.appendChild(searchInput);
    container.appendChild(searchBtn);

    vResultsContainer = document.createElement('div');
    vResultsContainer.className = "verb_results_container";
    vResultsContainer.setAttribute('id', 'v_results');

    console.log(searchInput);

    function verbSearch() {
      var lookingWord = document.getElementById('v_input').value;

      for ( var key in verbBase) {

        for ( var i = 0; i <= verbBase[key].length-1 ; i++ ) {
          console.log( lookingWord, verbBase[key][i] );
          if ( lookingWord === verbBase[key][i] ) {


            var verbForm = [];

            for ( var k = 0; k < 3; k++) {

              verbForm.push( document.createElement('span') );
              //console.log( verbBase[key][k] );
              verbForm[k].className = 'verb_form';
              verbForm[k].innerHTML = verbBase[key][k];
              vResultsContainer.appendChild( verbForm[k] );
            }
            console.log( verbForm );
            container.appendChild(vResultsContainer);

          }

        }

      }

    }


    searchBtn.addEventListener('click', function() {
      var resultContainerCheck = vResultsContainer;
      console.log( resultContainerCheck.innerHTML.length );
      if ( resultContainerCheck.innerHTML.length != 0 ) {
        console.log('Was full');
        //while ( resultContainerCheck.firstChild ) resultContainerCheck.removeChild( resultContainerCheck.firstChild );
        resultContainerCheck.innerHTML = '';
        verbSearch();
      } else if ( resultContainerCheck.innerHTML.length == 0 ) {
        console.log( 'Was empty');
        verbSearch();
      }
    });

    /*function creatResults() {
      vResultsContainer = document.createElement('div');
      vResultsContainer.className = "verb_results_container";
      vResultsContainer.setAttribute('id', 'v_results');

      var firstForm = document.createElement('span');
      firstForm.text(verbBase[key][0]);

      container.appendChild(vResultsContainer);
    }*/




  //Base of all irrelgular verbs
  var verbBase = {
    'see': ['see', 'saw', 'seen'],
    'eat': ["eat", "ate", "eaten"],
    'arise': ['arise', 'arose', 'arisen'],
    'awake':	['awake', 'awakened / awoke',	'awakened / awoken']

  };
}


new verbFinder('verbFinder');
