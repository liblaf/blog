<script setup lang="ts">
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <BlogHero>
    <template #heroInfo="heroInfo">
      <BingHeroBackground />
      <HitokotoBlogHero v-bind="heroInfo" />
    </template>
  </BlogHero>
</template>
