<template>

  <section class="dropdowns">
    <div class="page-header">
      <h3 class="page-title">
        Dropdown
      </h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);">UI Elements</a></li>
          <li class="breadcrumb-item active" aria-current="page">Dropdowns</li>
        </ol>
      </nav>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Gradient dropdown</h4>
            <p class="card-description">
              Use <code>&lt;b-dropdown&gt;</code> tag to use basi dropdown
            </p>
            <div class="template-demo">
              <b-dropdown id="ddown1" text="Dropdown" variant="gradient-primary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown2" text="Dropdown" variant="gradient-secondary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown3" text="Dropdown" variant="gradient-danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown4" text="Dropdown" variant="warning">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown5" text="Dropdown" variant="gradient-success">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown6" text="Dropdown" variant="gradient-info">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Basic Dropdown</h4>
            <p class="card-description">
              Use <code>variant="color"</code> for basic styled dropdown
            </p>
            <div class="template-demo">
              <b-dropdown id="ddown7" text="Dropdown" variant="primary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown8" text="Dropdown" variant="secondary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown9" text="Dropdown" variant="danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown10" text="Dropdown" variant="warning">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown11" text="Dropdown" variant="success">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown12" text="Dropdown" variant="info">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Dropdown outline</h4>
            <p class="card-description">
              Use <code>variant="outline-*"</code> for outline styled dropdown
            </p>
            <div class="template-demo">
              <b-dropdown id="ddown7" text="Dropdown" variant="outline-primary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown8" text="Dropdown" variant="outline-secondary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown9" text="Dropdown" variant="outline-danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown10" text="Dropdown" variant="outline-warning">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown11" text="Dropdown" variant="outline-success">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown12" text="Dropdown" variant="outline-info">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Split button dropdowns</h4>
            <p class="card-description">
              Use <code>split</code> prop for split dropdown
            </p>
            <div class="template-demo">
              <b-dropdown id="ddown13" split text="Dropdown" variant="primary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown14" split text="Dropdown" variant="danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown15" split text="Dropdown" variant="success">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown16" split text="Dropdown" variant="secondary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown17" split text="Dropdown" variant="info">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown18" split text="Dropdown" variant="warning">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Icon dropdowns</h4>
            <p class="card-description">
              Replace button with icon buttons
            </p>
            <div class="template-demo">
              <b-dropdown id="ddown19" variant="gradient-warning">
                <template slot="button-content">
                  <i class="mdi mdi-earth"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown20" variant="gradient-danger">
                <template slot="button-content">
                  <i class="mdi mdi-trophy-outline"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown21" variant="gradient-secondary">
                <template slot="button-content">
                  <i class="mdi mdi-email"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown22" variant="gradient-success">
                <template slot="button-content">
                  <i class="mdi mdi-heart"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown23" variant="gradient-warning">
                <template slot="button-content">
                  <i class="mdi mdi-logout"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown24" variant="gradient-primary">
                <template slot="button-content">
                  <i class="mdi mdi-security"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown25" variant="gradient-dark">
                <template slot="button-content">
                  <i class="mdi mdi-account"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown26" variant="gradient-info">
                <template slot="button-content">
                  <i class="mdi mdi-bell"></i>
                </template>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dropup variation</h4>
            <p class="card-description">
              Use <code>dropup</code> prop to use a dropup
            </p>
            <div class="template-demo">
              <b-dropdown id="ddown27" split dropup text="Drop-Up" variant="primary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown28" split dropup text="Drop-Up" variant="danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown29" split dropup text="Drop-Up" variant="success">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown30" split dropup text="Drop-Up" variant="secondary">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown31" split dropup text="Drop-Up" variant="info">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown32" split dropup text="Drop-Up" variant="warning">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dropdown sizes</h4>
            <p class="card-description">
              Use <code>size="*"</code> for different dropdown sizing
            </p>
            <div class="template-demo mt-5">
              <b-dropdown id="ddown33" size="lg" text="Dropdown" variant="danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown34" text="Dropdown" variant="danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
              <b-dropdown id="ddown35" size="sm" text="Dropdown" variant="danger">
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Something else here...</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'dropdowns'
}
</script>