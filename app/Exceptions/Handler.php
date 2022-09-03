<?php

namespace App\Exceptions;

use App\Supports\Response\ResponseFacade;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Throwable $e
     *
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $e)
    {
        switch (get_class($e)) {
            case UnauthorizedException::class:
            case UnauthorizedHttpException::class:
                return ResponseFacade::send(null, Response::HTTP_UNAUTHORIZED, 'invalid_auth_token');
            case NotFoundHttpException::class:
            case ModelNotFoundException::class:
                return ResponseFacade::send(null, Response::HTTP_NOT_FOUND, $e->getMessage() ?? 'page_not_found');
            case MethodNotAllowedHttpException::class:
                return ResponseFacade::send(null, Response::HTTP_METHOD_NOT_ALLOWED, 'method_not_allow');
            case BadRequestHttpException::class:
            case ValidationException::class:
                return ResponseFacade::send($e, Response::HTTP_BAD_REQUEST, 'unknown_error');
            case PaymentException::class:
                return ResponseFacade::send($e, Response::HTTP_BAD_REQUEST, $e->getCode() ?? 'payment_error');
            case StripePaymentException::class:
                return ResponseFacade::send($e, Response::HTTP_BAD_REQUEST, $e->getCode() ?? 'stripe_payment_error');
            case HttpException::class:
                return ResponseFacade::send($e, $e->getStatusCode(), $e->getMessage());
            default:
                return ResponseFacade::send($e, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
