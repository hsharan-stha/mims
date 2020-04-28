<?php

namespace App\Widgets;

use App\Repositories\PostRepository;
use Arrilot\Widgets\AbstractWidget;
use Shortcode;
use Widget;

class WidgetWrapper extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run(PostRepository $post)
    {
        try {
            $data['post'] = $post->find($this->config['id']);
            $this->registerShortcode();
//            dd($data['post']->widget_content);
            $data['post']->widget_content = $this->compileShortcode($data['post']);

            return $data['post']->widget_content;
        } catch (\Exception $e) {
        }
    }

    public function registerShortcode()
    {
        Shortcode::register('widget', function ($parameters = array(), $content, $name) {
            $widgetName = array_shift($parameters);
            $return = Shortcode::compile($content);
            $return .= Widget::run($widgetName, $parameters);
            return $return;
        });
    }

    public function compileShortcode($data)
    {
        return Shortcode::compile($data->widget_content);
    }
}