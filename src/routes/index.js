import { createRouter, createWebHistory } from "vue-router";
import TrangChu from '@/pages/TrangChu';
import CuaHang from '@/pages/CuaHang';
import SanPham from '@/pages/SanPham';
import ChiTietSanPham from '@/pages/ChiTietSanPham';
import DanhSachSanPham from '@/pages/DanhSachSanPham';
import GioHang from "@/pages/GioHang";
import LienHe from "@/pages/LienHe";

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
        name: 'ChiTietSanPham',
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
    },
    {
        path: '/thanh-toan',
        name: 'ThanhToan',
        component: () => import('@/pages/ThanhToan'),
        meta:  {
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
        path: '/dat-hang-thanh-cong',
        name: 'DatHangThanhCong',
        component: () => import('@/pages/DatHangThanhCong')
    },
    {
        path: '/theo-doi-don-hang',
        name: 'TheoDoiDonHang',
        component: () => import('@/pages/TheoDoiDonHang'),
        meta:  {
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
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
