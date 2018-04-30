<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Buku_model extends CI_Model {

	public $variable;

	public function __construct()
	{
		parent::__construct();
		
	}

	Public function get_bukus($id=null)
	{	
		$where  = array('status' => 1);	
		if(isset($id)!=''){
			$where +=array('id' => $id);
			return $this->db->get_where('buku',$where)->row_array();
		}else{
			return $this->db->get_where('buku',$where)->result_array();
		}	
		
	}
	Public function save_buku($datas)
	{
		$result = $this->check_delete($datas);	
		if(isset($result)){	
			exit;
		}else{
			$response = array('success' => 'User saved successfully !');
			$data = array(
				'judul_buku' => $datas['judul_buku'],
				'pengarang' => $datas['pengarang'],
				'penerbit' => $datas['penerbit'],
				'tahun_terbit' => $datas['tahun_terbit']
			);
			if(isset($datas['id']) && !isset($datas['delete'])){
				$where =array('id' => $datas['id']);
				$this->db->update('buku',$data,$where);
			}else{
				$this->db->insert('buku',$data);
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
			$this->db->update('buku',$data,$where);
			return $response;

		}
	}

}

/* End of file  */
/* Location: ./application/models/ */