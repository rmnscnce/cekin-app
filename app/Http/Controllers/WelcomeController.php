<?php

namespace App\Http\Controllers;

use App\Models\OnlineWeather;
use App\Models\NearbyPlaces;
use RakibDevs\Weather\Weather;

class WelcomeController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $wt = new Weather();
        $data = array(
            "Jakarta" => "https://res.klook.com/image/upload/Mobile/City/niwtqm5trnsjmhlid8al.jpg",
            "Tokyo" => "https://www.gotokyo.org/en/destinations/southern-tokyo/images/499_0354_2.jpg",
            "Dubai" => "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/56000/56828-Dubai.jpg",
            "London" => "https://www.tripsavvy.com/thmb/qQ59TqUkLOoVREXGaoWNU3zRwRg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1047502134-ebf7496b41e047759046e17b91f57679.jpg",
            "Berlin" => "https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg?w=800&h=450&c=crop",
            "Chicago" => "https://cdn.britannica.com/59/94459-050-DBA42467/Skyline-Chicago.jpg",
            "Paris" => "https://cdn1.sisiplus.co.id/media/sisiplus/asset/uploads/artikel/g2OEbKl2aTEIp1x5hFNYEE9ad615uVenBexDAcVW.jpg",

        );
        $coords = array(
            "Jakarta" => OnlineWeather::findCoordinates("Jakarta")[0],
            "Tokyo" => OnlineWeather::findCoordinates("Tokyo")[0],
            "Dubai" => OnlineWeather::findCoordinates("Dubai")[0],
            "London" => OnlineWeather::findCoordinates("London")[0],
            "Berlin" => OnlineWeather::findCoordinates("Berlin")[0],
            "Chicago" => OnlineWeather::findCoordinates("Chicago")[0],
            "Paris" => OnlineWeather::findCoordinates("Paris")[0],
        );
        $keys = array_keys($data); // Get keys of the $data array
        shuffle($keys); // Shuffle the keys
        $randomCity = $keys[0]; // Get the first key after shuffling
        $selectedImage = $data[$randomCity]; // Get the corresponding value for the selected key
        $wt = new OnlineWeather($coords[$randomCity]['latitude'], $coords[$randomCity]['longitude']);
        $weatherDashboard = array(
            "location" => $wt->getLocation(),
            "curr_temp" => $wt->getCurrTemp(),
            "wind_speed" => $wt->getWindSpeed(),
            "condition" => $wt->getCondition(),
        );
        // $icon = $weatherDashboard->weather[0]->icon;
        $icon = "50d";
        $weatherIcon = "https://openweathermap.org/img/wn/" . $icon . "@2x.png";
        $np = new NearbyPlaces($coords[$randomCity]['latitude'], $coords[$randomCity]['longitude']);
        $nearbyPlaces = $np->getPlaces();
        return inertia(
            'Welcome',
            compact(
                'wt',
                'weatherDashboard',
                'weatherIcon',
                'randomCity',
                'selectedImage',
                'nearbyPlaces'
            )
        );
    }
}
