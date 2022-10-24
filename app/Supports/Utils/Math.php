<?php


namespace App\Supports\Utils;

use Illuminate\Http\Request;

class Math
{
    // Create a function to divide n people into k groups with the approximate number of people in each group
    public static function dividePeopleToNoGroups($noStudents, $noGroups)
    {
        $groups = [];
        $groupSize = floor($noStudents / $noGroups);
        $remainder = $noStudents % $noGroups;
        for ($i = 0; $i < $noGroups; $i++) {
            $groups[] = $groupSize;
        }
        for ($i = 0; $i < $remainder; $i++) {
            $groups[$i]++;
        }
        return $groups;
    }

    // Create a function to divide n pepple to groups with m people in each group
    public static function dividePeopleToGroupsWithSize($noStudents, $groupSize)
    {
        $groups = [];
        $noGroups = ceil($noStudents / $groupSize);
        $groups = static::dividePeopleToNoGroups($noStudents, $noGroups);
        
        return $groups;
    }
}
