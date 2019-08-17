<template>
  <b-navbar toggleable="lg" :variant="getLayoutNavbarBg()" class="layout-navbar align-items-lg-center container-p-x" style="z-index: 9">

    <b-navbar-toggle target="app-layout-navbar"></b-navbar-toggle>
    <b-navbar-nav class="align-items-lg-center">
      <!-- Search -->
      <label class="nav-item navbar-text navbar-search-box p-0 active">
          <span class="navbar-search-input pl-2">
            <h4 style="color: #2e323a;padding-top: 10px">&nbsp;  {{$route.meta.title}}</h4>
          </span>
      </label>
    </b-navbar-nav>
    <b-navbar-nav class="align-items-lg-center ml-auto">

      <!-- Divider -->
      <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1"></div>

      <b-nav-item-dropdown :right="!isRTL" class="demo-navbar-user">
        <template slot="button-content">
            <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
              <!--<img :src="$aws.url+ head" alt class="d-block ui-w-30 rounded-circle" width="30" height="30">-->
              <span class="px-1 mr-lg-2 ml-2 ml-lg-0" style="font-size: 14px;">{{ nickName }}</span>
            </span>
        </template>
        <b-dd-item @click="showUser()"><i class="ion ion-md-settings text-info"></i> &nbsp;修改密码</b-dd-item>
        <b-dd-item @click="logout()"><i class="ion ion-ios-log-out text-danger"></i> &nbsp; 退出登录</b-dd-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-navbar>
</template>

<script>
export default {
  name: 'app-layout-navbar',

  props: {
    sidenavToggle: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return{
      nickName:'',
      form:{
        username:'',
        password:'',
        newPassword:'',
      }
    }
  },

  methods: {
    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    },

    getLayoutNavbarBg () {
      return this.layoutNavbarBg
    },
    showUser(){

    },
    logout(){

    }
  }
}
</script>
