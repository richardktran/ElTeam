<?php

namespace App\Http\Controllers;

use App\Imports\UsersImport;
use App\Supports\FileSystem\FileSystemService;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

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
            $path = sprintf('%s/%s-%s', $category, uniqid(), $file->getClientOriginalName());
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

    public function multipleUpload(Request $request)
    {
        $urls = [];
        $category = $request->all()['category'];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $path = sprintf('%s/%s-%s', $category, uniqid(), $file->getClientOriginalName());
                $this->fileSystemService->upload($path, $file->getRealPath(), false);
                $urls[] = [
                    'filename' => $file->getClientOriginalName(),
                    'path' => $path,
                    'url' => $this->fileSystemService->url($path),
                ];
            }
        }

        return $this->response($urls);
    }

    public function importStudents(Request $request)
    {
        $import = new UsersImport();
        Excel::import($import, $request->file('file'));
        $data = $import->getEmails();
        
        return $this->response($data);
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
