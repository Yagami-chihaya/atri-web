<template>
  <div class="topNavbar">
    <div class="left">
      <div class="img">
        <img src="\src\assets\img\logo.png">
      </div>
      <button class="button" data-text="Awesome">
        <span class="actual-text">&nbsp;ATRI&nbsp;My&nbsp;Dear&nbsp;Moments&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;ATRI&nbsp;My&nbsp;Dear&nbsp;Moments&nbsp;</span>
      </button>
    </div>
    <div class="right">
      <ul class="routeList">
        <router-link to="/">
          <Button_one btn_title="Home"></Button_one>
        </router-link>
        <router-link to="/recommand">
          <Button_one btn_title="开溜！！"></Button_one>
        </router-link>
        <router-link to="/texture">
          <Button_one btn_title="文章"></Button_one>
        </router-link>
        <router-link to="/about">
          <Button_one btn_title="关于"></Button_one>
        </router-link>
      </ul>
      <div class="user">


        <ul class="example-2">
          <li class="icon-content">
            <a href="https://space.bilibili.com/1580182" aria-label="bilibili" data-social="bilibili">
              <div class="filled"></div>
              <svg t="1724987561645" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1478" width="200" height="200">
                <path
                  d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                  p-id="1479" fill="currentColor"></path>
              </svg>
            </a>
            <div class="tooltip">Bilibili</div>
          </li>
          <li class="icon-content">
            <a href="https://github.com/Yagami-chihaya" aria-label="GitHub" data-social="github">
              <div class="filled"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github"
                viewBox="0 0 16 16" xml:space="preserve">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  fill="currentColor"></path>
              </svg>
            </a>
            <div class="tooltip">GitHub</div>
          </li>

        </ul>

        <!-- <div class="avatar">
          <img src="" alt="">
        </div> -->
        <!-- <div class="info">
          <p>username</p>
        </div> -->
      </div>
    </div>

  </div>
</template>

<script>
import Button_one from './button_one.vue'
export default {
  el: '',
  data() {
    return {

    }
  },
  components: {
    Button_one

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
.topNavbar {
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.247);
  width: 100vw;
  height: 5rem;
  transition: .3s;
  z-index: 2;

  .left {
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: .5rem;

    .img {
      width: 3.5rem;
      height: 3.5rem;
      overflow: hidden;
      position: relative;
      border-radius: 5px;

      img {
        position: absolute;
        top: 0;
        left: -.2rem;
        width: 8rem;
      }
    }


    .button {

      margin: 0;
      margin-left: .7rem;
      height: auto;
      background: transparent;
      padding: 0;
      border: none;
      cursor: pointer;
    }


    .button {
      --border-right: 3px;
      --text-stroke-color: rgba(255, 255, 255, 0.6);
      --animation-color: #37d7ff;
      --fs-size: 2em;
      letter-spacing: 3px;
      text-decoration: none;
      font-size: var(--fs-size);
      font-family: "Arial";
      position: relative;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 1px var(--text-stroke-color);
    }

    .hover-text {
      position: absolute;
      box-sizing: border-box;
      content: attr(data-text);
      color: var(--animation-color);
      width: 0%;
      inset: 0;
      border-right: var(--border-right) solid var(--animation-color);
      overflow: hidden;
      transition: 0.5s;
      -webkit-text-stroke: 1px var(--animation-color);
    }

    .button:hover .hover-text {
      width: 100%;
      filter: drop-shadow(0 0 23px var(--animation-color))
    }

  }

  .right {
    height: 100%;
    display: flex;

    .routeList {
      display: flex;
      color: white;
      font-size: 1rem;
      align-items: center;
      width: 25rem;
      justify-content: space-around;

    }

    .routeList::after {
      margin-left: 1rem;
      content: '|';
      color: white;
      font-size: 1.5rem;
      font-weight: 200;
    }

    .user {
      margin: 0 2rem;
      display: flex;
      align-items: center;
      color: white;

      .avatar {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        background: black;
        display: flex;
        justify-self: center;
        align-items: center;
        margin-right: 1rem;

        img {

          width: 3.5rem;
        }
      }

      /* From Uiverse.io by wilsondesouza */
      ul {
        list-style: none;
      }

      .example-2 {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .example-2 .icon-content {
        margin: 0 10px;
        position: relative;
      }

      .example-2 .icon-content .tooltip {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        padding: 6px 10px;
        border-radius: 5px;
        opacity: 0;
        visibility: hidden;
        font-size: 14px;
        transition: all 0.3s ease;
      }

      .example-2 .icon-content:hover .tooltip {
        opacity: 1;
        visibility: visible;
        top: 50px;
      }

      .example-2 .icon-content a {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        color: #4d4d4d;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
      }

      .example-2 .icon-content a:hover {
        box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
      }

      .example-2 .icon-content a svg {
        position: relative;
        z-index: 1;
        width: 2rem;
        height: 2rem;
      }

      .example-2 .icon-content a:hover {
        color: white;
      }

      .example-2 .icon-content a .filled {
        position: absolute;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: #000;
        transition: all 0.3s ease-in-out;
      }

      .example-2 .icon-content a:hover .filled {
        height: 100%;
      }

      .example-2 .icon-content a[data-social="bilibili"] .filled,
      .example-2 .icon-content a[data-social="bilibili"]~.tooltip {
        background-color: rgb(241, 108, 141);
      }

      .example-2 .icon-content a[data-social="github"] .filled,
      .example-2 .icon-content a[data-social="github"]~.tooltip {
        background-color: #24262a;
      }


    }
  }
}

.topNavbar:hover {

  background: rgba(0, 0, 0, 0.6);

}</style>
