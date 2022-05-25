const source = document.querySelector('#item-template').innerHTML;
const template = Handlebars.compile(source);
console.log('data', data);
const context = data; 
console.log(context);
const html = template(context); // are you passing in an object or an array


document.querySelector('.card-container').innerHTML = html;
console.log(html);


// need to write a function or helper that will fill an item card
// with each separate element of the card (e.g. title, price, image, etc.)



//this loop gets each individual item from the results array in the data object
//

// Handlebars.registerHelper('loop', function (context, options) {
//     let contextItem = '';

//     for (let i = 0; i < context.length; i++) {
//         contextItem = options.fn(context[i]);
//     }
//     console.log(contextItem);
//     return contextItem;

// })

// for (let i = 0; i < context.length; i++) {
//     let contextItem = context[i];
//     console.log(contextItem.price);
// }