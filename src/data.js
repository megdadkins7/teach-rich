export const spendingCategories = [
    {name: 'fixedCosts', min: .5, max: .6},
    {name: 'investments', min: .1, max: .1},
    {name: 'savings', min: .05, max: .1},
    {name: 'guiltFree', min: .2, max: .35}
]
export function numToCurrency(num) {
  return `$${num.toFixed(2)}`
}

// export const fixedCosts = salary * .5;
// export const investments = (salary - fixedCosts) * .1;
// export const savings = (salary - fixedCosts - investments) * .05;
// export const guiltFree = (salary - fixedCosts - investments - savings) * .2;

/*
write functions to calculate each percentage from take-home-pay entered.

...basic version

...salary comes from number entered in input

...only salary and fixed costs need input

... the rest are calculated
*/