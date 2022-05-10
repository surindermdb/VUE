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
        <div class="col-md-12" >
            <div class="col-md-3">
                <div class="dropdown" @click="showDropdown">
                <div class="overselect"></div>
                    <select class="c-form-input">
                        <option value="">Please Select One</option>
                    </select>
                </div>
                <div class="multiselect" v-if="show">
                    <ul>
                        <li v-for="(option) in ddTestCategory" :key="option.id">
                        <input type="checkbox" :id="option.id" :value="option.value" @change="onCheck($event)">
                        <label :for="option.id">{{ option.text }}</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="dropdown" @click="showColorDropdown">
                <div class="overselect"></div>
                    <select class="c-form-input">
                        <option value="">Please Select Color</option>
                    </select>
                </div>
                <div class="multiselect" v-if="showColor">
                    <ul>
                        <li v-for="(option) in ddTestColor" :key="option.id">
                        <input type="checkbox" :id="option.id" :value="option.value" @change="onCheckColor($event)">
                        <label :for="option.id">{{ option.text }}</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="dropdown" @click="showSizeDropdown">
                <div class="overselect"></div>
                    <select class="c-form-input">
                        <option value="">Please Select Size</option>
                    </select>
                </div>
                <div class="multiselect" v-if="showSize">
                    <ul>
                        <li v-for="(option) in ddTestSize" :key="option.id">
                        <input type="checkbox" :id="option.id" :value="option.value" @change="onCheckSize($event)">
                        <label :for="option.id">{{ option.text }}</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="dropdown" @click="showMaterialDropdown">
                <div class="overselect"></div>
                    <select class="c-form-input">
                        <option value="">Please Select Material</option>
                    </select>
                </div>
                <div class="multiselect" v-if="showMaterial">
                    <ul>
                        <li v-for="(option) in ddTestMaterial" :key="option.id">
                        <input type="checkbox" :id="option.id" :value="option.value" @change="onCheckMaterial($event)">
                        <label :for="option.id">{{ option.text }}</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid"> 
        <div class="row  centeralign" style="margin:auto">
            <div class="col-md-3 card centeralign addmargin" v-for="product in customerlist[page_index]" :key="product.id">
                <div class="card-body">
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
// <vue-hover-slider :slides="slides" />
// @ is an alias to /src
// import axios from 'axios'
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
            filterByMaterial:[],
            show: false,
            showColor: false,
            showSize:false,
            showMaterial:false,
            // selectedCustomer: '',
            selected: [],
            selectedColor:[],
            selectedSize:[],
            selectedMaterial:[],
            ddTestCategory: this.getCategoryDropDownList(),
            ddTestColor: this.getColorDropDownList(),
            ddTestSize: this.getSizeDropDownList(),
            ddTestMaterial: this.getMaterialDropDownList()
        }
    },
    methods: {
        // Fill category dropdown from products data
        getCategoryDropDownList:function(){
            let array=[];
            products.map(item=>{
                item.tags.map((ca)=>{
                    array.push(ca);
                })
            });
            let data=[ ...new Set(array) ];
            array=[];
            data.map((item,index)=>{
                let obj={"id":item+index, "value":item, "text":item};
                array.push(obj);
            })
            return array;
        },
        // Fill color dropdown from products data
        getColorDropDownList:function(){
            let array=[];
            products.map(item=>{
                item.variants.map((col)=>{
                    array.push(col.option1);
                })
            });
            let data=[ ...new Set(array) ];
            array=[];
            data.map((item,index)=>{
                let obj={"id":item+index, "value":item, "text":item};
                if(item!=null){
                    array.push(obj);
                }
                
            })
            return array;
        },
        // Fill size dropdown from products data
        getSizeDropDownList:function(){
            let array=[];
            products.map(item=>{
                item.variants.map((col)=>{
                    array.push(col.option2);
                })
            });
            let data=[ ...new Set(array) ];
            array=[];
            data.map((item,index)=>{
                let obj={"id":item+index, "value":item, "text":item};
                if(item!=null){
                    array.push(obj);
                }
            })
            return array;
        },
        // Fill material dropdown from products data
        getMaterialDropDownList:function(){
            let array=[];
            products.map(item=>{
                item.variants.map((col)=>{
                    array.push(col.option3);
                })
            });
            let data=[ ...new Set(array) ];
            array=[];
            data.map((item,index)=>{
                let obj={"id":item+index, "value":item, "text":item};
                if(item!=null){
                    array.push(obj);
                }
            })
            return array;
        },
        // v-on:click="setSelectedCustomer(product.title)"
        // setSelectedCustomer: function(title) {
        //     this.selectedCustomer = title;
        // },  
        // goToDetailsPage: function(id) {
        //     this.$router.push("/customerdetails/"+id);
        // },
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
        // show category dropdown
        showDropdown() {
            this.show = !this.show
        },
        // show color dropdown
        showColorDropdown(){
            this.showColor=!this.showColor;
        },
        // show size dropdown
        showSizeDropdown(){
            this.showSize=!this.showSize;
        },
        // show material dropdown
        showMaterialDropdown(){
            this.showMaterial=!this.showMaterial;
        },
        // on selecte Category
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
        // on selecte Color
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
        // on selecte Size
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
        // on selecte Material
        onCheckMaterial(event) {
            if(this.selectedMaterial.includes(event.target.value)){
                this.selectedMaterial = this.selectedMaterial.filter(function(geeks){
                    return geeks != event.target.value;
                });
            }
            else{
                this.selectedMaterial.push(event.target.value); 
            }
            this.filterProductByMaterial();
        },

        // filter based on category selection
        filterProduct:function(){
            let array=[];
            if(this.selected.length>0){
                // Get Category product after multi select option in dropdown
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
                
                //array of color Filter with other selected option
                if(this.filterByColor.length>0){
                    array = this.filterArrayByColor(array);
                }
                if(this.filterBySize.length>0){
                    array = this.filterArrayBySize(array);
                }
                if(this.filterByMaterial.length>0){
                    array = this.filterArrayByMaterial(array);
                } 
                this.customerlist = this.array_chunk(array, 20);
            }
            else{
                this.filterByCategory=[];
                if(this.selectedColor.length>0){
                    this.filterProductByColor();
                }
                else if(this.selectedSize.length>0){
                    this.filterProductBySize();
                }
                else if(this.selectedMaterial.length>0){
                    this.filterByMaterial();
                }
                else{
                    this.customerlist = this.array_chunk(products, 20);
                }
            }
            this.page_index=0;
        },

        // filter based on color selection
        filterProductByColor(){
            let array=[];
            if(this.selectedColor.length>0){
                // Get Color product after multi select option in dropdown
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

                //array of color Filter with other selected option
                if(this.filterByCategory.length>0){
                    array = this.filterArrayByCategory(array);
                }
                if(this.filterBySize.length>0){
                    array = this.filterArrayBySize(array);
                }
                if(this.filterByMaterial.length>0){
                    array=this.filterArrayByMaterial(array);
                }  
                this.customerlist = this.array_chunk(array, 20);
            }
            else{
                this.filterByColor=[];
                if(this.selected.length>0){
                    this.filterProduct();
                }
                else if(this.selectedSize.length>0){
                    this.filterProductBySize();
                }
                else if(this.selectedMaterial.length>0){
                    this.filterByMaterial();
                }
                else{
                    this.customerlist = this.array_chunk(products, 20);
                }
            }
            this.page_index=0;
        },

        // filter based on size selection
        filterProductBySize(){
            let array=[];
            if(this.selectedSize.length>0){
                // Get Size product after multi select option in dropdown
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

                //array of size Filter with other selected option
                if(this.filterByCategory.length>0){
                    array = this.filterArrayByCategory(array);
                }
                if(this.filterByColor.length>0){
                    array = this.filterArrayByColor(array);
                }
                if(this.filterByMaterial.length>0){
                    array=this.filterArrayByMaterial(array);
                }  
                this.customerlist = this.array_chunk(array, 20);
            }
            else{
                this.filterBySize=[];
                if(this.selected.length>0){
                    this.filterProduct();
                }
                else if(this.selectedColor.length>0){
                    this.filterProductByColor();
                }
                else if(this.selectedMaterial.length>0){
                    this.filterByMaterial();
                }
                else{
                    this.customerlist = this.array_chunk(products, 20);
                }
            }
            this.page_index=0;
        },

        // filter based on Material selection
        filterProductByMaterial(){
            let array=[];
            if(this.selectedMaterial.length>0){

                // Get Material product after multi select 
                this.selectedMaterial.map(mat=>{
                    let filter = products.filter(item=>{
                        return item.variants[0].option3 == mat;
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

                this.filterByMaterial=array;


                //array of material Filter with other selected option  
                if(this.filterByCategory.length>0){
                    array = this.filterArrayByCategory(array);
                }
                if(this.filterByColor.length>0){
                    array = this.filterArrayByColor(array);
                }
                if(this.filterBySize.length>0){
                    array = this.filterArrayBySize(array);
                }
                this.customerlist = this.array_chunk(array, 20);
            }
            else{
                this.filterByMaterial=[];
                if(this.selected.length>0){
                    this.filterProduct();
                }
                else if(this.selectedColor.length>0){
                    this.filterProductByColor();
                }
                else if(this.selectedSize.length>0){
                    this.filterProductBySize();
                }
                else{
                    this.customerlist = this.array_chunk(products, 20);
                }
            }
            this.page_index=0;
        },
        filterArrayByCategory(array){
            let category = this.filterByCategory;
           return category.filter( el => {
                return array.some( f => {
                    return f.id === el.id;
                });
            });
        },
        filterArrayByColor(array){
            let color = this.filterByColor;
           return color.filter( el => {
                return array.some( f => {
                    return f.id === el.id;
                });
            });
        },
        filterArrayBySize(array){
            let size = this.filterBySize;
           return size.filter( el => {
                return array.some( f => {
                    return f.id === el.id;
                });
            });
        },
        filterArrayByMaterial(array){
            let material = this.filterByMaterial;
           return material.filter( el => {
                return array.some( f => {
                    return f.id === el.id;
                });
            });
        }
    }
}

</script>
