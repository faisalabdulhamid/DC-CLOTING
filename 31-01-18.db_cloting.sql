/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.1.13-MariaDB : Database - db_clothing
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_clothing` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_clothing`;

/*Table structure for table `desain` */

DROP TABLE IF EXISTS `desain`;

CREATE TABLE `desain` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desainable_id` int(10) unsigned NOT NULL,
  `desainable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `desain` */

insert  into `desain`(`id`,`gambar`,`desainable_id`,`desainable_type`,`status`,`created_at`,`updated_at`) values (2,'https://5.imimg.com/data5/TO/GS/MY-2190204/men-plain-t-shirt-250x250.jpg',1,'App\\Entities\\Pelanggan',0,NULL,'2018-01-30 20:19:08'),(3,'https://4.imimg.com/data4/TW/OR/MY-1044551/dri-fit-t-shirts-250x250.jpg',2,'App\\Entities\\Pegawai',0,NULL,NULL),(4,'https://5.imimg.com/data5/UK/WV/MY-99914/men-27s-casual-t-shirts-250x250.jpg',2,'App\\Entities\\Pelanggan',0,NULL,NULL),(7,'https://ae01.alicdn.com/kf/HTB1xW7tIXXXXXcdXFXXq6xXFXXXs/A-ARCITON-Cotton-Casual-T-Shirt-Summer-Short-Sleeve-Men-Tee-Shirts-Male-Print-Tops-Men.jpg',1,'App\\Entities\\Pegawai',1,'2017-12-28 20:53:44','2017-12-28 20:53:44'),(8,'http://3.imimg.com/data3/CI/VU/MY-9956501/men-s-designer-polo-t-shirt-250x250.jpg',1,'App\\Entities\\Pegawai',0,'2017-12-28 20:54:02','2017-12-28 20:54:02');

/*Table structure for table `jawaban_kuesioner` */

DROP TABLE IF EXISTS `jawaban_kuesioner`;

CREATE TABLE `jawaban_kuesioner` (
  `kuesioner_id` int(10) unsigned NOT NULL,
  `pelanggan_id` int(10) unsigned NOT NULL,
  `nilai` tinyint(4) NOT NULL,
  KEY `jawaban_kuesioner_pelanggan_id_foreign` (`pelanggan_id`),
  KEY `jawaban_kuesioner_kuesioner_id_foreign` (`kuesioner_id`),
  CONSTRAINT `jawaban_kuesioner_kuesioner_id_foreign` FOREIGN KEY (`kuesioner_id`) REFERENCES `kuesioner` (`id`) ON DELETE CASCADE,
  CONSTRAINT `jawaban_kuesioner_pelanggan_id_foreign` FOREIGN KEY (`pelanggan_id`) REFERENCES `pelanggan` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `jawaban_kuesioner` */

/*Table structure for table `kategori` */

DROP TABLE IF EXISTS `kategori`;

CREATE TABLE `kategori` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kategori` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `kategori` */

insert  into `kategori`(`id`,`kategori`,`created_at`,`updated_at`) values (2,'Jaket','2017-12-28 12:21:51','2017-12-28 12:21:51'),(3,'T-Shirt','2017-12-28 12:21:51','2017-12-28 12:21:51'),(4,'Kemeja','2017-12-28 12:21:51','2017-12-28 12:21:51');

/*Table structure for table `kota` */

DROP TABLE IF EXISTS `kota`;

CREATE TABLE `kota` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kota` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provinsi_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kota_provinsi_id_foreign` (`provinsi_id`),
  CONSTRAINT `kota_provinsi_id_foreign` FOREIGN KEY (`provinsi_id`) REFERENCES `provinsi` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `kota` */

insert  into `kota`(`id`,`kota`,`provinsi_id`,`created_at`,`updated_at`) values (1,'Bandung',12,'2017-12-01 04:20:11','2017-12-01 04:20:11'),(2,'Kota Tasikmalaya',12,'2017-12-01 04:20:11','2017-12-01 04:20:11'),(3,'Kab Tasikmalaya',12,'2017-12-01 04:20:11','2017-12-01 04:20:11'),(4,'Bekasi',12,'2017-12-01 04:20:11','2017-12-01 04:20:11'),(5,'Depok',1,'2017-12-01 04:20:11','2017-12-15 22:50:25'),(6,'Bogor',12,'2017-12-01 04:20:11','2017-12-01 04:20:11'),(7,'Kuningan',12,'2017-12-01 04:20:12','2017-12-01 04:20:12'),(8,'Majalengka',12,'2017-12-01 04:20:12','2017-12-01 04:20:12'),(9,'Cirebon',12,'2017-12-01 04:20:12','2017-12-01 04:20:12'),(10,'Indramayu',12,'2017-12-01 04:20:12','2017-12-01 04:20:12'),(11,'Garut',12,'2017-12-01 04:20:12','2017-12-01 04:20:12'),(12,'Pangandaran',12,'2017-12-01 04:20:12','2017-12-01 04:20:12'),(13,'Ciamis',12,'2017-12-01 04:20:12','2017-12-01 04:20:12'),(14,'Cibeureum',12,'2017-12-15 23:18:24','2017-12-15 23:18:24');

/*Table structure for table `kuesioner` */

DROP TABLE IF EXISTS `kuesioner`;

CREATE TABLE `kuesioner` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `soal` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jawaban` text COLLATE utf8mb4_unicode_ci COMMENT 'jSON',
  `pegawai_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kuesioner_pegawai_id_foreign` (`pegawai_id`),
  CONSTRAINT `kuesioner_pegawai_id_foreign` FOREIGN KEY (`pegawai_id`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `kuesioner` */

insert  into `kuesioner`(`id`,`soal`,`jawaban`,`pegawai_id`,`created_at`,`updated_at`) values (18,'Anda memilih produk DC Clothing karena memiliki kualitas produk yang baik','[{\"key\":\"Jawaban 1\",\"value\":1},{\"key\":\"Jawaban 2\",\"value\":2},{\"key\":\"Jawaban 3\",\"value\":3},{\"key\":\"Tanbah 2\",\"value\":4}]',2,'2017-12-28 12:04:24','2018-01-22 17:48:25'),(19,'Kualitas produk DC Clothing  tetap terjaga keawetannya meskipun dipakai dalam jangka waktu yang lama','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:24','2017-12-28 12:04:24'),(20,'Anda memilih produk DC Clothing karena Kenyamanan dari bahan yang digunakan dalam produk tersebut','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:24','2017-12-28 12:04:24'),(21,'Kemasan yang rapi dan baik sehingga terjaga kualitas produk','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(22,'Anda memilih produk DC Clothing karena Kualitas jahitan dari produk tersebut rapi, kuat dan bagus','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(23,'Produk DC Clothing yang diberikan mempunyai ciri tersendiri','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(24,'Varian warna dan ukuran tersedia sesuai dengan kebutuhan anda','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(25,'Harga produk yang di tawarkan beragam sehingga bisa di jangkau semua kalangan','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(26,'Hanya dengan melihat lambang atau logo DC Clothing Anda dapat membedakan dengan produk lain','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(27,'Anda membeli produk DC Clothing karena produk tersebut sesuai dengan keinginan Anda','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(28,'Produk DC Clothing mempunyai berbagai macam desain & model yang menarik','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(29,'Model produk DC Clothing mengikuti model saat ini','[{\"key\":\"Jawaban 1\", \"value\":\"1\"},{\"key\":\"Jawaban 2\", \"value\":\"2\"},{\"key\":\"Jawaban 3\", \"value\":\"3\"}]',1,'2017-12-28 12:04:25','2017-12-28 12:04:25'),(30,'Soal 12','[{\"val\":\"Jawaban 1\",\"key\":1},{\"val\":\"Jawaban 2\",\"key\":2}]',2,'2018-01-22 17:36:04','2018-01-22 17:36:04'),(31,'Spoal Contoh 1','[{\"key\":\"Jawaban Soal Contoh 1\",\"value\":1},{\"key\":\"jawaban Soal Contoh 2\",\"value\":2}]',1,'2018-01-30 19:09:29','2018-01-30 19:09:29');

/*Table structure for table `like` */

DROP TABLE IF EXISTS `like`;

CREATE TABLE `like` (
  `pelanggan_id` int(10) unsigned NOT NULL,
  `desain_id` int(10) unsigned NOT NULL,
  `suka` tinyint(1) DEFAULT NULL,
  KEY `like_desain_id_foreign` (`desain_id`),
  KEY `like_pelanggan_id_foreign` (`pelanggan_id`),
  CONSTRAINT `like_desain_id_foreign` FOREIGN KEY (`desain_id`) REFERENCES `desain` (`id`) ON DELETE CASCADE,
  CONSTRAINT `like_pelanggan_id_foreign` FOREIGN KEY (`pelanggan_id`) REFERENCES `pelanggan` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `like` */

insert  into `like`(`pelanggan_id`,`desain_id`,`suka`) values (1,2,1),(1,3,0),(1,4,1),(1,8,0);

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values (16,'2014_10_12_000000_create_users_table',1),(17,'2014_10_12_100000_create_password_resets_table',1),(18,'2017_12_01_035431_create_provinsis_table',1),(19,'2017_12_01_035510_create_kotas_table',1),(20,'2017_12_01_036112_create_pelanggans_table',1),(21,'2017_12_01_036956_create_kuesioners_table',1),(22,'2017_12_01_040138_buat_table_jawaban_kuesioner',1),(23,'2017_12_01_040627_alter_kuesioner',1),(24,'2016_06_01_000001_create_oauth_auth_codes_table',2),(25,'2016_06_01_000002_create_oauth_access_tokens_table',2),(26,'2016_06_01_000003_create_oauth_refresh_tokens_table',2),(27,'2016_06_01_000004_create_oauth_clients_table',2),(28,'2016_06_01_000005_create_oauth_personal_access_clients_table',2),(29,'2017_12_15_232102_BuatTableKategori',3),(30,'2017_12_15_232241_BuatTableProduk',4),(33,'2017_12_28_182420_buat_table_desain',5),(34,'2017_12_28_182603_buat_table_like',5),(35,'2017_12_29_131040_BuatTablePromosi',6),(37,'2018_01_22_011308_create_table_transaksi',7);

/*Table structure for table `oauth_access_tokens` */

DROP TABLE IF EXISTS `oauth_access_tokens`;

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_access_tokens` */

insert  into `oauth_access_tokens`(`id`,`user_id`,`client_id`,`name`,`scopes`,`revoked`,`created_at`,`updated_at`,`expires_at`) values ('05c09219f8eec6a5ff436f5ec16b0874cd1e016b2955f1c73694205cddfa47358547edf5f402f4e6',2,2,NULL,'[]',0,'2018-01-23 12:28:18','2018-01-23 12:28:18','2018-02-07 12:28:18'),('11c94590011813b5bee9052e61eaf66ef0de516bc2b85306013bd1a2912451bce854381fe6e4bca1',1,1,NULL,'[]',0,'2018-01-30 17:15:10','2018-01-30 17:15:10','2018-02-14 17:15:10'),('12c36f5a5c18250cf1ebe41490ad794993564295a75974a7a600b02d70db9dd85a0f457515b614c7',2,2,NULL,'[]',0,'2018-01-23 08:44:07','2018-01-23 08:44:07','2018-02-07 08:44:07'),('13f6f9a8cecff73a853d00b767f09cc6bf81d3bfea4f7e57bba36cc64331f88c77f83a579a90d844',1,1,NULL,'[]',0,'2018-01-30 16:48:27','2018-01-30 16:48:27','2018-02-14 16:48:27'),('16a8a8abcbdc39ca2e39b58fb5e79bb295cb5f063812145b7ce0b7e6e7923b71dfa2f869366f131e',2,2,NULL,'[]',0,'2018-01-21 15:11:08','2018-01-21 15:11:08','2018-02-05 15:11:08'),('1aa53bbd7b3fcae5fbe53a4492e2b20b8539b4b4cea06790997e9adc31aea86caef8e4062dfee504',1,2,NULL,'[]',0,'2018-01-22 15:40:11','2018-01-22 15:40:11','2018-02-06 15:40:11'),('211e74e0702791d00b8f946ba62ac34bbe18abae0784d45756a6cf408c34e0ca7f75c3a03a9b1359',1,2,NULL,'[]',0,'2018-01-21 15:12:15','2018-01-21 15:12:15','2018-02-05 15:12:15'),('247592e10183a97594ee2e1a05ad16fa69719f3eac9b7c9ea32e42050037421c4f135ae8f492acdc',2,2,NULL,'[]',0,'2018-01-21 15:32:31','2018-01-21 15:32:31','2018-02-05 15:32:31'),('2ac3fbfcc93313a125bd932efca3f821ba181513264fb36a1a97c08faed50d2d19df1e4fa90c89ab',1,1,NULL,'[]',0,'2018-01-30 17:10:54','2018-01-30 17:10:54','2018-02-14 17:10:54'),('2cd5ed74cb3c6471ac914b1349d5e5c306fdbe3cbeffdf6fa2283957d5853e091352a76e56fa8180',2,2,NULL,'[]',0,'2018-01-23 23:17:37','2018-01-23 23:17:37','2018-02-07 23:17:37'),('2f7ca4230ce19549248f1f3f90d106b41ab5c3fc6bf0f54dc9bb2e7234e94f2205047418134fa99a',2,2,NULL,'[]',0,'2018-01-23 06:50:30','2018-01-23 06:50:30','2018-02-07 06:50:30'),('33108584e405bc3d86d866e0b353f39b51f61031af0a9879b1b53b686322bffdd8328ef8fbbfe97b',1,2,NULL,'[]',0,'2017-12-18 02:47:05','2017-12-18 02:47:05','2018-01-02 02:47:04'),('34f4d2b4a69a4ce1ec7e19f64133873952d7173241bb6d8e8e3f45a7202081c629a82a6f7b5883fa',2,2,NULL,'[]',0,'2018-01-23 08:58:49','2018-01-23 08:58:49','2018-02-07 08:58:49'),('3585903d38c3c39fb4a9df73fdf9f70a50ef059ef77e3af2f1e49aeba7e5d82c982046185ff397d5',1,2,NULL,'[]',0,'2018-01-21 15:18:42','2018-01-21 15:18:42','2018-02-05 15:18:42'),('376765455e77b4952d8f151084f80c6bc7a3e9075d3c707240657fbdb3036600a5f3ca3d0de4b8a0',2,2,NULL,'[]',0,'2018-01-22 17:42:26','2018-01-22 17:42:26','2018-02-06 17:42:26'),('3d570df3669aaf12a8de26699f098a69f76a88eb7c1bba3e23292b96897ea9fa9d42166047a81b4a',1,2,NULL,'[]',0,'2018-01-21 15:20:07','2018-01-21 15:20:07','2018-02-05 15:20:07'),('3fa17f4a637ea55db363603936fa7066cb0fae520e4e54768412c11af64e59903cbd32899f80ff67',1,2,NULL,'[]',0,'2018-01-21 15:14:09','2018-01-21 15:14:09','2018-02-05 15:14:09'),('40fa3f462e7d6cbb9a532a3b8c25a12f3326158a3901a473c0cc98f3ec8d9bc3ce3a53e0685d94d5',2,2,NULL,'[]',0,'2018-01-21 15:05:48','2018-01-21 15:05:48','2018-02-05 15:05:48'),('45ad9139ee0e47065404b43e0a5ce9f80e7f4f569a17486f8c38dd49fefca7b084632f4cb1951cdf',1,1,NULL,'[]',0,'2018-01-30 17:09:36','2018-01-30 17:09:36','2018-02-14 17:09:36'),('4d0ec4eea6eb1425a04cdcbf80c546f5a33309fe97cb000d162c454c9a2682ba3a5f2baaebdca1e5',1,1,NULL,'[]',0,'2018-01-30 17:08:32','2018-01-30 17:08:32','2018-02-14 17:08:32'),('52d1f97511a23cbc87d681c1b2ac367d99d2db99509a2741d5483b9f42fe69b59f88a45fce9a14e1',1,2,NULL,'[]',0,'2018-01-22 01:09:54','2018-01-22 01:09:54','2018-02-06 01:09:54'),('54dc0d11f025d2b01027b22827dc3147abf83a20fd60ee21024d0bb267d9911a416aeb5b891a5939',1,2,NULL,'[]',0,'2018-01-22 15:35:41','2018-01-22 15:35:41','2018-02-06 15:35:41'),('5673f776e012fbf398955e132197ac8865f4a1952be52237b6787b7276549a05aace86da7b5b491f',1,1,NULL,'[]',0,'2018-01-30 17:17:09','2018-01-30 17:17:09','2018-02-14 17:17:08'),('57e1c266c1d2a5ebb131915193b322cf04b0c1496d19d34dd8cae80d98847b29f061449a5094bacd',1,2,NULL,'[]',0,'2018-01-21 15:26:39','2018-01-21 15:26:39','2018-02-05 15:26:39'),('5b7ae07c44cbf451311ffa981b33ee5dedf844e63d971bca859cccca48c76bc6f6d4ae0d2717d11c',1,2,NULL,'[]',0,'2017-12-16 07:35:08','2017-12-16 07:35:08','2017-12-31 07:35:07'),('5f3226757926ea07f31576e502a927da58d4d90600ba638e49d309cdc6e0e3f8a32e153a34eefb2c',2,2,NULL,'[]',0,'2018-01-23 06:50:20','2018-01-23 06:50:20','2018-02-07 06:50:20'),('65c4d6b8223ea103a151a17134c5dc7e0b6766354b780e708977867f392487d3d0dd742a0df1ab67',2,2,NULL,'[]',0,'2018-01-21 15:11:10','2018-01-21 15:11:10','2018-02-05 15:11:10'),('6935e26c92d902e2678ec8a6d9fbc0bc0c7913c8f5f53f7156d5d83988a4120f4a1e611eb4b7037a',2,2,NULL,'[]',0,'2018-01-23 09:32:01','2018-01-23 09:32:01','2018-02-07 09:32:01'),('6e2a200ae68a3f3faa70c28b66a05a332e79a71e810d8a7d19967a85381109384a6ba0777b871816',1,2,NULL,'[]',0,'2017-12-16 00:37:48','2017-12-16 00:37:48','2017-12-31 00:37:48'),('72791e62d03d124757ac7fa3d2a80421483021f580b3b88e366f5f801ec64c7eafd98b282ab97e70',1,1,NULL,'[]',0,'2018-01-30 16:58:55','2018-01-30 16:58:55','2018-02-14 16:58:55'),('7287c44bd9b7571d25a4b9570fa723d6ce251e0e1dc6ebba6b563c6f348d0a0656c52e9d5c74f789',1,2,NULL,'[]',0,'2018-01-21 15:26:41','2018-01-21 15:26:41','2018-02-05 15:26:41'),('7550df3b3b9af5c6bd03070a5144bbac8fe393861d5346e3c9d275505738757c75397631e69b6fb5',1,1,NULL,'[]',0,'2018-01-30 16:59:51','2018-01-30 16:59:51','2018-02-14 16:59:51'),('7e965761f8742067cf4ad6ce4fe59cd16cf415e3898557b56be7a69198593ba468de569ba2e3f9ab',1,2,NULL,'[]',0,'2018-01-30 20:23:31','2018-01-30 20:23:31','2018-02-14 20:23:30'),('872032a9ef2500db8a84aa7146781cd636b5bb75a6ad4dc98b7560cd1b41d1af387df7fa2cce9f45',1,1,NULL,'[]',0,'2018-01-30 17:06:52','2018-01-30 17:06:52','2018-02-14 17:06:52'),('88298e683b2b68f85ed3db4a9ecd7df34f756d328a998941d6024b2d869f87281ead0628654c049d',2,2,NULL,'[]',0,'2018-01-23 06:47:57','2018-01-23 06:47:57','2018-02-07 06:47:56'),('8a7e27574a906833a1f3a90f75d5c0d4077a7b112b35ae20b4d7d296c7bfac4bc5605d32878633e1',1,1,NULL,'[]',0,'2018-01-30 17:09:04','2018-01-30 17:09:04','2018-02-14 17:09:04'),('8e97d004f71e1bea4a1a0d7b729698bd705c4b01474ded432f8dba4249c1962b164e81b89994c041',1,1,NULL,'[]',0,'2018-01-30 18:38:23','2018-01-30 18:38:23','2018-02-14 18:38:23'),('94a5d916015755d5a8f3618302b3af47255ab6a0365b1aa42ff265fe18e7faeb4b4af972aa8622d6',2,2,NULL,'[]',0,'2018-01-22 17:58:40','2018-01-22 17:58:40','2018-02-06 17:58:40'),('9871b86dbfac6cc011d62a97081ecd5999ee8dcd38e528d625793b5fef449810ea2d31af453b77e4',1,1,NULL,'[]',0,'2018-01-30 17:11:39','2018-01-30 17:11:39','2018-02-14 17:11:39'),('a73212b2b8e8e8ad742fc8fb37b915ae9741cb9c1fbd6ac5c54a230844e33c2a24b3d788d6be5695',1,1,NULL,'[]',0,'2018-01-30 17:08:12','2018-01-30 17:08:12','2018-02-14 17:08:12'),('ae89a660ac2cf0d15c67071d8e6ac6a37d4990a05e6691308f3278a154650b1e1bf254ccee241e2f',1,2,NULL,'[]',0,'2018-01-22 15:36:45','2018-01-22 15:36:45','2018-02-06 15:36:45'),('bfb4a0b440fef60c4762adde69b043dfa919e1c03401446045001a433c687c9df9782ec9eda77b5c',2,2,NULL,'[]',0,'2018-01-22 15:41:44','2018-01-22 15:41:44','2018-02-06 15:41:44'),('c5ebc34e199335ea79a85944e6ad6188461beab6e0662340975f2a06b1c6f10483f3a253609814d4',1,2,NULL,'[]',0,'2018-01-21 15:18:41','2018-01-21 15:18:41','2018-02-05 15:18:41'),('c694be10861f44dfceb3fedfc855d35b3d042cf4738cc6a1483a085c65467c2e91da23e653b05a93',1,2,NULL,'[]',0,'2018-01-30 18:39:11','2018-01-30 18:39:11','2018-02-14 18:39:11'),('ca0ce26eea4235df4b37ae9e7bd472ab4cc7b5f938604b9d75900ea5e864bf7213c1c4f6053d7d20',1,1,NULL,'[]',0,'2018-01-30 17:13:55','2018-01-30 17:13:55','2018-02-14 17:13:55'),('ca67869e628a03af1712438716cbba4ef7ac59fa140899f5ff69e918f1350bb9f34c881343a5631a',1,2,NULL,'[]',0,'2018-01-21 15:26:04','2018-01-21 15:26:04','2018-02-05 15:26:04'),('d612ab1f4aadcb5755872998d554e3ecdfb21093da00d2109f8434ee5da37a388745529d3e03ed39',2,2,NULL,'[]',0,'2018-01-23 23:17:37','2018-01-23 23:17:37','2018-02-07 23:17:36'),('d6b5a072485a95756c5a280e82de7d521f3be901f66fc94ebea46268526796f965ca14b6d50f85ed',2,2,NULL,'[]',0,'2018-01-22 15:52:09','2018-01-22 15:52:09','2018-02-06 15:52:09'),('d88b75c02dbed416d7fbd178d325fc55d628bc518a1246358d31b04187f757fc4a66e4977894e028',1,2,NULL,'[]',0,'2017-12-15 22:14:38','2017-12-15 22:14:38','2017-12-14 22:14:37'),('da492459f8fd21c813b784a907a65bd30b396b9ef4a60b1a7f04c7b203f7ba49d21c86514d3a9524',1,1,NULL,'[]',0,'2018-01-30 17:15:39','2018-01-30 17:15:39','2018-02-14 17:15:39'),('e9f0ccd6ae3174a39d49d6c0951e156313a2358d0cd9646d77af06f02f7cc21e39509d1d25ddeab4',1,2,NULL,'[]',0,'2018-01-30 16:10:16','2018-01-30 16:10:16','2018-02-14 16:10:16'),('eb7c5088f44191c37c267a3d394553911f84d445ff934113a4c53f4a6ea23eed083cc45afeceef23',1,2,NULL,'[]',0,'2018-01-21 15:07:07','2018-01-21 15:07:07','2018-02-05 15:07:07'),('f1d962b4fa25771470c6418385756c680253ce257fe3af883bd1ef68cf0b5bb002cc37286668911b',1,2,NULL,'[]',0,'2018-01-21 15:24:38','2018-01-21 15:24:38','2018-02-05 15:24:38'),('fc1a322274c8853f14e2983e09114d8b1aea0da381008f16c01ce6f76e325d9880295c777addd015',1,1,NULL,'[]',0,'2018-01-30 18:37:57','2018-01-30 18:37:57','2018-02-14 18:37:56'),('fd488378876c2fd1f6dd001665d567c8b039429204004e11e7516236561c0eb4d39e2a2d454822b0',1,2,NULL,'[]',0,'2018-01-21 09:56:55','2018-01-21 09:56:55','2018-02-05 09:56:55'),('fd9cd3844ec23b33f0839e3634cd4ae03def8c26fd7f43789b475da043d0ca7c27b1e2905b0efe94',1,1,NULL,'[]',0,'2018-01-30 16:50:32','2018-01-30 16:50:32','2018-02-14 16:50:32');

/*Table structure for table `oauth_auth_codes` */

DROP TABLE IF EXISTS `oauth_auth_codes`;

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_auth_codes` */

insert  into `oauth_auth_codes`(`id`,`user_id`,`client_id`,`scopes`,`revoked`,`expires_at`) values ('1',1,2,NULL,0,NULL);

/*Table structure for table `oauth_clients` */

DROP TABLE IF EXISTS `oauth_clients`;

CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_clients` */

insert  into `oauth_clients`(`id`,`user_id`,`name`,`secret`,`redirect`,`personal_access_client`,`password_client`,`revoked`,`created_at`,`updated_at`) values (1,NULL,'DC-Cloting Personal Access Client','DC-CLOTHING-CLIENT','http://localhost',0,1,0,'2017-12-01 20:13:48','2017-12-01 20:13:48'),(2,1,'DC-Cloting Password Grant Client','DC-CLOTHING','http://localhost',0,1,0,'2017-12-01 20:13:48','2017-12-01 20:13:48');

/*Table structure for table `oauth_personal_access_clients` */

DROP TABLE IF EXISTS `oauth_personal_access_clients`;

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_personal_access_clients` */

insert  into `oauth_personal_access_clients`(`id`,`client_id`,`created_at`,`updated_at`) values (1,1,'2017-12-01 20:13:48','2017-12-01 20:13:48');

/*Table structure for table `oauth_refresh_tokens` */

DROP TABLE IF EXISTS `oauth_refresh_tokens`;

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_refresh_tokens` */

insert  into `oauth_refresh_tokens`(`id`,`access_token_id`,`revoked`,`expires_at`) values ('0902d850e9059c6b4032e1293f33d3ab0d1b86bbcea54ab1959ff9b1e8eef6c61d76e141d04c103d','40fa3f462e7d6cbb9a532a3b8c25a12f3326158a3901a473c0cc98f3ec8d9bc3ce3a53e0685d94d5',0,'2018-02-20 15:05:48'),('0bceab63327283a7f4d02440e3a00adc2f33ac3fc3b0a031c3cd1a45f4a039413fc5aef402046ced','c5ebc34e199335ea79a85944e6ad6188461beab6e0662340975f2a06b1c6f10483f3a253609814d4',0,'2018-02-20 15:18:41'),('23a85e0c2072a39dca47e36b059716e4610aa42a1da2eb8de77f2c55b629a35499daf63a71f76d65','bfb4a0b440fef60c4762adde69b043dfa919e1c03401446045001a433c687c9df9782ec9eda77b5c',0,'2018-02-21 15:41:45'),('2bba628ce814b0167e64f00b1a54aac94bd5d76b4bbe07103f278253e41612d5305c4d3d167ded53','fd488378876c2fd1f6dd001665d567c8b039429204004e11e7516236561c0eb4d39e2a2d454822b0',0,'2018-02-20 09:56:56'),('2fd779a90aa99cd3dff918c43599375c4f3e9d9b6aed3227c619e9a269a0532afea86fdc47a4fb73','d88b75c02dbed416d7fbd178d325fc55d628bc518a1246358d31b04187f757fc4a66e4977894e028',0,'2017-12-01 22:14:37'),('32f74ec8905197aa109d0f1e7fe116285506263f50c1c875baa3108987d35321c198399a6e29c4bc','d612ab1f4aadcb5755872998d554e3ecdfb21093da00d2109f8434ee5da37a388745529d3e03ed39',0,'2018-02-22 23:17:37'),('330256a3ddc088b8ad9a8aa4bab06ce9638409e9fbb2d1faf0187cbb1ef458fee11457d54116d438','1aa53bbd7b3fcae5fbe53a4492e2b20b8539b4b4cea06790997e9adc31aea86caef8e4062dfee504',0,'2018-02-21 15:40:12'),('3c19abbf8d08f5a7c2c1b2c4d89bfe960dcdff4fdc11b753fac3dc80eebc839000fa511dfae5d7a2','5f3226757926ea07f31576e502a927da58d4d90600ba638e49d309cdc6e0e3f8a32e153a34eefb2c',0,'2018-02-22 06:50:20'),('3e8077e12fe0016eebac1e1c7406864dfa09b7c0c786b9f94d3eb09fec9812a1307b827d3b64400f','211e74e0702791d00b8f946ba62ac34bbe18abae0784d45756a6cf408c34e0ca7f75c3a03a9b1359',0,'2018-02-20 15:12:15'),('41e22d643d0820b71614319b767ffaf3cc61c10cb958e67b9ebfe822046eab0e43dd595f83500313','f1d962b4fa25771470c6418385756c680253ce257fe3af883bd1ef68cf0b5bb002cc37286668911b',0,'2018-02-20 15:24:38'),('42c603227a50c59948647a77c0ee3472072668ebd6af790999fd972506b2b6a74a6516ecb758ab03','fc1a322274c8853f14e2983e09114d8b1aea0da381008f16c01ce6f76e325d9880295c777addd015',0,'2018-03-01 18:37:56'),('46a60018fd8fff9b0fb344f84deff323ac88d7dfb5abb5c9efb6843e6397c976abc55cf05502e301','ca67869e628a03af1712438716cbba4ef7ac59fa140899f5ff69e918f1350bb9f34c881343a5631a',0,'2018-02-20 15:26:04'),('49740e2a0f64fe8fd6d86eb798b58002c05e050db7d84d78cd5762c8a140faf9e3e73505d8282496','376765455e77b4952d8f151084f80c6bc7a3e9075d3c707240657fbdb3036600a5f3ca3d0de4b8a0',0,'2018-02-21 17:42:26'),('49c46476c8f2124c0a77b6b17a2f7064e695d3428e9ec699c81496cd5af99e94dc9a8b71004b4fe2','54dc0d11f025d2b01027b22827dc3147abf83a20fd60ee21024d0bb267d9911a416aeb5b891a5939',0,'2018-02-21 15:35:41'),('518222fb6aaf1ebfe38ea78358e4b869b22a9da69507cc9d3b125bf834f263e8cb1c3302d09761cb','872032a9ef2500db8a84aa7146781cd636b5bb75a6ad4dc98b7560cd1b41d1af387df7fa2cce9f45',0,'2018-03-01 17:06:52'),('541867a2adccef1878fb2f4ab33bb19c803899025af84dc1f2bc1eec291f31f2ed09b0a59aeb6c32','6e2a200ae68a3f3faa70c28b66a05a332e79a71e810d8a7d19967a85381109384a6ba0777b871816',0,'2018-01-15 00:37:49'),('5461f37181d017ef6875fad00f3c5e715726216d29d9401881e392c1fff5b1813757bfc9865ef162','e9f0ccd6ae3174a39d49d6c0951e156313a2358d0cd9646d77af06f02f7cc21e39509d1d25ddeab4',0,'2018-03-01 16:10:17'),('54d57c90f4fa2f6d8111b4d487c120f5741408c72dbe529556e97608edbaa73351fe6f94624d0d5d','fd9cd3844ec23b33f0839e3634cd4ae03def8c26fd7f43789b475da043d0ca7c27b1e2905b0efe94',0,'2018-03-01 16:50:32'),('57a2aae899f36f8f3d0488bb31ab92fcfee65f24e612aa24c88d278fdd80ce920557c50143719da4','3fa17f4a637ea55db363603936fa7066cb0fae520e4e54768412c11af64e59903cbd32899f80ff67',0,'2018-02-20 15:14:09'),('5ff00dde3bc8c911cb89fd301d79a5e9e103338143297f888edbd040574091efcee8189eaf9e80cc','c694be10861f44dfceb3fedfc855d35b3d042cf4738cc6a1483a085c65467c2e91da23e653b05a93',0,'2018-03-01 18:39:11'),('66cc51994bafd901069854b394b0b80ebd876c21039664851158ed066ca6754056bf89bc0f36b489','ae89a660ac2cf0d15c67071d8e6ac6a37d4990a05e6691308f3278a154650b1e1bf254ccee241e2f',0,'2018-02-21 15:36:45'),('764be40533ddaead8e1b3be442073fbc238551f3d378171b066615e6803e4ff9cc4226db7e0a0a7b','7e965761f8742067cf4ad6ce4fe59cd16cf415e3898557b56be7a69198593ba468de569ba2e3f9ab',0,'2018-03-01 20:23:30'),('7731340c6bf4e4d5b98cc28608f591c35309e69987b505dbc9705ecea8706847bdc40694706cf8df','da492459f8fd21c813b784a907a65bd30b396b9ef4a60b1a7f04c7b203f7ba49d21c86514d3a9524',0,'2018-03-01 17:15:39'),('78bff33795c55bfaade4991a24c223c2194f9c0a30d9d503eb8d1822366c260bff6cc7d43d647a26','247592e10183a97594ee2e1a05ad16fa69719f3eac9b7c9ea32e42050037421c4f135ae8f492acdc',0,'2018-02-20 15:32:31'),('800b905e77da40f244dba8d57e95eb0d72d0f5ef4afb526796627e87075bc15f9d9340811eda9139','2cd5ed74cb3c6471ac914b1349d5e5c306fdbe3cbeffdf6fa2283957d5853e091352a76e56fa8180',0,'2018-02-22 23:17:38'),('83fde6ac11eea673a33f4df8c7f7699695d8cdab603e12ab0c6e7f8a28d896e5edd0a4f3bc828914','5b7ae07c44cbf451311ffa981b33ee5dedf844e63d971bca859cccca48c76bc6f6d4ae0d2717d11c',0,'2018-01-15 07:35:07'),('84915b243a97be850f54373cb97c7ae2313cf0fe650fbc8136f0181fd5d70cff471433828d08547f','d6b5a072485a95756c5a280e82de7d521f3be901f66fc94ebea46268526796f965ca14b6d50f85ed',0,'2018-02-21 15:52:09'),('88fcb98fb98a9216d7962e3aa8af942d931ea23189e9ebf32a7362e9974e0452eb5d67c6bafe21df','72791e62d03d124757ac7fa3d2a80421483021f580b3b88e366f5f801ec64c7eafd98b282ab97e70',0,'2018-03-01 16:58:55'),('8d84ec54d454a9c292ab12a91225bd74911812d77cec553d8525d6c5d110efaf0f3a8a15e16407bf','33108584e405bc3d86d866e0b353f39b51f61031af0a9879b1b53b686322bffdd8328ef8fbbfe97b',0,'2018-01-17 02:47:05'),('8feeeca01851ca57efcd8cc041280c681ecd6b9e7b3390e9b136b25cd5560bf357be5967e651ba63','8a7e27574a906833a1f3a90f75d5c0d4077a7b112b35ae20b4d7d296c7bfac4bc5605d32878633e1',0,'2018-03-01 17:09:04'),('98b8682369ed5645738c6cb177f2f6f517e1d05eef092400261f4958a2c0d1cb94b5dfb1fabef7e7','3d570df3669aaf12a8de26699f098a69f76a88eb7c1bba3e23292b96897ea9fa9d42166047a81b4a',0,'2018-02-20 15:20:08'),('9927792d6f97bb9ae756bc7e0d227bb8618e966a625421c4a15b1035f0248d7df8e41341e65632da','3585903d38c3c39fb4a9df73fdf9f70a50ef059ef77e3af2f1e49aeba7e5d82c982046185ff397d5',0,'2018-02-20 15:18:42'),('9a141b460b00ef16fc693a1fd716ee1567a566315b09fab15c8cff974d03a2fbc70cb24aed389ea0','ca0ce26eea4235df4b37ae9e7bd472ab4cc7b5f938604b9d75900ea5e864bf7213c1c4f6053d7d20',0,'2018-03-01 17:13:55'),('a06337a1a6faf91745743ada10eebad2747cba3efb27869127b74b8e16a3a6375b00a1d264eb8a4b','57e1c266c1d2a5ebb131915193b322cf04b0c1496d19d34dd8cae80d98847b29f061449a5094bacd',0,'2018-02-20 15:26:40'),('a42d747c55ff3fe64b4c8d77a6efe6ed6c668ceb02d09199f480220efa7c0d1eab464430a31ebdba','4d0ec4eea6eb1425a04cdcbf80c546f5a33309fe97cb000d162c454c9a2682ba3a5f2baaebdca1e5',0,'2018-03-01 17:08:32'),('a8277e7a64302e2d3b8406e0eddebaa26e1b03c607a458d0c66704a392a86d362153efd1629a42e6','2f7ca4230ce19549248f1f3f90d106b41ab5c3fc6bf0f54dc9bb2e7234e94f2205047418134fa99a',0,'2018-02-22 06:50:30'),('acef569b030662c2ec74321f51310992dd99d51d63b08d509cb54dacf4e48cc9d8ecb595ed82c14e','8e97d004f71e1bea4a1a0d7b729698bd705c4b01474ded432f8dba4249c1962b164e81b89994c041',0,'2018-03-01 18:38:23'),('b22a99caa983c5dfc31c6126d5d19016de31a6c2633d77b536ae21492ebef3df5974885be6e616cd','6935e26c92d902e2678ec8a6d9fbc0bc0c7913c8f5f53f7156d5d83988a4120f4a1e611eb4b7037a',0,'2018-02-22 09:32:01'),('b2715c534fbbccf52ea91db1a470562dc3945ab75180dbce4c16200f71fc2a8265f24cfec9a90ec7','9871b86dbfac6cc011d62a97081ecd5999ee8dcd38e528d625793b5fef449810ea2d31af453b77e4',0,'2018-03-01 17:11:39'),('b89201f2827977d4b23d330479bf5b83d4303ee80e19f772b855c16aa9c6a60e8993fa747a66f0b2','eb7c5088f44191c37c267a3d394553911f84d445ff934113a4c53f4a6ea23eed083cc45afeceef23',0,'2018-02-20 15:07:07'),('b9cc9945284ca64aaa043b500ddf4bc674e23e2a74ac7d82e0bcecee4602c1a9cb12101dcab687e9','7550df3b3b9af5c6bd03070a5144bbac8fe393861d5346e3c9d275505738757c75397631e69b6fb5',0,'2018-03-01 16:59:51'),('bd5d9bc980a40a3d20093a5f8180d85ebcfcdf4d427afd328ce286278dbdf7abc91210ff5a6f7f58','34f4d2b4a69a4ce1ec7e19f64133873952d7173241bb6d8e8e3f45a7202081c629a82a6f7b5883fa',0,'2018-02-22 08:58:50'),('c47ee06f59dba7412aab586e18372ca1adc195b05f084a3ca55f033d9be4b840057f4fe0735e303d','45ad9139ee0e47065404b43e0a5ce9f80e7f4f569a17486f8c38dd49fefca7b084632f4cb1951cdf',0,'2018-03-01 17:09:36'),('c54d10a87b3c56be653f75b0d7b6562c9591292504aa930e8ce78c125129efa188ed170587f852c2','12c36f5a5c18250cf1ebe41490ad794993564295a75974a7a600b02d70db9dd85a0f457515b614c7',0,'2018-02-22 08:44:07'),('cce4c954acc34d1321154baa1491c1ecb0f1c71131ba85b115374906cbbaeaae29af79f9537aaf50','05c09219f8eec6a5ff436f5ec16b0874cd1e016b2955f1c73694205cddfa47358547edf5f402f4e6',0,'2018-02-22 12:28:19'),('cfddf174bc262bfdb5529da4a2449a7a3f7ad3b1b62827d81cc725a2c40cc756452cd170037bba9a','52d1f97511a23cbc87d681c1b2ac367d99d2db99509a2741d5483b9f42fe69b59f88a45fce9a14e1',0,'2018-02-21 01:09:54'),('d35efd52479da8037ba17360063e76e58c9bca2342850c4fe56dfc0de2af969db0b0bef39352e970','94a5d916015755d5a8f3618302b3af47255ab6a0365b1aa42ff265fe18e7faeb4b4af972aa8622d6',0,'2018-02-21 17:58:41'),('d81efe5aabf761261a99398f94888e9214aebd7d720bbfefd05c5d1aa70e27bbdc7aeca34f0d5c4b','5673f776e012fbf398955e132197ac8865f4a1952be52237b6787b7276549a05aace86da7b5b491f',0,'2018-03-01 17:17:08'),('dae86a8cbeea583b8a6f9c078cd6a57ffec0f4bd2c1be68a078cd01668c07742745c367b85444b81','16a8a8abcbdc39ca2e39b58fb5e79bb295cb5f063812145b7ce0b7e6e7923b71dfa2f869366f131e',0,'2018-02-20 15:11:08'),('de4823e9b642005515a238d59658bff46e7c0b320d5cee4df63e6ea53499967a0ada08bb4508e458','13f6f9a8cecff73a853d00b767f09cc6bf81d3bfea4f7e57bba36cc64331f88c77f83a579a90d844',0,'2018-03-01 16:48:27'),('dedd40f20a04bb66d1357d97bab51269767cd2240b526fed59ee9885df0f9d2f0f6de4a2775f3c48','88298e683b2b68f85ed3db4a9ecd7df34f756d328a998941d6024b2d869f87281ead0628654c049d',0,'2018-02-22 06:47:57'),('e15fa9ff34f1e45eb333eb28ef07e6471a80587c8f687041deb975cacd1653229056619d305f3390','7287c44bd9b7571d25a4b9570fa723d6ce251e0e1dc6ebba6b563c6f348d0a0656c52e9d5c74f789',0,'2018-02-20 15:26:42'),('e714c5b23fc81d2f2a8f39081d0bad124e107ca87fb54e9090f431c2a4f6ed6d6fb94e17473b7bb7','65c4d6b8223ea103a151a17134c5dc7e0b6766354b780e708977867f392487d3d0dd742a0df1ab67',0,'2018-02-20 15:11:10'),('e76cd352e9af0e99f095aa6318fa7faeb31e0b2005ff0fd7cb30faa8ffc7dd9576bca8dfa07bc8c9','a73212b2b8e8e8ad742fc8fb37b915ae9741cb9c1fbd6ac5c54a230844e33c2a24b3d788d6be5695',0,'2018-03-01 17:08:12'),('f626614c1cb0522abd465cead75ae110667c3cfc958446b1eaf858e8b5dbe10eea4e352b172eec6b','11c94590011813b5bee9052e61eaf66ef0de516bc2b85306013bd1a2912451bce854381fe6e4bca1',0,'2018-03-01 17:15:10'),('fec81ed05d9b3def5a3a47916c1ac83a640f9cc1728370c11e25ade5ac407a3e3bacff04ce517d3b','2ac3fbfcc93313a125bd932efca3f821ba181513264fb36a1a97c08faed50d2d19df1e4fa90c89ab',0,'2018-03-01 17:10:54');

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `pegawai` */

DROP TABLE IF EXISTS `pegawai`;

CREATE TABLE `pegawai` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pegawai_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `pegawai` */

insert  into `pegawai`(`id`,`nama`,`status`,`email`,`password`,`remember_token`,`created_at`,`updated_at`) values (1,'Yansy','direktur','direktur@dc.clothing','$2y$10$vXDNRhvMmA/f.8S.f41Z5uTUZNzf3f1z8Vgeg6XiFXPy8xDUhcy4G','BakIMRw0IDbCUHCRwt6TssQKdeEMLaeeFUgYCZqXKgetGsLiRHPWZCFlNXH2','2017-12-01 04:20:12','2018-01-30 16:06:45'),(2,'Adryan','marketing','marketing@dc.clothing','$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..','ztzAL4GPVrAp1HpNNXFkLnjVrGKDC9P9zf9pMvqcsu5zkY1UPDSfpQ404bGn','2017-12-01 04:20:12','2017-12-15 11:44:38');

/*Table structure for table `pelanggan` */

DROP TABLE IF EXISTS `pelanggan`;

CREATE TABLE `pelanggan` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_telepon` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kota_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pelanggan_kota_id_foreign` (`kota_id`),
  CONSTRAINT `pelanggan_kota_id_foreign` FOREIGN KEY (`kota_id`) REFERENCES `kota` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `pelanggan` */

insert  into `pelanggan`(`id`,`nama`,`email`,`password`,`remember_token`,`no_telepon`,`kota_id`,`created_at`,`updated_at`) values (1,'Alexandria DuBuque','client@dc.clothing','$2y$10$E0vT.Bx126rwryhWZ1moBOGcQT57vvJPCQTqz36o4tkKQsZzY0DNO','123','19480213',6,'2017-12-01 04:20:13','2018-01-30 16:46:03'),(2,'Erick O\'Kon DDS',NULL,NULL,NULL,'42193463',7,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(3,'Mr. Deontae Weber',NULL,NULL,NULL,'88411439',1,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(4,'Frank Rohan DVM',NULL,NULL,NULL,'19634227',8,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(5,'Dion Morissette DDS',NULL,NULL,NULL,'81511921',2,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(6,'Seth Nader',NULL,NULL,NULL,'31971355',8,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(7,'Dr. Daija Becker III',NULL,NULL,NULL,'50741045',5,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(8,'Vince Schuster',NULL,NULL,NULL,'23217362',12,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(9,'Green Gerlach',NULL,NULL,NULL,'40347929',13,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(10,'Ms. Melyssa Brown V',NULL,NULL,NULL,'04204794',11,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(11,'Anais Dach',NULL,NULL,NULL,'90199233',4,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(12,'Taryn Mueller',NULL,NULL,NULL,'32917031',12,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(13,'Cordia Daugherty',NULL,NULL,NULL,'26408149',10,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(14,'Lizzie Kassulke',NULL,NULL,NULL,'81234400',7,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(15,'Julien Bartell IV',NULL,NULL,NULL,'08042149',3,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(16,'Dr. Keara O\'Keefe I',NULL,NULL,NULL,'55385473',8,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(17,'Dr. Esta Jerde DVM',NULL,NULL,NULL,'26945903',9,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(18,'Janice Rath',NULL,NULL,NULL,'16051263',11,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(19,'Miss Tierra Howe DVM',NULL,NULL,NULL,'02863559',13,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(20,'Montana Schowalter Sr.',NULL,NULL,NULL,'36213375',4,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(21,'Mrs. Nia O\'Keefe',NULL,NULL,NULL,'22378743',4,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(22,'Mrs. Verla Schoen DDS',NULL,NULL,NULL,'44826598',8,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(23,'Dr. Hubert Parker II',NULL,NULL,NULL,'30876583',4,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(24,'Anissa Erdman',NULL,NULL,NULL,'01827019',1,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(25,'Heaven Bernhard V',NULL,NULL,NULL,'84020918',3,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(26,'Avis Deckow',NULL,NULL,NULL,'59240198',5,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(27,'Elena Cassin',NULL,NULL,NULL,'52116230',11,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(28,'Victor Lindgren',NULL,NULL,NULL,'51750466',9,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(29,'Emmanuelle Weber',NULL,NULL,NULL,'84008947',1,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(30,'Mayra Grant',NULL,NULL,NULL,'34044520',5,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(31,'Malachi Morissette',NULL,NULL,NULL,'17623872',1,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(32,'Mrs. Bert Kuvalis',NULL,NULL,NULL,'04627074',11,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(33,'Dr. Aileen Torphy',NULL,NULL,NULL,'74835645',2,'2017-12-01 04:20:13','2017-12-01 04:20:13'),(34,'Mr. Verner Gerlach',NULL,NULL,NULL,'59373544',5,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(35,'Prof. Kailee Jakubowski',NULL,NULL,NULL,'50699001',8,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(36,'Marlene VonRueden I',NULL,NULL,NULL,'09408807',10,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(37,'Belle Bogisich MD',NULL,NULL,NULL,'72498798',13,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(38,'Janessa Brown',NULL,NULL,NULL,'72051252',9,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(39,'Mr. Rafael Kulas',NULL,NULL,NULL,'92236684',11,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(40,'Sherwood Predovic',NULL,NULL,NULL,'71244457',9,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(41,'Monserrat Abbott',NULL,NULL,NULL,'93819428',6,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(42,'Chris Bosco I',NULL,NULL,NULL,'74538447',11,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(43,'Jeramie Johnston',NULL,NULL,NULL,'47418868',13,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(44,'Malachi Rau PhD',NULL,NULL,NULL,'27845165',5,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(45,'Dillan Nader IV',NULL,NULL,NULL,'06040871',5,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(46,'Madelyn Rippin',NULL,NULL,NULL,'48087575',5,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(47,'Angelita White',NULL,NULL,NULL,'30722262',10,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(48,'Abdul Cummings',NULL,NULL,NULL,'44593698',4,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(49,'Christ Koepp',NULL,NULL,NULL,'32340433',2,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(50,'Hudson Towne Jr.',NULL,NULL,NULL,'72916841',2,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(51,'Ms. Kathryne Altenwerth',NULL,NULL,NULL,'90692703',9,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(52,'Mr. Jayden Schmitt',NULL,NULL,NULL,'96742136',1,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(53,'Dr. Jordon Heidenreich V',NULL,NULL,NULL,'72912577',3,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(54,'Bennie Mante',NULL,NULL,NULL,'87426137',1,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(55,'Clyde Beier',NULL,NULL,NULL,'81437030',13,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(56,'Prof. Delores Stoltenberg DDS',NULL,NULL,NULL,'94575811',11,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(57,'Lizeth Quigley',NULL,NULL,NULL,'49335866',7,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(58,'Loy Beahan I',NULL,NULL,NULL,'94710311',4,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(59,'Francisco Leuschke',NULL,NULL,NULL,'15039330',7,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(60,'Wilma Kilback',NULL,NULL,NULL,'18343069',2,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(61,'Stanford Funk',NULL,NULL,NULL,'25744026',6,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(62,'Miss Dortha Hills',NULL,NULL,NULL,'85097421',11,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(63,'Bennett Pagac',NULL,NULL,NULL,'22400413',12,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(64,'Dr. Gaetano Gutmann Sr.',NULL,NULL,NULL,'07521485',4,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(65,'Mrs. Hailee Macejkovic DVM',NULL,NULL,NULL,'75097653',6,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(66,'Mrs. Madie Sipes',NULL,NULL,NULL,'45916335',1,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(67,'Hollie Swaniawski',NULL,NULL,NULL,'82009632',2,'2017-12-01 04:20:14','2017-12-01 04:20:14'),(68,'Cornelius Schumm',NULL,NULL,NULL,'06700485',3,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(69,'Christopher Mueller',NULL,NULL,NULL,'98105908',10,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(70,'Mikel Collier',NULL,NULL,NULL,'57771489',6,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(71,'Mr. Kelton Kuhic DVM',NULL,NULL,NULL,'78279506',11,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(72,'Darrel Wilkinson PhD',NULL,NULL,NULL,'86836463',11,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(73,'Jeffry Yost',NULL,NULL,NULL,'32048063',1,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(74,'Dr. Alison Klein',NULL,NULL,NULL,'59529699',6,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(75,'Brittany Bergnaum',NULL,NULL,NULL,'63431056',3,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(76,'Estevan Rowe',NULL,NULL,NULL,'01840124',2,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(77,'Oliver Goyette PhD',NULL,NULL,NULL,'56537307',8,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(78,'Adrianna Schaefer',NULL,NULL,NULL,'78052437',5,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(79,'Hilbert Greenfelder PhD',NULL,NULL,NULL,'12425594',11,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(80,'Francis Sanford DDS',NULL,NULL,NULL,'24549684',4,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(81,'Prof. Anthony Mayert',NULL,NULL,NULL,'94888751',7,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(82,'Alayna Hermiston',NULL,NULL,NULL,'14977060',6,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(83,'Jedediah Torphy',NULL,NULL,NULL,'61511316',12,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(84,'Magnolia Blick',NULL,NULL,NULL,'71975801',7,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(85,'Maria Robel',NULL,NULL,NULL,'87186666',6,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(86,'Miss Chanel Cronin',NULL,NULL,NULL,'89035542',2,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(87,'Lottie Hilpert I',NULL,NULL,NULL,'85129498',12,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(88,'Willy Shanahan',NULL,NULL,NULL,'56367256',10,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(89,'Ms. Brigitte Willms',NULL,NULL,NULL,'44166175',2,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(90,'Rowan Mohr',NULL,NULL,NULL,'07785931',2,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(91,'Cheyenne Hintz',NULL,NULL,NULL,'77510402',7,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(92,'Mrs. Tara Miller',NULL,NULL,NULL,'16480483',11,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(93,'Ms. Krystina Koch',NULL,NULL,NULL,'71809892',12,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(94,'Dr. Otilia Labadie',NULL,NULL,NULL,'53000064',11,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(95,'Ulices Veum I',NULL,NULL,NULL,'71755984',9,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(96,'Dr. Mara Kerluke',NULL,NULL,NULL,'01840605',9,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(97,'Junius Abbott',NULL,NULL,NULL,'89962916',10,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(98,'Samara Romaguera',NULL,NULL,NULL,'34107614',8,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(99,'Mr. Lukas Glover',NULL,NULL,NULL,'81750931',5,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(100,'Laurianne Hagenes',NULL,NULL,NULL,'98832194',2,'2017-12-01 04:20:15','2017-12-01 04:20:15'),(101,'Arsy',NULL,NULL,NULL,'032165487953',2,'2017-12-15 23:17:29','2017-12-15 23:17:29');

/*Table structure for table `produk` */

DROP TABLE IF EXISTS `produk`;

CREATE TABLE `produk` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harga` int(10) unsigned NOT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pegawai_id` int(10) unsigned NOT NULL,
  `kategori_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `produk_kode_unique` (`kode`),
  KEY `produk_kategori_id_foreign` (`kategori_id`),
  KEY `produk_pegawai_id_foreign` (`pegawai_id`),
  CONSTRAINT `produk_kategori_id_foreign` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`) ON DELETE CASCADE,
  CONSTRAINT `produk_pegawai_id_foreign` FOREIGN KEY (`pegawai_id`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `produk` */

insert  into `produk`(`id`,`kode`,`nama`,`harga`,`gambar`,`pegawai_id`,`kategori_id`,`created_at`,`updated_at`) values (2,'B.0101','T-shirt DC',75000,'https://images-na.ssl-images-amazon.com/images/I/41N9TdBIYQL._UX342_.jpg',1,3,'2017-12-28 12:33:21','2017-12-28 12:33:21'),(3,'BPJ.0087','T-shirt Panjang DC',85000,'http://3.imimg.com/data3/RE/WQ/MY-6776513/mens-t-shirts-250x250.jpg',1,3,'2017-12-28 12:33:21','2017-12-28 12:33:21'),(5,'JKET.0207','Jaket Mayer Kupluk',95000,'https://4.imimg.com/data4/KS/HD/MY-718120/mens-casual-t-shirts-250x250.jpg',1,2,'2017-12-28 12:33:21','2017-12-28 12:33:21'),(6,'KMJ.0374','Kemeja Katun DC',80000,'https://5.imimg.com/data5/MU/GM/MY-37532700/5c1a5b85db976586e59bc46f0268d0a1-coloured-jeans-full-sleeves-250x250.jpg',1,4,'2017-12-28 12:33:21','2017-12-28 12:33:21');

/*Table structure for table `promosi` */

DROP TABLE IF EXISTS `promosi`;

CREATE TABLE `promosi` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `subjek` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isi_promosi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mulai_promosi` date NOT NULL,
  `akhir_promosi` date NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `pegawai_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `promosi_pegawai_id_foreign` (`pegawai_id`),
  CONSTRAINT `promosi_pegawai_id_foreign` FOREIGN KEY (`pegawai_id`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `promosi` */

insert  into `promosi`(`id`,`subjek`,`isi_promosi`,`mulai_promosi`,`akhir_promosi`,`status`,`pegawai_id`,`created_at`,`updated_at`) values (1,'Sub','Isi','2017-12-29','2018-04-20',0,1,NULL,'2017-12-29 14:28:46'),(2,'Wednesday Discount 50%','Ayo datang ke toko kami dihari rabu, diskon 50% untuk semua jenis produk (kecuali T-Shirt)','2017-12-01','2018-04-20',1,1,'2017-12-29 13:50:02','2017-12-29 13:50:02'),(3,'TGIF Buy 1 Get 1 Free','Di hari jumat, beli produk apa saja gratis 1 produk yang sama','2017-12-03','2018-12-01',1,1,'2017-12-29 13:50:02','2017-12-29 13:50:02'),(6,'Subjek 1','isi Promosi','2017-12-12','2018-04-20',1,1,'2017-12-29 14:45:02','2018-01-30 19:33:20'),(7,'Kain Kasar','as','2018-01-01','2018-03-01',0,1,'2018-01-30 19:32:40','2018-01-30 19:32:55');

/*Table structure for table `provinsi` */

DROP TABLE IF EXISTS `provinsi`;

CREATE TABLE `provinsi` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `provinsi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `provinsi` */

insert  into `provinsi`(`id`,`provinsi`,`created_at`,`updated_at`) values (1,'Aceh / Nangroe Aceh Darussalam','2017-12-01 04:20:10','2017-12-01 04:20:10'),(2,'Sumatera Utara','2017-12-01 04:20:10','2017-12-01 04:20:10'),(3,'Sumatera Barat','2017-12-01 04:20:10','2017-12-01 04:20:10'),(4,'Riau (Daratan)','2017-12-01 04:20:10','2017-12-01 04:20:10'),(5,'Kepulauan Riau','2017-12-01 04:20:10','2017-12-01 04:20:10'),(6,'Jambi','2017-12-01 04:20:10','2017-12-01 04:20:10'),(7,'Sumatera Selatan','2017-12-01 04:20:10','2017-12-01 04:20:10'),(8,'Bangka Belitung','2017-12-01 04:20:10','2017-12-01 04:20:10'),(9,'Bengkulu yang','2017-12-01 04:20:10','2017-12-01 04:20:10'),(10,'Lampung','2017-12-01 04:20:10','2017-12-01 04:20:10'),(11,'DKI Jakarta','2017-12-01 04:20:10','2017-12-01 04:20:10'),(12,'Jawa Barat','2017-12-01 04:20:10','2017-12-01 04:20:10'),(13,'Banten','2017-12-01 04:20:10','2017-12-01 04:20:10'),(14,'Jawa Tengah','2017-12-01 04:20:10','2017-12-01 04:20:10'),(15,'DI Yogyakarta','2017-12-01 04:20:10','2017-12-01 04:20:10'),(16,'Jawa Timur','2017-12-01 04:20:11','2017-12-01 04:20:11'),(17,'Bali','2017-12-01 04:20:11','2017-12-01 04:20:11'),(18,'Nusa Tenggara Barat','2017-12-01 04:20:11','2017-12-01 04:20:11'),(19,'Nusa Tenggara Timur','2017-12-01 04:20:11','2017-12-01 04:20:11'),(20,'Kalimantan Barat','2017-12-01 04:20:11','2017-12-01 04:20:11'),(21,'Kalimantan Tengah','2017-12-01 04:20:11','2017-12-01 04:20:11'),(22,'Kalimantan Selatan','2017-12-01 04:20:11','2017-12-01 04:20:11'),(23,'Kalimantan Timur','2017-12-01 04:20:11','2017-12-01 04:20:11'),(24,'Kalimantan Utara','2017-12-01 04:20:11','2017-12-01 04:20:11'),(25,'Sulawesi Utara','2017-12-01 04:20:11','2017-12-01 04:20:11'),(26,'Sulawesi Barat','2017-12-01 04:20:11','2017-12-01 04:20:11'),(27,'Sulawesi Tengah','2017-12-01 04:20:11','2017-12-01 04:20:11'),(28,'Sulawesi Tenggara','2017-12-01 04:20:11','2017-12-01 04:20:11'),(29,'Sulawesi Selatan','2017-12-01 04:20:11','2017-12-01 04:20:11'),(30,'Gorontalo','2017-12-01 04:20:11','2017-12-01 04:20:11'),(31,'Maluku','2017-12-01 04:20:11','2017-12-01 04:20:11'),(32,'Maluku Utara','2017-12-01 04:20:11','2017-12-01 04:20:11'),(33,'Papua Barat','2017-12-01 04:20:11','2017-12-01 04:20:11'),(34,'Papua','2017-12-01 04:20:11','2017-12-01 04:20:11'),(35,'Teluk Cendrawasih','2017-12-01 04:20:11','2017-12-01 04:20:11');

/*Table structure for table `transaksi` */

DROP TABLE IF EXISTS `transaksi`;

CREATE TABLE `transaksi` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tanggal` date NOT NULL,
  `pelanggan_id` int(10) unsigned DEFAULT NULL,
  `pegawai_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transaksi_pelanggan_id_foreign` (`pelanggan_id`),
  KEY `transaksi_pegawai_id_foreign` (`pegawai_id`),
  CONSTRAINT `transaksi_pegawai_id_foreign` FOREIGN KEY (`pegawai_id`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE,
  CONSTRAINT `transaksi_pelanggan_id_foreign` FOREIGN KEY (`pelanggan_id`) REFERENCES `pelanggan` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `transaksi` */

insert  into `transaksi`(`id`,`tanggal`,`pelanggan_id`,`pegawai_id`,`created_at`,`updated_at`) values (1,'2018-01-22',1,2,NULL,NULL);

/*Table structure for table `transaksi_detail` */

DROP TABLE IF EXISTS `transaksi_detail`;

CREATE TABLE `transaksi_detail` (
  `sub_total` int(11) NOT NULL,
  `qty` int(10) unsigned NOT NULL,
  `transaksi_id` int(10) unsigned NOT NULL,
  `produk_id` int(10) unsigned NOT NULL,
  KEY `transaksi_detail_transaksi_id_foreign` (`transaksi_id`),
  KEY `transaksi_detail_produk_id_foreign` (`produk_id`),
  CONSTRAINT `transaksi_detail_produk_id_foreign` FOREIGN KEY (`produk_id`) REFERENCES `produk` (`id`) ON DELETE CASCADE,
  CONSTRAINT `transaksi_detail_transaksi_id_foreign` FOREIGN KEY (`transaksi_id`) REFERENCES `transaksi` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `transaksi_detail` */

insert  into `transaksi_detail`(`sub_total`,`qty`,`transaksi_id`,`produk_id`) values (0,3,1,2),(0,2,1,3);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
