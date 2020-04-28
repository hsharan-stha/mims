<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Image;
use File;
use Mockery\CountValidator\Exception;


/**
 * Class UploadController
 * @package App\Http\Controllers\Admin
 */
class UploadController extends ApiBaseController
{
    /**
     * @return mixed
     */
    public function getImagePath()
    {
        return Config('upload.images.path');
    }


    public function getAttachmentPath()
    {
        return Config('upload.attachments.path');
    }

    public function getVideoPath(){
        return Config('upload.videos.path');
    }

    public function getAudiopath(){
        return Config('upload.audios.path');
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeImage($file)
    {
        $path = $this->getImagePath();
        $imageName = strtolower(strftime(time()));
        $clientExtension = $file->getClientOriginalExtension();
        $imageDetails = [
            'clientOriginalName' => $file->getClientOriginalName(),
            'clientOriginalExtension' => $file->getClientOriginalExtension(),
            'clientSize' => $this->human_filesize($file->getClientSize()),
            'mimeType' => $file->getClientMimeType(),
            'imageName' => $imageName,
        ];

        try {
            $image = Image::make($file->getRealPath());
            $imageNameWithPath = $path . $imageName . '.' . $clientExtension;
            $image->save($imageNameWithPath);
            $imageDetails['images']['original'] = $imageName . '.' . $clientExtension;
            $thumbnails = Config('upload.images.image_thumbnails');
            foreach ($thumbnails as $thumbnailKey => $thumbnail) {
                $width = $thumbnail[0];
                $height = $thumbnail[1];
                $imageNameWithPath = $path . $imageName . '_' . $thumbnailKey . '.' . $clientExtension;
                $image = Image::make($file->getRealPath());
                $image->resize($width, $height, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->save($imageNameWithPath);
                $imageDetails['images'][$thumbnailKey] = $imageName . '_' . $thumbnailKey . '.' . $clientExtension;
            }
            $imageName = $imageName . '.' . $clientExtension;
            return ($imageDetails);
        } catch (Exception $e) {
            return Response::json([
                'error' => [
                    'message' => $e,
                    'status_code' => 404,
                ],
            ]);
        }
    }

    /**
     * @param $file
     * @return array|bool
     */
    public function storeAttachment($file)
    {
        $path = $this->getAttachmentPath();
        $attachmentName = strtolower(str_random(16));
        $clientSize = $this->human_filesize($file->getClientSize());
        $clientOriginalExtension = $file->getClientOriginalExtension();
        $clientOriginalName = $file->getClientOriginalName();
        $mimeType = $file->getClientMimeType();
        try {
            $file->move($path, $attachmentName . '.' . $clientOriginalExtension);
            return [
                'clientOriginalName' => $clientOriginalName,
                'attachmentName' => (string)$attachmentName . '.' . $clientOriginalExtension,
                'clientOriginalExtension' => $clientOriginalExtension,
                'mimeType' => $mimeType,
                'clientSize' => $clientSize,
            ];
        } catch (Exception $e) {
            return Response::json([
                'error' => [
                    'message' => $e,
                    'status_code' => 404,
                ],
            ]);
        }
    }

    public function storeVideo($file)
    {
        $path = $this->getVideoPath();
        $videoName = strtolower(str_random(16));
        $videoDetails = [
            'clientOriginalName' => $file->getClientOriginalName(),
            'clientOriginalExtension' => $file->getClientOriginalExtension(),
            'clientSize' => $this->human_filesize($file->getClientSize()),
            'mimeType' => $file->getClientMimeType(),
            'videoName' => $videoName.'.'.$file->getClientOriginalExtension(),
        ];
        try {
            $file->move($path, $videoName . '.' . $videoDetails['clientOriginalExtension']);
            return $videoDetails;
        } catch (Exception $e) {
            return Response::json([
                'error' => [
                    'message' => $e,
                    'status_code' => 404,
                ],
            ]);
        }


    }

    public function storeAudio($file)
    {
        $path = $this->getAudioPath();
        $audioName = strtolower(str_random(16));
        $audioDetails = [
            'clientOriginalName' => $file->getClientOriginalName(),
            'clientOriginalExtension' => $file->getClientOriginalExtension(),
            'clientSize' => $this->human_filesize($file->getClientSize()),
            'mimeType' => $file->getClientMimeType(),
            'audioName' => $audioName.'.'.$file->getClientOriginalExtension(),
        ];
        try {
            $file->move($path, $audioName . '.' . $audioDetails['clientOriginalExtension']);
            return $audioDetails;
        } catch (Exception $e) {
            return Response::json([
                'error' => [
                    'message' => $e,
                    'status_code' => 404,
                ],
            ]);
        }


    }




    public function destroyImage($imageDetails)
    {
        array_map([$this, 'deleteImages'], $imageDetails['images']);
    }


    public function destroyAttachment($filename)
    {
        $path = $this->getAttachmentPath();
        $fileName = $path . $filename;
        if (File::exists($fileName)) {
            File::delete($fileName);
        }
    }
    public function destroyVideo($filename)
    {
        $path = $this->getVideoPath();
        $fileName = $path . $filename;
        if (File::exists($fileName)) {
            File::delete($fileName);
        }
    }

    public function destroyAudio($filename)
    {
        $path = $this->getAudioPath();
        $fileName = $path . $filename;
        if (File::exists($fileName)) {
            File::delete($fileName);
        }
    }


    /**
     * @param $path
     * @param $images
     */
    public function deleteImages($images)
    {
        $path = $this->getImagePath();
        $fileName = $path . $images;
        if (File::exists($fileName)) {
            File::delete($fileName);
        }
    }

    public function human_filesize($bytes, $decimals = 2)
    {
        $size = array('B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
        $factor = floor((strlen($bytes) - 1) / 3);
        return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$size[$factor];
    }

    /**
     *
     */
    public function saveImage(Request $request)
    {
        $file = $request->file('upload');
        $path = $this->getImagePath();
        $image = Image::make($file->getRealPath());
        $clientExtension = $file->getClientOriginalExtension();
        $imageName = $file->getClientOriginalName();
        $imageNameWithPath = $path . $imageName;
        $image->save($imageNameWithPath);
        $imageNameWithPath = "http://localhost/lpsn/public/uploads/images/" . $imageName;

        /* for ck-editor*/
        $funcNum = $request->input('CKEditorFuncNum');
        $CKEditor = $request->input('CKEditor');
        $langCode = $request->input('langCode');
        $message = "Image Uploaded!!!";
        echo "<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction($funcNum,'$imageNameWithPath','$message');</scrpit>";
    }
}
