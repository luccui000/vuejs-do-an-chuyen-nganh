<template>
    <div class="container">
        <tab-left-wrapper>
            <tab-left-item title="Thông tin khách hàng">
                <p>Xin chào <b>{{ hotenkh }}</b></p>
                <p>Số điện thoại: <b>{{ khachhang && khachhang.so_dien_thoai }}</b></p>
                <p>Tên đăng nhập: <b>{{ khachhang && khachhang.ten_dang_nhap }}</b></p>
                <p>Email: <b>{{ khachhang && khachhang.email }}</b></p>
            </tab-left-item>
            <tab-left-item title="Theo dõi đơn hàng">
                <table class="table mt-4" v-show="dondadats.length">
                    <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Ngày đặt</th>
                        <th>Trạng thái đơn hàng</th>
                        <th>Tổng tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="donhang in dondadats" :key="donhang.id">
                        <td>{{ donhang.ma_don_hang }}</td>
                        <td>23/01/2022</td>
                        <td>
                            <span v-if="donhang.trang_thai === 'Đã xác nhận'" class="status status__success">{{ donhang.trang_thai }}</span>
                            <span v-else class="status status__danger">{{ donhang.trang_thai }}</span>
                        </td>
                        <td>{{ VNDFormat(donhang.tong_tien) }}</td>
                    </tr>
                    </tbody>
                </table>
            </tab-left-item>
            <tab-left-item title="Cập nhật tài khoản">
                Cập nhật tài khoản
            </tab-left-item> 
        </tab-left-wrapper>
        <button @click="handleLogout" class="btn-logout">Đăng xuất</button>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TabLeftWrapper from "@/components/TabLeft/TabLeftWrapper";
import TabLeftItem from "@/components/TabLeft/TabLeftItem";
import { SET_AUTH_LOGOUT, THEO_DOI_DON_HANG } from "@/store/action.type";
import jwtService from "@/services/jwt.service";
import { VNDFormat } from "@/utils/helpers";

export default {
    name: "ThongTinCaNhan",
    components: {
        TabLeftWrapper,
        TabLeftItem,
    },
    setup() {
        const store = useStore();
        const token = jwtService.getToken();

        store.dispatch("attempt", token)
        const khachhang = computed(() => store.state.auth.khachhang);
        const hotenkh = computed(() => store.getters.hotenkh);
        const dondadats = computed(() => store.state.orders.dondadats)
        console.log(dondadats)

        if(khachhang.value) {
            store.dispatch(THEO_DOI_DON_HANG, khachhang.value.id)
        }
        const handleLogout = () => {
            store.commit(SET_AUTH_LOGOUT)
        }

        return {
            khachhang,
            hotenkh,
            handleLogout,
            dondadats,
            VNDFormat

        }
    }
}
</script>

<style scoped>
.btn-logout {
    display: flex;
    margin-left: 5px;
    color: #333;
    cursor: pointer;
    border-radius: 0;
    border: none;
    background-color: transparent;
    margin-bottom: 10px;
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
.status__success {
    color: #fff;
    background-color: #28a745;
}
</style>
