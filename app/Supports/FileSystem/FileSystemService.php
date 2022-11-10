<?php

namespace App\Supports\FileSystem;

use App\Events\GenerateImageSizesEvent;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class FileSystemService
{
    public function uploadImageMultisizes($path, $filePath, $isPublic = true, $sizes = [])
    {
        $file = Image::make(file_get_contents($filePath));
        // Upload original
        self::uploadFileContent($path, $file->stream(), $isPublic);

        // Upload multi sizes
        event(new GenerateImageSizesEvent($path, $isPublic, $sizes));
    }

    public function getImageUrl($path, $isPublic = true, $sizeName = null): ?string
    {
        if (empty($path)) {
            return null;
        }

        if (!empty($sizeName)) {
            $tempPath = $this->getPathWithSize($path, $sizeName);
            if ($this->exists($tempPath, $isPublic)) {
                $path = $tempPath;
            }
        }

        return $this->url($path, $isPublic);
    }

    public function getPathWithSize($path, $sizeName): string
    {
        $pathInfo = pathinfo($path);
        if (!empty($pathInfo['dirname'])) {
            $pathWithSize = $pathInfo['dirname'] . '/';
        } else {
            $pathWithSize = '';
        }
        $pathWithSize .= sprintf(
            '%s-%s.%s',
            Arr::get($pathInfo, 'filename'),
            $sizeName,
            Arr::get($pathInfo, 'extension')
        );

        return $pathWithSize;
    }

    public function upload($path, $filePath, $isPublic = true): bool
    {
        return self::uploadFileContent($path, file_get_contents($filePath), $isPublic);
    }

    public static function uploadFileContent($path, $fileContent, $isPublic = true): bool
    {
        if ($isPublic) {
            return Storage::disk('s3')->put($path, $fileContent, 'public');
        }

        return Storage::disk('s3')->put($path, $fileContent, 'private');
    }

    public function url($path, $isPublic = true): string
    {
        if ($isPublic) {
            return Storage::disk('s3')->url($path);
        }

        return Storage::disk('s3')->temporaryUrl($path, Carbon::now()->addMinutes(config('filesystems.private_file_expiration_minutes')));
    }

    public function delete(array $paths, $isPublic = true): bool
    {
        if ($isPublic) {
            return Storage::disk('s3')->delete($paths);
        }

        return Storage::disk('s3')->delete($paths);
    }

    public function exists($path, $isPublic = true): bool
    {
        if ($isPublic) {
            return Storage::disk('s3')->exists($path);
        }

        return Storage::disk('s3')->exists($path);
    }

    public function move($oldPath, $newPath, $isPublic = true): bool
    {
        if ($isPublic) {
            return Storage::disk('s3')->move($oldPath, $newPath);
        }

        return Storage::disk('s3')->move($oldPath, $newPath);
    }

    public function copy($fromPath, $newPath, $isPublic = true): bool
    {
        if ($isPublic) {
            return Storage::disk('s3')->copy($fromPath, $newPath);
        }

        return Storage::disk('s3')->copy($fromPath, $newPath);
    }
}
