<template>
  <section>
    <i class="fas fa-shopping-cart">
      <div class="cart-items">2</div>
    </i>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>

i {
font-size: 4rem;
color: aliceblue;
position: relative;
}

.cart-items {
font-size: 2rem;
font-weight: bold;
background-color: rgba(255, 0, 0, 0.7);
border-radius: 2rem;
padding: 0 .7rem;
color: aliceblue;
position: absolute;
top: .5rem;
left: 1.5rem;
}
</style>
