<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>
          Products
        </h1>
      </div>
    </div>
    <product-list :products="products"/>
    <div class="row">
      <legend-component :title="legend" />
    </div>
  </div>
</template>

<script>
  import LegendComponent from '@/components/legend';
  import ProductList from '@/components/product-list';
  import axios from 'axios';

  export default {
    name: 'Catalog',
    props: {
      currentCategoryId: {
        type: String,
        default: null,
      }
    },
    components: {
      LegendComponent,
      ProductList
    },
    data() {
      return {
        products: [],
        legend: 'Shipping takes 10-12 weeks, and products probably won\'t work'
      };
    },
    async created(){
      const params = {};
      if (this.currentCategoryId){
        params.category = this.currentCategoryId;
      }
      const response = await axios.get('/api/products', {
        params
      });

      this.products = response.data['hydra:member'];
    }
  }
</script>