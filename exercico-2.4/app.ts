// type OrderType = {
//   code: String;
//   customer: {
//     name?: String;
//     email: String;
//   };
//   price: {
//     value: Number;
//     currency: String;
//   };
//   isShipped: Boolean;
//   products: String[];
// };

// const order = {
//   code: "001",
//   customer: {
//     name: "Carlos Silva",
//     email: "carlos_silva13@gmail.com",
//   },
//   price: {
//     value: 11.23,
//     currency: "€",
//   },
//   isShipped: false,
//   products: ["T-shirt Branca"],
// };
// order.isShipped = true;

// // const formattedPriceValue = order.price.value.toFixed(2).replace('.', ',')
// //usado em numeros quebrados
// const formattedPrice = `${order.price.currency} ${order.price.value}`;

// console.log(order);
// console.log(formattedPrice);
// order.products.push("T-shirt Preta");
// //order.products = [...order.products, 'T-shirt Preta]

// const emailData = {
//   customerName: order.customer.name,
//   productsList: order.products.join(", "),
//   price: formattedPrice,
// };
// const { customerName, productsList, price } = emailData;

// const email = `Olá §{order.customer.name},
// Obrigado pela sua encomenda de ${productsList} pelo valor de ${price}`;

// console.log(email);

// ///////////////////////////////////////////////////////////////////////

// const value = "€ 11.23";

// //const currencySymbol = value.charAt(0);
// //const number = value.slice(2);

// const splitValue = value.split(" ");

// const currencySymbol = splitValue[0];
// const number_ = splitValue[1];

// //const [currencySymbol, strNumber] = splitValue
// const number = Number.parseFloat(number_);

// console.log({ currencySymbol, number });

const symbolToCode: Record<string, string> = {
  "€": "EUR",
  $: "USD",
  "£": "GBP",
};
const currencyCodeMap: Record<string, string> = {
  EUR: "€",
  USD: "$",
  GBP: "£",
};

/* const orderPrice = {
    value: number,
    currency: currencyCodeMap, [currencySymbol]
}
 */
const currencyRates = {
  EUR: 1,
  USD: 1.07,
  GBP: 0.87,
};

function convertPrice(
  value: number,
  baseCurrency: string,
  targetCurrency: string
) {
  const baseRate = currencyRates[targetCurrency];
  const targetRate = currencyRates[baseCurrency];

  const rate = targetRate / baseRate;

  return { price: value * rate, currency: targetCurrency };
}
const { price, currency } = convertPrice(1, "USD", "EUR");

console.log(`${currencyCodeMap[currency]} ${price.toFixed(2)}`);
