import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import DatePicker from "@/Components/DatePicker";
import TimePicker from "@/Components/TimePicker";

export default function Welcome(
  {
    auth,
    weatherDashboard,
    weatherIcon,
    randomCity,
    selectedImage,
    nearbyPlaces,
  },
) {
  return (
    <GuestLayout user={auth.user}>
      <Head title="" />
      <img
        src="https://www.wallpaperflare.com/static/369/332/935/anime-girls-clear-blue-sky-wallpaper.jpg"
        alt=""
        className="w-full h-72 object-cover"
      />
      <div className="grid grid-cols-3">
        <div className="flex items-start">
          <div>
            <div className="max-w-2xl mx-auto sm:px-6 lg:px-8 mt-8 ">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <img src={selectedImage} className="w-full h-48 object-cover" />
                <div className="p-6 text-gray-900 dark:text-gray-100">
                  <h3 className="text-gray-200 text-6xl font-extrabold">
                    {randomCity}
                  </h3>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="max-w-2xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2 opacity-90 mb-20">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg ">
                  <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                    <h3 className="text-amber-500 text-2xl font-semibold">
                      Temperature
                    </h3>
                    <p className="text-4xl mt-6 font-bold">
                      {weatherDashboard.curr_temp}°
                    </p>
                    <p className="text-3xl mt-6 font-extrabold">
                      Celsius
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg  text-center">
                  <div className="p-6 text-gray-900 dark:text-gray-100">
                    <h3 className="text-blue-500 text-2xl font-semibold">
                      Wind Speed
                    </h3>
                    <p className="text-5xl mt-6 font-bold">
                      {weatherDashboard.wind_speed}
                    </p>
                    <p className="text-3xl mt-7 font-extrabold">
                      km/hr
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                    <h3 className="text-red-500 text-2xl font-semibold">
                      Condition
                    </h3>
                    <p className="text-4xl mt-2 font-extrabold">
                      {weatherDashboard.condition}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-8">
          {/* Section title "Places to go" */}
          <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Places to go
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {nearbyPlaces.map((place) => (
              // clickable card with place name and address
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                  <a href={place.googleMapsUri} target="_blank" rel="noopener noreferrer">
                  <div className="p-6 text-gray-900 dark:text-gray-100">
                    <h3 className="text-gray-100 text-3xl font-semibold">
                      {place.displayName.text}
                    </h3>
                    <p className="text-xl mt-6 font-bold">
                      {place.formattedAddress}
                    </p>
                  </div>
                  </a>
                </div>
            ))}
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
