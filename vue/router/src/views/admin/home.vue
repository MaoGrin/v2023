<template>
  <div>
    <div class="grid md:grid-cols-4 gap-3">
      <el-card
        shadow="hover"
        :body-style="{ padding: '20px' }"
        v-for="(card, index) of cards"
        :key="index"
        class="cursor-pointer"
      >
        <template #header>
          <div class="flex justify-between items-center">
            {{ card.title }}
            <el-tag type="danger" size="small">月</el-tag>
          </div>
        </template>

        <section class="flex mt-3 justify-between items-center">
          <span class="text-3xl">${{ card.price }}</span>
          <i :class="[card.icon, card.iconColor]" class="text-5xl"></i>
        </section>

        <section class="text-sm mt-6 flex justify-between">
          {{ card.totalTitle }}
          <span>{{ card.total }}人</span>
        </section>
      </el-card>
    </div>

    <div class="bg-white p-3 mt-5 grid md:grid-cols-2 gap-3">
      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>用户统计</div>
        </template>
        <div id="echart1" class="h-72 w-full"></div>
      </el-card>

      <el-card shadow="hover" :body-style="{ padding: '20px' }">
        <template #header>
          <div>销售额</div>
        </template>
        <div id="echart2" class="h-72 w-full"></div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { echart1, echart2 } from "./echart";
import * as echarts from "echarts";
import * as icons from "@icon-park/vue-next";
nextTick(() => {
  echarts.init(document.getElementById("echart1") as HTMLDivElement).setOption(echart1)
  echarts.init(document.getElementById("echart2") as HTMLDivElement).setOption(echart1)
});
interface ICard {
  title: string;
  price: number;
  icon: string;
  iconColor: string;
  totalTitle: string;
  total: number;
}
const cards = ref<ICard[]>([
  {
    title: "用户数",
    price: 123456,
    icon: "fas fa-user-astronaut",
    iconColor: "text-violet-500",
    totalTitle: "用户数",
    total: 123,
  },
  {
    title: "销售额",
    price: 1245,
    icon: "fab fa-salesforce",
    iconColor: "text-pink-500",
    totalTitle: "销售额",
    total: 1234563,
  },
  {
    title: "订单数",
    price: 1208,
    icon: "fab fa-orcid",
    iconColor: "text-orange-500",
    totalTitle: "订单数",
    total: 1231564,
  },
  {
    title: "总人数",
    price: 4564,
    icon: "fas fa-person",
    iconColor: "text-yellow-500",
    totalTitle: "总人数",
    total: 5464545,
  },
]);
</script>

<style></style>
