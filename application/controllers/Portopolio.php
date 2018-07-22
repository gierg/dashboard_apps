<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
include_once(APPPATH.'libraries/REST_Controller.php');
class Portopolio extends REST_Controller {

	public function __construct()
	{
		parent::__construct();

		if (isset($_SERVER['HTTP_ORIGIN'])){
			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
		}

		// Access-Control headers are received during OPTIONS requests
		if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') 
		{

			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
				header("Access-Control-Allow-Methods: GET, POST,OPTIONS,PUT");         

			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
				header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

			exit(0);
		}

		$this->load->model('Portopolio_model','portopolio'); // Loading model 
	}

	/*Tampil data*/
	public function index_get($id=null)
	{
		// $id=$this->get('id');
			$result = $this->portopolio->get_portopolios($id);
			$this->_setOutput($query);
	}

	/*simpan*/
	public function index_post(){
			$datas = json_decode(file_get_contents("php://input"));
			$query = $this->portopolio->save_portopolio($this->post($datas));
			$this->_setOutput($query);
	}

	/*Update*/
	public function single_put($id=null){
		$datas=[
				'id' => $id,
				'no_faktur' => $this->put('no_faktur'),
		        'tanggal' => $this->put('tanggal'),
		        'id_anggota' => $this->put('id_anggota')
				];
		$query = $this->portopolio->save_portopolio($datas);
		$this->_setOutput($query);
	}

	/*Update*/
	public function single_delete($id=null){
		$datas=[
				'id' => $id,
				'delete' => true
				];
		$query = $this->portopolio->check_delete($datas);
		$this->_setOutput($query);
	}
	
	/*set output */
	private function _setOutput($data){	    
		header('Cache-Control: no-cache, must-revalidate');
		header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
		header('Content-type: application/json');

		echo json_encode($data);
	    }

}
