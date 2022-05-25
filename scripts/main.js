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

