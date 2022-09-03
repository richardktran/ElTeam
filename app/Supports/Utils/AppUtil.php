<?php


namespace App\Supports\Utils;

use Illuminate\Http\Request;

class AppUtil
{
    /**
     * @return Request
     */
    public static function getRequestInstance()
    {
        return app('request');
    }

    public static function runningInConsole(): bool
    {
        return self::getApplication()->runningInConsole();
    }

    public static function getApplication()
    {
        return app();
    }
}
