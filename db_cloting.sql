-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2018 at 03:31 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_cloting`
--

-- --------------------------------------------------------

--
-- Table structure for table `desain`
--

CREATE TABLE `desain` (
  `id` int(10) UNSIGNED NOT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desainable_id` int(10) UNSIGNED NOT NULL,
  `desainable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `desain`
--

INSERT INTO `desain` (`id`, `gambar`, `desainable_id`, `desainable_type`, `created_at`, `updated_at`) VALUES
(2, 'img/desain/pelanggan.png', 1, 'App\\Entities\\Pelanggan', NULL, NULL),
(3, 'img/desain/pegawai.png', 2, 'App\\Entities\\Pegawai', NULL, NULL),
(4, 'img/desain/pelanggan.png', 2, 'App\\Entities\\Pelanggan', NULL, NULL),
(7, 'img/desain/pegawai.png', 1, 'App\\Entities\\Pegawai', '2017-12-28 13:53:44', '2017-12-28 13:53:44'),
(8, 'img/desain/pelanggan.png', 1, 'App\\Entities\\Pegawai', '2017-12-28 13:54:02', '2017-12-28 13:54:02');

-- --------------------------------------------------------

--
-- Table structure for table `jawaban_kuesioner`
--

CREATE TABLE `jawaban_kuesioner` (
  `kuesioner_id` int(10) UNSIGNED NOT NULL,
  `pelanggan_id` int(10) UNSIGNED NOT NULL,
  `nilai` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jawaban_kuesioner`
--

INSERT INTO `jawaban_kuesioner` (`kuesioner_id`, `pelanggan_id`, `nilai`) VALUES
(18, 1, 1),
(19, 1, 1),
(20, 1, 1),
(21, 1, 1),
(22, 1, 1),
(23, 1, 1),
(24, 1, 5),
(25, 1, 5),
(26, 1, 5),
(27, 1, 5),
(28, 1, 5),
(29, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(10) UNSIGNED NOT NULL,
  `kategori` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `kategori`, `created_at`, `updated_at`) VALUES
(2, 'Jaket', '2017-12-28 05:21:51', '2017-12-28 05:21:51'),
(3, 'T-Shirt', '2017-12-28 05:21:51', '2017-12-28 05:21:51'),
(4, 'Kemeja', '2017-12-28 05:21:51', '2017-12-28 05:21:51');

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE `kota` (
  `id` int(10) UNSIGNED NOT NULL,
  `kota` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provinsi_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id`, `kota`, `provinsi_id`, `created_at`, `updated_at`) VALUES
(1, 'Bandung', 12, '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(2, 'Kota Tasikmalaya', 12, '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(3, 'Kab Tasikmalaya', 12, '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(4, 'Bekasi', 12, '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(5, 'Depok', 1, '2017-11-30 21:20:11', '2017-12-15 15:50:25'),
(6, 'Bogor', 12, '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(7, 'Kuningan', 12, '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(8, 'Majalengka', 12, '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(9, 'Cirebon', 12, '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(10, 'Indramayu', 12, '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(11, 'Garut', 12, '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(12, 'Pangandaran', 12, '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(13, 'Ciamis', 12, '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(14, 'Cibeureum', 12, '2017-12-15 16:18:24', '2017-12-15 16:18:24');

-- --------------------------------------------------------

--
-- Table structure for table `kuesioner`
--

CREATE TABLE `kuesioner` (
  `id` int(10) UNSIGNED NOT NULL,
  `soal` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pegawai_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kuesioner`
--

INSERT INTO `kuesioner` (`id`, `soal`, `pegawai_id`, `created_at`, `updated_at`) VALUES
(18, 'Anda memilih produk DC Clothing karena memiliki kualitas produk yang baik', 1, '2017-12-28 05:04:24', '2017-12-28 05:04:24'),
(19, 'Kualitas produk DC Clothing  tetap terjaga keawetannya meskipun dipakai dalam jangka waktu yang lama', 1, '2017-12-28 05:04:24', '2017-12-28 05:04:24'),
(20, 'Anda memilih produk DC Clothing karena Kenyamanan dari bahan yang digunakan dalam produk tersebut', 1, '2017-12-28 05:04:24', '2017-12-28 05:04:24'),
(21, 'Kemasan yang rapi dan baik sehingga terjaga kualitas produk', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(22, 'Anda memilih produk DC Clothing karena Kualitas jahitan dari produk tersebut rapi, kuat dan bagus', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(23, 'Produk DC Clothing yang diberikan mempunyai ciri tersendiri', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(24, 'Varian warna dan ukuran tersedia sesuai dengan kebutuhan anda', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(25, 'Harga produk yang di tawarkan beragam sehingga bisa di jangkau semua kalangan', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(26, 'Hanya dengan melihat lambang atau logo DC Clothing Anda dapat membedakan dengan produk lain', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(27, 'Anda membeli produk DC Clothing karena produk tersebut sesuai dengan keinginan Anda', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(28, 'Produk DC Clothing mempunyai berbagai macam desain & model yang menarik', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25'),
(29, 'Model produk DC Clothing mengikuti model saat ini', 1, '2017-12-28 05:04:25', '2017-12-28 05:04:25');

-- --------------------------------------------------------

--
-- Table structure for table `like`
--

CREATE TABLE `like` (
  `pelanggan_id` int(10) UNSIGNED NOT NULL,
  `desain_id` int(10) UNSIGNED NOT NULL,
  `suka` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `like`
--

INSERT INTO `like` (`pelanggan_id`, `desain_id`, `suka`) VALUES
(1, 2, 1),
(1, 3, 0),
(1, 4, 1),
(1, 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(16, '2014_10_12_000000_create_users_table', 1),
(17, '2014_10_12_100000_create_password_resets_table', 1),
(18, '2017_12_01_035431_create_provinsis_table', 1),
(19, '2017_12_01_035510_create_kotas_table', 1),
(20, '2017_12_01_036112_create_pelanggans_table', 1),
(21, '2017_12_01_036956_create_kuesioners_table', 1),
(22, '2017_12_01_040138_buat_table_jawaban_kuesioner', 1),
(23, '2017_12_01_040627_alter_kuesioner', 1),
(24, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(25, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(26, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(27, '2016_06_01_000004_create_oauth_clients_table', 2),
(28, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2),
(29, '2017_12_15_232102_BuatTableKategori', 3),
(30, '2017_12_15_232241_BuatTableProduk', 4),
(33, '2017_12_28_182420_buat_table_desain', 5),
(34, '2017_12_28_182603_buat_table_like', 5),
(35, '2017_12_29_131040_BuatTablePromosi', 6);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('33108584e405bc3d86d866e0b353f39b51f61031af0a9879b1b53b686322bffdd8328ef8fbbfe97b', 1, 2, NULL, '[]', 0, '2017-12-17 19:47:05', '2017-12-17 19:47:05', '2018-01-02 02:47:04'),
('5b7ae07c44cbf451311ffa981b33ee5dedf844e63d971bca859cccca48c76bc6f6d4ae0d2717d11c', 1, 2, NULL, '[]', 0, '2017-12-16 00:35:08', '2017-12-16 00:35:08', '2017-12-31 07:35:07'),
('6e2a200ae68a3f3faa70c28b66a05a332e79a71e810d8a7d19967a85381109384a6ba0777b871816', 1, 2, NULL, '[]', 0, '2017-12-15 17:37:48', '2017-12-15 17:37:48', '2017-12-31 00:37:48'),
('d88b75c02dbed416d7fbd178d325fc55d628bc518a1246358d31b04187f757fc4a66e4977894e028', 1, 2, NULL, '[]', 0, '2017-12-15 15:14:38', '2017-12-15 15:14:38', '2017-12-14 22:14:37');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_auth_codes`
--

INSERT INTO `oauth_auth_codes` (`id`, `user_id`, `client_id`, `scopes`, `revoked`, `expires_at`) VALUES
('1', 1, 2, NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'DC-Cloting Personal Access Client', 'wefjrHxtFWWO9s08w8Tls3dajR1F8wnpfx3nCT6U', 'http://localhost', 1, 0, 0, '2017-12-01 13:13:48', '2017-12-01 13:13:48'),
(2, 1, 'DC-Cloting Password Grant Client', 'DC-Cloting', 'http://localhost', 0, 1, 0, '2017-12-01 13:13:48', '2017-12-01 13:13:48');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2017-12-01 13:13:48', '2017-12-01 13:13:48');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_refresh_tokens`
--

INSERT INTO `oauth_refresh_tokens` (`id`, `access_token_id`, `revoked`, `expires_at`) VALUES
('2fd779a90aa99cd3dff918c43599375c4f3e9d9b6aed3227c619e9a269a0532afea86fdc47a4fb73', 'd88b75c02dbed416d7fbd178d325fc55d628bc518a1246358d31b04187f757fc4a66e4977894e028', 0, '2017-12-01 22:14:37'),
('541867a2adccef1878fb2f4ab33bb19c803899025af84dc1f2bc1eec291f31f2ed09b0a59aeb6c32', '6e2a200ae68a3f3faa70c28b66a05a332e79a71e810d8a7d19967a85381109384a6ba0777b871816', 0, '2018-01-15 00:37:49'),
('83fde6ac11eea673a33f4df8c7f7699695d8cdab603e12ab0c6e7f8a28d896e5edd0a4f3bc828914', '5b7ae07c44cbf451311ffa981b33ee5dedf844e63d971bca859cccca48c76bc6f6d4ae0d2717d11c', 0, '2018-01-15 07:35:07'),
('8d84ec54d454a9c292ab12a91225bd74911812d77cec553d8525d6c5d110efaf0f3a8a15e16407bf', '33108584e405bc3d86d866e0b353f39b51f61031af0a9879b1b53b686322bffdd8328ef8fbbfe97b', 0, '2018-01-17 02:47:05');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`id`, `nama`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mollie Corwin', 'admin@dc.cloting', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', 'BakIMRw0IDbCUHCRwt6TssQKdeEMLaeeFUgYCZqXKgetGsLiRHPWZCFlNXH2', '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(2, 'Hamid', 'haleigh.grady@example.net', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', 'ztzAL4GPVrAp1HpNNXFkLnjVrGKDC9P9zf9pMvqcsu5zkY1UPDSfpQ404bGn', '2017-11-30 21:20:12', '2017-12-15 04:44:38'),
(3, 'Denis Fadel', 'buddy.turcotte@example.org', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', '31xgcCM9lq', '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(4, 'Dr. Oral Sipes III', 'leon.mckenzie@example.net', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', 'Q9wfS3ktpE', '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(6, 'Joannie Legros', 'deborah.schuster@example.org', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', 'VNS9pnXCvW', '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(7, 'Hayley Harvey Sr.', 'florian04@example.net', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', 'yfnXy8lexQ', '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(8, 'Prof. Nicole Batz', 'raynor.leonora@example.net', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', 'cpaQPvaZKB', '2017-11-30 21:20:12', '2017-11-30 21:20:12'),
(9, 'Prof. Mckenna Erdman MD', 'olin86@example.org', '$2y$10$UKm4WtR2dWPfQ1yMPiNYD.ZCareZa.E3QBbpxCZNKiSpq6vlCC8..', '4wcNivv01D', '2017-11-30 21:20:12', '2017-11-30 21:20:12');

-- --------------------------------------------------------

--
-- Table structure for table `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_telepon` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kota_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pelanggan`
--

INSERT INTO `pelanggan` (`id`, `nama`, `no_telepon`, `kota_id`, `created_at`, `updated_at`) VALUES
(1, 'Alexandria DuBuque', '19480213', 6, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(2, 'Erick O''Kon DDS', '42193463', 7, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(3, 'Mr. Deontae Weber', '88411439', 1, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(4, 'Frank Rohan DVM', '19634227', 8, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(5, 'Dion Morissette DDS', '81511921', 2, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(6, 'Seth Nader', '31971355', 8, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(7, 'Dr. Daija Becker III', '50741045', 5, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(8, 'Vince Schuster', '23217362', 12, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(9, 'Green Gerlach', '40347929', 13, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(10, 'Ms. Melyssa Brown V', '04204794', 11, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(11, 'Anais Dach', '90199233', 4, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(12, 'Taryn Mueller', '32917031', 12, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(13, 'Cordia Daugherty', '26408149', 10, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(14, 'Lizzie Kassulke', '81234400', 7, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(15, 'Julien Bartell IV', '08042149', 3, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(16, 'Dr. Keara O''Keefe I', '55385473', 8, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(17, 'Dr. Esta Jerde DVM', '26945903', 9, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(18, 'Janice Rath', '16051263', 11, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(19, 'Miss Tierra Howe DVM', '02863559', 13, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(20, 'Montana Schowalter Sr.', '36213375', 4, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(21, 'Mrs. Nia O''Keefe', '22378743', 4, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(22, 'Mrs. Verla Schoen DDS', '44826598', 8, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(23, 'Dr. Hubert Parker II', '30876583', 4, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(24, 'Anissa Erdman', '01827019', 1, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(25, 'Heaven Bernhard V', '84020918', 3, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(26, 'Avis Deckow', '59240198', 5, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(27, 'Elena Cassin', '52116230', 11, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(28, 'Victor Lindgren', '51750466', 9, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(29, 'Emmanuelle Weber', '84008947', 1, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(30, 'Mayra Grant', '34044520', 5, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(31, 'Malachi Morissette', '17623872', 1, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(32, 'Mrs. Bert Kuvalis', '04627074', 11, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(33, 'Dr. Aileen Torphy', '74835645', 2, '2017-11-30 21:20:13', '2017-11-30 21:20:13'),
(34, 'Mr. Verner Gerlach', '59373544', 5, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(35, 'Prof. Kailee Jakubowski', '50699001', 8, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(36, 'Marlene VonRueden I', '09408807', 10, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(37, 'Belle Bogisich MD', '72498798', 13, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(38, 'Janessa Brown', '72051252', 9, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(39, 'Mr. Rafael Kulas', '92236684', 11, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(40, 'Sherwood Predovic', '71244457', 9, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(41, 'Monserrat Abbott', '93819428', 6, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(42, 'Chris Bosco I', '74538447', 11, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(43, 'Jeramie Johnston', '47418868', 13, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(44, 'Malachi Rau PhD', '27845165', 5, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(45, 'Dillan Nader IV', '06040871', 5, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(46, 'Madelyn Rippin', '48087575', 5, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(47, 'Angelita White', '30722262', 10, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(48, 'Abdul Cummings', '44593698', 4, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(49, 'Christ Koepp', '32340433', 2, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(50, 'Hudson Towne Jr.', '72916841', 2, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(51, 'Ms. Kathryne Altenwerth', '90692703', 9, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(52, 'Mr. Jayden Schmitt', '96742136', 1, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(53, 'Dr. Jordon Heidenreich V', '72912577', 3, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(54, 'Bennie Mante', '87426137', 1, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(55, 'Clyde Beier', '81437030', 13, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(56, 'Prof. Delores Stoltenberg DDS', '94575811', 11, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(57, 'Lizeth Quigley', '49335866', 7, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(58, 'Loy Beahan I', '94710311', 4, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(59, 'Francisco Leuschke', '15039330', 7, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(60, 'Wilma Kilback', '18343069', 2, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(61, 'Stanford Funk', '25744026', 6, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(62, 'Miss Dortha Hills', '85097421', 11, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(63, 'Bennett Pagac', '22400413', 12, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(64, 'Dr. Gaetano Gutmann Sr.', '07521485', 4, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(65, 'Mrs. Hailee Macejkovic DVM', '75097653', 6, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(66, 'Mrs. Madie Sipes', '45916335', 1, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(67, 'Hollie Swaniawski', '82009632', 2, '2017-11-30 21:20:14', '2017-11-30 21:20:14'),
(68, 'Cornelius Schumm', '06700485', 3, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(69, 'Christopher Mueller', '98105908', 10, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(70, 'Mikel Collier', '57771489', 6, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(71, 'Mr. Kelton Kuhic DVM', '78279506', 11, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(72, 'Darrel Wilkinson PhD', '86836463', 11, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(73, 'Jeffry Yost', '32048063', 1, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(74, 'Dr. Alison Klein', '59529699', 6, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(75, 'Brittany Bergnaum', '63431056', 3, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(76, 'Estevan Rowe', '01840124', 2, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(77, 'Oliver Goyette PhD', '56537307', 8, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(78, 'Adrianna Schaefer', '78052437', 5, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(79, 'Hilbert Greenfelder PhD', '12425594', 11, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(80, 'Francis Sanford DDS', '24549684', 4, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(81, 'Prof. Anthony Mayert', '94888751', 7, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(82, 'Alayna Hermiston', '14977060', 6, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(83, 'Jedediah Torphy', '61511316', 12, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(84, 'Magnolia Blick', '71975801', 7, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(85, 'Maria Robel', '87186666', 6, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(86, 'Miss Chanel Cronin', '89035542', 2, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(87, 'Lottie Hilpert I', '85129498', 12, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(88, 'Willy Shanahan', '56367256', 10, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(89, 'Ms. Brigitte Willms', '44166175', 2, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(90, 'Rowan Mohr', '07785931', 2, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(91, 'Cheyenne Hintz', '77510402', 7, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(92, 'Mrs. Tara Miller', '16480483', 11, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(93, 'Ms. Krystina Koch', '71809892', 12, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(94, 'Dr. Otilia Labadie', '53000064', 11, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(95, 'Ulices Veum I', '71755984', 9, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(96, 'Dr. Mara Kerluke', '01840605', 9, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(97, 'Junius Abbott', '89962916', 10, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(98, 'Samara Romaguera', '34107614', 8, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(99, 'Mr. Lukas Glover', '81750931', 5, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(100, 'Laurianne Hagenes', '98832194', 2, '2017-11-30 21:20:15', '2017-11-30 21:20:15'),
(101, 'Arsy', '032165487953', 2, '2017-12-15 16:17:29', '2017-12-15 16:17:29');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(10) UNSIGNED NOT NULL,
  `kode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `harga` int(10) UNSIGNED NOT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pegawai_id` int(10) UNSIGNED NOT NULL,
  `kategori_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `kode`, `nama`, `harga`, `gambar`, `pegawai_id`, `kategori_id`, `created_at`, `updated_at`) VALUES
(2, 'B.0101', 'T-shirt DC', 75000, 'img/desain/pegawai.png', 1, 3, '2017-12-28 05:33:21', '2017-12-28 05:33:21'),
(3, 'BPJ.0087', 'T-shirt Panjang DC', 85000, 'img/desain/pelanggan.png', 1, 3, '2017-12-28 05:33:21', '2017-12-28 05:33:21'),
(5, 'JKET.0207', 'Jaket Mayer Kupluk', 95000, 'img/desain/pegawai.png', 1, 2, '2017-12-28 05:33:21', '2017-12-28 05:33:21'),
(6, 'KMJ.0374', 'Kemeja Katun DC', 80000, 'img/desain/pelanggan.png', 1, 4, '2017-12-28 05:33:21', '2017-12-28 05:33:21');

-- --------------------------------------------------------

--
-- Table structure for table `promosi`
--

CREATE TABLE `promosi` (
  `id` int(10) UNSIGNED NOT NULL,
  `subjek` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isi_promosi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mulai_promosi` date NOT NULL,
  `akhir_promosi` date NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `pegawai_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `promosi`
--

INSERT INTO `promosi` (`id`, `subjek`, `isi_promosi`, `mulai_promosi`, `akhir_promosi`, `status`, `pegawai_id`, `created_at`, `updated_at`) VALUES
(1, 'Sub', 'Isi', '2017-12-29', '2017-12-30', 0, 1, NULL, '2017-12-29 07:28:46'),
(2, 'Wednesday Discount 50%', 'Ayo datang ke toko kami dihari rabu, diskon 50% untuk semua jenis produk (kecuali T-Shirt)', '2017-12-01', '2017-12-31', 1, 1, '2017-12-29 06:50:02', '2017-12-29 06:50:02'),
(3, 'TGIF Buy 1 Get 1 Free', 'Di hari jumat, beli produk apa saja gratis 1 produk yang sama', '2017-12-03', '2018-12-01', 1, 1, '2017-12-29 06:50:02', '2017-12-29 06:50:02'),
(6, 'Subjek 1', '222', '2017-12-12', '2017-12-31', 1, 1, '2017-12-29 07:45:02', '2017-12-29 07:45:02');

-- --------------------------------------------------------

--
-- Table structure for table `provinsi`
--

CREATE TABLE `provinsi` (
  `id` int(10) UNSIGNED NOT NULL,
  `provinsi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provinsi`
--

INSERT INTO `provinsi` (`id`, `provinsi`, `created_at`, `updated_at`) VALUES
(1, 'Aceh / Nangroe Aceh Darussalam', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(2, 'Sumatera Utara', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(3, 'Sumatera Barat', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(4, 'Riau (Daratan)', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(5, 'Kepulauan Riau', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(6, 'Jambi', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(7, 'Sumatera Selatan', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(8, 'Bangka Belitung', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(9, 'Bengkulu yang', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(10, 'Lampung', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(11, 'DKI Jakarta', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(12, 'Jawa Barat', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(13, 'Banten', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(14, 'Jawa Tengah', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(15, 'DI Yogyakarta', '2017-11-30 21:20:10', '2017-11-30 21:20:10'),
(16, 'Jawa Timur', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(17, 'Bali', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(18, 'Nusa Tenggara Barat', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(19, 'Nusa Tenggara Timur', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(20, 'Kalimantan Barat', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(21, 'Kalimantan Tengah', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(22, 'Kalimantan Selatan', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(23, 'Kalimantan Timur', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(24, 'Kalimantan Utara', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(25, 'Sulawesi Utara', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(26, 'Sulawesi Barat', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(27, 'Sulawesi Tengah', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(28, 'Sulawesi Tenggara', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(29, 'Sulawesi Selatan', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(30, 'Gorontalo', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(31, 'Maluku', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(32, 'Maluku Utara', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(33, 'Papua Barat', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(34, 'Papua', '2017-11-30 21:20:11', '2017-11-30 21:20:11'),
(35, 'Teluk Cendrawasih', '2017-11-30 21:20:11', '2017-11-30 21:20:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `desain`
--
ALTER TABLE `desain`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jawaban_kuesioner`
--
ALTER TABLE `jawaban_kuesioner`
  ADD KEY `jawaban_kuesioner_pelanggan_id_foreign` (`pelanggan_id`),
  ADD KEY `jawaban_kuesioner_kuesioner_id_foreign` (`kuesioner_id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kota`
--
ALTER TABLE `kota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kota_provinsi_id_foreign` (`provinsi_id`);

--
-- Indexes for table `kuesioner`
--
ALTER TABLE `kuesioner`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kuesioner_pegawai_id_foreign` (`pegawai_id`);

--
-- Indexes for table `like`
--
ALTER TABLE `like`
  ADD KEY `like_desain_id_foreign` (`desain_id`),
  ADD KEY `like_pelanggan_id_foreign` (`pelanggan_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pegawai_email_unique` (`email`);

--
-- Indexes for table `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pelanggan_kota_id_foreign` (`kota_id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `produk_kode_unique` (`kode`),
  ADD KEY `produk_kategori_id_foreign` (`kategori_id`),
  ADD KEY `produk_pegawai_id_foreign` (`pegawai_id`);

--
-- Indexes for table `promosi`
--
ALTER TABLE `promosi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `promosi_pegawai_id_foreign` (`pegawai_id`);

--
-- Indexes for table `provinsi`
--
ALTER TABLE `provinsi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `desain`
--
ALTER TABLE `desain`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `kota`
--
ALTER TABLE `kota`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `kuesioner`
--
ALTER TABLE `kuesioner`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `pegawai`
--
ALTER TABLE `pegawai`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `pelanggan`
--
ALTER TABLE `pelanggan`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `promosi`
--
ALTER TABLE `promosi`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `provinsi`
--
ALTER TABLE `provinsi`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `jawaban_kuesioner`
--
ALTER TABLE `jawaban_kuesioner`
  ADD CONSTRAINT `jawaban_kuesioner_kuesioner_id_foreign` FOREIGN KEY (`kuesioner_id`) REFERENCES `kuesioner` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `jawaban_kuesioner_pelanggan_id_foreign` FOREIGN KEY (`pelanggan_id`) REFERENCES `pelanggan` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `kota`
--
ALTER TABLE `kota`
  ADD CONSTRAINT `kota_provinsi_id_foreign` FOREIGN KEY (`provinsi_id`) REFERENCES `provinsi` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `kuesioner`
--
ALTER TABLE `kuesioner`
  ADD CONSTRAINT `kuesioner_pegawai_id_foreign` FOREIGN KEY (`pegawai_id`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `like`
--
ALTER TABLE `like`
  ADD CONSTRAINT `like_desain_id_foreign` FOREIGN KEY (`desain_id`) REFERENCES `desain` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `like_pelanggan_id_foreign` FOREIGN KEY (`pelanggan_id`) REFERENCES `pelanggan` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD CONSTRAINT `pelanggan_kota_id_foreign` FOREIGN KEY (`kota_id`) REFERENCES `kota` (`id`);

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_kategori_id_foreign` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `produk_pegawai_id_foreign` FOREIGN KEY (`pegawai_id`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `promosi`
--
ALTER TABLE `promosi`
  ADD CONSTRAINT `promosi_pegawai_id_foreign` FOREIGN KEY (`pegawai_id`) REFERENCES `pegawai` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
