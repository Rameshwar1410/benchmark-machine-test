<?php
if (! defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require 'BaseValidator.php';

/**
 * Class StudentFormValidator
 */
class StudentFormValidator extends BaseValidator
{
    /**
     * StudentFormValidator constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->CI->load->library('form_validation');
    }

    /**
     * Validate first registration form
     *
     * @return bool
     */
    public function studentValidation(): bool
    {
        $this->CI->form_validation->set_rules('first_name', 'First Name', 'trim|required');
        $this->CI->form_validation->set_rules('last_name', 'Last Name', 'trim|required');
        $this->CI->form_validation->set_rules('email', 'Email ID', 'trim|required|valid_email|max_length[128]|is_unique[student.email]');
        $this->CI->form_validation->set_rules('password', 'password', 'trim|required');
        $this->CI->form_validation->set_rules('age', 'age', 'trim|required');
        $this->CI->form_validation->set_rules('city', 'city', 'trim|required');
        $this->CI->form_validation->set_rules('state', 'state', 'trim|required');
        $this->CI->form_validation->set_rules('country', 'country', 'trim|required');
        $this->CI->form_validation->set_rules('zip', 'zip code', 'trim|required');
      
        return ($this->CI->form_validation->run() == false) ? false : true;
    }
}
