<template>
    <div>
        <h2 class="text-center">Users Management</h2>
        <form action="" v-on:submit="onSubmit">
            <div class="form-group">
                <label for="" class="font-weight-bold">Name</label>
                <input type="text" class="form-control" placeholder="Enter Name" v-model="user.username">
            </div>
            <div class="form-group">
                <label for="" class="font-weight-bold">Email</label>
                <input type="text" class="form-control" placeholder="Enter Email" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="" class="font-weight-bold">Phone</label>
                <input type="text" class="form-control" placeholder="Enter Phone" v-model="user.phone">
            </div>
            <button class="btn btn-success">Save</button>
            <button class="btn btn-secondary" type="reset">Clear</button>
        </form>
        <ul class="list-group mt-3">
            <li class="list-group-item" v-for="(user) in users" :key="user.id">
                <input type="checkbox" class="mr-3" v-model="user.checked">
                <div v-bind:class="{ 'text-success':user.checked }">
                     <div><strong>Username: </strong> {{ user.username }}</div>
                    <div><strong>Email: </strong> {{ user.email }}</div>
                    <div><strong>Phone: </strong> {{ user.phone }}</div>
                </div>
                <button class="btn btn-danger" v-on:click="deleteUser(user)">Delete</button>
                <button class="btn btn-info" v-on:click="edit(user)">Edit</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        name:'user',

        data() {
            return {
                users: [],
                user: {}
            }
        },

        methods: {
            onSubmit: function(e){
                e.preventDefault();
                if(!this.user.id){
                    this.users.unshift(this.user);
                }else{
                    let index = this.users.findIndex(u => u.id == this.user.id);
                    this.users[index] = Object.assign({}, this.user);
                }
                this.user = {};
            },

            deleteUser: function(user){
                let index = this.users.findIndex(u => u.id == user.id);
                if(index != -1) this.users.splice(index, 1);
            },
            edit: function(user){
                this.user = Object.assign({}, user);
            }
        },
        created: function() {
            this.$http.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.users = res.body.map(u => {
                    u.checked = false;
                    return u;
                });
            })
            .catch(err => console.log(err.message));
        },
    }
</script>

<style>

</style>
