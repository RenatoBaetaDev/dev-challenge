<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/


$factory->define(\Model\Task::class, function (Faker $faker) {
    $categories = ['Domestic', 'Professional', 'Other'];

    return [
        'description' => $faker->sentence(2),
        'category' => $faker->randomElement($categories),
        'complete' => $faker->randomElement(['true', 'false']),
        'due_by' => $faker->date('Y-m-d'),
        'costs' => $faker->randomDigit,
        'notes' => $faker->text,
    ];
});
