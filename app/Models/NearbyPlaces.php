<?php

namespace App\Models;

class NearbyPlaces {
    private array $places;

    public function __construct(string $latitude, string $longitude) {
        $json = cget_file_contents("https://vqqzdfsqam77z26qbtn23l2que0cnvfl.lambda-url.us-east-1.on.aws/" . $latitude . "/" . $longitude);

        $data = json_decode($json, true);

        $this->places = $data['places'];
    }

    public function getPlaces(): array {
        return $this->places;
    }
}
