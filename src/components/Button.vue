<script setup>
import { defineProps } from "vue";

const styles = {
  primary: "border border-brand-500 bg-brand-500 text-white hover:bg-brand-100 hover:text-brand-500 hover:border-brand-200 disabled:bg-brand-200 disabled:hover:text-white",
  secondary: "border border-brand-100 bg-brand-100 text-brand-500 border border-brand-200 hover:bg-brand-500 hover:text-white",
  text: "text-brand-500 hover:text-brand-300"
}
defineProps({
  type: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  clickFunction: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <button :class="'h-fit rounded-lg p-3 ' + styles[type]" @click="clickFunction"> {{ label }}</button>
</template>