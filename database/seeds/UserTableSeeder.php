<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::collection('users')->delete();
        $faker = Faker::create();
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        DB::collection('users')->insert(array(
            [
                'email' => 'school@school.com',
                'password' => '$2y$10$BB0bvzJmN70c6jV88Ub9auVXaG/ZljYc1PpEO6G10S/hdwrcqkJIG',
                'role_id' => '5799bd91b0f69f4a73d9873f',
                'school_id'=>'579efc9c4ef75a4702b7328e'

            ],
            [
                'email' => 'admin@admin.com',
                'password' => '$2y$10$BB0bvzJmN70c6jV88Ub9auVXaG/ZljYc1PpEO6G10S/hdwrcqkJIG',
                'role_id' => '57970fa41f2ab64119b8d1d5',

            ],
            [
                'email' => 'teacher@teacher.com',
                'password' => '$2y$10$BB0bvzJmN70c6jV88Ub9auVXaG/ZljYc1PpEO6G10S/hdwrcqkJIG',
                'role_id' => '5799be1bb0f69f4a73d98742',
                'school_id'=>'579efc9c4ef75a4702b7328e'

            ],
            [
                'email' => 'student@student.com',
                'password' => '$2y$10$BB0bvzJmN70c6jV88Ub9auVXaG/ZljYc1PpEO6G10S/hdwrcqkJIG',
                'role_id' => '5799be2ab0f69f4a73d98743',
                'school_id'=>'579efc9c4ef75a4702b7328e'
            ]
        ));
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }
}
