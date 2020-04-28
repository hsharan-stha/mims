<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
class ProductCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('inv_product_categories')->delete();
        $faker = Faker::create();
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        foreach (range(1, 15000) as $index) {
            DB::table('inv_product_categories')->insert(array(
                [
                    'id' => $index,
                    'name' =>$faker->text(25),
                    'code' => $faker->stateAbbr().$faker->numberBetween(1000,9000),
                    'created_at' => $faker->dateTime(),
                    'updated_at' => $faker->dateTime(),
                ],
            ));
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }
}
