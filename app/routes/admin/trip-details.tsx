import { useParams, type LoaderFunctionArgs } from "react-router";
import { getTripById } from "~/appwrite/trips";
import type { Route } from "./+types/trip-details";
import { cn, parseTripData } from "lib/utils";
import { Header, InfoPill } from "components";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { tripId } = params;

  if (!tripId) throw new Error("Trip ID is required");

  const trip = await getTripById(tripId);

  return trip;
};

export default function TripDetail({ loaderData }: Route.ComponentProps) {
  const imageUrls = loaderData?.imageUrls || [];
  const tripData = parseTripData(loaderData?.tripDetails);

  const {
    name,
    duration,
    itinerary,
    travelStyle,
    groupType,
    budget,
    interests,
    estimatedPrice,
    description,
    bestTimeToVisit,
    weatherInfo,
    country,
  } = tripData || {};

  return (
    <main className="travel-detail wrapper">
      <Header
        title="Trip Details"
        description="View and edit AI-generated travel plans"
      />
      <section className="container wrapper-md">
        <header>
          <h1 className="p-40-semibold text-dark-100">{name}</h1>
          <div className="flex items-center gap-5">
            <InfoPill
              text={`${duration} day plan`}
              image="/assets/icons/calendar.svg"
            />

            <InfoPill
              text={
                itinerary
                  ?.slice(0, 4)
                  .map((item) => item.location)
                  .join(", ") || ""
              }
              image="/assets/icons/location-mark.svg"
            />
          </div>
        </header>

        <section className="gallery">
          {imageUrls.map((url: string, i: number) => (
            <img
              src={url}
              key={i}
              alt={url}
              className={cn(
                "w-full rounded-xl object-cover",
                i === 0
                  ? "md:col-span-2 md:row-span-2 h-[330px]"
                  : "md:row-span-1 h-[150px]"
              )}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
