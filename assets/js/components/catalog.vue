<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>
          Products
        </h1>
      </div>
    </div>
    <product-list
      :products="products"
      :loading="loading"
    />
    <div class="row">
      <legend-component :title="legend" />
    </div>
  </div>
</template>

<script>
  import LegendComponent from '@/components/legend';
  import ProductList from '@/components/product-list';
  import { fetchProducts } from '@/services/products-service';

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
        loading: false,
        legend: 'Shipping takes 10-12 weeks, and products probably won\'t work'
      };
    },
    async created(){
      this.loading = true;

      let data;
      try {
        data = await fetchProducts(this.currentCategoryId);

        this.loading = false;
      } catch(e) {
        this.loading = false;

        return;
      }

      this.products = data['hydra:member'];
    }
  }
</script>