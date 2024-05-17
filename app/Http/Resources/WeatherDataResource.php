<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class WeatherDataResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'city_name' => $this->city_name,
            'created_at' => $this->created_at ? (new Carbon($this->created_at))->format('Y-m-d') : null,
            'temperature' => $this->temperature ?? null,
            'wind_speed' => $this->wind_speed ?? null,
            'humidity' => $this->humidity ?? null,
            'condition' => $this->condition ?? null,
            'description' => $this->description ?? null,
            'createdBy' => new UserResource($this->createdBy),
            'updatedBy' => new UserResource($this->updatedBy),
        ];
    }
}
