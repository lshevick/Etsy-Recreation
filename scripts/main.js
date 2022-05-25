const source = document.querySelector('#item-template').innerHTML;
const template = Handlebars.compile(source);
const context = data.results;

const html = template(context);

document.querySelector('.items-card').innerHTML = html;

console.log(context);