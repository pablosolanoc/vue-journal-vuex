<template>
  <NavBar />
  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() =>
      import("@/modules/daybook/components/NavBar")
    ),
    EntryList: defineAsyncComponent(() =>
      import("@/modules/daybook/components/EntryList")
    ),
  },
};
</script>
