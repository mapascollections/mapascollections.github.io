import React from "react";
import '../styles/events.css'
import { FaShareAlt } from "react-icons/fa";
type Event = {
    id: number;
    title: string;
    date: string;
    location: string;
    isLive?: boolean;
};

type EventCategory = {
    category: "upcoming" | "past";
    eventsList: Event[];
};

type EventsData = {
    events: EventCategory[];
};

const eventsData: EventsData = {
    events: [
        {
            category: "upcoming",
            eventsList: [
                {
                    id: 1,
                    title: "Swamini Exhibition",
                    date: "04 & 05 Jan, 2025",
                    location: "Elpro City Square Mall, PCMC - 410110",
                    isLive: true,
                },
                {
                    id: 2,
                    title: "Swamini Exhibition",
                    date: "04 & 05 Jan, 2025",
                    location: "Elpro City Square Mall, PCMC - 410110",
                    isLive: false,
                },
                {
                    id: 3,
                    title: "Swamini Exhibition",
                    date: "04 & 05 Jan, 2025",
                    location: "Elpro City Square Mall, PCMC - 410110",
                    isLive: false,
                },
            ],
        },
        {
            category: "past",
            eventsList: [
                {
                    id: 4,
                    title: "Swamini Exhibition",
                    date: "10 & 11 Dec, 2024",
                    location: "Elpro City Square Mall, PCMC - 410110",
                },
                {
                    id: 5,
                    title: "Swamini Exhibition",
                    date: "15 & 16 Nov, 2024",
                    location: "Elpro City Square Mall, PCMC - 410110",
                },
            ],
        },
    ],
};

const Events: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            {eventsData.events.map((section, index) => (
                <div key={index}>
                    <h2 className="text-xl font-bold border-b pb-2 mb-4 uppercase mt-2 ">{section.category} Events</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {section.eventsList.map((event) => (
                            <div key={event.id} className="border rounded-lg p-4 shadow-md">
                                <div className="relative h-32 bg-gray-300 rounded-md mb-4">
                                    {event.isLive && (
                                        <span className="absolute bg-red-500 text-white text-xs font-bold px-2 py-1 is-live">
                                            LIVE
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500">A7 | {event.date}</p>
                                <hr className="mt-1 mb-1" />
                                <h3 className="font-semibold text-lg">{event.title}</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">{event.location}</p>
                                    <p className="px-2"><FaShareAlt className="text-gray-600 text-xl cursor-pointer" /></p>
                                </div>
                                <hr className="mt-1 mb-1" />
                                <button className="mt-2 w-full bg-green-400 text-white py-2 rounded hover:bg-green-500">
                                    I'll be there!
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Events;
