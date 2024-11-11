import { defineStore } from "pinia";
import { ref } from "vue";

const useCountStore = defineStore("count", () => {
  const count = ref(0);

  const increase = () => {
    count.value++;
  };

  return { count, increase };
});

export { useCountStore };
