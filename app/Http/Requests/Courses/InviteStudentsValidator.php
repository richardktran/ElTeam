<?php

namespace App\Http\Requests\Courses;

use App\Http\Requests\AbstractValidator;
use Illuminate\Foundation\Http\FormRequest;

class InviteStudentsValidator extends AbstractValidator
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @param array $params
     * @return array
     */
    protected function rules($params = [])
    {
        return [
            'students' => 'required|array',
        ];
    }
}
