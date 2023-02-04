<template>
  <div id="login">
    <transition enter-active-class="animate__animated animate__backInDown">
      <!--      登录页面-->
      <div class="module_one" v-show="isShow">
        <el-row class="h-full">
          <el-col :lg="16" :md="12" :sm="24">
            <div class="login_left">
              <h3 class="tips">欢迎光临</h3>
              <p class="title">爱尚物购物平台</p>
            </div>
          </el-col>
          <el-col :lg="8" :md="12" :sm="24">
            <div class="login_right ">
              <div class="login_form w-10/12">
                <el-form  :model="data.loginForm" :rules="data.loginRules" ref="loginFormRef">
                  <h3 class="login_title">爱尚物登录</h3>
                  <div class="tip ">
                    <span class="line"></span>
                    <span class="tip_title">账号密码登录</span>
                    <span class="line"></span>
                  </div>
                  <el-form-item prop="username">
                    <el-input clearable @focus="changePlace('username')" @blur="removeClass($event)" required name="username" type="text" v-model="data.loginForm.username">
                    </el-input>

                    <label :class="focus['username'] ? 'focus' : ''" for="username">爱尚物账号</label>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input show-password @focus="changePlace('password')" @blur="removeClass" required name="password" type="password" v-model="data.loginForm.password"/>
                    <label :class="focus['password'] ? 'focus' : ''" for="password">爱尚物密码</label>
                  </el-form-item>
                  <div class="to_register text-left m-1">
                    <el-link type="primary" class="mr-2" @click="trigger">前往注册</el-link>
                  </div>

                  <div class="login">
                    <el-button type="primary" @click="login">登录</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>
    <!--    注册页面-->
    <transition enter-active-class="animate__animated animate__backInDown">
      <div class="module_two" v-show="!isShow">
        <el-row class="h-full">
          <el-col :lg="8" :md="12" :sm="24">
            <div class="register_left">
              <div class="register_form w-10/12">
                <el-form :model="data.registerForm" :rules="data.registerRules" ref="registerFormRef">
                  <h3 class="register_title">爱尚物注册</h3>
                  <div class="tip ">
                    <span class="line"></span>
                    <span class="tip_title">账号密码注册</span>
                    <span class="line"></span>
                  </div>
                  <el-form-item prop="username">
                    <el-input clearable  @focus="changePlace('username')" required name="username" type="text" @blur="removeClass" v-model="data.registerForm.username"/>
                    <label :class="focus['username'] ? 'focus' : ''" for="username">爱尚物账号</label>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input  show-password @focus="changePlace('password')" required name="password" type="password" @blur="removeClass" v-model="data.registerForm.password"/>
                    <label :class="focus['password'] ? 'focus' : ''" for="password">爱尚物密码</label>
                  </el-form-item>
                  <el-form-item prop="phone">
                    <el-input clearable  @focus="changePlace('phone')" required name="phone" type="text" @blur="removeClass" v-model="data.registerForm.phone"/>
                    <label :class="focus['phone'] ? 'focus' : ''" for="phone">手机号码</label>
                  </el-form-item>
                  <div class="to_login text-right m-1">
                    <el-link type="primary" class="mr-2" @click="trigger">前往登录</el-link>
                  </div>

                  <div class="register">
                    <el-button type="primary" @click="register">注册</el-button>
                  </div>
                </el-form>
              </div>
            </div>
          </el-col>
          <el-col :lg="16" :md="12" :sm="24">
            <div class="register_right">
              <h3 class="tips">欢迎注册</h3>
              <p class="title">爱尚物购物平台</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>
  </div>
</template>

<script setup>
// 引入element组件
import {ElMessage} from 'element-plus'
import {reactive, ref, toRaw} from "vue";
// 引入网络请求
import {apiLogin,apiRegister} from '../api/login'
// 引入路由
import {useRouter} from 'vue-router'
// 校验手机号码
const checkPhone = (rule, value, callback) => {
  // 手机号的正则
  const re = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
  if (re.test(value)) {
    callback()
  } else {
    callback(new Error("请输入正确的手机号码"))
  }
}
// input框动画判断条件
const focus = reactive({
  username:false,
  password:false,
  phone:false
})
// 登录表单的ref属性
const loginFormRef = ref(null)
// 注册表单的ref属性
const registerFormRef = ref(null)
// 控制登录和注册两个表单的显示与隐藏
const isShow = ref(true)
// 需要用到的数据
const data = reactive({
  // 登录表单
  loginForm: {
    username: "",
    password: ""
  },
  // 登录表单校验
  loginRules: {
    username: [
      {required: true, message: '请输入用户名', trigger: 'blur'},
      {min: 3, max: 16, message: '用户名长度应在3-16个字符中', trigger: 'blur'},
    ],
    password: [
      {required: true, message: '请输入密码', trigger: 'blur'},
      {min: 6, message: '密码长度最少6个字符', trigger: 'blur'}
    ]
  },
  // 注册表单
  registerForm: {
    username: "",
    password: "",
    phone: "",
    reversion:1,
    roleLevel:'普通用户',
    roleIntro:'普通用户'
  },
  // 注册表单校验
  registerRules: {
    username: [
      {required: true, message: '请输入用户名', trigger: 'blur'},
      {min: 3, max: 16, message: '用户名长度应在3-16个字符中', trigger: 'blur'},
    ],
    password: [
      {required: true, message: '请输入密码', trigger: 'blur'},
      {min: 6, message: '密码长度最少6个字符', trigger: 'blur'}
    ],
    phone: [
      {required: true, message: '请输入手机号', trigger: 'blur'},
      {validator: checkPhone, trigger: "blur"}
    ]
  }
})
// 获取路由
const router = useRouter()
// 登录请求
const login = async () => {
  loginFormRef.value.validate(async(valid)=>{
    if(!valid) return ElMessage.error("请输入正确的信息!")
    // 发起登录请求
    const res = await apiLogin(data.loginForm)
    // 判断响应码
    if(res.data.code === 200){
      // 存储用户信息
      localStorage.setItem("userInfo",JSON.stringify(res.data.data))
      ElMessage.success("登录成功,将为您跳转到首页...")
      setTimeout(async ()=>{
        // 跳转到首页
        await router.push("/index")
      },1000)
    }else{
      ElMessage.error(res.data.msg)
    }
  })

}
// 注册请求
const register = async () =>{
  registerFormRef.value.validate(async(valid)=>{
    if(!valid) return ElMessage.error("请输入正确的信息")
    // 发送请求
    const res = await apiRegister(data.registerForm)
    // 请求成功
    if(res.data.code === 200){
      ElMessage.success("注册成功,前往登录...")
      // 定时器
      setTimeout(()=>{
        isShow.value = !isShow.value
      },1000)
    }else{
      ElMessage.error(res.data.msg)
    }
  })
}
// input框聚焦的时候,触发动画
const changePlace = (keyword) =>{
  focus[keyword] = true
}
// input框失焦的时候,移除动画
const removeClass = (e) =>{
  if(e.target.value){
  }else{
    focus[e.target.name] = false
  }
}
// 两个组件的显示与隐藏
const trigger = () => {
  // 将判断动画的条件初始化
  for(let key in focus){
    focus[key] = false
  }
  // 清空两个表单的数据
  loginFormRef.value.resetFields()
  registerFormRef.value.resetFields()
  // 取反
  isShow.value = !isShow.value
}
</script>

<style scoped lang="less">
@gray: rgba(155, 155, 155);
@amber: rgba(245, 158, 11);
#login {
  width: 100vw;
  height: 100vh;

  .tip {
  @apply flex items-center justify-center;

    .tip_title {
    @apply p-4 text-gray-400;
    }

    .line {
    @apply w-80px h-1px bg-gray-600 w-80px h-1px bg-gray-200;
    }
  }

  .tips {
  @apply text-4xl text-gray-100 font-bold tracking-1 .5 px m-2;
  }

  .title {
  @apply text-2xl text-gray-300 tracking-1 .5 px;
  }

  .module_one {
  @apply w-full h-full;

    .login_left {

    @apply bg-blue-900 items-center justify-center flex flex-col h-full w-full text-white;
    }

    .login_right {
      background: url("../assets/img/bg_login.jpg") no-repeat;
      background-size: 100% 100%;
    @apply justify-center items-center h-full flex justify-center items-center;

      .login_form {
        background-color: rgba(0, 0, 0, .5);
      @apply p-10 rounded-2xl;
      }

      .login_title {
      @apply text-center text-3xl font-bold m-2 text-gray-300 tracking-2px;
      }


      .login {
      @apply text-center;

        .el-button {
        @apply w-1/2 bg-amber-500 border-amber-500 tracking-2px;
          transition: all .3s;

          &:hover {
          @apply w-1/3 bg-amber-300 border-amber-300 text-black font-bold;
          }

        }
      }
    }
  }

  .module_two {
  @apply w-full h-full;

    .register_left {
      background: url("../assets/img/bg_login.jpg") no-repeat;
      background-size: 100% 100%;
    @apply justify-center items-center h-full flex justify-center items-center;

      .register_form {
        background-color: rgba(0, 0, 0, .5);
      @apply p-10 rounded-2xl;

        .register_title {
        @apply text-center text-3xl font-bold m-2 text-gray-300 tracking-2px;
        }

        .register {
        @apply text-center;

          .el-button {
          @apply w-1/2 bg-amber-500 border-amber-500 tracking-2px;
            transition: all .3s;

            &:hover {
            @apply w-1/3 bg-amber-300 border-amber-300 text-black font-bold;
            }

          }
        }
      }
    }

    .register_right {
    @apply bg-blue-900 w-full h-full flex justify-center items-center flex-col;

    }
  }
}

.el-form-item {
  margin: 40px 0;
}

label{
  color: @gray;
  position: absolute;
  top: 0;
  left: 10px;
  transition: all .3s;
  pointer-events: none;
}
.focus{
  position: absolute;
  top: -25px;
  left: 0;
  color: @amber;
  font-weight: 700;
}
.el-input {
  position: relative;
  outline: none;
  background: none;
  border-bottom: 2px solid @amber;
  border-radius: 10px;
  box-shadow: none;
  width: 100%;
  color: white;

  :deep(.el-input__wrapper) {
    background: none;
    box-shadow: none;
    color: white;
  }

  :deep(.el-input__inner) {
    color: white;
    input {
      &:focus, &:valid {
        width: 80%;
      }
  }


  &:hover {
    background: none;
    box-shadow: none;
  }




  }

}

</style>
