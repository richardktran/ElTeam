<?php


namespace App\Supports\Utils;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PaginationUtil
{
    public static function getMetaPagination(LengthAwarePaginator $data)
    {
        $length = $data->perPage();
        $totalRecord = $data->total();

        return [
            'current_page' => $data->currentPage(),
            'per_page'     => $length,
            'count'        => $data->count(),
            'total'        => $totalRecord,
            'total_pages'  => ceil($totalRecord / $length),
        ];
    }
}
