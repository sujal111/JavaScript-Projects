let product_total_amt = document.getElementById("product_total_amt");
let shipping_charge = document.getElementById("shipping_charge");
let total_cart_amt = document.getElementById("total_cart_amt");
let discountCode = document.getElementById("discount_code1");

const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  // console.log(itemval.value);

  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative quantity not allowed");
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "#fff";
    itemval.style.color = "#000";
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 5000;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 5000;

    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);

  }
}

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  // console.log(itemval.value);

  if (itemval.value >= 5) {
    itemval.value = 5;
    alert("Max 5 allowed");
    itemval.style.background = "red";
    itemval.style.color = "#fff";
  } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 5000;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 5000;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
  }
}

const discount_code = () => {
  let totalAmtCurrent = parseInt(total_cart_amt.innerHTML);
  let error_trw = document.getElementById("error_trw");
  if (discountCode.value === "subhadip") {
    let newTotalAmt = totalAmtCurrent - 500;
    total_cart_amt.innerHTML = newTotalAmt;
    error_trw.innerHTML = "Hurray!! the code is valid, discount applied, enjoy";
  } else {
    error_trw.innerHTML = "Try Again!! valid code is subhadip";
  }

}


