<?php
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * Class Student_model
 */
class Student_model extends CI_Model
{
    /**
     * Get all student required details
     *
     * @return array
     */
    public function getAllStudentDetails()
    {
        $this->db->select('id', 'first_name', 'last_name', 'pocket_money');
        $this->db->from('student');
        $query = $this->db->get();
        
        return $query->result();
    }

    /**
     * Add new student
     * 
     * @param array $data
     * @return bool
     */
    public function addStudentInfo(array $data): bool
    {
        return $result = $this->db->insert('student', $data);
    }
}
