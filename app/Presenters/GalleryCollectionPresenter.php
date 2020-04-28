<?php

namespace App\Presenters;

use App\Transformers\GalleryCollectionTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class GalleryCollectionPresenter
 *
 * @package namespace App\Presenters;
 */
class GalleryCollectionPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new GalleryCollectionTransformer();
    }
}
