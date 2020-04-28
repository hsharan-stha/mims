<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CompanyTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('company_master')->delete();
        $faker = Faker::create();
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        foreach (range(1, 5) as $index) {
            DB::table('company_master')->insert(array(
                [
                    'id' => $index,
                    'code' => $faker->unique()->numberBetween(1, 4) . $faker->shuffle('AB'),
                    'name' => $faker->unique()->randomElement($array = array(
                        'Gorkha Tea Estate',
                        'Haldibari Tea Estate',
                        'Pathivara Tea Estate',
                        'Kanyam Tea Estate',
                        'Jasbire Tea Factory'
                    )),
                    'address' => $faker->address(),
                    'state' => $faker->state(),
                    'postal_code' => $faker->postcode(),
                    'contact' => $faker->address() . '01-4425' . $faker->numberBetween(1, 10) . $faker->numberBetween(1, 10) . $index,
                    'pan_number' => '60032785' . $index,
                    'email' => $faker->email(),
                    'manager_name' => $faker->firstName() . ' ' . $faker->firstName(),
                    'created_at' => date("Y-m-d H:i:s"),
                    'updated_at' => date("Y-m-d H:i:s")
                ],
            ));
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }

}
