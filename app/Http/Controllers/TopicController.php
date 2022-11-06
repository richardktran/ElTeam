<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function index(Request $request)
    {
        $topics = Topic::all()->where('course_id', $request->course_id)->sortBy('position');
        return $this->response($topics);
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $latestPosition = Topic::where('course_id', $data['course_id'])
            ->orderBy('position', 'desc')
            ->first();

        $data['position'] = $latestPosition ? $latestPosition->position + 1 : 0;

        $topic = Topic::create($data);
        return $this->response($topic);
    }
}
