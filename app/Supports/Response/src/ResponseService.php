<?php


namespace App\Supports\Response\Src;

use App\Exceptions\PaymentException;
use App\Exceptions\StripePaymentException;
use App\Supports\Utils\PaginationUtil;
use App\Supports\Utils\ValidationUtil;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Throwable;

class ResponseService
{
    protected function getClassStatusCode($code): string
    {
        $classCode = (int)($code / 100);
        $classArray = [
            'informational',
            'success',
            'redirection',
            'client_error',
            'server_error',
        ];

        return $classArray[$classCode - 1];
    }

    /**
     * @param mixed $data
     * @param int $code
     * @param null|string|array $messageCode
     * @param array $meta
     *
     * @return mixed
     */
    public function send($data, $code = Response::HTTP_OK, $messageCode = null, $meta = [])
    {
        $messageCodes = !empty($messageCode) ? $messageCode : [];
        if (!empty($messageCode) && !is_array($messageCode)) {
            $messageCodes = [$messageCode];
        }
        $result = [
            'messages' => [],
            'data' => null,
            'meta' => $meta == [] ? null : $meta,
        ];

        if ($data instanceof ValidationException) {
            $code = Response::HTTP_BAD_REQUEST;
            $listMsgCode = ValidationUtil::convertToListMessageCode($data);
            foreach ($listMsgCode as $msgCode) {
                $result['messages'][] = [
                    'message_code' => $msgCode['message_code'],
                    'message' => $msgCode['message'],
                ];
            }
        } elseif ($data instanceof Exception || $data instanceof Throwable) {
            if (empty($data->getMessage())) {
                $result['messages'][] = [
                    'message_code' => 'unknown_error',
                    'message' => config('messagecode.unknown_error'),
                ];
            } else {
                if ($messageText = config('messagecode.' . $data->getMessage())) {
                    $result['messages'][] = [
                        'message_code' => $data->getMessage(),
                        'message' => $messageText,
                    ];
                } else {
                    $result['messages'][] = [
                        'message_code' => 'unknown_error',
                        'message' => $data->getMessage(),
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
                    'message' => config('messagecode.' . $msgCode, $msgCode),
                ];
            }
        }

        return response()->json($result, $code);
    }

    public function pagination(LengthAwarePaginator $data, $resource=null)
    {
        $meta = PaginationUtil::getMetaPagination($data);

        if ($resource) {
            $data = $resource::collection($data->items());
        } else {
            $data = $data->items();
        }

        return $this->send(
            $data,
            Response::HTTP_OK,
            null,
            [
                'pagination' => $meta,
            ]
        );
    }

    /**
     * @param Exception|Throwable $exception
     *
     * @return mixed
     */
    private function getExceptionTrace($exception)
    {
        $traceStr = $exception->getTraceAsString();
        $arr = preg_split('/#\d+\s+/', trim($traceStr));
        unset($arr[0]);

        return array_chunk($arr, 10)[0];
    }

    /**
     * @param string $path
     */
    public function display(string $path)
    {
        header('Content-type: ' . $this->mimeType($path));
        readfile($path);
    }

    private function mimeType($path)
    {
        preg_match("|\.([a-z0-9]{2,4})$|i", $path, $fileSuffix);
        if (empty($fileSuffix)) {
            return mime_content_type($path);
        }

        switch (strtolower($fileSuffix[1])) {
            case 'js':
                return 'application/x-javascript';
            case 'json':
                return 'application/json';
            case 'jpg':
            case 'jpeg':
            case 'jpe':
                return 'image/jpg';
            case 'png':
            case 'gif':
            case 'bmp':
            case 'tiff':
                return 'image/' . strtolower($fileSuffix[1]);
            case 'css':
                return 'text/css';
            case 'xml':
                return 'application/xml';
            case 'doc':
            case 'docx':
                return 'application/msword';
            case 'xls':
            case 'xlt':
            case 'xlm':
            case 'xld':
            case 'xla':
            case 'xlc':
            case 'xlw':
            case 'xll':
                return 'application/vnd.ms-excel';
            case 'ppt':
            case 'pps':
                return 'application/vnd.ms-powerpoint';
            case 'rtf':
                return 'application/rtf';
            case 'pdf':
                return 'application/pdf';
            case 'html':
            case 'htm':
            case 'php':
                return 'text/html';
            case 'txt':
                return 'text/plain';
            case 'mpeg':
            case 'mpg':
            case 'mpe':
                return 'video/mpeg';
            case 'mp3':
                return 'audio/mpeg3';
            case 'wav':
                return 'audio/wav';
            case 'aiff':
            case 'aif':
                return 'audio/aiff';
            case 'avi':
                return 'video/msvideo';
            case 'wmv':
                return 'video/x-ms-wmv';
            case 'mov':
                return 'video/quicktime';
            case 'zip':
                return 'application/zip';
            case 'tar':
                return 'application/x-tar';
            case 'swf':
                return 'application/x-shockwave-flash';
            default:
                if (function_exists('mime_content_type')) {
                    $fileSuffix = mime_content_type($path);
                }

                return 'unknown/' . trim($fileSuffix[0], '.');
        }
    }
}
