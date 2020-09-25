<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ botdata }}
  </div>
</template>

<script>
import getData from "@/services/getData";

export default {
  name: "Home",
  data() {
    return {
      botdata: []
    };
  },
  created() {
    getData.getRealData().then((res) => {
      this.botdata = res;
    });
  }
};
</script>
