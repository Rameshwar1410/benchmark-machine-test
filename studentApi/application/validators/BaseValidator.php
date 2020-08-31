<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


class BaseValidator {

    protected $CI;

    public function __construct() {
        $this->CI =& get_instance();
        $this->formdata = json_decode(file_get_contents("php://input"), true);
    }
}