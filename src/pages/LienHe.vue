<template>
    <div class="container">
        <Breadcrumb :crumbs="breadcrumbs" />
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="contact-info-container sm-margin-top-27px xs-margin-bottom-60px xs-margin-top-60px">
                    <h4 class="box-title">Our Contact</h4>
                    <p class="frst-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <ul class="addr-info">
                        <li>
                            <div class="if-item">
                                <b class="tie">Địa chỉ:</b>
                                <p class="dsc">126 Nguyễn Thiện Thành, Phường 5, TP Trà Vinh</p>
                            </div>
                        </li>
                        <li>
                            <div class="if-item">
                                <b class="tie">Số điện thoại:</b>
                                <p class="dsc">0399942301</p>
                            </div>
                        </li>
                        <li>
                            <div class="if-item">
                                <b class="tie">Email:</b>
                                <p class="dsc">minhluc15.ok@gmail.com</p>
                            </div>
                        </li>
                        <li>
                            <div class="if-item">
                                <b class="tie">Thời gian mở cửa:</b>
                                <p class="dsc">T2 - CN: 7:30AM - 9:00PM</p>
                            </div>
                        </li>
                    </ul>
                    <div class="biolife-social inline">
                        <ul class="socials">
                            <li><a href="#" title="twitter" class="socail-btn"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#" title="facebook" class="socail-btn"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#" title="pinterest" class="socail-btn"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#" title="youtube" class="socail-btn"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                            <li><a href="#" title="instagram" class="socail-btn"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="contact-form-container sm-margin-top-112px">
                    <form @submit.prevent="onSubmit" name="frm-contact">
                        <p class="form-row">
                            <input type="text" v-model="formSubmit.name" placeholder="Nhập vào họ tên" class="txt-input">
                        </p>
                        <p class="form-row">
                            <input type="email" v-model="formSubmit.email" placeholder="Nhập vào địa chỉ email" class="txt-input">
                        </p>
                        <p class="form-row">
                            <input type="tel" v-model="formSubmit.phoneNumber"  placeholder="Nhập vào số điện thoại" class="txt-input">
                        </p>
                        <p class="form-row">
                            <textarea v-model="formSubmit.message" id="mes-1" cols="30" rows="9" placeholder="Nội dung liên hệ"></textarea>
                        </p>
                        <p class="form-row">
                            <button class="btn btn-submit" type="submit">Gửi tin nhắn</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export default {
    name: "LienHe",
    components: { Breadcrumb },
    setup() {
        const route = useRoute();
        const formSubmit = reactive({
            name: "",
            email: "",
            phoneNumber: "",
            message: ""
        })
        onMounted(() => {
            document.title = "Liên hệ"
        });

        const breadcrumbs = ref(route.meta.breadcrumbs);
        const onSubmit = () => {
            console.log(formSubmit)
        }

        return {
            breadcrumbs,
            formSubmit,
            onSubmit
        }
    }
}
</script>

<style scoped>
input, textarea {
    transition: border-color .3s linear;
}
input:focus, textarea:focus {
    border-color: #1b6d85;
}
</style>