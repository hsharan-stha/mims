<?php
return [
    'images' => [
        'storage' => 'local',
        'path' => storage_path() . '/uploads/images/',
        'image_thumbnails' => [
            'thumbnail' => [100, 100],
        ]
    ],
    'attachments' => [
        'storage' => 'local',
        'path' => storage_path() . '/uploads/attachments/',
    ],
    'videos' => [
        'storage' => 'local',
        'path' => storage_path() . '/uploads/videos/',
    ],
    'audios' => [
        'storage' => 'local',
        'path' => storage_path() . '/uploads/audios/',
    ],
];
