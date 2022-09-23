<?php


namespace App\Supports\Response;

use App\Supports\Response\Src\ResponseService;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Facade;

/**
 * Class ResponseFacade
 *
 * @method static mixed send(string|array|object $data = null, int $statusCode = Response::HTTP_OK, string $messageCode = null, array $meta = [])
 * @method static mixed pagination(LengthAwarePaginator $data)
 * @method static mixed download(string $path, string $fileName = null, $headers = [])
 * @method static displayFromS3(string $pathOnS3)
 * @method static display(string $path)
 *
 * @package App\Services\Response
 */
class ResponseFacade extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return ResponseService::class;
    }
}
