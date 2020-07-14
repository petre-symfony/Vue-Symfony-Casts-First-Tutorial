<template>
  <div class="row">
    <div class="col-12">
      <div class="mt-4">
        <Loading v-show="loading"/>
      </div>
    </div>

    <product-card
      v-for="product in products"
      v-show="!loading"
      :key="product['@id']"
      :product="product"
    />
  </div>
</template>

<script>
  import ProductCard from '@/components/product-list/product-card';
  import Loading from '@/components/loading';

  export default {
    name: 'ProductList',
    components: {
      ProductCard,
      Loading
    },
    props: {
      products: {
        type: Array,
        required: true
      },
      loading: {
        type: Boolean,
        required: true,
      }
    }
  }
</script>