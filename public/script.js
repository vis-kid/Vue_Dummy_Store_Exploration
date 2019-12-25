new Vue({
  el: "#app",
  data: {
    total: 0,
    products: [
      {title: "Portrait", id: 1, price: 1500.220088 }, 
      {title: "Landscape", id: 2, price: 1000.88000009 }, 
      {title: "Surf", id: 3, price: 500.9999900000000001100 } 
    ],
    cart: []
  },
  methods : {
    addToCart: function(product) {
      this.total += product.price;
      var found = false;

      for( var i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === product.id) {
          this.cart[i].qty++;
          found = true;
        }
      }

      if(!found) {
        this.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1
        });
      }
    },
    increase: function(item) {
      item.qty++;
      this.total += item.price;
    },
    decrease: function(item) {
      item.qty--;
      this.total -= item.price;
      if (item.qty <=0) {
        var i = this.cart.indexOf(item);
        this.cart.splice(i, 1);
      }
    }
  },
  filters: {
    currency: function(price) {
      return "$".concat(price.toFixed(2));
    }
  }

});
