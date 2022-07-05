import { defineRule } from "vee-validate";
import { email, required, min, numeric } from "@vee-validate/rules";

defineRule('email', (value) => {
    if(email(value) && required(value))
        return true;
    return "Vui lòng nhập vào email hợp lệ"
})

defineRule('ho', (value) => {
    if(required(value) && min(value, { length: 1}))
        return true;
    return 'Họ tên phải ít nhất 1 ký tự'
})
defineRule('teb', (value) => {
    if(required(value) && min(value, { length: 1}))
        return true;
    return 'Tên phải ít nhất 1 ký tự'
})
defineRule('phi_van_chuyen', (value) => {
    if(!numeric(value)) {
        return 'Phí vận chuyển phải là 1 giá trị'
    }
    if(required(value))
        return true;
    return 'Tên phải ít nhất 1 ký tự'
})