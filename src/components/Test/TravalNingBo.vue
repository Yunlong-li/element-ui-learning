<template>
  <div class="root">
    <h1 class="title">宁波旅游攻略</h1>
    <div class="travel item" >
      <div style="background-color: pink;" class="title-wrapper">
        <h2>出行</h2>
      </div>
      <div class="outer">
        <h4>打车</h4>
      </div>
    </div>
    <div class="eat item" >
      <div @click="eatShow=!eatShow" style="background-color: pink;" class="title-wrapper">
        <h2>吃喝</h2>
      </div>
      <div v-show="eatShow" v-for="(info, index) in eatInfo" :key="index" class="outer">
        <div v-if="info.imgSrcs">
          <img v-for="imgSrc in info.imgSrcs" :src="imgSrc"/>
        </div>
        <h3>{{info.name}}</h3>
        <div class="inner">
          <div v-if="info.type">类型：{{info.type}}</div>
          <div v-if="info.rate">评分：{{info.rate}}</div>
          <div v-if="info.price">价格：￥{{info.price}}</div>
          <div v-if="info.address">地址：{{info.address}}</div>
          <div v-if="info.workTime">时间：{{info.workTime}}</div>
        </div>
      </div>
    </div>
    <div class="tour item">
      <div @click="tourShow=!tourShow" style="background-color: pink;" class="title-wrapper">
        <h2>玩乐</h2>
      </div>
      <div v-show="tourShow" v-for="(info, index) in tourInfo" :key="index" class="outer">
        <div v-if="info.imgSrcs">
          <img v-for="imgSrc in info.imgSrcs" :src="imgSrc"/>
        </div>
        <h3>{{info.name}}</h3>
        <div class="inner">
          <div v-if="info.type">类型：{{info.type}}</div>
          <div v-if="info.rate">评分：{{info.rate}}</div>
          <div v-if="info.price">价格：￥{{info.price}}</div>
          <div v-if="info.address">地址：{{info.address}}</div>
          <div v-if="info.workTime">时间：{{info.workTime}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravalNingBo",
  data() {
    return {
      eatShow: true,
      tourShow: true,
      eatInfo: [
        {
          imgSrcs: [
              require('@/assets/eat/旋风蛋包饭.jpg'),
              require('@/assets/eat/鑫海茶餐厅1.jpg'),
              require('@/assets/eat/鑫海茶餐厅2.jpg'),
              require('@/assets/eat/鑫海茶餐厅3.jpg'),
          ],
          name: '鑫海茶餐厅(壹都文化广场店)',
          rate: '4.5',     // 评分
          remarks: '',  // 备注
          type: '茶餐厅',     // 种类：西餐、中餐、地方菜
          price: '41',
          recommend: '',
          address: '壹都文化广场46号1-5',
          workTime: '周一至周六 10:30-13:30 16:30-19:30',
        },
        {
          imgSrcs: [
          ],
          name: '温州瘦肉丸(学院路店)',
          rate: '4.0',     // 评分
          remarks: '',  // 备注
          type: '小吃',     // 种类：西餐、中餐、地方菜
          price: '14',
          recommend: '',
          address: '浙江省宁波市海曙区学院路928号',
          workTime: '周一至周六 10:00-22:00',
        },
        {
          imgSrcs: [
            require('@/assets/eat/娇妈妈的店1.jpeg'),
            require('@/assets/eat/娇妈妈的店2.jpeg'),
          ],
          name: '娇妈妈的店(十里街区店)',
          rate: '4.0',     // 评分
          remarks: '',  // 备注
          type: '小吃',     // 种类：西餐、中餐、地方菜
          price: '35',
          recommend: '',
          address: '浙江省宁波市鄞州区东裕路1-19号',
          workTime: '周一至周六 10:00-22:00',
        },
        {
          imgSrcs: [
            require('@/assets/eat/桦南大碗麻辣烫1.jpg'),
            require('@/assets/eat/桦南大碗麻辣烫2.jpg'),
            require('@/assets/eat/桦南大碗麻辣烫3.jpg'),
          ],
          name: '桦南大碗麻辣烫(钱湖北路店)',
          rate: '4.2',     // 评分
          remarks: '',  // 备注
          type: '麻辣烫',     // 种类：西餐、中餐、地方菜
          price: '26',
          recommend: '',
          address: '浙江省宁波市鄞州区钱湖北路880号',
          workTime: '10:00-20:00',
        },
        {
          imgSrcs: [
          ],
          name: '胖阿姨铁板炒鱿鱼',
          rate: '3.8',     // 评分
          remarks: '快餐厅',  // 备注
          type: '',     // 种类：西餐、中餐、地方菜
          price: '',
          recommend: '',
          address: '学府苑小吃街1楼',
          workTime: '',
        },
        {
          imgSrcs: [
            require('@/assets/eat/老周一品砂锅小吃店2.jpg'),
            require('@/assets/eat/老周一品砂锅小吃店1.jpg'),
            require('@/assets/eat/老周一品砂锅小吃店3.jpg'),
          ],
          name: '老周一品砂锅小吃店(学府店)',
          rate: '4.4',     // 评分
          remarks: '',  // 备注
          type: '快餐厅',     // 种类：西餐、中餐、地方菜
          price: '16',
          recommend: '',
          address: '钱湖南路666弄176号',
          workTime: '周一至周日 10:00-22:00 ',
        },
        {
          imgSrcs: [
            require('@/assets/eat/春子园韩食餐厅1.jpg'),
            require('@/assets/eat/春子园韩食餐厅2.jpg'),
            require('@/assets/eat/春子园韩食餐厅3.jpg'),
            require('@/assets/eat/春子园韩食餐厅4.jpg'),
          ],
          name: '春子园韩食餐厅(天源店)',
          rate: '4.4',     // 评分
          remarks: '',  // 备注
          type: '韩国料理',     // 种类：西餐、中餐、地方菜
          price: '73',
          recommend: '',
          address: '浙江省宁波市鄞州区天源巷51号',
          workTime: '周一至周日 10:00-14:00,16:00-21:30',
        },
        {
          imgSrcs: [
            require('@/assets/eat/如香潮味5.jpg'),
            require('@/assets/eat/如香潮味.jpg'),
            require('@/assets/eat/如香潮味1.jpg'),
            require('@/assets/eat/如香潮味2.jpg'),
            require('@/assets/eat/如香潮味3.jpg'),
            require('@/assets/eat/如香潮味4.jpg'),
          ],
          name: '如香潮味(三市路店)',
          rate: '4.6',     // 评分
          remarks: '',  // 备注
          type: '潮汕菜',     // 种类：西餐、中餐、地方菜
          price: '60',
          recommend: '',
          address: '浙江省宁波市海曙区三市路242-2号',
          workTime: '10:30-14:00,16:30-21:00',
        },
        // {
        //   imgSrcs: [
        //     require('@/assets/eat/如香潮味5.jpg'),
        //     require('@/assets/eat/如香潮味.jpg'),
        //     require('@/assets/eat/如香潮味1.jpg'),
        //     require('@/assets/eat/如香潮味2.jpg'),
        //     require('@/assets/eat/如香潮味3.jpg'),
        //     require('@/assets/eat/如香潮味4.jpg'),
        //   ],
        //   name: '如香潮味(三市路店)',
        //   rate: '4.6',     // 评分
        //   remarks: '',  // 备注
        //   type: '潮汕菜',     // 种类：西餐、中餐、地方菜
        //   price: '60',
        //   recommend: '',
        //   address: '浙江省宁波市海曙区三市路242-2号',
        //   workTime: '10:30-14:00,16:30-21:00',
        // },
        {
          imgSrcs: [
            require('@/assets/eat/闽牛记1.jpg'),
            require('@/assets/eat/闽牛记2.jpg'),
          ],
          name: '闽牛记·泉州风味',
          rate: '4.4',     // 评分
          remarks: '',  // 备注
          type: '',     // 种类：西餐、中餐、地方菜
          price: '61',
          recommend: '',
          address: '前河北路119号',
          workTime: '周一至周日 11:00-14:00 17:00-21:00',
        },
        {
          imgSrcs: [
            require('@/assets/eat/HOLA1.jpg'),
            require('@/assets/eat/HOLA2.jpg'),
            require('@/assets/eat/HOLA3.jpg'),
          ],
          name: 'HOLA(钱湖北路店)',
          rate: '4.3',     // 评分
          remarks: '',  // 备注
          type: '西餐',     // 种类：西餐、中餐、地方菜
          price: '193',
          recommend: '',
          address: '钱湖北路584号',
          workTime: '周二至周日 11:00-14:00 17:30-22:00',
        },
        {
          imgSrcs: [
            require('@/assets/eat/阿拉名灶阿拉宁波人的味道.jpg'),
            require('@/assets/eat/阿拉名灶阿拉宁波人的味道1.jpg'),
            require('@/assets/eat/阿拉名灶阿拉宁波人的味道2.jpg'),
            require('@/assets/eat/阿拉名灶阿拉宁波人的味道3.jpg'),
            require('@/assets/eat/阿拉名灶阿拉宁波人的味道4.jpg'),
          ],
          name: '阿拉名灶阿拉宁波人的味道(月湖店)',
          rate: '4.7',     // 评分
          remarks: '',  // 备注
          type: '',     // 种类：西餐、中餐、地方菜
          price: '120',
          recommend: '',
          address: '镇明路近水楼台底商324、326、328号（近月湖盛园停车场）',
          workTime: '周一至周日 11:00-13:30 17:00-20:300',
        },
      ],

      // 玩乐
      // 玩乐
      // 玩乐
      tourInfo: [
        {
          imgSrcs: [
            require('@/assets/eat/天一阁1.jpg'),
            require('@/assets/eat/天一阁2.jpeg'),
            require('@/assets/eat/天一阁3.jpeg'),
          ],
          name: '天一阁',
          rate: '4.6',     // 评分
          remarks: '',  // 备注
          type: '5A级',     // 种类：西餐、中餐、地方菜
          price: '',
          recommend: '',
          address: '宁波市海曙区天一街10号',
          workTime: '周一 开放时间：13:30-17:00 周二至周日 开放时间：08:30-17:30',
        },
        {
          imgSrcs: [
            require('@/assets/eat/东钱湖1.jpg'),
            require('@/assets/eat/东钱湖2.jpeg'),
          ],
          name: '东钱湖旅游度假区',
          rate: '',     // 评分
          remarks: '',  // 备注
          type: '4A级',     // 种类：西餐、中餐、地方菜
          price: '',
          recommend: '',
          address: '浙江省宁波市鄞州区东钱湖镇',
          workTime: '',
        },
        {
          imgSrcs: [
            require('@/assets/eat/灯塔音乐现场1.jpeg'),
            require('@/assets/eat/灯塔音乐现场2.jpeg'),
            require('@/assets/eat/灯塔音乐现场3.jpeg'),
            require('@/assets/eat/灯塔音乐现场4.jpeg'),
            require('@/assets/eat/灯塔音乐现场5.jpeg'),
          ],
          name: '灯塔音乐现场(十方店)',
          rate: '',     // 评分
          remarks: '',  // 备注
          type: '',     // 种类：西餐、中餐、地方菜
          price: '',
          recommend: '',
          address: '',
          workTime: '',
        },
        {
          imgSrcs: [
            require('@/assets/eat/云裳谷11号街区1.jpg'),
            require('@/assets/eat/云裳谷11号街区2.webp'),
          ],
          name: '云裳谷11号街区',
          rate: '',     // 评分
          remarks: '',  // 备注
          type: '',     // 种类：西餐、中餐、地方菜
          price: '',
          recommend: '',
          address: '',
          workTime: '',
        },
        {
          imgSrcs: [
            require('@/assets/eat/宁波院士中心1.jpeg'),
            require('@/assets/eat/宁波院士中心2.jpeg'),
          ],
          name: '宁波院士中心',
          rate: '4.0',     // 评分
          remarks: '',  // 备注
          type: '',     // 种类：西餐、中餐、地方菜
          price: '',
          recommend: '',
          address: '浙江省宁波市鄞州区东钱湖镇陶公路东钱湖',
          workTime: '',
        },
        {
          imgSrcs: [
            require('@/assets/eat/日湖公园1.jpg'),
            require('@/assets/eat/日湖公园2.jpeg'),
            require('@/assets/eat/日湖公园3.jpeg'),
          ],
          name: '日湖公园',
          rate: '4.5',     // 评分
          remarks: '',  // 备注
          type: '公园',     // 种类：西餐、中餐、地方菜
          price: '',
          recommend: '',
          address: '浙江省宁波市江北区湖西路388号',
          workTime: '迷雾森林开启时间：上午9-10:30/下午2:30-5:30',
        },
      ]

    }
  },
}
</script>

<style scoped>
/*.root {*/
/*  background-image: url(@/assets/NingBoCity_BCImage.webp);*/
/*  !*background-color: transparent;*!*/
/*}*/

.root{



}

h2 {
  margin-top: 25px;
  display: inline-block;

}

.title-wrapper {
  border-radius: 20px;
}

.title {
  background-image: url(@/assets/NingBoCity_BCImage.jpeg);
  background-repeat: repeat;
  /*background-position: top;*/
  /*background-attachment: scroll;*/

  font-weight: 900;

  display: block;
  height: 100px;
  line-height: 100px;
  width: 100%;
  padding: 20px;
}


.item {
  width: 100%;
  background-color:rgba(135, 147, 154, .2);
  margin: 20px auto;
  border-radius: 20px;
}

.outer {
  /*float: left;*/
  background-color:rgba(41, 219, 111, .2);
  width: 50%;
  /*height: 300px;*/
  /*display: inline-block;*/
  /*height: 200px;*/
  margin: 10px auto;
  border-radius: 20px;
}

.outer img {
  margin: 5px 5px 0px;
  /*width: 80%;*/
  height: 120px;
  border-radius: 20px;
}

.outer>h3 {
  margin: 5px auto 10px;
}

.outer>.inner{
  text-align: left;
  padding: 0 20px 10px;
}




</style>