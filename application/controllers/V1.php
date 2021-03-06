<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
include_once(APPPATH.'libraries/REST_Controller.php');
class V1 extends REST_Controller {

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

		$this->load->model('user_model','user'); // Loading model 
	}

	/*Tampil data*/
	public function index_get($id=null)
	{
		// $id=$this->get('id');
			$result = $this->user->get_users($id);
			echo json_encode($result);
	}

	/*simpan*/
	public function index_post(){
			$datas = json_decode(file_get_contents("php://input"));
			$query = $this->user->save_user($this->post($datas));
			echo json_encode($query);
	}

	/*Update*/
	public function single_put($id=null){
		$datas=[
				'_id' => $id,
				'firstName' => $this->put('firstName'),
				'lastName' => $this->put('lastName'),
				'email' => $this->put('email'),
				'mobileNumber' => $this->put('mobileNumber')
				];
		$query = $this->user->save_user($datas);
		echo json_encode($query);
	}

	/*Update*/
	public function single_delete($id=null){
		$datas=[
				'_id' => $id,
				'delete' => true
				];
		$query = $this->user->check_delete($datas);
		echo json_encode($query);
	}

}
