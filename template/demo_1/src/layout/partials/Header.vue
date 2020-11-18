<template>
  <b-navbar id="template-header" class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row" toggleable="lg">
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <router-link class="navbar-brand brand-logo" to="/">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </router-link>
      <router-link class="navbar-brand brand-logo-mini" to="/">
        <img src="@/assets/images/logo-mini.svg" alt="logo" />
      </router-link>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
      <button class="navbar-toggler navbar-toggler align-self-center d-lg-block" type="button" @click="toggleSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
      <div class="search-field d-none d-md-block">
        <form action="#">
          <div class="d-flex align-items-center input-group">
            <div class="input-group-prepend bg-transparent">
              <i class="input-group-text border-0 mdi mdi-magnify"></i>
            </div>
            <input type="text" class="form-control bg-transparent border-0" placeholder="Search projects">
          </div>
        </form>
      </div>
      <b-navbar-nav class="navbar-nav-right ml-auto">
        <b-nav-item-dropdown right class="nav-profile">
          <template slot="button-content">
            <span class="nav-link dropdown-toggle" id="profileDropdown" href="javascript:void(0);" data-toggle="dropdown" aria-expanded="false">
              <div class="nav-profile-img">
                <img src="@/assets/images/faces/face1.jpg" alt="image">
                <span class="availability-status online"></span>
              </div>
              <div class="nav-profile-text">
                <p class="mb-1 text-black">David Greymaax</p>
              </div>
            </span>
          </template>
          <b-dropdown-item class="preview-item">
            <i class="mdi mdi-cached mr-2 text-success"></i> Activity Log
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <i class="mdi mdi-logout mr-2 text-primary"></i> Signout
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="nav-link count-indicator dropdown-toggle">
              <i class="mdi mdi-email-outline"></i>
              <span class="count-symbol bg-warning"></span>
            </div>
          </template>
          <h6 class="p-3 mb-0">Messages</h6>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="@/assets/images/faces/face1.jpg" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
              <p class="text-gray mb-0">15 Minutes ago</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="@/assets/images/faces/face2.jpg" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
              <p class="text-gray mb-0">18 Minutes ago</p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <img src="@/assets/images/faces/face3.jpg" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
              <p class="text-gray mb-0">1 Minutes ago</p>
            </div>
          </b-dropdown-item>
          <h6 class="p-3 mb-0 text-center border-top">4 new messages</h6>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right class="preview-list">
          <template slot="button-content">
            <div class="nav-link count-indicator dropdown-toggle">
              <i class="mdi mdi-bell-outline"></i>
              <span class="count-symbol bg-danger"></span>
            </div>
          </template>
          <h6 class="p-3 mb-0">Notifications</h6>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-success">
                <i class="mdi mdi-calendar"></i>
              </div>
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject font-weight-normal mb-1">Event today</h6>
              <p class="text-gray ellipsis mb-0">
                Just a reminder that you have an event today
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-warning">
                <i class="mdi mdi-settings"></i>
              </div>
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject font-weight-normal mb-1">Settings</h6>
              <p class="text-gray ellipsis mb-0">
                Update dashboard
              </p>
            </div>
          </b-dropdown-item>
          <b-dropdown-item class="preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-info">
                <i class="mdi mdi-link-variant"></i>
              </div>
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject font-weight-normal mb-1">Launch Admin</h6>
              <p class="text-gray ellipsis mb-0">
                New admin wow!
              </p>
            </div>
          </b-dropdown-item>
          <h6 class="p-3 mb-0 text-center border-top">4 new messages</h6>
        </b-nav-item-dropdown>
        <b-nav-item class="nav-logout d-none d-lg-block">
          <i class="mdi mdi-power"></i>
        </b-nav-item>
      </b-navbar-nav>
      <button class="navbar-toggler navbar-toggler-right align-self-center" type="button" @click="toggleMobileSidebar()">
        <span class="mdi mdi-menu"></span>
      </button>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    toggleSidebar: () => {
      document.querySelector('body').classList.toggle('sidebar-icon-only');
    },
    toggleMobileSidebar: () => {
      document.querySelector('#sidebar').classList.toggle('active');
    }
  }
}
</script>

<style scoped>
</style>