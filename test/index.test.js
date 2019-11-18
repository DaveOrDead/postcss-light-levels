let postcss = require('postcss')

let plugin = require('..')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined
  })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it(`Should not change media queries which do not specify a
light-level`, async () => {
  await run(
    `@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}`,
    `@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}`,
    { prefix: '.light-level-' }
  )
})

it(`Should replace @media rules with the correct classname for multiple
parameter queries and honour the remaining AND parameters`, async () => {
  await run(
    `@media (light-level: normal) and (max-width: 250px) {
  .p-lll-hawk,
  .p-lll-norm {
    background: #222;
    color: #ccc;
  }
  .pop-max-width-250px {
   color: red;
  }
}`,
    `@media (max-width: 250px) {
  .light-level-normal .p-lll-hawk,
  .light-level-normal .p-lll-norm {
    background: #222;
    color: #ccc;
  }
  .light-level-normal .pop-max-width-250px {
   color: red;
  }
}`,
    { prefix: '.light-level-' }
  )
})

it(`Should replace @media rules with the correct classname for single
parameter queries`, async () => {
  await run(
    `@media (light-level: normal) {
  .ll-norm {
    background: orange;
    color: blue;
  }
}`,
    `.light-level-normal .ll-norm {
    background: orange;
    color: blue;
  }`,
    { prefix: '.light-level-' }
  )
})
