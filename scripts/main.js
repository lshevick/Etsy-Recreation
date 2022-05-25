const source = document.querySelector('#item-template').innerHTML;
const template = Handlebars.compile(source);
console.log('data', data);
const context = data;
console.log(context);
const html = template(context); // are you passing in an object or an array



document.querySelector('.card-container').innerHTML = html;

const symbol = document.querySelector('.currency-symbol');
// need to write function to insert correct currency symbol depending on what the 
// currency is. E.G

// need to get search bar input and filter the results from
// the data.results object, then only display those

function searchItems() {
    const items = document.querySelectorAll('.item-card');
    // const itemTitle = document.querySelectorAll('.item-title');
    const searchInput = document.querySelector('#searchbox').value;
    console.log(searchInput);

        for (let i = 0; i < items.length; i++) {

            if (items[i].innerHTML.toLowerCase()
            .includes(searchInput.toLowerCase())) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
                
            }
        }
}

document.addEventListener('keyup', searchItems);