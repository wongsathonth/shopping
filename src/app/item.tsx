"use client";
import {
  IconButton,
  Button,
  Stack,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";


export default function ItemCart({
  itemname,
  itemPrice,
  itemImage,
  handleIncremental,
  handleDecremental,
}: {
  itemname: string;
  itemPrice: number;
  itemImage: string;
  handleIncremental: () => void;
  handleDecremental: () => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremental();
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setTotalPrice(newCount * itemPrice);
      handleDecremental();
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 6, md: 2 }}>
        <img src={itemImage} alt={itemname} style={{ width: "100%" }} />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Typography variant="h6">{itemname}</Typography>
      </Grid>
      <Grid size={{ xs: 6, md: 6 }}>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={handleRemoveItemClick}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count} ชิ้น</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">
            {totalPrice.toLocaleString()} บาท
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}