<template>
  <div class="login-container">
    <!-- <el-form
      class="login-form"
      autocomplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
    >
      <h3 class="title">云矿后台管理系统</h3>
      <el-form-item prop="address">
        <el-input
          name="address"
          type="text"
          v-model="loginForm.address"
          placeholder="账号"
          prefix-icon="el-icon-user"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          name="password"
          :type="pwdType"
          @keyup.enter.native="connect"
          v-model="loginForm.password"
          placeholder="密码"
          prefix-icon="el-icon-lock"
        ></el-input>
        <span class="show-pwd el-icon-view" @click="showPwd"></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" :loading="loading" @click="connect" v-if="sqflag && !sqz"
          >登录</el-button
        >
     
        <el-button type="primary" style="width: 100%" :loading="loading" @click="connect" v-if="!sqflag && !sqz"
          >登录</el-button
        >
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script>
import Utils from "../utils";
import api from "../model/index";
export default {
  data() {
    return {
      usdtcontract: "0x8F5715B7e6F00282a49e309D0fFf27DcdE4c6ca0",
      module: "transaction",
      action: "gettxreceiptstatus",
      apikey: "9S842QW19S3WXAZ58T6DZN4JHB98K9R1X8",
      sqz: false,
      sqflag: true,
      // show: false,
      contract: {},
      loginForm: {
        address: "",
        password: ""
      },
      loginRules: {
        // 验证用户名是否合法
        address: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur"
          }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur"
          }
        ]
      },
      loading: false,
      pwdType: "password",
      newAccounts: ""
    };
  },
  // methods: {
  //   showPwd() {
  //     if (this.pwdType === "password") {
  //       this.pwdType = "";
  //     } else {
  //       this.pwdType = "password";
  //     }
  //   },
  //   login() {
  //     console.log('login')
  //     // if (this.newAccounts) {
  //     //   console.log(this.newAccounts, 'login')
  //     //   window.sessionStorage.setItem('address', this.newAccounts)
  //     //   this.$router.push('/home')
  //     //   this.$message.success('正在登录...')
  //     // } else {
  //     //   console.log(this.newAccounts)
  //     //   this.$message.error('请先连接metamask')
  //     // }
  //     // const { data: res } = await this.$http.post('pizza/login?' + 'address=' + this.loginForm.address + '&password=' + this.loginForm.password)
  //     // const { data: res } = await this.$http.post('pizza/login', { params: this.loginForm })
  //     // const { data: res } = await this.$http.post(
  //     //   "pizza/login",
  //     //   qs.stringify(this.loginForm)
  //     // );
  //     // if (res.status !== 0) return this.$message.error("请输入正确用户名");
  //     // window.sessionStorage.setItem("address", res.data);
  //     this.$router.push("/home");
  //     this.$message.success("登录成功!");
  //   },
  //   connect() {
  //     console.log('connect')
  //     console.log(this.loginForm)
  //     this.$refs.loginForm.validate(async vaild => {
  //       if (vaild) {
  //         const { data: res } = await api.login(this.loginForm);
  //         const token = res.token;
  //         window.sessionStorage.setItem("token", token);
  //         if (res.state == 0) {
  //           this.$router.push("/home1");
  //           this.$message.success("登录成功");
  //         } else {
  //           this.$message.error("登录失败");
  //         }
  //       } else {
  //         this.$message.error("请输入账号密码");
  //       }
  //     });
  //     //       this.$router.push("/home");
  //     // this.$message.success("登录成功!");
  //     // try {
  //     //   // 连接metamask
  //     //   const newAccounts = await window.ethereum.request({
  //     //     method: "eth_requestAccounts",
  //     //   });
  //     //   console.log(newAccounts, 111)
  //     //   this.newAccounts = newAccounts[0];
  //     //   if (this.newAccounts) {
  //     //     this.contract.permissions(this.newAccounts, (err, res) => {
  //     //       if (!err) {
  //     //         console.log(res, "getOperators");
  //     //         if (res === true) {
  //     //           window.sessionStorage.setItem("address", this.newAccounts);
  //     //           this.sqflag = false;
  //     //           this.sqz = false;
  //     //           this.$message.success("验证授权通过,请登录");
  //     //         } else {
  //     //           this.$message.error("验证授权未通过");
  //     //         }
  //     //       } else {
  //     //         console.log(err);
  //     //       }
  //     //     });
  //     //     console.log(this.newAccounts, 1);
  //     //   } else {
  //     //     // console.log(this.newAccounts)
  //     //     this.$message.error("连接metamask失败");
  //     //   }
  //     // } catch (error) {
  //     //   // console.error(error)
  //     // }
  //   },
  //   isMetaMaskInstalled() {
  //     const { ethereum } = window;
  //     return Boolean(ethereum && ethereum.isMetaMask);
  //   }
  // },
  // created() {
  //   this.isMetaMaskInstalled();
  //   Utils.instance().then(res => {
  //     console.log(res, "11111");
  //     this.contract = res;
  //   });
  //   if (window.sessionStorage.getItem.address) {
  //     this.sqflag = false;
  //     this.sqz = false;
  //   }
  // }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 90%;

    input {
      margin-left: 20px;
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      // color: $light_gray;
      height: 47px;
      // &:-webkit-autofill {
      //   -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
      //   -webkit-text-fill-color: #fff !important;
      // }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  // background-color: $bg;
  background-image: url(../assets/login/login.jpg);
  background-repeat: repeat-x;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    .el-input__icon {
      margin-top: 5px;
      line-height: 47px !important;
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 16px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .fontcontainer {
    color: #889aa4;
    // padding-left: 10px;
  }
  input {
    margin-left: 20px;
  }
  .tishi {
    color: #6efeff;
    font-size: 12px;
  }

  .el-button + .el-button {
    margin-left: 0px;
  }
  .login-container input.el-input input {
    color: black !important;
  }
}
</style>
