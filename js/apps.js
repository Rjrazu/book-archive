document.getElementById('error-message').style.display = 'none';

// Get Input Value
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear
    searchField.value = '';

    if (searchText === '') {
        // blank error
        alert('Please Type Something And Then You Can Search!');
    } else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }
};

//Display Results
const displaySearchResult = books => {
    // Items Counting
    const searchResultCount = document.getElementById('item-found');
    searchResultCount.innerText = books.length;

    // error meassage
    if (books.length === 0) {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
    }

    // Search Result
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {
        console.log(book)
        // Dynamic image link
        const urlForImage = `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`;

        // Create Div For Swowing Results
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
            <div class="card shadow border-1 rounded-3" style="width: 21rem;">
                  <img class="w-100 p-3 border rounded-3" src="${urlForImage}"  alt="COver Page Of Book">
               <div class="card-body"> 
                     <h5 class="card-title">Title of Book : ${book.title}</h5>
                     <h6 class="card-text">Author : ${book.author_name}</h6>
                     <h6 class="card-text">Publisher : ${book.publisher}</h6>
                     <p class="card-text">First Publish Year : ${book.first_publish_year}</p>
                     <a target="_blank" href='${urlForImage}' class="btn btn-outline-warning">See Full Cover Photo!</a>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
};