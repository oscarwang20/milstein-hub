"use server";
import React from "react";
import { getEvents } from "../api/api";
import { Event } from "../../types";

const Events: React.FC = async () => {
  const events = await getEvents();
  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event: Event) => (
          <li key={event.id}>
            <a href="http://austinbunn.com">{event.name}</a>
            <img src="https://images.squarespace-cdn.com/content/v1/553d091be4b0c687eb3f1b4c/1430066929023-9TLC6IF5QAUAVFG48VA6/image-asset.jpeg?format=1000w" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
