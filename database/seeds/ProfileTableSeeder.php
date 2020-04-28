<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class ProfileTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('profiles')->delete();
        $faker = Faker::create();
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        foreach (range(1, 20) as $index) {
            DB::table('profiles')->insert([
                'user_id' => $faker->unique()->numberBetween(1, 20),
                'first_name' => $faker->firstName(),
                'middle_name' => $faker->firstName(),
                'last_name' => $faker->lastName(),
                'aka_name' => $faker->lastName(),
                'post' => 'Lecturer',
                'faculty' => $faker->randomElement($array = array(
                    'BEX',
                    'BCT',
                    'BSC.CSIT',
                    'BEL',
                    'BCE'
                )),
                'level' => $faker->randomElement($array = array(
                    'PostGraduate',
                    'Graduate',
                    'PHD'
                )),
                'temporary_address' => $faker->address(),
                'permanent_address' => $faker->address(),
                'contact_details' => $faker->sentence(1),
                'undergraduate' => $faker->company(),
                'graduate' => $faker->company(),
                'postgraduate' => $faker->company(),
                'qualification' => $faker->sentence(1),
                'experience' => $faker->sentence(2),
                'research' => $faker->sentence(2),
                'publication' => $faker->sentence(1),
                'interests' => $faker->sentence(1)
            ]);
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }
}
