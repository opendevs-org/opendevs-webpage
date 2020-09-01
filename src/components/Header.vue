<template>
  <header class="header">
    <nav class="nav">
      <g-link to="/" exact>
        <h1>{{ $static.metadata.siteName }}</h1>
      </g-link>

      <em class="button" :style="{ color: !activeColor }">
        <label class="switch"
          ><input type="checkbox" id="togBtn" @click="toggleDarkMode"/>
          <div class="slider round"></div
        ></label>
      </em>

      <div>
        <h2>
          <g-link :to="infoLink">
            {{ isInfoPage ? "close" : "info" }}
          </g-link>
        </h2>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },

  data: () => ({
    isDark: false
  }),

  computed: {
    isInfoPage() {
      return this.page === 'info' && true;
    },
    infoLink() {
      return this.isInfoPage ? '/' : '/info';
    },
    activeColor() {
      return this.isDark ? '#fff' : '#1c1c1c';
    }
  },

  mounted() {
    this.isDark = this.$darkmode.isActivated();
  },

  methods: {
    toggleDarkMode() {
      this.$darkmode.toggle();
      this.isDark = this.$darkmode.isActivated();
    }
  }
};
</script>

<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>

<style>
.header h1 {
  margin-bottom: 0;
}

.nav {
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.nav img {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .header {
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }

  .nav {
    padding: 2rem;
    width: 30vw;
    height: 100%;
    border-right: 1px solid #ebebeb;
    border-bottom: none;
    flex-direction: column;
    align-items: flex-start;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #fff;
}

input:checked + .slider:before {
  background-color: #000;
}

input:checked + .slider:before {
  -webkit-transform: translateX(35px);
  -ms-transform: translateX(35px);
  transform: translateX(35px);
}

.slider:after {
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: #fff;
  top: 50%;
  left: 50%;
}
</style>
