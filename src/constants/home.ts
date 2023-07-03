export interface Category {
    imgUrl: string;
    name: string;
}

export const categories: Category[] = [
    {
        imgUrl: "https://reebelo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmartphone.b315f954.png&w=1920&q=75",
        name: "Phone",
    },
    {
        imgUrl: "https://reebelo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.10755f3b.png&w=1920&q=75",
        name: "Laptops",
    },
    {
        imgUrl: "https://reebelo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftablet.83c69c54.png&w=1920&q=75",
        name: "Tablets",
    },
    {
        imgUrl: "https://reebelo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmartwatches.3b7cb401.png&w=3840&q=75",
        name: "Smartwatches",
    },
];

export const POPULAR_PHONES: string = "Popular Phones";

export const IS_LOADING: string = "isLoding";
