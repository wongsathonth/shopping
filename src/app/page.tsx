"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import ItemCart from "./item";

export default function Home() {
  const [total, setTotal] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleIncremental = (itemPrice: number) => {
    setTotal(total + 1);
    setTotalPrice((prevPrice) => prevPrice + itemPrice);
  };

  const handleDecremental = (itemPrice: number) => {
    if (total > 0) {
      setTotal(total - 1);
      setTotalPrice((prevPrice) => prevPrice - itemPrice);
    }
  };

  const myItems = [
    { itemname: "iPhone 15", price: 32900, image: "https://www.ais.th/content/dam/ais/consumer/store/devices/apple/iphone/iphone-15-series/iphone-15/product-detail/th/green/iphone-15-pdp-image-position-1a-green-color.jpg" },
    { itemname: "iPhone 15 Pro", price: 41900, image: "https://www.ais.th/content/dam/ais/consumer/store/devices/apple/iphone/iphone-15-series/iphone-15-pro/product-detail/th/black-titanium/iphone-15-pro-pdp-image-position-1a-black-titanium-color.jpg" },
    { itemname: "IPad Pro", price: 39990, image: "https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad-pro/13-in-m4-chip-cellular-7th-gen/wifi/product-detail/th/silver/ipad-pro-13-in-m4-chip-wifi-7th-gen-image-pdp-position-1b-color-silver-th.jpg" },
    { itemname: "IPad Air", price: 21900, image: "https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad-air/5th-gen/wifi/product-detail/th/purple/ipad-air-wifi-5th-gen-image-pdp-position-1b-color-purple-th.jpg" },
    { itemname: "IPad", price: 13900, image: "https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad/10th-gen/wifi/product-detail/th/yellow/ipad-wifi-10th-gen-image-pdp-position-1b-color-yellow-th.jpg" },
    { itemname: "IPad mini", price: 19900, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eDJDc00wczl1QWk5QmpVYitFNXQwOVgrSXpWVEhWaW9YTGlWRHFoSHU0L3R6NnhRaHBRWDl3NFJZMDZlMGtTTWd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkVwZDFFRWZvZEwrWFpmYjFpOEJyM3M=&traceId=1" },
    { itemname: "MacBook Air", price: 39900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" },
    { itemname: "MacBook Pro", price: 59900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200" },
    { itemname: "iMac", price: 49900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618" },
    { itemname: "Mac mini", price: 20900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1670038314708" },
    { itemname: "Mac Studio", price: 74900, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143" },
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      {myItems.map((item) => (
        <ItemCart
          key={item.itemname}
          itemname={item.itemname}
          itemPrice={item.price}
          itemImage={item.image}
          handleIncremental={() => handleIncremental(item.price)}
          handleDecremental={() => handleDecremental(item.price)}
        />
      ))}
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">จำนวนสินค้า</Typography>
        <Typography variant="h4">{total.toLocaleString()} ชิ้น</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="h4">ราคารวมทั้งหมด</Typography>
        <Typography variant="h4">{totalPrice.toLocaleString()} บาท</Typography>
      </Stack>
    </div>
  );
}