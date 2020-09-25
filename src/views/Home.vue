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
    this.botdata = getData.getFakeData();
  }
};
</script>
