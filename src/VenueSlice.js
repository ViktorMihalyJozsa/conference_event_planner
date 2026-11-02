import { createSlice } from "@reduxjs/toolkit";

// Images from src/assets
import conferenceRoom from "./assets/pexels-chairs-2181916_1920.jpg";
import auditoriumHall from "./assets/crystal710-event-venue-1597531_1920.jpg";
import presentationRoom from "./assets/shameersrk-convention-center-3908238_1920.jpg";
import largeMeetingRoom from "./assets/pexels-chairs-2181916_1920.jpg";
import smallMeetingRoom from "./assets/startupstockphotos-laptops-593296_1920.jpg";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: conferenceRoom,
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: auditoriumHall,
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: presentationRoom,
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: largeMeetingRoom,
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: smallMeetingRoom,
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
  ],

  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;

      if (state[index]) {
        if (
          state[index].name === "Auditorium Hall (Capacity:200)" &&
          state[index].quantity >= 3
        ) {
          return;
        }

        state[index].quantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const { payload: index } = action;

      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
