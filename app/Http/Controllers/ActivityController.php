<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function index(Request $request)
    {
        $activities = Activity::where('topic_id', $request->topic_id)->orderBy('position', 'asc')->get();

        return $this->response($activities);
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $latestPosition = Activity::where('topic_id', $data['topic_id'])
            ->orderBy('position', 'desc')
            ->first();

        $data['position'] = $latestPosition ? $latestPosition->position + 1 : 0;

        $topic = Activity::create($data);
        return $this->response($topic);
    }
}
