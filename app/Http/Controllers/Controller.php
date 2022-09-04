<?php

namespace App\Http\Controllers;

use App\Supports\Response\ResponseFacade;
use App\Supports\Utils\ValidationUtil;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function response($data, $code = Response::HTTP_OK, $messageCode = null, array $meta = [])
    {
        return $this->send($data, $code, $messageCode, $meta);
    }

    protected function responseError(?string $messageCode, $code = Response::HTTP_BAD_REQUEST)
    {
        return $this->send(null, $code, $messageCode);
    }


    private function send($data, $code = Response::HTTP_OK, $messageCode = null, array $meta = [])
    {
        $messageCodes = $messageCode ?? [];
        if (!empty($messageCode) && !is_array($messageCode)) {
            $messageCodes = [$messageCode];
        }
        $result = [
            'messages' => [],
            'data' => null,
            'meta' => $meta == [] ? null : $meta,
        ];

        if ($data instanceof ValidationException) {
            $listMsgCode = ValidationUtil::convertToListMessageCode($data);
            foreach ($listMsgCode as $msgCode) {
                $result['messages'][] = [
                    'message_code' => $msgCode['message_code'],
                    'message' => $msgCode['message'],
                ];
            }
        } elseif ($data instanceof \Exception || $data instanceof \Throwable) {
            if (empty($data->getMessage())) {
                $result['messages'][] = [
                    'message_code' => 'unknown_error',
                    'message'      => config('messagecode.unknown_error'),
                ];
            } else {
                if ($messageText = config('messagecode.' . $data->getMessage())) {
                    $result['messages'][] = [
                        'message_code' => $data->getMessage(),
                        'message'      => $messageText,
                    ];
                } else {
                    $result['messages'][] = [
                        'message_code' => 'unknown_error',
                        'message'      => $data->getMessage(),
                    ];
                }
            }
            $enable = env('APP_DEBUG');
            $enable = filter_var($enable, FILTER_VALIDATE_BOOLEAN);
            if ($enable) {
                $result['traces'] = $this->getExceptionTrace($data);
            }
        } else {
            $result['data'] = $data;
            foreach ($messageCodes as $msgCode) {
                $result['messages'][] = [
                    'message_code' => $msgCode,
                    'message' => config('messagecode.'.$msgCode, $msgCode),
                ];
            }
        }

        return response()->json($result, $code);
    }

    /**
     * @param LengthAwarePaginator $data
     * @param string|null $classTransformer
     * @return mixed
     */
    protected function pagination(LengthAwarePaginator $data, $resource=null)
    {
        return ResponseFacade::pagination($data,$resource);
    }
}
