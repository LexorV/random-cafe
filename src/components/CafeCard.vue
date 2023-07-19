<template>
    <li class="box-card">
        <el-card class="card" :body-style="{ padding: '0px' }">
            <h3>{{ cafe.name }}</h3>
            <p>Адрес: {{ cafe.address }} </p>
            <p>Орентир: {{ cafe.landmark }} </p>
            <p>Кухня: {{ cafe.cuisine}}</p>
            <p> Дистанция от метро: {{ cafe.distance }} метров</p>
            <p> От метро идти {{ cafe.time }} минут </p> 
            <p>Бизнес-ланч: {{cafe.business_lunch?'Есть':'Нет'}}</p>
            <p>Средняя цена: {{ cafe.price }} рублей.</p>
            <img class="card-picture" :src="cafe.photo" alt="Фото кафе" />
            
        </el-card>

    </li>
</template>

<script>

export default {
    props: {
        cafe: {
            type: Object,
            default:() => ({})
        },
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.box-card {
    width: 40%;

}
.card {
    padding: 10px;
    height: 800px;
    box-sizing: border-box;
}
.card-picture {
    object-fit: cover;
  width: 100%;
  height: 100%; 
    
}

</style>