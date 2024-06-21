<?php

namespace App\Models;

class OnlineWeather
{
    private string $location;
    private string $condition;
    private float $wind_speed;
    private int $curr_temp;
    private int $morning_temp;
    private int $afternoon_temp;
    private int $evening_temp;
    private int $overnight_temp;

    public function __construct(string $latitude, string $longitude) {
        $json = cget_file_contents("https://ql2bq3wny3li4pru7wx5agf42y0bsibq.lambda-url.us-east-1.on.aws/" . $latitude . "/" . $longitude);

        $data = json_decode($json, true);

        $this->location = $data['location'];
        $this->condition = $data['condition'];
        $this->wind_speed = $data['wind_speed'];
        $this->curr_temp = $data['curr_temp'];
        $this->morning_temp = $data['morning_temp'];
        $this->afternoon_temp = $data['afternoon_temp'];
        $this->evening_temp = $data['evening_temp'];
        $this->overnight_temp = $data['overnight_temp'];
    }

    public static function findCoordinates(string $placeName): array {
        $json = file_get_contents("https://ql2bq3wny3li4pru7wx5agf42y0bsibq.lambda-url.us-east-1.on.aws/_/search?q=" . $placeName);

        return array_map(function($entry) {
            return [
                'placeName' => $entry[0],
                'latitude' => $entry[1],
                'longitude' => $entry[2]
            ];
        }, json_decode($json, true)['entries']);
    }

    public function getLocation(): string {
        return $this->location;
    }

    public function getCondition(): string {
        return $this->condition;
    }

    public function getWindSpeed(): float {
        return $this->wind_speed;
    }

    public function getCurrTemp(): int {
        return $this->curr_temp;
    }

    public function getMorningTemp(): int {
        return $this->morning_temp;
    }

    public function getAfternoonTemp(): int {
        return $this->afternoon_temp;
    }

    public function getEveningTemp(): int {
        return $this->evening_temp;
    }

    public function getOvernightTemp(): int {
        return $this->overnight_temp;
    }
}
