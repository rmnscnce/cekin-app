<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use App\Models\Task;
use App\Models\WeatherData;
use App\Models\WeatherSources;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Raisa',
            'email' => 'raisa@example.com',
            'password' => bcrypt('Raisa123'),
            'email_verified_at' => time()
        ]);

        WeatherSources::factory(3)->create();

        Project::factory()
        ->count(30)
        ->hasTasks(30)
        ->create();

        WeatherData::factory()
        ->count(30)
        ->hasWeatherSource(30)
        ->create();
    }
}
