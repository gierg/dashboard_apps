<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Anggota_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	Public function get_angotas($id=null)
	{	
		$where  = array('status' => 1);	
		if(isset($id)!=''){
			$where +=array('id' => $id);
			return $this->db->get_where('anggota',$where)->row_array();
		}else{
			return $this->db->get_where('anggota',$where)->result_array();
		}	
		
	}
	Public function save_anggota($datas)
	{
		$result = $this->check_delete($datas);	
		if(isset($result)){	
			exit;
		}else{
			$response = array('success' => 'User saved successfully !');
			$data = array(
				'nama_anggota' => $datas['nama_anggota'],
				'alamat' => $datas['alamat'],
				'no_telepon' => $datas['no_telepon'],
				'foto' => $datas['foto']
			);
			if(isset($datas['id']) && !isset($datas['delete'])){
				$where =array('id' => $datas['id']);
				$this->db->update('anggota',$data,$where);
			}else{
				$this->db->insert('anggota',$data);
			}	
			return $response;
		}	
	} 
	Public function check_delete($datas)
	{
		$response = array('success' => 'User deleted successfully !');
		if(isset($datas['delete']) && isset($datas['id'])){
			$where =array('id' => $datas['id']);
			$data =array('status' => 0);
			$this->db->update('anggota',$data,$where);
			return $response;

		}
	}

}

/* End of file  */
/* Location: ./application/models/ */