<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'name' => $this->name,
            'location' => $this->location,
            'credit' => $this->credit,
            'hours_per_week' => $this->hours_per_week,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'teacher' => $this->teacher,
            'students' => $this->students,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
