<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function index(Request $request)
    {
        $topics = Topic::where('course_id', $request->course_id)->orderBy('position', 'asc')->get();

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

    //Update all topics position in a course base on course_id
    public function updatePosition(Request $request)
    {
        $params = $request->all();
        $topics = $params['topics'];

        foreach ($topics as $topic) {
            $topicModel = Topic::find($topic['id']);
            $topicModel->position = $topic['position'];
            $topicModel->save();
        }
        $this->response(['message' => 'Update position successfully']);
    }

    public function toggleLock(Request $request, Topic $topic)
    {
        $topic->enable = !$topic->enable;
        $topic->save();
        return $this->response($topic);
    }
}
