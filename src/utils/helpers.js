import endpoint from '@/apis/endpoint';

export function chunkArray(inputArray, chunkSize = 1) {
    return  inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize)

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item);
        return resultArray;
    }, [])
}

export function VNDFormat(money) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(money);
}

export function formatSanPham(sanphams) {
    return sanphams.map(sanpham => {
        return {
            ...sanpham,
            slug: "/" + endpoint.SAN_PHAM + "/" + sanpham.slug,
            gia_sp: VNDFormat(sanpham.gia_sp),
            gia_khuyen_mai: VNDFormat(sanpham.gia_khuyen_mai),
        }
    })
}