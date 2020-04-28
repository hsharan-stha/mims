<?php

namespace App\Widgets;

use App\Repositories\PostRepository;
use Arrilot\Widgets\AbstractWidget;
use Shortcode;
use Widget;


class Post extends AbstractWidget
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

            if($this->config['id'])
            {
                $data['post'] = $post->with(['downloads'])->find($this->config['id']);
                $data['categories'] = $post->with(['categories'])->find($this->config['id'])->categories;
                $this->registerShortcode();
                $data['post']->body = $this->compileShortcode($data['post']);
                return view("widgets.post", $data);
            }else{
                $data['posts'] = $post->with(['categories'])->all();
                return view("widgets.all_post", $data);
            }

        } catch (\Exception $e) {
        }
    }

    /**
     *
     */
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
        return Shortcode::compile($data->body);
    }


}