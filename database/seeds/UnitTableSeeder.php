<?php

use Illuminate\Database\Seeder;

class UnitTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('unit_master')->delete();
        $faker = Faker::create();
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        foreach (range(1, 20) as $index) {
            DB::table('unit_master')->insert(array(
                [
                    'id' => $index,
                    'description' => $faker->sentence(6),
                    'unit' => $faker->randomElement($array = array(
                        'LTR',
                        'KG',
                        'PCS',
                        'MTR',
                        'FEET',
                        'PND',
                        'KM'
                    )),
                    'factor' => $faker->numberBetween(1, 20),
                    'user_id' => $faker->numberBetween(1, 20),
                    'created_at' => $faker->dateTime(),
                    'updated_at' => $faker->dateTime(),
                ],
            ));
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }

}
