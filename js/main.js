import flags from './model/flags.js';


function giveDiv(flag){
    return `
    <div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt=""></img>
        <p>${flag.name}</p>
      </div>
    `
}

const main = document.querySelector('main');

main.innerHTML = flags.map((flag) => giveDiv(flag)).join('');
