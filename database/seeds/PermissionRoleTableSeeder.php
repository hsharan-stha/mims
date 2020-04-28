<?php

use Illuminate\Database\Seeder;

class PermissionRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        for($i=1;$i <= 567;$i++) {
            DB::table('permission_role')->insert(array(
                'permission_id'=>$i,
                'role_id'=>3
            ));
        }
        DB::statement('SET FOREIGN_KEY_CHECKS=1');

    }
}
