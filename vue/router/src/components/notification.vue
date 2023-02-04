<script setup lang="ts">
import { nextTick } from "process";
import { ref } from "vue";

const activeName = ref("site");
const show = ref(false);

nextTick(() => {
  document.documentElement.addEventListener("click", () => {
    show.value = false;
  });
});
</script>

<template>
  <div class="notification">
 
    <icon-message-one    @click.stop="show = !show" theme="outline" size="24" fill="#333"/>

    <transition
      class="animate__animated"
      enter-active-class="animate__bounceIn"
      leave-active-class="animate__bounceOut"
    >
      <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
        <el-tab-pane label="系统通知" name="site">
          <a href="">
            简化复工复产审批和条件。各地区要压实属地管理责任，继续依法依规、科学有序做好防控工作，并按照分区分级原则，以县域为单位采取差异化防控和复工复产措施。低风险地区不得采取审批、备案等方式延缓开工。
          </a>
          <a href="">
            对于中、高风险两类地区，各省（自治区、直辖市）政府要在满足疫情防控要求的基础上，按照最少、必需原则分别制定公布全省统一的复工复产条件，对确有必要的审批和证明事项实行清单管理，逐项列明办理程序、材料和时限，清单之外一律不得实施审批或索要证明，防止出现层层加码、互为前置审批、循环证明等现象。
          </a>
          <a href="">
            严禁向企业收取复工复产保证金等。对重点行业企业复工复产可设置审批绿色通道，加快提高复工复产率。
          </a>
        </el-tab-pane>
        <el-tab-pane label="站内消息" name="message">
          <a href="">
            优化复工复产办理流程。相关地区要积极推行复工复产一站式办理、上门办理、自助办理等服务，全面实行企业复工复产申请“一口受理、相关部门并行办理、限时办结，
          </a>
          <a href="">
            并行办理”，在本行政区域内明确一家牵头部门，统一受理申请、一次性收取材料，
          </a>
          <a href="">
            原则上要在2个工作日内作出答复。有条件的地方可将复工复产审批制改为备案制或告知承诺制，企业按规定做好防疫、达到复工复产条件，提交备案信息或承诺书后，即可组织复工复产，相关部门通过开展事后现场核查等，确保企业全面落实各项防疫措施
          </a>
        </el-tab-pane>
      </el-tabs>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.notification {
  @apply relative;
  .lists {
    @apply absolute px-3 py-2 bg-white p-5 border rounded-md shadow-md right-0 z-20;
    z-index: 999999999999;
    width: 300px;
    a {
      @apply truncate overflow-hidden block border-b pb-2 my-2 hover:text-fuchsia-700;
    }
  }
}
</style>
