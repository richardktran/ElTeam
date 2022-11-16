<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\InvalidParameterException;

class AuthController extends Controller
{
    public function me(Request $request)
    {
        return $this->response(new UserResource(Auth::user()));
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return $this->responseError('Unauthorized', Response::HTTP_UNAUTHORIZED);
        }
        $user = Auth::user();

        $token = $user->createToken('authToken')->plainTextToken;

        return $this->response([
            'user' => new UserResource($user),
            'token' => $token,
        ]);
    }

    public function signUp(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user!==null) {
            return $this->responseError('Email already exists', Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'name' => $request->name,
            'role_id' => 2,
        ]);

        $token = $user->createToken('authToken')->plainTextToken;

        return $this->response([
            'user' => new UserResource($user),
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return $this->response([]);
    }
}
