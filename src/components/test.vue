<template>
    <div class="text-center" id="test">
        <h1 class="my-2">{{ content }}</h1>
        <input type="text" class="form-control" placeholder="Enter something..." v-model="something"><br><br>
        <h4 v-text="something"></h4>
        <div v-text="user.name" v-if="showName"></div>
        <div v-for="(book, index) in bookList" :key="index">
            {{ book.bookName }}
        </div>
        <button class="btn btn-primary mt-3" v-on:click="greet()">Greeting</button>
        <br><br><br>
        <input type="text" class="form-control" v-on:keyup.enter="pressKey" placeholder="Press any key..."><br><br>
        <dir>Info: {{ info }}</dir>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            content: `This is a test for my first app, please respect for my absolutely beginning level, thanks`,
            user: {
                name: 'Duc Tai',
                age: 20,
            },
            bookList: [
                {bookName: 'con meo va con cho', author: 'tai', created_at: Date.now()},
                {bookName: 'mat na da nguoi', author: 'tien', created_at: Date.now() + 1000},
                {bookName: 'ong gia va bien ca', author: 'huan', created_at: Date.now() + 2000},
                {bookName: 'ong lao danh ca va con ca vang', author: 'phat', created_at: Date.now() + 3000},
                {bookName: 'nha gia kim', author: 'trang', created_at: Date.now() + 4000},
            ],
            showName: true,
            something: 'something',
        }
    },
    methods: {
        greet: function(){
            alert('Hello');
        },
        pressKey: function(e){
            console.log(e.target.value);
        }
    },
    computed: {
        info: function(){
            return `Name: ${this.user.name}, age: ${this.user.age}`;
        }
    }
}
</script>

<style>
    #test{
        margin-bottom: 300px;
    }
</style>
