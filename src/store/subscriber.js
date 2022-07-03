import store from '@/store'
import { SET_TOKEN } from "@/store/action.type";
import apis from "@/services/api.service";
import jwtService from "@/services/jwt.service";

store.subscribe(mutations => {
    switch (mutations.type) {
        case SET_TOKEN:
            if(mutations.payload) {
                jwtService.saveToken(mutations.payload);
                apis.defaults.headers.common['Authorization'] = `Bearer ${mutations.payload}`;
            } else {
                apis.defaults.headers.common['Authorization'] = null;
            }
    }
})
