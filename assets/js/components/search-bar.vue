<template>
  <div>
    <input
      :value="searchTerm"
      class="form-control"
      placeholder="Search Products..."
      type="search"
      @input="searchTerm = $event.target.value"
    />
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchTerm: '',
      };
    }
  }
</script>