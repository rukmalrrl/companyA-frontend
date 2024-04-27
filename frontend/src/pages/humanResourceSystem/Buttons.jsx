import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://previews.123rf.com/images/wad/wad1506/wad150600014/41221154-search-staff-icon-concept-isolated-on-white.jpg",
    title: "Search",
    width: 300,
  },
  {
    url: "data:image/png;base64,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",
    title: "Add Employee",
    width: 300,
  },
  {
    url: "https://static.vecteezy.com/system/resources/previews/006/467/668/original/a-trendy-icon-of-profile-update-isometric-design-vector.jpg",
    title: "Update Employee",
    width: 300,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVr-9nAhIHBzHJQ3RQN9a2MMDZGVvJcEsFIWJtVc02B44f6b5BGyEDU6HiTFj5Itv71g&usqp=CAU",
    title: "Delete Employee",
    width: 300,
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: 250, // Overrides inline-style
    height: 250,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBaseDemo() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
