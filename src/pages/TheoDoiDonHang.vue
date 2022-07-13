<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <LBreadcrumb :crumbs="breadcrumbs" />
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-6">
                <form @submit.prevent="handleSearch">
                    <div class="form-row">
                        <label for="">Theo dõi theo mã đơn hàng</label>
                        <input v-model="formSearch.ma_don_hang" type="text" placeholder="Ví dụ: AKSHD0S" class="txt-input">
                    </div>
                    <div class="form-row">
                        <label for="">Theo dõi theo email</label>
                        <input v-model="formSearch.email" type="email" placeholder="Ví dụ: minhluc@gmail.com" class="txt-input">
                    </div>
                    <button class="btn__tracking">Theo dõi</button>
                </form>
                <table class="table mt-4" v-show="donhangs.length">
                    <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái đơn hàng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="donhang in donhangs" :key="donhang.id">
                            <td>{{ donhang.ma_don_hang }}</td>
                            <td>23/01/2022</td>
                            <td>
                                <span class="status status__danger">{{ donhang.trang_thai }}</span>
                            </td>
                            <td>{{ VNDFormat(donhang.tong_tien) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { VNDFormat } from "@/utils/helpers";
import { FETCH_DON_HANG_THEO_MA } from "@/store/action.type";

export default {
    name: "TheoDoiDonHang",
    setup() {
        const store = useStore();
        const formSearch = reactive({
            ma_don_hang: '',
            email: ''
        });
        const showTracking = ref(false);
        const route = useRoute();
        const breadcrumbs = computed(() => route.meta.breadcrumbs);
        const donhangs = computed(() => store.state.orders.donhangs)

        const handleSearch = () => {
            let ma_tim_kiem = formSearch.email;
            if(formSearch.ma_don_hang.length)
                ma_tim_kiem = formSearch.ma_don_hang;

            store.dispatch(FETCH_DON_HANG_THEO_MA, ma_tim_kiem)
        }

        return {
            breadcrumbs,
            showTracking,
            formSearch,
            donhangs,
            handleSearch,
            VNDFormat
        }
    }
};
</script>

<style scoped>
.form-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
}
.btn__tracking {
    display: block;
    padding: 8px 20px;
    border: 1px solid transparent;
    background-color: #d9534f;
    color: #fff;
    transition: background-color .3s linear;
}
.btn__tracking:hover {
    background-color: #d7726f;
}
.txt-input {
    transition: border-color .3s linear;
}
.txt-input:focus {
    border-color: #1b6d85;
}
.status {
    border-radius: 50px;
    padding: 5px 10px;
    font-size: 13px;
}
.status__primary {
    background-color: #46b8da;
    color: #fff;
}
.status__danger {
    background-color: #d9534f;
    color: #fff;
}
</style>