<?php
defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
require APPPATH . '/validators/StudentFormValidator.php';
use Restserver\Libraries\REST_Controller;

/**
 * Class StudentController
 */
class StudentController extends REST_Controller
{
    /**
     * StudentController constructor.
     */
    public function __construct()
    {
        parent::__construct();

        $this->load->model('student_model');
        $this->load->library('form_validation');
    }

    /**
     * Add new student
     */
    public function addStudent_post()
    {
        $validator = new StudentFormValidator;
        $validator->studentValidation();
        
        if ($this->form_validation->run() === false) {
            $this->response(
                [
                    'status' => false,
                    'message' => 'Validation Error',
                    'data' => $this->form_validation->error_array(),
                ],
                REST_Controller::HTTP_EXPECTATION_FAILED
            );
        } else {
            $data = $this->input->post(null, true);
            $result = $this->student_model->addStudentInfo($data);

            if (!empty($result)) {
                $this->response(
                    [
                        'status' => true,
                        'message' => 'Data Added sucessfully',
                        'data' => '',
                    ],
                    REST_Controller::HTTP_OK
                );
            } else {
                $this->response(
                    [
                        'status' => false,
                        'message' => 'fail to save data',
                        'data' => $data,
                    ],
                    REST_Controller::HTTP_EXPECTATION_FAILED
                );
            }
        }
    }

    /**
     * Get all student details
     */
    public function student_get()
    {
        $studentDetail = $this->student_model->getAllMember();
        if (empty($studentDetail)) {
            $this->response(
                [
                    'status' => true,
                    'message' => 'User not found',
                    'data' => '',
                ],
                REST_Controller::HTTP_NOT_FOUND
            );
        }
        
        $this->response(
            [
                'status' => true,
                'message' => 'List of available users',
                'data' => $studentDetail
            ],
            REST_Controller::HTTP_OK
        );
    }
}
