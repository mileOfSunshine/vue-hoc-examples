<template>
  <a :href="link" class="item-box">
    <img :src="img" />
    <p>{{ name }}</p>
  </a>
</template>
<script>
export default {
  name: "Item",
  props: {
    link: String,
    img: String,
    name: String
  }
};
</script>
<style scoped>
.item-box {
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  font-size: 12px;
}
img {
  width: 50px;
  border-radius: 10px;
}
</style>
