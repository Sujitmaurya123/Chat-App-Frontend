import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";

// ProfileCard component
const ProfileCard = ({ text, Icon, heading }) => (
  <Box
    sx={{
      p: 2,
      borderRadius: 3,
      backgroundColor: "#1e1e2f",
      color: "white",
      boxShadow: 3,
      minWidth: 300,
      width: "100%",
      maxWidth: 400,
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: 6,
        backgroundColor: "#2a2a3d",
      },
    }}
  >
    <Stack direction="row" alignItems="center" spacing={2}>
      {Icon && (
        <Box
          sx={{
            fontSize: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#90caf9",
          }}
        >
          {Icon}
        </Box>
      )}

      <Stack spacing={0.5}>
        <Typography variant="h6" fontWeight={600} sx={{ wordBreak: "break-word" }}>
          {text || "Not provided"}
        </Typography>
        <Typography variant="caption" color="gray">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  </Box>
);

// Main Profile component
const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction="column" alignItems="center">
      <Avatar
        src={transformImage(user?.avatar?.url)}
        alt={user?.name}
        sx={{
          width: 200,
          height: 200,
          objectFit: "cover",
          border: "5px solid white",
          boxShadow: 5,
        }}
      />

      <ProfileCard heading="Bio" text={user?.bio} />
      <ProfileCard heading="Username" text={user?.username} Icon={<UserNameIcon />} />
      <ProfileCard heading="Name" text={user?.name} Icon={<FaceIcon />} />
      <ProfileCard heading="Joined" text={moment(user?.createdAt).fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  );
};

export default Profile;
