<style scoped>

.addmargin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.vue-logo-back {
    background-color: black;
}

img{
    width:348px;
}

.active {
  border-bottom: solid 3px #25A26B
}
.pt-6 {
    padding-top: 1.5rem;
}
.flex {
    display: flex;
}

ul {
    list-style: none;
    width:100%;
    text-align:center;
    justify-content: center;
    
}
.card-title{
    font-size:12px;
    text-align: left;
}

.filter-option{
    padding-top: 20px;
    padding-bottom: 20px;
}

.col {
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
}


/*****
- MultiSelect 
*****/

.dropdown { 
  position: relative; 
  cursor: pointer;
}

.multiselect {
  position: relative;
  
  ul {
    border: 1px solid #ddd;
    border-top: 0;
    border-radius: 0 0 3px 3px;
    left: 0px;
    padding: 8px 8px;
    position: absolute;
    top: -1rem;
    width: 100%;
    list-style: none;
    max-height: 150px;
    overflow: auto;
  }
}

.overselect {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>

<template>

<div class="home">
    <div class="vue-logo-back">
        <img src="../assets/logo.png" width="100px" height="100px">
    </div>
    
    <div class="row filter-option" style="margin:auto" >
        <div class="col-md-5" >
            
            <select @change="switchSelectSize($event)" class="mr-3">
                <option value="">Choose Size</option>
                <option v-for="option in ddTestSize.options" :key="option.id" :value="option.value">{{option.text}}</option>
            </select>
            <select @change="switchSelectMaterial($event)">
                <option value="">Choose Material</option>
                <option v-for="option in ddTestMaterial.options" :key="option.id"  :value="option.value">{{option.text}}</option>
            </select>
            <div class="col-md-3 mr-3">
                <div class="dropdown" @click="showDropdown">
                <div class="overselect"></div>
                    <select class="c-form-input">
                        <option value="">Please Select One</option>
                    </select>
                </div>
                <div class="multiselect" v-if="show">
                    <ul>
                        <li v-for="(option, index) in ddTestCategory.options" :key="index">
                        <input type="checkbox" :id="index" :value="option.value" @change="onCheck($event)">
                        <label :for="index">{{ option.text }}</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 mr-3">
                <div class="dropdown" @click="showColorDropdown">
                <div class="overselect"></div>
                    <select class="c-form-input">
                        <option value="">Please Select Color</option>
                    </select>
                </div>
                <div class="multiselect" v-if="showColor">
                    <ul>
                        <li v-for="(option, index) in ddTestColor.options" :key="index">
                        <input type="checkbox" :id="index" :value="option.value" @change="onCheckColor($event)">
                        <label :for="index">{{ option.text }}</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 mr-3">
                <div class="dropdown" @click="showSizeDropdown">
                <div class="overselect"></div>
                    <select class="c-form-input">
                        <option value="">Please Select Size</option>
                    </select>
                </div>
                <div class="multiselect" v-if="showSize">
                    <ul>
                        <li v-for="(option, index) in ddTestSize.options" :key="index">
                        <input type="checkbox" :id="index" :value="option.value" @change="onCheckSize($event)">
                        <label :for="index">{{ option.text }}</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid"> 
        <div class="row  centeralign" style="margin:auto">
            <div class="col-md-3 card centeralign addmargin" style="width: 18rem; margin:auto" v-for="product in customerlist[page_index]" :key="product.id">
                <div class="card-body" v-on:click="setSelectedCustomer(product.title)" >
                    
                    <img :src="product.images[0].src" />
                    <h5 class="card-title">{{product.title}}</h5>
                    <h5 class="card-title">${{Math.floor(product.variants[0].price)}}</h5>
                </div>
            </div>
        </div>
        <div class="row centeralign" style="margin:auto">
            <div class="col-md-12">
                <ul class="flex pt-6" >
                    <li :key="index" :class="{ 'active': index === page_index }" v-for="(page, index) in customerlist">
                    <a class="p-2 text-sm" href="#" v-on:click.prevent="paginate(index)">
                        {{index+1}}
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

</template>

<script>

// <select @change="switchSelectCategory($event)" class="mr-3">
            //     <option value="">Choose category</option>
            //     <option v-for="option in ddTestCategory.options" :key="option.id" :value="option.value">{{option.text}}</option>
            // </select>
            // <select @change="switchSelectColor($event)" class="mr-3">
            //     <option value="">Choose Color</option>
            //     <option v-for="option in ddTestColor.options" :key="option.id" :value="option.value">{{option.text}}</option>
            // </select>

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
    //         "url": "https://behno.com/products.json?limit=200"
    //     }).then(response => {
            
    //         this.customerlist = this.array_chunk(response.data.products, 20);
    //         this.fullProductList=response.data.products;
    //         this.product_count=response.data.products.length;
    //     }, error => {
    //         console.error(error);
    //     });
    // },
    data() {
        return {
            // customerlist:[] ,
            // fullProductList:[],
            // product_count: 0,
            customerlist:this.array_chunk(products, 20) ,
            fullProductList:products,
            product_count: products.length,
            page_index: 0,
            page_size: 20,
            filterByCategory:[],
            filterByColor:[],
            filterBySize:[],
            show: false,
            showColor: false,
            showSize:false,
            selectedCustomer: '',
            selected: [],
            selectedColor:[],
            selectedSize:[],
            selectedMaterial:'',
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
            },
            options: categorys
        }
    },
    methods: {
        switchSelectSize(event){
            this.selectedSize = event.target.value;
            this.filterProduct();
        },
        switchSelectMaterial(event){
            this.selectedMaterial = event.target.value;
            this.filterProduct();
        },
        setSelectedCustomer: function(title) {
            this.selectedCustomer = title;
        },  
        goToDetailsPage: function(id) {
            this.$router.push("/customerdetails/"+id);
        },
        array_chunk: function(array, size) {
            const chunked_arr = [];
            let index = 0;
            while (index < array.length) {
                chunked_arr.push(array.slice(index, size + index));
                index += size;
            }
            return chunked_arr;
        },
        paginate: function(index) {
            this.page_index =index;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        showDropdown() {
            this.show = !this.show
        },
        showColorDropdown(){
            this.showColor=!this.showColor;
        },
        showSizeDropdown(){
            this.showSize=!this.showSize;
        },
        onCheck(event) {
            if(this.selected.includes(event.target.value)){
                this.selected=this.selected.filter(function(geeks){
                    return geeks != event.target.value;
                });
            }
            else{
                this.selected.push(event.target.value); 
            }
            this.filterProduct();
        },
        onCheckColor(event) {
            if(this.selectedColor.includes(event.target.value)){
                this.selectedColor = this.selectedColor.filter(function(geeks){
                    return geeks != event.target.value;
                });
            }
            else{
                this.selectedColor.push(event.target.value); 
            }
            this.filterProductByColor();
        },
        onCheckSize(event) {
            if(this.selectedSize.includes(event.target.value)){
                this.selectedSize = this.selectedSize.filter(function(geeks){
                    return geeks != event.target.value;
                });
            }
            else{
                this.selectedSize.push(event.target.value); 
            }
            this.filterProductBySize();
        },
        // filter based on category selection
        filterProduct:function(){
            let array=[];
            if(this.selected.length>0){
                this.selected.map(cate=>{
                    let filter = products.filter(item=>{
                        return item.tags.includes(cate)
                    })
                    if(array.length>0){
                        array = new Set([
                            ...array,
                            ...filter
                        ]);
                        array=[...array];
                    }
                    else{
                        array=filter;
                    }    
                });

                this.filterByCategory=array;

                if(this.filterByColor.length>0){
                    array = this.filterByColor.filter(function(obj) { return array.indexOf(obj) == -1; });
                }
                if(this.filterBySize.length>0){
                    let size=this.filterBySize;
                    array = array.filter(function(obj) { return size.indexOf(obj) == -1; });
                } 
                this.customerlist = this.array_chunk(array, 20);
            }
            else{
                this.filterByCategory=[];
                if(this.selectedColor.length>0){
                    this.filterProductByColor();
                }
                // this.filterBySize();
            }
            this.page_index=0;
        },
        // filter based on color selection
        filterProductByColor(){
            let array=[];
            if(this.selectedColor.length>0){
                this.selectedColor.map(col=>{
                    let filter = products.filter(item=>{
                        return item.variants[0].option1 == col;
                    })
                    if(array.length>0){
                        array = new Set([
                            ...array,
                            ...filter
                        ]);
                        array=[...array];
                    }
                    else{
                        array=filter;
                    }   
                });

                this.filterByColor=array;

                if(this.filterByCategory.length>0){
                    let category=this.filterByCategory;
                    let array = array.filter(function(obj) { return category.indexOf(obj) == -1; });
                }
                if(this.filterBySize.length>0){
                    let size=this.filterBySize;
                    array = array.filter(function(obj) { return size.indexOf(obj) == -1; });
                } 
                this.customerlist = this.array_chunk(array, 20);
            }
            else{
                this.filterByColor=[];
                // this.filterProductBySize();
                // this.filterByCategory();
            }
            this.page_index=0;
        },
        filterProductBySize(){
            let array=[];
            if(this.selectedSize.length>0){
                this.selectedSize.map(siz=>{
                    let filter = products.filter(item=>{
                        return item.variants[0].option2 == siz.toUpperCase();
                    })
                    if(array.length>0){
                        array = new Set([
                            ...array,
                            ...filter
                        ]);
                        array=[...array];
                    }
                    else{
                        array=filter;
                    }   
                });

                this.filterBySize=array;

                if(this.filterByCategory.length>0){
                    let category=this.filterByCategory;
                    array = array.filter(function(obj) { return category.indexOf(obj) == -1; });
                }
                if(this.filterByColor.length>0){
                    let color=this.filterByColor;
                    array = color.filter(function(obj) { return array.indexOf(obj) == -1; });
                }
                this.customerlist = this.array_chunk(array, 20);
            }
            else{
                this.filterBySize=[];
                if(this.selectedColor.length>0){
                    this.filterProductByColor();
                }

                // this.filterProductByColor();
                // this.filterByCategory();
            }
            this.page_index=0;
        }
    }
}

</script>
