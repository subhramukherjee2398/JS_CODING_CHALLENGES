//How can you extract a few fields from the given JSON object and form a new array?

var input = {
    "products": [{
      "productId": "a01",
      "uuid": "124748ba-6fc4f"
    }, {
      "productId": "b2",
      "uuid": "1249b9ba-64d"
    }, {
      "productId": "c03",
      "uuid": "124c78da-64"
    }, {
      "productId": "d04",
      "uuid": "124ee9da-6"
    }]
  };

  const new_array  = input.products.map((ele)=> ele.productId)
  console.log(new_array)