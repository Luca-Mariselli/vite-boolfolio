<script>

import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      base_url: 'http://127.0.0.1:8000/',
      projects: ''
    }
  },

  mounted() {


    axios
      .get(`${this.base_url}api/projects`)
      .then(response => {
        console.log(response);
        this.projects = response.data.projects

      })


  }


}


</script>


<template>
 
<h1 class="my-container my-3 ps-3">My projects:</h1>

 <div class="my-container">
  <div class="my-projects-box">
    <div class="my-projects-item" v-for="project in projects.data">
      <a href="#" class="my-courses-item_link">
        <div class="my-courses-item_bg"></div>

        <div class="my-courses-item_title">
          {{project.title}}
        </div>

        <div class="my-courses-item_date-box mb-3">
          <span class="my-courses-item_type">
            {{ project.type.name }}
          </span>
        </div>
        
        <div v-if="project.img.startsWith('http')" style="min-height: 200px;"><img  :src="project.img" alt="" style="z-index: 99; position: relative;" width="200"></div>
        <div v-else style="min-height: 200px;"><img :src="base_url + 'storage/' + project.img" alt="" style="z-index: 99; position: relative;" width="200" ></div>

        <div class="my-courses-item_date-box mt-3">
          Date:
          <span class="my-courses-item_date">
            {{ project.date }}
          </span>
        </div>
      </a>
    </div>

  </div>
</div>

</template>

<style scoped>

img{
    width: 100%;
}
.my-container {
  width: 1142px;
  margin: 0 auto;
}


.my-projects-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  padding: 50px 0;
}
.my-projects-item {
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);

  margin: 0 15px 30px;

  overflow: hidden;

  border-radius: 28px;
}
.my-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: #121212;

  overflow: hidden;

  position: relative;
}
.my-courses-item_link:hover,
.my-courses-item_link:hover .my-courses-item_date  {
  text-decoration: none;
  color: #FFF;
}

.my-courses-item_link:hover,
.my-courses-item_link:hover .my-courses-item_type  {
  text-decoration: none;
  color: #FFF;
}
.my-courses-item_link:hover .my-courses-item_bg  {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.my-courses-item_title {
  height: 60px;
  margin: 0 0 5px;

  overflow: hidden;

  font-weight: bold;
  font-size: 30px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.my-courses-item_date-box {
  font-size: 18px;
  color: #FFF;

  z-index: 2;
  position: relative;
}
.my-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}

.my-courses-item_type {
  font-weight: bold;
  color: #cd3e94;

  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}
.my-courses-item_bg {
  height: 128px;
  width: 128px;
  background-color: #f9b234;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}
.my-projects-item:nth-child(2n) .my-courses-item_bg {
  background-color: #3ecd5e;
}
.my-projects-item:nth-child(3n) .my-courses-item_bg {
  background-color: #e44002;
}
.my-projects-item:nth-child(4n) .my-courses-item_bg {
  background-color: #952aff;
}
.my-projects-item:nth-child(5n) .my-courses-item_bg {
  background-color: #cd3e94;
}
.my-projects-item:nth-child(6n) .my-courses-item_bg {
  background-color: #4c49ea;
}



@media only screen and (max-width: 979px) {
  .my-projects-item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .my-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .my-container {
    width: 96%;
  }

}
@media only screen and (max-width: 639px) {
  .my-projects-item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .my-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .my-courses-item_link {
    padding: 22px 40px;
  }
  .my-courses-item_date-box {
    font-size: 16px;
  }
}
</style>
