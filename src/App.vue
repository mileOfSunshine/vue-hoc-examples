<template>
  <div id="app">
    <anime-list title="今日漫画" :list="animeList"></anime-list>
    <book-list title="今日推荐书籍" :list="bookList"></book-list>
  </div>
</template>

<script>
import Item from "./components/Item";
import Wrapper from "./components/Wrapper";

const AnimeList = Wrapper(Item);
const BookList = Wrapper(Item);

export default {
  name: "App",
  components: {
    AnimeList,
    BookList
  },
  data() {
    return {
      animeList: [
        {
          link: "#",
          img:
            "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7333550ab0119313d34ef7e2045167b2/9345d688d43f879484b2d3e6d01b0ef41ad53aac.jpg",
          name: "秒速5厘米"
        },
        {
          link: "#",
          img:
            "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7333550ab0119313d34ef7e2045167b2/9345d688d43f879484b2d3e6d01b0ef41ad53aac.jpg",
          name: "秒速5厘米"
        },
        {
          link: "#",
          img:
            "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=7333550ab0119313d34ef7e2045167b2/9345d688d43f879484b2d3e6d01b0ef41ad53aac.jpg",
          name: "秒速5厘米"
        }
      ],
      bookList: [
        {
          link: "#",
          img: "http://img3m5.ddimg.cn/44/31/25578575-1_l_2.jpg",
          name: "儒侠金庸传"
        },
        {
          link: "#",
          img: "http://img3m5.ddimg.cn/44/31/25578575-1_l_2.jpg",
          name: "儒侠金庸传"
        },
        {
          link: "#",
          img: "http://img3m5.ddimg.cn/44/31/25578575-1_l_2.jpg",
          name: "儒侠金庸传"
        },
        {
          link: "#",
          img: "http://img3m5.ddimg.cn/44/31/25578575-1_l_2.jpg",
          name: "儒侠金庸传"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.main-align-space-around {
  justify-content: space-around;
}
</style>
