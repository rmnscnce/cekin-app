<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
use App\Models\Task;
use App\Models\Weather;
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

        Weather::factory(30)->create();
    }
}
