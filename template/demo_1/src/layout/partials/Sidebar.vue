<template>
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="javascript:void(0);" class="nav-link">
            <div class="nav-profile-image">
              <img src="@/assets/images/faces/face1.jpg" alt="profile">
              <span class="login-status online"></span>
            </div>
            <div class="nav-profile-text d-flex flex-column">
              <span class="font-weight-bold mb-2">David Grey. H</span>
              <span class="text-secondary text-small">Project Manager</span>
            </div>
            <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li class="nav-item" v-on:click="collapseAll">
          <router-link class="nav-link" to="/">
            <span class="menu-title">Dashboard</span>
            <i class="mdi mdi-home menu-icon"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'ui-basic'">
            <span class="menu-title">Basic UI Elements</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-crosshairs-gps menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/buttons/">Buttons</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/dropdowns/">Dropdowns</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/basic-ui/typography/">Typography</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'charts-dropdown'">
            <span class="menu-title">Charts</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-chart-bar menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="charts-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/charts/chartjs/">Chart js</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'table-dropdown'">
            <span class="menu-title">Tables</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-table-large menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="table-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/tables/basic-tables/">Basic Table</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'user-page-dropdown'">
            <span class="menu-title">User Pages</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-lock menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="user-page-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/auth-pages/login/">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/auth-pages/register/">Register</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'error-page-dropdown'">
            <span class="menu-title">Error pages</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-security menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="error-page-dropdown">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/error-pages/error-404/">404</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" target="_blank" to="/error-pages/error-500/">500</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'icons-dropdown'">
            <span class="menu-title">Icons</span>
            <i class="menu-arrow"></i>
            <i class="mdi mdi-contacts menu-icon"></i>
          </span>
          <b-collapse accordion="sidebar-accordion" id="icons-dropdown">
            <ul class="nav flex-column sub-menu">
               <li class="nav-item">
                <router-link class="nav-link" to="/icons/mdi-icons/">MDI</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="http://www.bootstrapdash.com/demo/purple-free-vue/documentation/documentation.html">
            <span class="menu-title">Documentation</span>
            <i class="menu-icon mdi mdi-file-document-outline"></i>
          </a>
        </li>
        <li class="nav-item sidebar-actions">
          <span class="nav-link">
            <div class="border-bottom">
              <h6 class="font-weight-normal mb-3">Projects</h6>
            </div>
            <button class="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
            <div class="mt-4">
              <div class="border-bottom">
                <p class="text-secondary">Categories</p>
              </div>
              <ul class="gradient-bullet-list mt-4">
                <li>Free</li>
                <li>Pro</li>
              </ul>
            </div>
          </span>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'sidebar',
 data () {
    return {
      collapses: [ 
     { show: false },
     { show: false },
     { show: false }
    ]
    }
  },
  methods: {
    collapseAll() {
      var exp_elm = document.getElementsByClassName("show");
      if (exp_elm.length > 0) {
        var elm_id = exp_elm[0].id;
        this.$root.$emit("bv::toggle::collapse", elm_id);
      }
    }
  },
  mounted () {
    const body = document.querySelector('body')
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open')
        }
      })
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open')
        }
      })
    })
  },
  watch:{
    $route () {
       document.querySelector('#sidebar').classList.toggle('active');
    }
  } 
}
</script>