<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Services\TaskService;
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

        $activity = Activity::create($data);

        if ($activity->type == Activity::TYPE_TASK) {
            //Get all group id of course
            $groupIds = $activity->topic->course->groups->pluck('id')->toArray();
            $sectionId = $activity->topic->course->sections->where('title', ' 📃 Cần làm')->first()->id;

            // Create new task for each group
            foreach ($groupIds as $groupId) {
                $group = $activity->topic->course->groups->where('id', $groupId)->first();
                app(TaskService::class)->createTask([
                    'title' => $activity->name,
                    'content' => $activity->content,
                    'deadline' => $activity->end_date,
                    'section_id' => $sectionId,
                    'activity_id' => $activity->id,
                ], $group);
            }
        }


        return $this->response($activity);
    }

    public function update(Request $request, Activity $activity)
    {
        $activity->update($request->all());
        return $this->response($activity);
    }

    public function destroy(Activity $activity)
    {
        $activity->delete();
        return $this->response($activity);
    }

    public function updateActivities(Request $request)
    {
        $data = $request->all();
        $activities = $data['activities'];

        foreach ($activities as $activity) {
            $activityModel = Activity::find($activity['id']);
            $activityModel->position = $activity['position'];
            $activityModel->save();
        }

        return $this->response($activities);
    }

    public function toggleLock(Request $request, Activity $activity)
    {
        $activity->enable = !$activity->enable;
        $activity->save();

        return $this->response($activity);
    }
}
