<template>
  <div>
 <h1>ddddddddddddddd</h1>
  <div class="d-flex flex-column align-items-center">
    <h2 class="text-primary">{{msg}} {{payAmount}}</h2>
    <form id="payment-form" class="w-75 px-5 d-flex flex-column align-items-center" >
        <div ref="card" class="form-control m-2">
          <!-- A Stripe Element will be inserted here. -->
        </div>
        <input :disabled="lockSubmit" class="btn btn-primary shadow-sm" type="submit" value="Donate" v-on:click.prevent="purchase" />
    </form>
  </div>
  </div>
</template>
<script>
import Stripe from 'stripe'
import axios from 'axios'
export default {
  data() {
    return {
      spk: "pk_test_51ISo8BBdTsia79TvvPiOhcEdgJW5RrLgYuqSmgo7FwC1JdsSIeCd0O867AdapRzapwhZYY8mCfrbqK9yHTh3LPxf00pIAjIYFw",
      stripe: undefined,
      card: undefined,
      msg: "Donate Here",
      payAmount: "$10.00",
      lockSubmit: false,
      api: "http://localhost:3000/payment",
    };
  },
    mounted: function () {
    var self=this;
    self.stripe= Stripe(self.spk);
    self.card = self.stripe.elements().create('card');
    self.card.mount(self.$refs.card);
   },
   methods:{
    purchase() {
      var self = this;
      self.lockSubmit=true

      self.stripe.createToken(self.cardNumber).then(function(result) {
        if (result.error) {
          alert(result.error.message)
          self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
          self.lockSubmit=false
          return;
        }
        else{ 
          self.processTransaction(result.token.id)
        }
      })
      .catch((err) => {
        alert("error: "+err.message)
        self.lockSubmit=false
      });
    },
     processTransaction(transactionToken){
      var self=this;
     var dt= {
          amount:self.stripCurrency(self.payAmount), //stripe uses an int [with shifted decimal place] so we must convert our payment amount
          currency:"USD",
          description:"something to say",
          token:transactionToken
      }
      var route=self.api+"/charge/card"
      axios.post(route,dt, {
          headers: {
          }
      }).then(response => {
          if(response.status==200){
              alert("Transaction succeeded")
              self.lockSubmit=false
          }
          else{
              throw new Error("failed donation")
          }
      }).catch((err) => {
          alert("error: "+err.message)
          self.lockSubmit=false
      });
    },
    stripCurrency(val){
      return val.replace(',','').relpace('$','').replace('.','')
    }
    
   }
}


// <script>
// import axios from "axios"
// export default {
//   data() {
//     return {
//       adress:{
//       city: "",
//       country: "",
//       line1: "",
//       line2: "",
//       postal_code: "",
//       state: "",
//       },
//       email: "",
//       name: "",
//       phone: "",
//       Creditcardnumber:"",
//       exp_month: "",
//       exp_year: "",
//     };
//   },
//   methods: {
//     handleSubmit() {
//       const payment ={
//         adress:{
//       city: this.city,
//       country: this.country,
//       line1: this.line1,
//       line2: this.line2,
//       postal_code: this.postal_code,
//       state: this.state,
//         },
//       email: this.email,
//       name: this.name,
//       phone: this.phone,

//       }
//       axios.post("http://localhost:3000/v1/charges",payment)
//       .then((res)=>{console.log(res);})
//     }

//   },
// }
//
</script>

<style  scoped>
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}

* {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  margin: 0 -16px;
  margin-top: 120px;
  margin-left: 120px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: white;
  box-shadow: 10px 10px 10px;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.btn {
  background-color: grey;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  transition: 0.5s;
}

.btn:hover {
  background-color: white;
  color: grey;
}

a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
