//Make a container for div for future
var container = document.getElementById('verbFinder');
//console.log(container);

searchInput = document.createElement('input');
searchInput.className = 'search_input';

searchBtn = document.createElement('div');
searchBtn.className = 'search_btn';

container.appendChild(searchInput);
container.appendChild(searchBtn);
