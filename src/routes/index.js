import { createRouter, createWebHistory } from 'vue-router';
import TrangChu from '@/pages/TrangChu';
import CuaHang from '@/pages/CuaHang';
import SanPham from '@/pages/SanPham';
import ChiTietSanPham from '@/pages/ChiTietSanPham';
import DanhSachSanPham from '@/pages/DanhSachSanPham';
import GioHang from "@/pages/GioHang";

const routes = [
    {
        path: '/',
        name: 'TrangChu',
        component: TrangChu,
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/san-pham',
        name: 'SanPham',
        component: SanPham,
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/san-pham/:slug',
        component: ChiTietSanPham,
        meta: {
            layout: 'Default',
            breadcrumbs: [
                {
                    name: "Trang chủ",
                    url: "/"
                },
                {
                    name: "Sản phẩm",
                    url: "/san-pham/tat-ca"
                }
            ]
        }
    },
    {
        path: '/san-pham/tat-ca',
        component: DanhSachSanPham,
        meta: {
            layout: 'Default',
            breadcrumbs: [
                {
                    name: "Trang chủ",
                    url: "/"
                },
                {
                    name: "Sản phẩm",
                    url: "/san-pham/tat-ca"
                }
            ]
        }
    },
    {
        path: '/cua-hang',
        name: 'CuaHang',
        component: CuaHang,
        meta: {
            layout: 'Default'
        }
    },
    {
        path: '/gio-hang',
        name: 'GioHang',
        component: GioHang,
        meta: {
            layout: 'Default',
            breadcrumbs: [
                {
                    name: 'Trang chủ',
                    url: '/'
                },
                {
                    name: 'Giỏ hàng',
                    url: ''
                }
            ]
        }
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;