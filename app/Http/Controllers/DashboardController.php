<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use RakibDevs\Weather\Weather;
use Inertia\Inertia;
use App\Models\OnlineWeather;

class DashboardController extends Controller
{
    public function index(Request $request)
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
            "Bali" => "https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg?impolicy=fcrop&w=800&h=533&q=medium",
            "New York" => "https://mediaasuransinews.co.id/wp-content/uploads/2022/08/New-York.jpg",
            "Sydney" => "https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped.jpg",
            "Bandung" => "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Gedung_Sate_Bandung_Jawa_Barat.jpg/1200px-Gedung_Sate_Bandung_Jawa_Barat.jpg",
            "Washington" => "https://cdn.pixabay.com/photo/2016/08/27/15/57/washington-d-1624419_1280.jpg",
            "Singapore" => "https://a.cdn-hotels.com/gdcs/production105/d1467/23862586-cfbc-42a9-bc1b-813971de0098.jpg",
            "Cairo" => "https://traveler.marriott.com/wp-content/uploads/2022/02/Cairo-Egypt-Night-Skyline.jpg",
            "Hong Kong" => "https://www.discoverhongkong.com/id/explore/attractions/hong-kong-night-view.thumb.800.480.png?ck=1699495648",
            "Malang" => "https://upload.wikimedia.org/wikipedia/commons/9/96/Tugu_Malang.jpg",
            "Bogor" => "https://i.pinimg.com/736x/a0/64/4a/a0644a22e9d6dd8a6f84e4d59dd5e6ce.jpg"
        );

        $coords = array(
            "Jakarta" => ["-6.2088","106.8456"], // latitude, longitude
            "Tokyo" => ["35.6895","139.6917"],
            "Dubai" => ["25.276987","55.296249"],
            "London" => ["51.5074","0.1278"],
            "Berlin" => ["52.5200","13.4050"],
            "Chicago" => ["41.8781","87.6298"],
            "Paris" => ["48.8566","2.3522"],
            "Bali" => ["-8.3405","115.0920"],
            "New York" => ["40.7128","74.0060"],
            "Sydney" => ["-33.8688","151.2093"],
            "Bandung" => ["-6.9175","107.6191"],
            "Washington" => ["38.9072","77.0369"],
            "Singapore" => ["1.3521","103.8198"],
            "Cairo" => ["30.0444","31.2357"],
            "Hong Kong" => ["22.3193","114.1694"],
            "Malang" => ["-7.9778","112.6347"],
            "Bogor" => ["-6.5946","106.7892"]
        );

        $defaultImage = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3";
        $city = $request->input('city');

        if ($city && array_key_exists($city, $data)) {
            $randomCity = $city;
            $selectedImage = $data[$randomCity];
        } else {
            if ($city) {
                $randomCity = $city;
            } else {
                $keys = array_keys($data); // Get keys of the $data array
                shuffle($keys); // Shuffle the keys
                $randomCity = $keys[0]; // Get the first key after shuffling
            }
            $selectedImage = $defaultImage;
        }

        // $weatherDashboard = $wt->getCurrentByCity($randomCity);
        $wt = new OnlineWeather($coords[$randomCity][0], $coords[$randomCity][1]);
        $weatherDashboard = array(
            "location" => $wt->getLocation(),
            "curr_temp" => $wt->getCurrTemp(),
            "wind_speed" => $wt->getWindSpeed(),
            "condition" => $wt->getCondition(),
        );
        // $icon = $weatherDashboard->weather[0]->icon;
        $icon = "50d";
        $weatherIcon = "https://openweathermap.org/img/wn/" . $icon . "@2x.png";

        return Inertia::render('Dashboard', compact(
            'user',
            'weatherDashboard',
            'weatherIcon',
            'randomCity',
            'selectedImage'
        ));
    }
}
