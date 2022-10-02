<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\SocialAccount;
use App\Models\User;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\Response;

class GoogleController extends Controller
{
    public function loginUrl()
    {
        return $this->response([
            'url' => Socialite::driver('google')->stateless()->redirect()->getTargetUrl(),
        ]);
    }

    public function loginCallback(Request $request)
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
        } catch (ClientException $e) {
            return $this->responseError('Invalid credentials provided', Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = null;

        DB::transaction(function () use ($googleUser, &$user) {
            $socialAccount = SocialAccount::firstOrNew(
                ['social_id' => $googleUser->getId(), 'social_provider' => 'google'],
                ['social_name' => $googleUser->getName()]
            );

            if (!($user = $socialAccount->user)) {
                // Find user by email
                $user = User::where('email', $googleUser->getEmail())->first();  

                if(!$user){
                    $user = User::create([
                        'email' => $googleUser->getEmail(),
                        'name' => $googleUser->getName(),
                        'role_id' => Role::STUDENT,
                        'email_verified_at' => now(),
                        'avatar' => $googleUser->getAvatar(),
                        'status' => true
                    ]);
                } else{
                    User::where('email', $googleUser->getEmail())->update([
                        'name' => $googleUser->getName(),
                        'email_verified_at' => now(),
                        'avatar' => $googleUser->getAvatar(),
                        'status' => true
                    ]);

                    $user = User::where('email', $googleUser->getEmail())->first();
                }

                $socialAccount->fill(['user_id' => $user->id])->save();
            }
        });
        
        $token = $user->createToken('google-token')->plainTextToken;

        return $this->response([
            'user' => new UserResource($user),
            'google_user' => $googleUser,
            'token' => $token,
        ]);
    }
}
