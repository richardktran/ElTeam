<?php

namespace App\Http\Controllers;

use App\Supports\FileSystem\FileSystemService;
use Illuminate\Http\Request;

class FileController extends Controller
{
    private $fileSystemService;

    public function __construct(FileSystemService $fileSystemService)
    {
        $this->fileSystemService = $fileSystemService;
    }

    public function upload(Request $request)
    {
        $url = [];
        $category = $request->all()['category'];
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = sprintf('%s/%s.%s', $category, uniqid(), $file->getClientOriginalExtension());
            $this->fileSystemService->upload($path, $file->getRealPath(), false);
            $url = [
                'name' => $file->getClientOriginalName(),
                'path' => $path,
                'status' => 'done',
                'url' => $this->fileSystemService->url($path),
            ];
        }

        return $this->response($url);
    }

    public function destroy(Request $request)
    {
        $paths = explode(',', $request->get('paths'));
        foreach ($paths as $path) {
            if (!$this->fileSystemService->exists($path)) {
                return $this->responseError('uploaded_failed_file_not_found');
            }
        }

        $this->fileSystemService->delete($paths);

        return $this->response([]);
    }
}
