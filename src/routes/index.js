import { createRouter, createWebHistory } from "vue-router";
import TrangChu from '@/pages/TrangChu';
import CuaHang from '@/pages/CuaHang';
import SanPham from '@/pages/SanPham';
import ChiTietSanPham from '@/pages/ChiTietSanPham';
import DanhSachSanPham from '@/pages/DanhSachSanPham';
import GioHang from "@/pages/GioHang";
import LienHe from "@/pages/LienHe";
import jwtService from "@/services/jwt.service";
import store from "@/store";

const routes = [
    {
        path: '/',
        name: 'TrangChu',
        component: TrangChu,
        meta: {
            layout: 'Default',
            title: 'Trang chủ'
        }
    },
    {
        path: '/san-pham',
        name: 'SanPham',
        component: SanPham,
        meta: {
            layout: 'Default',
            title: 'Sản phẩm'
        }
    },
    {
        path: '/san-pham/:slug',
        name: 'ChiTietSanPham',
        component: ChiTietSanPham,
        meta: {
            layout: 'Default',
            title: 'Chi tiết sản phẩm',
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
            title: 'Tất cả sản phẩm',
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
            layout: 'Default',
            title: 'Cửa hàng'
        }
    },
    {
        path: '/gio-hang',
        name: 'GioHang',
        component: GioHang,
        meta: {
            layout: 'Default',
            title: 'Giỏ hàng',
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
    },
    {
        path: '/thanh-toan',
        name: 'ThanhToan',
        component: () => import('@/pages/ThanhToan'),
        meta:  {
            title: 'Thanh toán',
            breadcrumbs: [
                {
                    name: 'Trang chủ',
                    url: '/'
                },
                {
                    name: 'Thanh toán',
                    url: ''
                }
            ]
        }
    },
    {
        path: '/dang-ky',
        name: 'DangKy',
        component: () => import('@/pages/DangKy'),
        meta: {
            title: 'Đăng ký tài khoản',
            breadcrumbs: [
                {
                    name: 'Trang chủ',
                    url: '/'
                },
                {
                    name: 'Đăng ký tài khoản',
                    url: ''
                }
            ]
        }
    },
    {
        path: '/dang-nhap',
        name: 'DangNhap',
        component: () => import('@/pages/DangNhap'),
        meta:  {
            title: 'Đăng nhập tài khoản',
            breadcrumbs: [
                {
                    name: 'Trang chủ',
                    url: '/'
                },
                {
                    name: 'Đăng nhập',
                    url: ''
                }
            ]
        }
    },
    {
        path: '/thong-tin-ca-nhan',
        name: 'ThongTinCaNhan',
        component: () => import('@/pages/ThongTinCaNhan'),
        meta: {
            title: 'Thông tin cá nhân',
            requiredAuth: true,
            breadcrumbs: [
                {
                    name: 'Trang chủ',
                    url: '/'
                },
                {
                    name: 'Thông tin cá nhân',
                    url: ''
                }
            ]
        }
    },
    {
        path: '/dat-hang/thanh-cong',
        name: 'DatHangThanhCong',
        component: () => import('@/pages/DatHangThanhCong'),
        meta: {
            title: 'Đặt hàng thành công'
        }
    },
    {
        path: '/theo-doi-don-hang',
        name: 'TheoDoiDonHang',
        component: () => import('@/pages/TheoDoiDonHang'),
        meta:  {
            title: 'Theo dõi đơn hàng',
            breadcrumbs: [
                {
                    name: 'Trang chủ',
                    url: '/'
                },
                {
                    name: 'Theo dõi đơn hàng',
                    url: ''
                }
            ]
        }
    },
    {
        path: '/lien-he',
        name: 'LienHe',
        component: LienHe,
        meta:  {
            title: 'Liên hệ',
            breadcrumbs: [
                {
                    name: 'Trang chủ',
                    url: '/'
                },
                {
                    name: 'Liên hệ',
                    url: ''
                }
            ]
        }
    },
    {
        path: '/thanh-toan/thanh-cong',
        name: 'CallbackThanhToan',
        component: () => import('@/pages/CallbackThanhToan')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '';
    if(to.meta.requiredAuth && !jwtService.getToken()) {
        return next('/dang-nhap')
    }
    const token = jwtService.getToken();
    if(token)
        store.dispatch('attempt', token)
    next();
})

export default router;
