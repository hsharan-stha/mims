<?php

namespace App\Presenters;

use App\Transformers\LectureNoteTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class LectureNotePresenter
 *
 * @package namespace App\Presenters;
 */
class LectureNotePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new LectureNoteTransformer();
    }
}
