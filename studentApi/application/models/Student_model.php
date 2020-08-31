<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

/**
 * Class : User_model (Member Model)
 * User model class to get to handle user related data
 * @author : Ramu
 * @version : 1.1
 * @since : 15 November 2016
 */

class Student_model extends CI_Model
{
    /**
     * This function used to get user information by id with role
     * @param number $userId : This is user id
     * @return aray $result : This is user information
     */
    public function getAllMember()
    {
        $this->db->select('id', 'first_name', 'last_name', 'pocket_money');
        $this->db->from('student');
        $query = $this->db->get();
        
        return $query->result();
    }

    /*

    */
    public function addStudentInfo($data)
    {
        return $result = $this->db->insert('student', $data);
    }
}
