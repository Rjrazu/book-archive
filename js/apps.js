const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear
    searchField.value = '';

    if (searchText == '') {
        // document.getElementById('error-message').style.display = 'block';
        alert('Make Sure You Type Something And Then You Search')
    } else {
        // load data
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        // console.log(url)

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="" alt="">

        <div class="card-body">
            <h5 class="card-title">Title : ${book.title}</h5>
            <p class="card-text">Author : ${book.author_name}</p>
            <p class="card-text">First Realese : ${book.first_publish_year}</p>
            <a href="#" class="btn btn-primary">See More Details</a>
        </div>
        `;
        searchResult.appendChild(div);
    });
}