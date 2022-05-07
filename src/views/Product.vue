<style scoped>

.addmargin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.vue-logo-back {
    background-color: black;
}

img{
    width:200px;
}

</style>

<template>

<div class="home">
    <div class="vue-logo-back">
        <img src="../assets/logo.png" width="100px" height="100px">
    </div>
    <div class="row">
    <div class="col-md-6">
        <p>Your choice Product is: {{selectedCustomer}}</p>
    </div>
    </div>
    <div class="row">
        <div class="col-md-5">
            <select @change="switchSelect($event)" class="mr-3">
                <option value="">Choose category</option>
                <option v-for="option in ddTestCategory.options" :key="option.id" :value="option.value">{{option.text}}</option>
            </select>
            <select @change="switchSelectColor($event)" class="mr-3">
                <option value="">Choose Color</option>
                <option v-for="option in ddTestColor.options" :key="option.id" :value="option.value">{{option.text}}</option>
            </select>
            <select @change="switchSelectSize($event)" class="mr-3">
                <option value="">Choose Size</option>
                <option v-for="option in ddTestSize.options" :key="option.id" :value="option.value">{{option.text}}</option>
            </select>
            <select @change="switchSelectMaterial($event)">
                <option value="">Choose Material</option>
                <option v-for="option in ddTestMaterial.options" :key="option.id"  :value="option.value">{{option.text}}</option>
            </select>
        </div>
    </div>
    <div class="container-fluid"> 
        <div class="row  centeralign">
            <div class="col-md-3 card centeralign addmargin" style="width: 18rem;" v-for="product in customerlist" :key="product.id">
                <div class="card-body" v-on:click="setSelectedCustomer(product.title)" >
                    <h5 class="card-title">{{product.title}}</h5>
                    <img :src="product.images[0].src" />
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

// @ is an alias to /src

// import axios from 'axios'
import colors from '@/assets/json/color.json'
import sizes from '@/assets/json/size.json'
import materials from '@/assets/json/material.json'
import categorys from '@/assets/json/category.json'
import products from '@/assets/json/ProductsData.json'

export default {
    name: 'product',
    // mounted() {
    //     axios({
    //         method: "GET",
    //         "url": "https://behno.com/products.json?limit=20"
    //     }).then(response => {
    //         this.customerlist = response.data.products;
    //     }, error => {
    //         console.error(error);
    //     });
    // },
    data() {
        return {
            customerlist: products,
            fullProductList:products,
            selectedCustomer: "",
            selected:'',
            selectedColor:'',
            selectedMaterial:'',
            selectedSize:'',
            ddTestCategory: {
                    originalValue: [],
                    ddTestSelectedOption: "Value1",
                    disabled: false,
                    readonly: false,
                    visible: true,
                    color: "",
                    options: categorys
            },
            ddTestColor: {
                    originalValue: [],
                    ddTestSelectedOption: "AZURE",
                    disabled: false,
                    readonly: false,
                    visible: true,
                    color: "",
                    options: colors
            },
            ddTestSize: {
                    originalValue: [],
                    ddTestSelectedOption: "x-small",
                    disabled: false,
                    readonly: false,
                    visible: true,
                    color: "",
                    options: sizes
            },
            ddTestMaterial: {
                    originalValue: [],
                    ddTestSelectedOption: "NAPPA LEATHER",
                    disabled: false,
                    readonly: false,
                    visible: true,
                    color: "",
                    options: materials
            }
        }
    },
    methods: {
        switchSelect(event) {
        this.selected = event.target.value;
        },
        switchSelectColor(event){
            this.selectedColor = event.target.value;
            const result = this.fullProductList.filter(item => {
                console.log(item.variants[0].option1);
                return item.variants[0].option1 == event.target.value;
            });
            this.customerlist=result;
        },
        switchSelectSize(event){
            this.selectedSize = event.target.value;
        },
        switchSelectMaterial(event){
            this.selectedMaterial = event.target.value;
        },
        setSelectedCustomer: function(title) {
            this.selectedCustomer = title;
        },  
        goToDetailsPage: function(id) {
            this.$router.push("/customerdetails/"+id);
        }
    }
}

</script>
