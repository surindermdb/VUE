
<template>

  <div class="home">
    <div class="vue-logo-back">
      <img src="../assets/logo.png" width="100px" height="100px">
    </div>

    <div class="filter_row">
      <div class="responsiveFilter">
        <button class="filter_cta">filter</button>
        <div class="filderDropdown">
          <div class="close_icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8861 11.8864L35.6587 35.6589" stroke="#656565" stroke-width="1.5" />
              <path d="M11.8861 35.6586L35.6587 11.886" stroke="#656565" stroke-width="1.5" />
            </svg>
          </div>
          <div class="dropdown_head">
            <button class="filter_cta filter">FILTER</button>
            <button class="filter_cta clear-filter">CLEAR FILTERS
              <svg data-v-35171425="" width="10" height="10" viewBox="0 0 6 6" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path data-v-35171425="" d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z" stroke="#fff"></path>
                <path data-v-35171425="" d="M5 1L0.5 5.5L2.75 3.25L5 1Z" stroke="#fff"></path>
              </svg>
            </button>
          </div>

          <ul>
            <li>
              <button class="filterCta">Category
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </button>
            </li>
            <li>
              <button class="filterCta">Color
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </button>
            </li>
            <li>
              <button class="filterCta">Size
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </button>
            </li>
            <li>
              <button class="filterCta">Material
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <button class="filter_cta">SORT</button>
      </div>
      <div class="row_inner">
        <div class="filters">
          <div class="filter">
            <div class="dropdown" @click="showDropdown">
              <div class="overselect">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </div>
              <button class="c-form-input">
                <!-- <option value=""></option> -->
                Categories
              </button>
            </div>
            <div class="multiselect" v-bind:class="{ active: show }">
              <ul>
                <li v-for="(option) in ddTestCategory" :key="option.id">
                  <input class="multiselectOption" type="checkbox" name="category" :id="option.id" :value="option.value"
                    @change="onCheck($event)">
                  <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                </li>
                <li>
                  <div class="btn_wrapper">
                    <button class="filterBtn modifier" @click="filterProduct">Apply</button>
                    <button class="filterBtn" @click="clearCheckBoxs('category')">Clear</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter">
            <div class="dropdown" @click="showColorDropdown">
              <div class="overselect">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </div>
              <button class="c-form-input">
                Color
              </button>
            </div>
            <div class="multiselect" v-bind:class="{ active: showColor }">
              <ul>
                <li v-for="(option) in ddTestColor" :key="option.id">
                  <input class="multiselectOption" type="checkbox" name="color" :id="option.id" :value="option.value"
                    @change="onCheckColor($event)">
                  <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                </li>
                <li>
                  <div class="btn_wrapper">
                    <button class="filterBtn modifier" @click="filterProductByColor">Apply</button>
                    <button class="filterBtn" @click="clearCheckBoxs('color')">Clear</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter">
            <div class="dropdown" @click="showSizeDropdown">
              <div class="overselect">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </div>
              <button class="c-form-input">
                Size

              </button>
            </div>
            <div class="multiselect" v-bind:class="{ active: showSize }">
              <ul>
                <li v-for="(option) in ddTestSize" :key="option.id">
                  <input class="multiselectOption" type="checkbox" name="size" :id="option.id" :value="option.value"
                    @change="onCheckSize($event)">
                  <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                </li>
                <li>
                  <div class="btn_wrapper">
                    <button class="filterBtn modifier" @click="filterProductBySize">Apply</button>
                    <button class="filterBtn" @click="clearCheckBoxs('size')">Clear</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter filter-modifier">
            <div class="dropdown" @click="showMaterialDropdown">
              <div class="overselect">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round" />
                </svg>
              </div>
              <button class="c-form-input">
                Material

              </button>
            </div>
            <div class="multiselect" v-bind:class="{ active: showMaterial }">
              <ul>
                <li v-for="(option) in ddTestMaterial" :key="option.id">
                  <input class="multiselectOption" type="checkbox" name="material" :id="option.id" :value="option.value"
                    @change="onCheckMaterial($event)">
                  <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                </li>
                <li>
                  <div class="btn_wrapper">
                    <button class="filterBtn modifier" @click="filterProductByMaterial">Apply</button>
                    <button class="filterBtn" @click="clearCheckBoxs('material')">Clear</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter">
            <button class="clearFilter" @click="clearAllFilter()">Clear filters
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1L5 5.5L2.75 3.25L0.5 1Z" stroke="white" />
                <path d="M5 1L0.5 5.5L2.75 3.25L5 1Z" stroke="white" />
              </svg>
            </button>
          </div>

        </div>
        <div class="sort_by">
          <div class="sort_by_inner">
            <div class="range">
              <div class="add_remove">
                <button>-</button>
                <button>+</button>
              </div>
              <input id="ageInputId" type="range" value="4" min="2" max="6" step="2" class="progress"
                @input="sliderChange($event)">
            </div>

            <div class="sortFilter" @click="showSortDropdown">
              <button class="sortBtn">
                Sort By
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path data-v-35171425="" d="M1 1L5 5L9 1" stroke="black" stroke-width="0.75" stroke-linejoin="round">
                  </path>
                </svg>
              </button>
              <div class="multiselect" v-bind:class="{ active: showSort }">
                <ul>
                  <li v-for="(option) in ddTestSort" :key="option.id">
                    <input class="multiselectOption" type="checkbox" name="sort" :id="option.id" :value="option.value"
                      @change="onCheckSort($event)">
                    <label class="optionLabel" :for="option.id">{{ option.text }}</label>
                  </li>

                  <li>
                    <div class="btn_wrapper">
                      <button class="filterBtn modifier" @click="sortProduct">Apply</button>
                      <button class="filterBtn">Clear</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="product_grid">
      <div class="grid_inner" v-bind:class="{ grid_inner_max: gridMax, grid_inner_min: gridMin }">
        <div class="centeralign addmargin" v-for="product in customerlist[page_index]" :key="product.id">
          <div class="card" v-on:click="setSelectedCustomer(product.title)">
            <img :src="product.images[0].src" v-on:mouseover="mouseover($event,product.images[product.images.length-1].src)"
            v-on:mouseleave="mouseleave($event,product.images[0].src)" />
            <!-- <img :src="product.images[0].src" /> -->
            <!-- <vue-hover-slider :slides="slides[page_index]" /> -->
            <h5 class="card-title">{{ product.title }}</h5>
            <h5 class="card-title bold">${{ Math.floor(product.variants[0].price) }}</h5>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="row centeralign" style="margin:auto">
            <div class="col-md-12">
                <ul class="flex pt-6" >
                    <li :key="index" :class="{ 'pageactive': index === page_index }" v-for="(page, index) in customerlist">
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
import products from "@/assets/json/ProductsData.json";

export default {
  name: "product",
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
      customerlist: this.array_chunk(products, 20),
      fullProductList: products,
      product_count: products.length,
      page_index: 0,
      page_size: 20,
      filterByCategory: [],
      filterByColor: [],
      filterBySize: [],
      filterByMaterial: [],
      show: false,
      showColor: false,
      showSize: false,
      showMaterial: false,
      showSort: false,
      gridMax: false,
      gridMin: false,
      // selectedCustomer: '',
      selected: [],
      selectedColor: [],
      selectedSize: [],
      selectedMaterial: [],
      selectedSort: [],
      ddTestCategory: this.getCategoryDropDownList(),
      ddTestColor: this.getColorDropDownList(),
      ddTestSize: this.getSizeDropDownList(),
      ddTestMaterial: this.getMaterialDropDownList(),
      ddTestSort: [
        {
          id: "sort1",
          value: "Recommended",
          text: "Recommended"
        },
        {
          id: "sort2",
          value: "LowToHigh",
          text: "Price: Low to High"
        },
        {
          id: "sort3",
          value: "HighToLow",
          text: "Price: High to Low"
        },
        {
          id: "sort4",
          value: "Latest",
          text: "Latest Arrivals"
        },
        {
          id: "sort5",
          value: "Discount",
          text: "Percent Discount"
        }
      ],
      // slides:this.getProductSlides()
    };
  },
  methods: {
    /* change images on hover */ 
    mouseover: function(event,imgsrc){
      event.target.src=imgsrc;
    },    
    mouseleave: function(event,imgsrc){
      event.target.src=imgsrc;
    },
    /* end change images on hover */ 

    /* Clear all filter */ 
    clearAllFilter: function () {
      let arrayName = ['category', 'color', 'size', 'material'];
      arrayName.map(item => {
        this.clearCheckBoxs(item);
      })
    },
    /* End Clear all filter */ 
    
    /* start unchecked checkbox when click clear button in dropdown */ 
    clearCheckBoxs: function (name) {
      var markedCheckbox = document.getElementsByName(name);
      for (var checkbox of markedCheckbox) {
        if (checkbox.checked)
          checkbox.checked = false;
      }
      if (name == 'category') {
        this.selected = [];
        this.filterByCategory=[];
      }
      else if (name == 'color') {
        this.selectedColor = [];
        this.filterByColor=[];
      }
      else if (name == 'size') {
        this.selectedSize = [];
        this.filterBySize=[];
      }
      else if (name == 'material') {
        this.selectedMaterial = [];
        this.filterByMaterial=[];
      }
      this.clearAllOption();
    },
    /* end unchecked checkbox when click clear button in dropdown */ 

    /* change grid column */ 
    sliderChange: function (event) {
      if (event.target.value == 2) {
        this.gridMin = true;
        this.gridMax = false;
      }
      else if (event.target.value == 6) {
        this.gridMin = false;
        this.gridMax = true;
      }
      else {
        this.gridMin = false;
        this.gridMax = false;
      }
    },
    /* end change grid column */ 

    /* Fill category dropdown from products data */ 
    
    getCategoryDropDownList: function () {
      let array = [];
      products.map((item) => {
        item.tags.map((ca) => {
          array.push(ca);
        });
      });
      let data = [...new Set(array)];
      array = [];
      data.map((item, index) => {
        let obj = { id: item + index, value: item, text: item };
        array.push(obj);
      });
      return array;
    },
    /* End Fill category dropdown from products data */ 

    /* Fill color dropdown from products data */ 
    
    getColorDropDownList: function () {
      let array = [];
      products.map((item) => {
        item.variants.map((col) => {
          array.push(col.option1);
        });
      });
      let data = [...new Set(array)];
      array = [];
      data.map((item, index) => {
        let obj = { id: item + index, value: item, text: item };
        if (item != null) {
          array.push(obj);
        }
      });
      return array;
    },

    /* End Fill color dropdown from products data */ 
    
    /* Fill size dropdown from products data */ 
    getSizeDropDownList: function () {
      let array = [];
      products.map((item) => {
        item.variants.map((col) => {
          array.push(col.option2);
        });
      });
      let data = [...new Set(array)];
      array = [];
      data.map((item, index) => {
        let obj = { id: item + index, value: item, text: item };
        if (item != null) {
          array.push(obj);
        }
      });
      return array;
    },
    /* End Fill size dropdown from products data */ 
    
    /* Fill material dropdown from products data */ 
    getMaterialDropDownList: function () {
      let array = [];
      products.map((item) => {
        item.variants.map((col) => {
          array.push(col.option3);
        });
      });
      let data = [...new Set(array)];
      array = [];
      data.map((item, index) => {
        let obj = { id: item + index, value: item, text: item };
        if (item != null) {
          array.push(obj);
        }
      });
      return array;
    },
    /* End Fill material dropdown from products data */

    /* this function is used to set 20 record on single page */
    array_chunk: function (array, size) {
      const chunked_arr = [];
      let index = 0;
      while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
      }

      return chunked_arr;
    },

    /* On click page number change page */
    paginate: function (index) {
      this.page_index = index;
      this.sortProduct();
      window.scrollTo({ top: 0, behavior: "smooth" });
      
    },

    /* show category dropdown */
    showDropdown:function() {
      this.show = !this.show;
      this.showColor = this.showColor ? !this.showColor : this.showColor;
      this.showSize = this.showSize ? !this.showSize : this.showSize;
      this.showMaterial = this.showMaterial ? !this.showMaterial : this.showMaterial;
      this.showSort = this.showSort ? !this.showSort : this.showSort;
    },
    
    /* show color dropdown */
    showColorDropdown:function() {
      this.showColor = !this.showColor;
      this.show = this.show ? !this.show : this.show;
      this.showSize = this.showSize ? !this.showSize : this.showSize;
      this.showMaterial = this.showMaterial ? !this.showMaterial : this.showMaterial;
      this.showSort = this.showSort ? !this.showSort : this.showSort;
    },
    
    /* show size dropdown */
    showSizeDropdown:function() {
      this.showSize = !this.showSize;
      this.show = this.show ? !this.show : this.show;
      this.showColor = this.showColor ? !this.showColor : this.showColor;
      this.showMaterial = this.showMaterial ? !this.showMaterial : this.showMaterial;
      this.showSort = this.showSort ? !this.showSort : this.showSort;
    },
    
    /* show material dropdown */
    showMaterialDropdown:function() {
      this.showMaterial = !this.showMaterial;
      this.show = this.show ? !this.show : this.show;
      this.showColor = this.showColor ? !this.showColor : this.showColor;
      this.showSize = this.showSize ? !this.showSize : this.showSize;
      this.showSort = this.showSort ? !this.showSort : this.showSort;
    },
    
    /* show sort dropdown */
    showSortDropdown:function() {
      this.showSort = !this.showSort;
      this.show = this.show ? !this.show : this.show;
      this.showColor = this.showColor ? !this.showColor : this.showColor;
      this.showSize = this.showSize ? !this.showSize : this.showSize;
      this.showMaterial = this.showMaterial ? !this.showMaterial : this.showMaterial;
    },

    /* set selected category checkbox value */
    onCheck:function(event) {
      if (this.selected.includes(event.target.value)) {
        this.selected = this.selected.filter(function (geeks) {
          return geeks != event.target.value;
        });
      } else {
        this.selected.push(event.target.value);
      }
    },
    
    /* set selected color checkbox value */
    onCheckColor:function(event) {
      if (this.selectedColor.includes(event.target.value)) {
        this.selectedColor = this.selectedColor.filter(function (geeks) {
          return geeks != event.target.value;
        });
      } else {
        this.selectedColor.push(event.target.value);
      }
    },

    /* set selected size checkbox value */
    onCheckSize:function(event) {
      if (this.selectedSize.includes(event.target.value)) {
        this.selectedSize = this.selectedSize.filter(function (geeks) {
          return geeks != event.target.value;
        });
      } else {
        this.selectedSize.push(event.target.value);
      }
    },
    
    /* set selected material checkbox value */
    onCheckMaterial:function(event) {
      if (this.selectedMaterial.includes(event.target.value)) {
        this.selectedMaterial = this.selectedMaterial.filter(function (geeks) {
          return geeks != event.target.value;
        });
      } else {
        this.selectedMaterial.push(event.target.value);
      }
    },

    /* set selected sort checkbox value */
    onCheckSort:function(event) {
      var markedCheckbox = document.getElementsByName('sort');
      for (var checkbox of markedCheckbox) {
        if (checkbox.checked)
          checkbox.checked = false;
      }
      this.selectedSort=[]
      markedCheckbox = document.getElementById(event.target.id);
      markedCheckbox.checked=true;
      this.selectedSort.push(event.target.value);
    },

    /* sort product based on price low to high and vice-verse */
    sortProduct:function(){
      if (this.selectedSort.length > 0) {
          let obj=this.selectedSort[0];
          this.customerlist[this.page_index].sort(function(a, b){
            console.log(a.variants[0]);
            if(obj=='LowToHigh'){
              return a.variants[0].price - b.variants[0].price
            }
            else if(obj=='HighToLow'){
              return b.variants[0].price - a.variants[0].price
            }
          });
        
      }
    },

    /* set product in array based on selected category option */
    filterProduct: function () {
      let array = [];
      if (this.selected.length > 0) {
        // Get Category product after multi select option in dropdown
        this.selected.map((cate) => {
          let filter = products.filter((item) => {
            return item.tags.includes(cate);
          });
          if (array.length > 0) {
            array = new Set([...array, ...filter]);
            array = [...array];
          } else {
            array = filter;
          }
        });
        this.filterByCategory = array;
        array = this.getUniqueRecord(array, 'category');
      } else {
        this.filterByCategory = [];
        this.clearAllOption();
      }
      this.page_index = 0;
    },

    /* set product in array based on selected color option */
    filterProductByColor:function() {
      let array = [];
      if (this.selectedColor.length > 0) {
        // Get Color product after multi select option in dropdown
        this.selectedColor.map((col) => {
          let filter = products.filter((item) => {
            return item.variants[0].option1 == col;
          });
          if (array.length > 0) {
            array = new Set([...array, ...filter]);
            array = [...array];
          } else {
            array = filter;
          }
        });
        this.filterByColor = array;
        array = this.getUniqueRecord(array, 'color');
      } else {
        this.filterByColor = [];
        this.clearAllOption();
      }
      this.page_index = 0;
    },

    /* set product in array based on selected size option */
    filterProductBySize:function() {
      let array = [];
      if (this.selectedSize.length > 0) {
        // Get Size product after multi select option in dropdown
        this.selectedSize.map((siz) => {
          let filter = products.filter((item) => {
            return item.variants[0].option2 == siz.toUpperCase();
          });
          if (array.length > 0) {
            array = new Set([...array, ...filter]);
            array = [...array];
          } else {
            array = filter;
          }
        });
        this.filterBySize = array;
        array = this.getUniqueRecord(array, 'size');
      } else {
        this.filterBySize = [];
        this.clearAllOption();
      }
      this.page_index = 0;
    },

    /* set product in array based on selected material option */
    filterProductByMaterial:function() {
      let array = [];
      if (this.selectedMaterial.length > 0) {
        // Get Material product after multi select
        this.selectedMaterial.map((mat) => {
          let filter = products.filter((item) => {
            return item.variants[0].option3 == mat;
          });
          if (array.length > 0) {
            array = new Set([...array, ...filter]);
            array = [...array];
          } else {
            array = filter;
          }
        });
        this.filterByMaterial = array;
        array = this.getUniqueRecord(array, 'material');
      } else {
        this.filterByMaterial = [];
        this.clearAllOption();
      }
      this.page_index = 0;
    },

    /*satrt filter and unique order after apply filter option */
    getUniqueRecord:function(array, type) {
      if (this.filterByCategory.length > 0 && type != 'category') {
        array = this.filterArrayToUniqueRecord(array, this.filterByCategory);
      }
      if (this.filterByColor.length > 0 && type != 'color') {
        array = this.filterArrayToUniqueRecord(array, this.filterByColor);
      }
      if (this.filterBySize.length > 0 && type != 'size') {
        array = this.filterArrayToUniqueRecord(array, this.filterBySize);
      }
      if (this.filterByMaterial.length > 0 && type != 'material') {
        array = this.filterArrayToUniqueRecord(array, this.filterByMaterial);
      }
      this.customerlist = this.array_chunk(array, 20);
      this.sortProduct();
      return array;
    },

    filterArrayToUniqueRecord: function(array, filterWithArray) {
      return filterWithArray.filter((el) => {
        return array.some((f) => {
          return f.id === el.id;
        });
      });
    },
    /*end filter and unique order after apply filter option */

    /* clear option that selected in drop down under particular option */
    clearAllOption: function () {
      if (this.selected.length > 0) {
        this.filterProduct();
      } else if (this.selectedColor.length > 0) {
        this.filterProductByColor();
      } else if (this.selectedSize.length > 0) {
        this.filterProductBySize();
      } else if (this.selectedMaterial.length > 0) {
        this.filterProductBySize();
      } else {
        this.customerlist = this.array_chunk(products, 20);
      }
    },

  },
};
</script>
