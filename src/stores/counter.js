import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
    localStorage.setItem("count", count.value.toString());
  }
  function decrement() {
    count.value--;
    localStorage.setItem("count", count.value.toString());
  }
  function getCount() {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      count.value = parseInt(storedCount, 10);
    }
    return count;
  }

  return { count, doubleCount, increment, decrement, getCount };
});
