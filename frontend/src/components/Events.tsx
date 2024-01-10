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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
