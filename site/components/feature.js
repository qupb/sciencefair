const html = require('choo/html')

module.exports = opts => html`

<li class="center w-100 w-50-ns fl">
  <div class="center w-90 lh-copy bg-light-gray border-box pa3 ma3 mid-gray br3 ba b--black-10">
    <div class="tc">
      <img class="fl w-100" src="${opts.img}" />
      <h3 class="f3 w-100">${opts.txt}</h3>
    </div>
    <hr class="mw3 bb bw1 b--black-10">
    <p class="lh-copy measure center f4 black-70 tl pa2 h4">${opts.detail}</p>
  </div>
</li>

`