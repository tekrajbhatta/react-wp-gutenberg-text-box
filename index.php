<?php

function vdplug_text_box_init()
{
    register_block_type(
        VDPLUG_DIR . '/build/blocks/text-box'
    );
}
add_action('init', 'vdplug_text_box_init');
