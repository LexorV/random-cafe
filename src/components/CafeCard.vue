<template>
    <el-card class="card">
        <h3>{{ cafe.name }}</h3>
        <p>Адрес: {{ cafe.address }} </p>
        <p>Орентир: {{ cafe.landmark }} </p>
        <p>Кухня: {{ cafe.cuisine }}</p>
        <p> Дистанция от метро: {{ cafe.distance }} метров</p>
        <p> От метро идти {{ cafe.time }} минут </p>
        <p>Бизнес-ланч: {{ cafe.business_lunch ? 'Есть' : 'Нет' }}</p>
        <p>Средняя цена: {{ cafe.price }} рублей.</p>
        <el-button @click="copyBufers" size="large" type="primary">Поделится кафе</el-button>
        <img v-if="cafe.photo" class="card-picture" :src="cafe.photo" alt="Фото кафе" />
    </el-card>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
    props: {
        cafe: {
            type: Object,
            default: () => ({})
        },
    },
    methods: {
        ElMessage,
        async copyBufers() {
            const url = process.env.VUE_APP_FRONTEND_URL || 'http://localhost:8081'
            await navigator.clipboard.writeText(`${url}/cafe/${this.cafe.id}`)
                .then(() => {
                    ElMessage(({
                        message: 'Ссылка скопирована в буфер обмена',
                        type: 'success',
                    }))
                })
                .catch(err => {
                    ElMessage({
                        message: 'Ошибка копирования',
                        type: 'error',
                    })

                    console.error('Ошибка копирования', err);
                });
        }
    },

}
</script>

<style scoped>
.card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 800px;
    width: 40%;
    box-sizing: border-box;
}

.card-picture {
    margin-top: 10px;
    image-rendering: crisp-edges; 
    width: 100%;
    height: 400px;
    object-fit: contain;
    overflow: hidden;
}
</style>