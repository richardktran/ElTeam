<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $params = $request->all();
        $users = User::all();

        return $this->response(UserResource::collection($users));
    }

    public function show(User $user)
    {
        return $this->response(new UserResource($user));
    }

    public function getByEmail(Request $request)
    {
        $params = $request->all();
        $email = $params['email'];
        $user = User::where('email', $email)->first();

        if (!$user) {
            return $this->responseError('User not found', Response::HTTP_BAD_REQUEST);
        }
        return $this->response(new UserResource($user));
    }
}
