
-- Dumping structure for table angular_four.user_details
CREATE TABLE IF NOT EXISTS `portopolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  `created_ip` varchar(15),
  `created_by` varchar(200), 
  `updated_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  `updated_ip` varchar(15), 
  `updated_by`varchar(200),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

