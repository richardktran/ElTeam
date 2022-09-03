<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCourseValidator extends AbstractValidator
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
            'code' => 'required|string',
            'name' => 'required|string',
            'credit' => 'nullable|integer',
            'hours_per_week' => 'nullable|integer',
            'location' => 'nullable|string',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date'
        ];
    }
}
