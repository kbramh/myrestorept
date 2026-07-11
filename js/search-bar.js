const searchBarPanel = `
        <div>
        <input input type="text" id="search" placeholder="Search..." /><button>
          Go!
        </button>
      </div>
    `;

const searchBarElement = document.querySelector('searchBar');
searchBarElement.innerHTML = searchBarPanel;
