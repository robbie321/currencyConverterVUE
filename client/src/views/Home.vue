<template>
  <div>
    <h1>Full Stack Currency Converter</h1>
    <span>Enter Amount:</span><input type="number" v-model.number = "amuont" placeholder = "Enter amount"/>
  <br/><br/>
  <span>Convert From:</span>
  <select @click="showCurrency()" v-model = "convertFrom"  style="width:300px;font-size:25px;">
    <option v-for="currency in currencies" :key="currency.id">{{currency.currencyName}}</option>
  </select>
  <span>Convert To:</span>
    <select  @click="showCurrency()" v-model = "convertTo" style="width:300px;font-size:25px;">
    <option   v-for="currency in currencies" :key="currency.id">{{currency.currencyName}}</option>
  </select>  <br/><br/>
  <span>{{amount}} {{convertfrom}} equals {{finalamount}} {{convertto}}</span>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      name: '',
      errors: [],
      currencies:[],
      convertFrom: '',
      convertTo: '',
      amount: '' 
    }
  },
  methods:{
    showCurrency(){
      fetch('http://localhost:2020/api').then(response => response.json())
      .then(currencies =>{
        this.currencies = currencies
      });
      console.log();
    }
  },
  // created() {
  //     axios.get(`https://free.currencyconverterapi.com/api/v6/currencies`)
  //     .then(response => {
  //       // JSON responses are automatically parsed.
  //       this.currencies = response.data
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  //   }
  }
</script>

