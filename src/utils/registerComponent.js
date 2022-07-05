import { VuePicker, VuePickerOption } from '@invisiburu/vue-picker'
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import StarRating from "vue-star-rating";

export const registerComponent = (app) => {
    app.component('VPicker', VuePicker);
    app.component('VPickerOption', VuePickerOption);
    app.component('LBreadcrumb', Breadcrumb);
    app.component('StarRating', StarRating);
}

export default registerComponent;