const searchBarPanel = `
        <div class="search-bar-form">
         <input class="search-bar-input" type="text" id="search" placeholder="Search..." />
         <button type="button" class="search-bar-button">Go!</button>
        </div>
    `;

const searchBarElement = document.querySelector('searchBar');
searchBarElement.innerHTML = searchBarPanel;
