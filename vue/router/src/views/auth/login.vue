<script setup lang="ts">
import v from "@/plugins/validate";
import utils from "@/utils";
const { yup, useForm, useFields } = v; // 获取验证需要的工具函数
// 验证规则
const schema = {
  account: yup
    .string()
    .required()
    .matches(/^\d{11}|.+@.+$/, "请输入邮箱或者手机号")
    .label("账号"), // 账号验证规则
  password: yup.string().required().min(3, "密码不能少于三位").label("密码"), // 密码验证规则
};
// 验证工具函数处理
const { handleSubmit, errors, values } = useForm({
  initialValues: {
    account: "2458347453@qq.com", // 账号
    password: "123456", // 密码
  },
  validationSchema: schema,
});
// 调用验证函数
useFields(Object.keys(schema));
// 提交表单
const onSubmit = handleSubmit(async (values: any) => {
  utils.user.login(values); // 调用登录函数
});
</script>

<template>
    <transition appear class="animate__animated" enter-active-class="animate__bounceIn">
  <form class="login" @submit="onSubmit">
    <div class="login_container w-[720px]">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="vip">会员登录</h2>
          <div class="mt-8">
            <FormLInput
              v-model="values.account"
              placeholder="请输入手机号或邮箱"
            ></FormLInput>
            <FormLError :error="errors.account"></FormLError>

            <FormLInput
              v-model="values.password"
              placeholder="请输入用户密码"
              type="password"
            ></FormLInput>
            <FormLError :error="errors.password"></FormLError>
          </div>
          <FormLButton class="w-full"></FormLButton>

          <div class="flex items-center justify-center mt-3">
            <icon-wechat
              theme="outline"
              size="20"
              fill="#eee"
              class="bg-green-600 text-white rounded-full p-1 cursor-pointer"
            />
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
          <FormLLink></FormLLink>
          <FormLLink></FormLLink>
          <FormLLink></FormLLink>
        </div>
      </div>
      <div class="hidden relative md:block">
        <img
          src="/images/login.jpg"
          alt="登录背景图"
          class="w-full object-cover absolute h-full"
        />
      </div>
    </div>
  </form>
</transition>
</template>

<style lang="less" scoped>
.login {
  @apply bg-slate-300 h-screen flex justify-center items-center p-5 md:p-0;
  .login_container {
    @apply bg-white md:grid grid-cols-2 rounded-md shadow-md;
    .vip {
      @apply text-center text-gray-700 text-lg;
    }
  }
}
</style>
