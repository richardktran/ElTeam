-- MySQL dump 10.13  Distrib 8.0.31, for Linux (aarch64)
--
-- Host: localhost    Database: elteam
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int NOT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `topic_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `activities_topic_id_foreign` (`topic_id`),
  CONSTRAINT `activities_topic_id_foreign` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (19,'Nội quy lớp học','text',0,1,NULL,NULL,NULL,'<h2>Introduction</h2><p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.</p><p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p><p>Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.</p><p>You are granted limited license only for purposes of viewing the material contained on this Website.</p><h2>Restrictions</h2><p>You are specifically restricted from all of the following:</p><ul><li>Publishing any Website material in any other media;</li><li>Selling, sublicensing and/or otherwise commercializing any Website material;</li></ul>',3,NULL,NULL),(22,'Các slide lý thuyết','link',2,1,NULL,NULL,NULL,'https://drive.google.com/drive/folders/1hTysdubCp9-XIGi7z5s9fzUt4nML5Htb',3,NULL,'2022-11-17 20:27:47'),(23,'Web hook url','link',1,1,NULL,NULL,NULL,'https://www.mocky.io/v2/5cc8019d300000980a055e76',3,NULL,'2022-11-17 20:27:47'),(26,'Nội quy lớp học','text',0,1,NULL,NULL,NULL,'<h2><strong>Mục tiêu</strong></h2><p>Dành cho sinh viên làm quen với hệ thống chấm thi thực hành tự động</p><p><strong>Dạng bài tập: có 2 dạng bài tập thường gặp</strong></p><ul><li>Viết chương trình hoàn chỉnh: sinh viên cần phải #include, khai báo các hàm, biến cần thiết, nhập dữ liệu, tính toán và in kết quả ra màn hình.</li><li>Viết một phần của chương trình: sinh viên có thể được yêu cầu viết một hàm nào đó hoặc hoàn chỉnh một chương trình đã có sẵn.</li></ul><p><strong>Đọc và in kết quả</strong></p><ul><li>Dữ liệu đầu vào được giả sử là đọc từ bàn phím vì thế trong chương trình ta có thể sử dụng các hàm như scanf, getchar, ... để đọc dữ liệu. Cần phải chú ý là ta chỉ cần đọc dữ liệu chứ&nbsp;không cần phải in ra câu thông báo trước mỗi lần đọc dữ liệu (Ví dụ: Không có những câu như: printf(\"Nhap vao a:\");.&nbsp;Lúc này hệ thống sẽ chấm sai.</li><li>Dữ liệu đầu ra được giả sử là in ra màn hình nên trong chương trình ta có thể dùng lệnh printf.&nbsp;<strong>Chú ý: in đúng định dạng yêu cầu, chỉ in những thứ đề bài yêu cầu, không in thừa.</strong></li></ul><p><br></p>',6,NULL,NULL),(27,'File thống kê','xls',1,1,NULL,NULL,NULL,'https://elteam.s3.ap-southeast-1.amazonaws.com/lesson/636bedbece935.xlsx',6,NULL,NULL),(29,'Báo cáo tiến độ PDF','pdf',4,1,NULL,NULL,NULL,'https://elteam.s3.ap-southeast-1.amazonaws.com/lesson/636d126cc25de.pdf',3,'2022-11-10 22:02:08','2022-11-17 20:27:51'),(30,'Báo cáo tiến độ word','doc',3,1,NULL,NULL,NULL,'https://elteam.s3.ap-southeast-1.amazonaws.com/lesson/636d12803818a.docx',3,'2022-11-10 22:02:27','2022-11-17 20:27:51'),(31,'Video bài giảng','movie',5,1,NULL,NULL,NULL,'https://elteam.s3.ap-southeast-1.amazonaws.com/lesson/636d196d8ba09.mp4',3,'2022-11-10 22:32:06','2022-11-17 20:27:47'),(34,'Test','text',2,1,NULL,NULL,NULL,'https://elteam.s3.ap-southeast-1.amazonaws.com/lesson/637e55f2d0bb1-backup.jpg',6,'2022-11-24 00:18:52','2022-11-24 00:18:52');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_student`
--

DROP TABLE IF EXISTS `course_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_student` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `course_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending' COMMENT 'pending, accepted, rejected',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_student_user_id_foreign` (`user_id`),
  KEY `course_student_course_id_foreign` (`course_id`),
  CONSTRAINT `course_student_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  CONSTRAINT `course_student_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_student`
--

LOCK TABLES `course_student` WRITE;
/*!40000 ALTER TABLE `course_student` DISABLE KEYS */;
INSERT INTO `course_student` VALUES (2,1,1,'accepted',NULL,NULL),(3,1,3,'accepted',NULL,NULL),(4,1,4,'accepted',NULL,NULL),(5,1,55,'accepted',NULL,NULL),(6,1,56,'accepted',NULL,NULL),(7,1,57,'declined',NULL,NULL),(8,1,58,'accepted',NULL,NULL),(9,1,59,'accepted',NULL,NULL),(10,1,60,'pending',NULL,NULL),(11,1,61,'pending',NULL,NULL),(12,1,62,'accepted',NULL,NULL),(13,1,63,'pending',NULL,NULL),(14,1,64,'accepted',NULL,NULL),(15,1,65,'pending',NULL,NULL),(16,1,66,'declined',NULL,NULL),(17,1,67,'pending',NULL,NULL),(18,1,68,'accepted',NULL,NULL),(19,1,69,'accepted',NULL,NULL),(20,1,70,'pending',NULL,NULL),(21,1,71,'accepted',NULL,NULL),(22,1,72,'pending',NULL,NULL),(23,1,73,'accepted',NULL,NULL),(24,1,74,'accepted',NULL,NULL),(25,1,75,'declined',NULL,NULL),(26,1,76,'accepted',NULL,NULL),(27,1,77,'accepted',NULL,NULL),(28,1,78,'declined',NULL,NULL),(29,1,79,'accepted',NULL,NULL),(30,1,80,'declined',NULL,NULL),(31,1,81,'accepted',NULL,NULL),(32,1,82,'accepted',NULL,NULL),(33,1,83,'declined',NULL,NULL),(34,1,84,'accepted',NULL,NULL),(35,1,85,'declined',NULL,NULL),(36,1,86,'pending',NULL,NULL),(37,1,87,'declined',NULL,NULL),(38,1,88,'accepted',NULL,NULL),(39,1,89,'accepted',NULL,NULL),(40,1,90,'pending',NULL,NULL),(41,1,91,'accepted',NULL,NULL),(42,1,92,'pending',NULL,NULL),(43,1,93,'declined',NULL,NULL),(44,1,94,'declined',NULL,NULL),(45,1,95,'declined',NULL,NULL),(46,1,96,'pending',NULL,NULL),(47,1,97,'accepted',NULL,NULL),(48,1,98,'accepted',NULL,NULL),(49,1,99,'declined',NULL,NULL),(50,1,100,'accepted',NULL,NULL),(51,1,101,'accepted',NULL,NULL),(52,1,102,'declined',NULL,NULL),(53,1,103,'accepted',NULL,NULL),(54,1,104,'declined',NULL,NULL),(55,4,2,'accepted',NULL,'2022-10-26 23:37:05'),(56,2,4,'accepted',NULL,'2022-10-29 23:29:55'),(57,3,4,'pending',NULL,NULL),(58,3,107,'pending',NULL,NULL),(59,3,108,'pending',NULL,NULL),(60,3,109,'pending',NULL,NULL),(61,3,110,'pending',NULL,NULL),(62,3,111,'pending',NULL,NULL),(63,5,4,'pending',NULL,NULL),(64,5,116,'pending',NULL,NULL);
/*!40000 ALTER TABLE `course_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit` tinyint NOT NULL DEFAULT '1',
  `hours_per_week` int NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `teacher_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_teacher_id_foreign` (`teacher_id`),
  CONSTRAINT `courses_teacher_id_foreign` FOREIGN KEY (`teacher_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'CT240','Luận văn tốt nghiệp','301/C1',4,8,'2022-09-01 00:00:00','2022-12-01 00:00:00',2,'2022-10-23 16:21:56','2022-10-23 16:21:56',NULL),(2,'CT484','Nhập môn lập trình','101/B1',3,5,'2022-09-01 00:00:00','2022-12-01 00:00:00',2,'2022-10-23 16:21:56','2022-10-23 16:21:56',NULL),(3,'CT847','Mạng máy tính','108/DI',4,8,'2022-09-01 00:00:00','2022-12-01 00:00:00',2,'2022-10-23 16:21:56','2022-10-23 16:21:56',NULL),(4,'CT938','Lập trình web','101/B1',4,6,'2022-10-23 00:00:00','2022-10-24 00:00:00',4,'2022-10-23 16:36:19','2022-10-23 16:36:19',NULL),(5,'ML004','Tư tưởng Hồ Chí Minh','202/C1',3,4,'2022-11-26 00:00:00','2022-12-10 00:00:00',2,'2022-11-19 22:17:46','2022-11-19 22:17:46',NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curriculums`
--

DROP TABLE IF EXISTS `curriculums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curriculums` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `course_id` bigint unsigned NOT NULL,
  `contents` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `curriculums_course_id_foreign` (`course_id`),
  CONSTRAINT `curriculums_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curriculums`
--

LOCK TABLES `curriculums` WRITE;
/*!40000 ALTER TABLE `curriculums` DISABLE KEYS */;
INSERT INTO `curriculums` VALUES (1,1,'[{\"id\": \"53af7657-4076-4a12-99c8-c890037aa4bd\", \"tag\": \"p\", \"html\": \"hehe\"}, {\"_id\": \"22a2d41e-2100-4c90-946d-2b6901061831\", \"tag\": \"p\", \"html\": \"oke\"}]','2022-10-23 16:37:49','2022-11-05 19:59:09'),(2,4,'[{\"id\": \"58459179-6130-4def-af55-aa2d10eecfbf\", \"tag\": \"p\", \"html\": \"Hello\"}, {\"_id\": \"79925b58-7b61-4f56-ad3f-c361c8e49df8\", \"tag\": \"p\", \"html\": \"Im Khoa\", \"imageUrl\": null}, {\"_id\": \"e6c07db5-a922-417f-a493-6c45d755654c\", \"tag\": \"p\", \"html\": \"How are you?\", \"imageUrl\": null}, {\"_id\": \"14f7cc00-a765-4f17-b147-816d2e999a4d\", \"tag\": \"p\", \"html\": \"fdsfdsfdsfdssdffsd\"}]','2022-10-23 21:33:08','2022-11-01 16:55:26'),(3,2,'[{\"id\": \"48eed557-5cc4-4743-97c4-522c56d18dc9\", \"tag\": \"p\", \"html\": null}]','2022-10-29 23:29:19','2022-11-05 10:28:01');
/*!40000 ALTER TABLE `curriculums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
INSERT INTO `failed_jobs` VALUES (1,'d27c581c-dba1-4909-b5d7-84e24b235871','rabbitmq','default','{\"uuid\":\"d27c581c-dba1-4909-b5d7-84e24b235871\",\"displayName\":\"App\\\\Listeners\\\\EmailCourseInvitationListener\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Events\\\\CallQueuedListener\",\"command\":\"O:36:\\\"Illuminate\\\\Events\\\\CallQueuedListener\\\":19:{s:5:\\\"class\\\";s:43:\\\"App\\\\Listeners\\\\EmailCourseInvitationListener\\\";s:6:\\\"method\\\";s:6:\\\"handle\\\";s:4:\\\"data\\\";a:1:{i:0;O:32:\\\"App\\\\Events\\\\CourseInvitationEvent\\\":3:{s:40:\\\"\\u0000App\\\\Events\\\\CourseInvitationEvent\\u0000course\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:17:\\\"App\\\\Models\\\\Course\\\";s:2:\\\"id\\\";i:5;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:42:\\\"\\u0000App\\\\Events\\\\CourseInvitationEvent\\u0000students\\\";a:1:{i:0;s:26:\\\"richardktran.dev@gmail.com\\\";}s:6:\\\"socket\\\";N;}}s:5:\\\"tries\\\";N;s:13:\\\"maxExceptions\\\";N;s:7:\\\"backoff\\\";N;s:10:\\\"retryUntil\\\";N;s:7:\\\"timeout\\\";N;s:17:\\\"shouldBeEncrypted\\\";b:0;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"},\"id\":\"c08e1a6b-e927-4431-ae3f-ef5b24a78f5e\"}','Swift_TransportException: Failed to authenticate on SMTP server with username \"apikey\" using 2 possible authenticators. Authenticator LOGIN returned Expected response code 250 but got an empty response. Authenticator PLAIN returned Expected response code 250 but got an empty response. in /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Transport/Esmtp/AuthHandler.php:191\nStack trace:\n#0 /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Transport/EsmtpTransport.php(371): Swift_Transport_Esmtp_AuthHandler->afterEhlo(Object(Swift_SmtpTransport))\n#1 /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Transport/AbstractSmtpTransport.php(148): Swift_Transport_EsmtpTransport->doHeloCommand()\n#2 /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Mailer.php(65): Swift_Transport_AbstractSmtpTransport->start()\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(521): Swift_Mailer->send(Object(Swift_Message), Array)\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(288): Illuminate\\Mail\\Mailer->sendSwiftMessage(Object(Swift_Message))\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailable.php(187): Illuminate\\Mail\\Mailer->send(\'emails.course_i...\', Array, Object(Closure))\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Support/Traits/Localizable.php(19): Illuminate\\Mail\\Mailable->Illuminate\\Mail\\{closure}()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailable.php(188): Illuminate\\Mail\\Mailable->withLocale(NULL, Object(Closure))\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(304): Illuminate\\Mail\\Mailable->send(Object(Illuminate\\Mail\\Mailer))\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(258): Illuminate\\Mail\\Mailer->sendMailable(Object(App\\Mail\\CourseInvitationMail))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/PendingMail.php(124): Illuminate\\Mail\\Mailer->send(Object(App\\Mail\\CourseInvitationMail))\n#11 /var/www/html/app/Listeners/EmailCourseInvitationListener.php(45): Illuminate\\Mail\\PendingMail->send(Object(App\\Mail\\CourseInvitationMail))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Events/CallQueuedListener.php(107): App\\Listeners\\EmailCourseInvitationListener->handle(Object(App\\Events\\CourseInvitationEvent))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Events\\CallQueuedListener->handle(Object(Illuminate\\Foundation\\Application))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Container.php(653): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Bus/Dispatcher.php(128): Illuminate\\Container\\Container->call(Array)\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(128): Illuminate\\Bus\\Dispatcher->Illuminate\\Bus\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Bus/Dispatcher.php(132): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(120): Illuminate\\Bus\\Dispatcher->dispatchNow(Object(Illuminate\\Events\\CallQueuedListener), false)\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(128): Illuminate\\Queue\\CallQueuedHandler->Illuminate\\Queue\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(70): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), Object(Illuminate\\Events\\CallQueuedListener))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Jobs/Job.php(98): Illuminate\\Queue\\CallQueuedHandler->call(Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), Array)\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(428): Illuminate\\Queue\\Jobs\\Job->fire()\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(378): Illuminate\\Queue\\Worker->process(\'rabbitmq\', Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), Object(Illuminate\\Queue\\WorkerOptions))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(172): Illuminate\\Queue\\Worker->runJob(Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), \'rabbitmq\', Object(Illuminate\\Queue\\WorkerOptions))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(117): Illuminate\\Queue\\Worker->daemon(\'rabbitmq\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(101): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'rabbitmq\', \'default\')\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Container.php(653): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Console/Command.php(136): Illuminate\\Container\\Container->call(Array)\n#39 /var/www/html/vendor/symfony/console/Command/Command.php(298): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Console/Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#41 /var/www/html/vendor/symfony/console/Application.php(1028): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#42 /var/www/html/vendor/symfony/console/Application.php(299): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#43 /var/www/html/vendor/symfony/console/Application.php(171): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Console/Application.php(94): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Console/Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#46 /var/www/html/artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#47 {main}','2022-11-23 19:39:00'),(2,'6323b67c-465f-4735-89e5-a7545e3ac33a','rabbitmq','default','{\"uuid\":\"6323b67c-465f-4735-89e5-a7545e3ac33a\",\"displayName\":\"App\\\\Listeners\\\\EmailCourseInvitationListener\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Events\\\\CallQueuedListener\",\"command\":\"O:36:\\\"Illuminate\\\\Events\\\\CallQueuedListener\\\":19:{s:5:\\\"class\\\";s:43:\\\"App\\\\Listeners\\\\EmailCourseInvitationListener\\\";s:6:\\\"method\\\";s:6:\\\"handle\\\";s:4:\\\"data\\\";a:1:{i:0;O:32:\\\"App\\\\Events\\\\CourseInvitationEvent\\\":3:{s:40:\\\"\\u0000App\\\\Events\\\\CourseInvitationEvent\\u0000course\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:17:\\\"App\\\\Models\\\\Course\\\";s:2:\\\"id\\\";i:5;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:42:\\\"\\u0000App\\\\Events\\\\CourseInvitationEvent\\u0000students\\\";a:1:{i:0;s:26:\\\"richardktran.dev@gmail.com\\\";}s:6:\\\"socket\\\";N;}}s:5:\\\"tries\\\";N;s:13:\\\"maxExceptions\\\";N;s:7:\\\"backoff\\\";N;s:10:\\\"retryUntil\\\";N;s:7:\\\"timeout\\\";N;s:17:\\\"shouldBeEncrypted\\\";b:0;s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"},\"id\":\"f89b23cd-6371-421b-a2a3-c1c8713e4212\"}','Swift_TransportException: Failed to authenticate on SMTP server with username \"apikey\" using 2 possible authenticators. Authenticator LOGIN returned Expected response code 250 but got an empty response. Authenticator PLAIN returned Expected response code 250 but got an empty response. in /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Transport/Esmtp/AuthHandler.php:191\nStack trace:\n#0 /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Transport/EsmtpTransport.php(371): Swift_Transport_Esmtp_AuthHandler->afterEhlo(Object(Swift_SmtpTransport))\n#1 /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Transport/AbstractSmtpTransport.php(148): Swift_Transport_EsmtpTransport->doHeloCommand()\n#2 /var/www/html/vendor/swiftmailer/swiftmailer/lib/classes/Swift/Mailer.php(65): Swift_Transport_AbstractSmtpTransport->start()\n#3 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(521): Swift_Mailer->send(Object(Swift_Message), Array)\n#4 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(288): Illuminate\\Mail\\Mailer->sendSwiftMessage(Object(Swift_Message))\n#5 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailable.php(187): Illuminate\\Mail\\Mailer->send(\'emails.course_i...\', Array, Object(Closure))\n#6 /var/www/html/vendor/laravel/framework/src/Illuminate/Support/Traits/Localizable.php(19): Illuminate\\Mail\\Mailable->Illuminate\\Mail\\{closure}()\n#7 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailable.php(188): Illuminate\\Mail\\Mailable->withLocale(NULL, Object(Closure))\n#8 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(304): Illuminate\\Mail\\Mailable->send(Object(Illuminate\\Mail\\Mailer))\n#9 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/Mailer.php(258): Illuminate\\Mail\\Mailer->sendMailable(Object(App\\Mail\\CourseInvitationMail))\n#10 /var/www/html/vendor/laravel/framework/src/Illuminate/Mail/PendingMail.php(124): Illuminate\\Mail\\Mailer->send(Object(App\\Mail\\CourseInvitationMail))\n#11 /var/www/html/app/Listeners/EmailCourseInvitationListener.php(45): Illuminate\\Mail\\PendingMail->send(Object(App\\Mail\\CourseInvitationMail))\n#12 /var/www/html/vendor/laravel/framework/src/Illuminate/Events/CallQueuedListener.php(107): App\\Listeners\\EmailCourseInvitationListener->handle(Object(App\\Events\\CourseInvitationEvent))\n#13 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Events\\CallQueuedListener->handle(Object(Illuminate\\Foundation\\Application))\n#14 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#15 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#16 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#17 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Container.php(653): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#18 /var/www/html/vendor/laravel/framework/src/Illuminate/Bus/Dispatcher.php(128): Illuminate\\Container\\Container->call(Array)\n#19 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(128): Illuminate\\Bus\\Dispatcher->Illuminate\\Bus\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#20 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#21 /var/www/html/vendor/laravel/framework/src/Illuminate/Bus/Dispatcher.php(132): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#22 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(120): Illuminate\\Bus\\Dispatcher->dispatchNow(Object(Illuminate\\Events\\CallQueuedListener), false)\n#23 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(128): Illuminate\\Queue\\CallQueuedHandler->Illuminate\\Queue\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#24 /var/www/html/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Illuminate\\Events\\CallQueuedListener))\n#25 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#26 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(70): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), Object(Illuminate\\Events\\CallQueuedListener))\n#27 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Jobs/Job.php(98): Illuminate\\Queue\\CallQueuedHandler->call(Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), Array)\n#28 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(428): Illuminate\\Queue\\Jobs\\Job->fire()\n#29 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(378): Illuminate\\Queue\\Worker->process(\'rabbitmq\', Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), Object(Illuminate\\Queue\\WorkerOptions))\n#30 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(172): Illuminate\\Queue\\Worker->runJob(Object(VladimirYuldashev\\LaravelQueueRabbitMQ\\Queue\\Jobs\\RabbitMQJob), \'rabbitmq\', Object(Illuminate\\Queue\\WorkerOptions))\n#31 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(117): Illuminate\\Queue\\Worker->daemon(\'rabbitmq\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#32 /var/www/html/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(101): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'rabbitmq\', \'default\')\n#33 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#34 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#35 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#36 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#37 /var/www/html/vendor/laravel/framework/src/Illuminate/Container/Container.php(653): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#38 /var/www/html/vendor/laravel/framework/src/Illuminate/Console/Command.php(136): Illuminate\\Container\\Container->call(Array)\n#39 /var/www/html/vendor/symfony/console/Command/Command.php(298): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#40 /var/www/html/vendor/laravel/framework/src/Illuminate/Console/Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#41 /var/www/html/vendor/symfony/console/Application.php(1028): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#42 /var/www/html/vendor/symfony/console/Application.php(299): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#43 /var/www/html/vendor/symfony/console/Application.php(171): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#44 /var/www/html/vendor/laravel/framework/src/Illuminate/Console/Application.php(94): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#45 /var/www/html/vendor/laravel/framework/src/Illuminate/Foundation/Console/Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#46 /var/www/html/artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#47 {main}','2022-11-23 19:39:01');
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_student`
--

DROP TABLE IF EXISTS `group_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_student` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `is_leader` tinyint(1) NOT NULL DEFAULT '0',
  `student_id` bigint unsigned NOT NULL,
  `group_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `group_student_student_id_foreign` (`student_id`),
  KEY `group_student_group_id_foreign` (`group_id`),
  CONSTRAINT `group_student_group_id_foreign` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  CONSTRAINT `group_student_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=513 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_student`
--

LOCK TABLES `group_student` WRITE;
/*!40000 ALTER TABLE `group_student` DISABLE KEYS */;
INSERT INTO `group_student` VALUES (477,0,73,105,NULL,NULL),(478,0,62,105,NULL,NULL),(479,0,55,105,NULL,NULL),(480,0,91,105,NULL,NULL),(481,0,103,106,NULL,NULL),(482,0,64,106,NULL,NULL),(483,0,98,106,NULL,NULL),(484,0,101,106,NULL,NULL),(485,0,58,107,NULL,NULL),(486,0,4,107,NULL,NULL),(487,0,1,107,NULL,NULL),(488,0,71,107,NULL,NULL),(489,0,69,108,NULL,NULL),(490,0,59,108,NULL,NULL),(491,0,100,108,NULL,NULL),(492,0,74,108,NULL,NULL),(493,0,84,109,NULL,NULL),(494,0,81,109,NULL,NULL),(495,0,68,109,NULL,NULL),(496,0,79,109,NULL,NULL),(497,0,89,110,NULL,NULL),(498,0,82,110,NULL,NULL),(499,0,56,110,NULL,NULL),(500,0,76,110,NULL,NULL),(501,0,77,111,NULL,NULL),(502,0,3,111,NULL,NULL),(503,0,88,111,NULL,NULL),(504,0,97,111,NULL,NULL),(512,0,4,119,NULL,NULL);
/*!40000 ALTER TABLE `group_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number` int NOT NULL,
  `course_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `groups_course_id_foreign` (`course_id`),
  CONSTRAINT `groups_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (105,'Group 1',1,1,'2022-10-25 22:37:57','2022-10-25 22:37:57'),(106,'Group 2',2,1,'2022-10-25 22:37:57','2022-10-25 22:37:57'),(107,'Group 3',3,1,'2022-10-25 22:37:57','2022-10-25 22:37:57'),(108,'Group 4',4,1,'2022-10-25 22:37:57','2022-10-25 22:37:57'),(109,'Group 5',5,1,'2022-10-25 22:37:57','2022-10-25 22:37:57'),(110,'Group 6',6,1,'2022-10-25 22:37:57','2022-10-25 22:37:57'),(111,'Group 7',7,1,'2022-10-25 22:37:58','2022-10-25 22:37:58'),(119,'Group 1',1,2,'2022-10-30 18:00:04','2022-10-30 18:00:04');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2019_08_19_000000_create_failed_jobs_table',1),(2,'2019_12_14_000001_create_personal_access_tokens_table',1),(3,'2022_08_29_142730_create_roles_table',1),(4,'2022_08_29_142731_create_users_table',1),(5,'2022_09_02_074822_create_courses_table',1),(6,'2022_09_23_202631_create_social_accounts_table',1),(7,'2022_10_02_235258_create_course_student_table',1),(8,'2022_10_10_214117_create_curriculums_table',1),(9,'2022_10_24_224437_create_groups_table',2),(10,'2022_10_24_225209_create_group_student_table',2),(12,'2022_10_29_200116_create_sections_table',3),(16,'2022_10_29_203313_create_tasks_table',4),(17,'2022_11_06_223636_create_topics_table',5),(18,'2022_11_06_223853_create_activities_table',5);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (5,'App\\Models\\User',2,'authToken','582cec0f9c1f3f9854845292a645b39551041093d1baf7fd5beaef93ddf5e8da','[\"*\"]',NULL,'2022-10-23 21:25:59','2022-10-23 21:25:59'),(6,'App\\Models\\User',2,'authToken','b510251aeebb93774eff94ebc2fa7249e6f92a6922aa3db5f2abffc6b0c7a3e0','[\"*\"]','2022-10-23 21:26:46','2022-10-23 21:26:04','2022-10-23 21:26:46'),(7,'App\\Models\\User',59,'authToken','13aa3745b68933002a86a6747767b762c2ba93310f6e1dad876cb955e77a1d82','[\"*\"]',NULL,'2022-10-23 21:59:08','2022-10-23 21:59:08'),(9,'App\\Models\\User',2,'authToken','8387458a669471340d72e3f94b5da97771461f314360800b32e5a332c395d914','[\"*\"]','2022-10-24 00:02:32','2022-10-24 00:02:11','2022-10-24 00:02:32'),(12,'App\\Models\\User',2,'authToken','783b144ddd335606d6dea9d51e727959105cc4ad029e24b22c0a2453c5060a67','[\"*\"]','2022-10-25 00:00:54','2022-10-24 21:21:24','2022-10-25 00:00:54'),(14,'App\\Models\\User',2,'authToken','4cf1f07cc1d79cfd3e20dc2ab7134654765064caa8fcffb79d0e9883841ced29','[\"*\"]','2022-10-26 23:36:59','2022-10-26 23:36:58','2022-10-26 23:36:59'),(16,'App\\Models\\User',2,'authToken','3a468811c9a0a033132752c68c1493684dc572d483080772de985c41b74c99d3','[\"*\"]','2022-10-27 00:07:24','2022-10-27 00:06:24','2022-10-27 00:07:24'),(24,'App\\Models\\User',2,'authToken','ddb4ba1a29d29f91ffb311a799bb1b5accd931d458a515f93a190233f2bc227b','[\"*\"]','2022-11-05 10:36:38','2022-10-30 15:40:09','2022-11-05 10:36:38'),(26,'App\\Models\\User',4,'google-token','e22e985a8014f06c247acfd473a325d4e7e38c8af2b284091f6a9c5abe9a0975','[\"*\"]','2022-11-01 23:52:48','2022-10-31 16:50:05','2022-11-01 23:52:48'),(27,'App\\Models\\User',4,'google-token','cfcece0c265239d507924e2ae88301f5bfd7ebf0b0526af94b034667f09da563','[\"*\"]','2022-11-01 23:56:34','2022-11-01 23:55:37','2022-11-01 23:56:34'),(29,'App\\Models\\User',4,'google-token','9d8427ba5cfe0ddf9f8b571442be09434cfc185f790a4b0f32fd7556d696a611','[\"*\"]','2022-11-02 00:14:23','2022-11-02 00:13:17','2022-11-02 00:14:23'),(30,'App\\Models\\User',4,'google-token','14419e118b90149f9441ea4f414d2ad12bd622a41b14e2b26a891f00d9fd2f0f','[\"*\"]','2022-11-02 00:18:56','2022-11-02 00:18:55','2022-11-02 00:18:56'),(31,'App\\Models\\User',4,'google-token','c84240bda76140db17c14e238ad4e649fb3aa52f75f6e946990042dafa36534a','[\"*\"]','2022-11-02 00:19:21','2022-11-02 00:19:20','2022-11-02 00:19:21'),(32,'App\\Models\\User',4,'google-token','f19c699770f43d0307736b02e61b700d16c625aba470bf29c06e9dbeaf111ec0','[\"*\"]','2022-11-02 00:21:50','2022-11-02 00:21:49','2022-11-02 00:21:50'),(33,'App\\Models\\User',4,'google-token','3990ebfdb7d232e02aca89ed31f3dca80c3c4ccbfaaea2d331a22bc53e07fcc1','[\"*\"]','2022-11-05 13:49:30','2022-11-02 00:22:25','2022-11-05 13:49:30'),(40,'App\\Models\\User',2,'authToken','60e34e432be4c1b469f9d21c5a0a9f88a18bfbe3ec64f9d32dcdfa62ecd51f79','[\"*\"]','2022-11-08 23:56:58','2022-11-08 00:34:47','2022-11-08 23:56:58'),(41,'App\\Models\\User',4,'google-token','9545e04ada4a2455f8fa37c1c4487dd80c1b23146ad37db2af20d8796841c6c7','[\"*\"]','2022-11-14 17:19:20','2022-11-08 22:11:54','2022-11-14 17:19:20'),(44,'App\\Models\\User',1,'authToken','70b235d9d87750e9d57caf3d9ddef8b1505f1d80768a571fed284447c6367ea4','[\"*\"]','2022-11-13 22:12:38','2022-11-13 15:17:05','2022-11-13 22:12:38'),(46,'App\\Models\\User',4,'google-token','3c161c795457d6da8572ea18c26af09319f797e42e41d1ef29a53b4c6b3a92bc','[\"*\"]','2022-11-14 17:16:47','2022-11-14 17:16:23','2022-11-14 17:16:47'),(54,'App\\Models\\User',2,'authToken','23de5de35a7c3a99ca4e4927e09e0a74004bb703cc5fd8567d9db48682a722e9','[\"*\"]','2022-11-14 21:32:55','2022-11-14 20:49:45','2022-11-14 21:32:55'),(55,'App\\Models\\User',4,'google-token','ab5c8d5b461b25a642cabf23719ee5289ee65e687dbeb8b2e1ac0b2472fa0775','[\"*\"]','2022-11-14 21:57:41','2022-11-14 21:11:01','2022-11-14 21:57:41'),(56,'App\\Models\\User',2,'authToken','4a520e5b58e1d4675fd8d10df8a1ba59b8828851a280bdda8123894912f610b2','[\"*\"]','2022-11-15 00:34:54','2022-11-14 23:42:31','2022-11-15 00:34:54'),(57,'App\\Models\\User',112,'authToken','c556c82d81b59138090b2e5578b5faef248dcdf43e6ee491dd7243986a4d6eca','[\"*\"]',NULL,'2022-11-16 21:23:06','2022-11-16 21:23:06'),(58,'App\\Models\\User',113,'authToken','616c0ab59516f210d709b58ccf8731daded0171decc95252b1811862984e2ab2','[\"*\"]',NULL,'2022-11-16 21:28:07','2022-11-16 21:28:07'),(59,'App\\Models\\User',114,'authToken','3bc1f4a37a6000a06ad6ea338d6eff0a2ba32d8b95bc0ca4cf39cdfcb5377565','[\"*\"]',NULL,'2022-11-16 21:28:54','2022-11-16 21:28:54'),(80,'App\\Models\\User',2,'authToken','483c21c6dbd12974d735a97b8beae736f8676c789df4bc581414863d3a2a7b8a','[\"*\"]','2022-11-24 00:26:52','2022-11-23 23:43:38','2022-11-24 00:26:52'),(81,'App\\Models\\User',2,'authToken','4dd4934e435593620b24976b433454fec62f3b0e503597df39c431c0751446c3','[\"*\"]','2022-11-24 00:18:53','2022-11-24 00:18:11','2022-11-24 00:18:53');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'teacher'),(3,'student');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sections_course_id_foreign` (`course_id`),
  CONSTRAINT `sections_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,' 📃 To do',1,NULL,NULL),(2,' ✏️ In progress',1,NULL,NULL),(3,' ✔️ Completed',1,NULL,NULL),(15,' 📃 To do',2,'2022-10-30 18:00:05','2022-10-30 18:00:05'),(16,' ✏️ In progress',2,'2022-10-30 18:00:05','2022-10-30 18:00:05'),(17,' ✔️ Completed',2,'2022-10-30 18:00:05','2022-10-30 18:00:05');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_accounts`
--

DROP TABLE IF EXISTS `social_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_accounts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `social_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `social_provider` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `social_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_accounts`
--

LOCK TABLES `social_accounts` WRITE;
/*!40000 ALTER TABLE `social_accounts` DISABLE KEYS */;
INSERT INTO `social_accounts` VALUES (1,4,'112447629088754043934','google','Dang Khoa Tran','2022-10-23 16:35:43','2022-10-23 16:35:43'),(2,105,'102893534906606792345','google','Khoa Tran Dang','2022-10-29 23:31:07','2022-10-29 23:31:07'),(3,106,'117636582986268965922','google','Khoa Tran Dang','2022-11-14 17:22:42','2022-11-14 17:22:42');
/*!40000 ALTER TABLE `social_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `position` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `assignees` json DEFAULT NULL,
  `deadline` datetime DEFAULT NULL,
  `section_id` bigint unsigned NOT NULL,
  `group_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tasks_section_id_foreign` (`section_id`),
  KEY `tasks_group_id_foreign` (`group_id`),
  CONSTRAINT `tasks_group_id_foreign` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  CONSTRAINT `tasks_section_id_foreign` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,0,'Learn JavaScript','<h2><strong>Mục tiêu 1</strong></h2><p>Dành cho sinh viên làm quen với hệ thống chấm thi thực hành tự động</p><p><strong>Dạng bài tập: có 2 dạng bài tập thường gặp</strong></p><ul><li>Viết chương trình hoàn chỉnh: sinh viên cần phải #include, khai báo các hàm, biến cần thiết, nhập dữ liệu, tính toán và in kết quả ra màn hình.</li><li>Viết một phần của chương trình: sinh viên có thể được yêu cầu viết một hàm nào đó hoặc hoàn chỉnh một chương trình đã có sẵn.</li></ul><p><strong>Đọc và in kết quả</strong></p><ul><li>Dữ liệu đầu vào được giả sử là đọc từ bàn phím vì thế trong chương trình ta có thể sử dụng các hàm như scanf, getchar, ... để đọc dữ liệu. Cần phải chú ý là ta chỉ cần đọc dữ liệu chứ&nbsp;không cần phải in ra câu thông báo trước mỗi lần đọc dữ liệu (Ví dụ: Không có những câu như: printf(\"Nhap vao a:\");.&nbsp;Lúc này hệ thống sẽ chấm sai.</li><li>Dữ liệu đầu ra được giả sử là in ra màn hình nên trong chương trình ta có thể dùng lệnh printf.&nbsp;<strong>Chú ý: in đúng định dạng yêu cầu, chỉ in những thứ đề bài yêu cầu, không in thừa.</strong></li></ul>','[\"4\", \"71\"]',NULL,1,107,NULL,'2022-11-18 16:35:49'),(2,2,'Learn Git','Update the new UI design for @dashlite template with based on feedback.','[\"1\", \"4\"]',NULL,2,107,NULL,'2022-11-19 22:09:13'),(3,0,'Learn Python, JS, PHP','<h2>Introduction</h2><p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.</p><p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p><p>Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.</p><p>You are granted limited license only for purposes of viewing the material contained on this Website.</p><h2>Restrictions</h2><p>You are specifically restricted from all of the following:</p><ul><li>Publishing any Website material in any other media;</li><li>Selling, sublicensing and/or otherwise commercializing any Website material</li></ul>','[\"1\", \"58\"]',NULL,3,107,NULL,'2022-11-18 16:35:51'),(4,4,'Learn Golang','<p>Update the new UI design for @dashlite template with based on feedback</p>','[\"4\", \"58\", \"1\"]',NULL,2,107,NULL,'2022-11-19 22:09:13'),(5,3,'Learn CSS','Update the new UI design for @dashlite template with based on feedback.',NULL,NULL,2,107,NULL,'2022-11-19 22:09:13'),(6,1,'Learn HTML','Update the new UI design for @dashlite template with based on feedback.','[\"1\", \"58\"]',NULL,3,107,NULL,'2022-11-18 16:35:51'),(7,0,'Learn NodeJS','Update the new UI design for @dashlite template with based on feedback.','[\"1\", \"58\"]',NULL,2,107,NULL,'2022-11-18 16:35:47'),(9,1,'Learn JAVA','<p>Ngon lành lắm</p>','[\"1\", \"4\", \"58\"]','2022-10-31 00:00:00',2,107,'2022-10-31 23:45:18','2022-11-19 22:09:13'),(11,1,'Learn Ruby 1','<p>Learn ruby nha 111</p>','[\"4\", \"71\"]','2022-11-05 00:00:00',1,107,'2022-10-31 23:46:41','2022-11-19 22:09:13'),(12,0,'Nhiệm vụ bất khả thi','<p>Nhiệm vụ bất khả thi</p>',NULL,'2022-11-03 00:00:00',15,119,'2022-10-31 23:48:27','2022-10-31 23:48:33'),(13,0,'Add new task','Content of new task',NULL,'2022-06-08 00:00:00',1,119,'2022-10-31 23:48:45','2022-11-05 13:49:30'),(14,0,'The first mission','<p>The first mission</p>',NULL,'2022-11-19 00:00:00',3,108,'2022-11-18 16:36:38','2022-11-18 16:36:59'),(15,2,'Dolore dolorem tempo','<p>Optio, minus ad qui .</p>','[\"4\"]','2022-11-30 00:00:00',1,107,'2022-11-19 22:09:05','2022-11-19 22:09:23');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topics` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` int NOT NULL,
  `enable` tinyint(1) NOT NULL DEFAULT '1',
  `course_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topics_course_id_foreign` (`course_id`),
  CONSTRAINT `topics_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` VALUES (2,'ĐỌC KỸ HƯỚNG DẪN TRƯỚC KHI BẮT ĐẦU',3,1,1,'2022-11-06 23:01:48','2022-11-09 20:33:28'),(3,'Slide lý thuyết (cập nhật 25/08/2022)',0,1,1,'2022-11-06 23:02:02','2022-11-10 14:20:31'),(6,'Các quy tắt khi làm bài tập',1,1,1,'2022-11-07 23:32:41','2022-11-10 16:10:39'),(9,'ssss',4,1,1,'2022-11-17 20:39:54','2022-11-17 20:39:54');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint unsigned NOT NULL DEFAULT '3',
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_role_id_foreign` (`role_id`),
  CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nguyen Van Admin','admin@gg.com',1,NULL,NULL,'$2y$10$vfSigsRi1i1HqcMxvEWXvuWNU7KpPLT1GA9lb/sH8UDo7iNWog/O.',1,NULL,NULL,'2022-10-23 16:21:56','2022-10-23 16:21:56'),(2,'Tran Van Teacher','teacher@gg.com',2,NULL,NULL,'$2y$10$LBTxh9m1DwRhqRvYB9hw/.XSaG2tYo/zSSCV5UljwNAHgdGbJJQ.O',1,NULL,NULL,'2022-10-23 16:21:56','2022-10-23 16:21:56'),(3,'Nguyen Thi Student','student@gg.com',3,NULL,NULL,'$2y$10$7FbV8GCyocVAUVW9.nSEBedrUMvKxtl6x6nwZjYKrltqiIdFu4hVq',1,NULL,NULL,'2022-10-23 16:21:56','2022-10-23 16:21:56'),(4,'Dang Khoa Tran','richardktran.dev@gmail.com',3,'https://lh3.googleusercontent.com/a/ALm5wu0uZWFoyuHr905L_rvWIU9BKapfXBa4WwN1w_dc=s96-c',NULL,NULL,1,NULL,NULL,'2022-10-23 16:35:43','2022-10-23 16:35:43'),(55,'Ora Wolf','maximus74@ritchie.biz',2,NULL,'2022-10-23 21:46:03','$2y$10$U9Lrl3HJkO48xcoHRpfkg.2OL39sMlkWR9eYbUVJCRFv9SDbNidmW',1,'Ct6z88jMBk',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(56,'Dr. Elena Huels DVM','emelie.swift@gmail.com',2,NULL,'2022-10-23 21:46:03','$2y$10$LelAaVi5bv2ZqYOzY.mUM.lL5tc.zn4k1.Rcx7aZMkVdCgW4HiGee',1,'WTEFw2IB0o',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(57,'Lacy Marquardt','hills.ana@gmail.com',2,NULL,'2022-10-23 21:46:03','$2y$10$4frA7cf4oTMV3Rq/dfuScepKIwKHbH3/VH/HFnMOAFkLa1UyiGx8a',1,'6Y7AfdYSPQ',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(58,'Nikko Mayer','kathleen63@vonrueden.biz',2,NULL,'2022-10-23 21:46:03','$2y$10$z.STprmADUt8JiXDy.vID..g0dMtqJOqNtkvI2rhtyKREYPsUQYM2',1,'V0yjMSbot5',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(59,'Prof. Cornell Mosciski MD','ed.crona@yahoo.com',2,NULL,'2022-10-23 21:46:03','$2y$10$exbaZyo3QDFTFVC94Ry8t.YfVu/VWJy4cT6pv3dF3kCDYq3DW8AAO',1,'lUXfwbB6pp',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(60,'Julianne Welch','katelyn10@trantow.com',2,NULL,'2022-10-23 21:46:03','$2y$10$.pcbf269QjfN9pH4nTcWHuKIafPJCM938nAiOvHc2W.vhKcNy4orO',1,'fISWwXflnb',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(61,'Marlene Heller','tiffany46@hotmail.com',2,NULL,'2022-10-23 21:46:03','$2y$10$LFQLZ8u6lZIDeCmpKPyPP.XCFEzPytSx1OH7bjPZ9PPYNvtPA/jnC',1,'uhoD5NzPbM',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(62,'Paolo O\'Reilly','mayert.marcel@kuhic.com',2,NULL,'2022-10-23 21:46:03','$2y$10$CX0lhLMs57rD.pjZwqAH8eSyNxopL9PMRmbKEmcEfeuiXiOXsQgoW',1,'WzqPI4NnfI',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(63,'Dianna McDermott III','pleuschke@yahoo.com',2,NULL,'2022-10-23 21:46:03','$2y$10$cJPVbdl5iQiBX.W/uVNcru7z4fEWTrk.NQh6bSOGqAx7q3c.k.fN.',1,'L9D9I8LRRG',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(64,'Dr. Einar Grimes III','josue.johnston@gmail.com',2,NULL,'2022-10-23 21:46:04','$2y$10$sIGHGT56ar9UqEVly.4OtO70HXNjBfYEk7OqQIWnfLTQuYE60.qXa',1,'4WIVAQKUv2',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(65,'Prof. Tomas Mraz IV','kim.murazik@armstrong.com',2,NULL,'2022-10-23 21:46:04','$2y$10$MyB.yiLBkPwoHy2q5dpVqugRb3JB624rdJzc2eckR1tqjMepAnHT2',1,'gqEWAYmxdo',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(66,'Ashly Bogisich','dlindgren@quitzon.com',2,NULL,'2022-10-23 21:46:04','$2y$10$svQfzUxUyx6L3U96KuJAVOkQ6n7C4WQNJJhhARjECBOB653Ij4JxS',1,'XjwqYlWxav',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(67,'Devin Hettinger','mcorkery@yahoo.com',2,NULL,'2022-10-23 21:46:04','$2y$10$rtTYtC3yS/kva5UzbCRBLuO34PAr2RdRcumSFyFDerc4kmAPiSu2y',1,'uzFc8CaUSY',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(68,'Destiny Kemmer','jupton@yahoo.com',2,NULL,'2022-10-23 21:46:04','$2y$10$gIoIjJgMZLOdWnuboxckBO4y4Q4/P2nmyMD9Dah1J3wDQaEwKijYS',1,'N2haILfKv3',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(69,'Prof. Hayley Schiller','banderson@renner.org',2,NULL,'2022-10-23 21:46:04','$2y$10$WGHHmle2sor5B4CQsgOS.eWGB1s8811L/L0Vbq3bGIjCl/itHzzkm',1,'HJ06v03A4j',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(70,'Jimmie Mosciski','muller.eddie@gmail.com',2,NULL,'2022-10-23 21:46:04','$2y$10$V.TlIiOpiQOzxTY9iGgt6eFG8qjNGzWvjk4nIjC/iZq9s6RL5dwvK',1,'RQIeIenH0T',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(71,'Johnathon Stamm','deanna03@gmail.com',2,NULL,'2022-10-23 21:46:04','$2y$10$qAJmAL309am5ripJhaeFuuw6X4R..CDjy4CT4kVIzOwo5zr1CWaqG',1,'ot7sRfzdpw',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(72,'Miss Savanah Parisian','mraz.berta@yahoo.com',2,NULL,'2022-10-23 21:46:04','$2y$10$ZLn1Tr6gzCVhsVyZ.pRi.ewhIFpiqBCgK0MdDcxXIVUVeT332euQm',1,'YqaanlguyD',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(73,'Filiberto Bosco','maegan50@yahoo.com',2,NULL,'2022-10-23 21:46:04','$2y$10$3h/P7E02/WrRULJ3CIIjs.IhkHSrtWpTJW..MSgOWowm2yvDuEBre',1,'AwRy6FKHi2',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(74,'Miss Leanna Ratke','vullrich@dubuque.info',2,NULL,'2022-10-23 21:46:04','$2y$10$bqJ4gcrzxi8d5oEEgVHsFevaU/.//PGycf9YQRnY8IkDEgV.VCTh.',1,'Uts3WAMtAg',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(75,'Ted Lockman','norma.gaylord@reichel.org',2,NULL,'2022-10-23 21:46:04','$2y$10$arkyUbC3tmP/b2DltvTyEO6aphJVHWTuOuwY7NuvTVibYtA4k182S',1,'UIRA782nQz',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(76,'Prof. Joelle Turcotte','collins.coleman@bednar.com',2,NULL,'2022-10-23 21:46:04','$2y$10$z6UO7/Cqg5Jh8dIA9q95SOWuzcIGtihPVPIfZ2QRfpR/I4Be9kjYy',1,'KoChb223Gg',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(77,'Ms. Cara Runte II','rubie55@breitenberg.org',2,NULL,'2022-10-23 21:46:05','$2y$10$bqiKDEsdHXtLA8BviFS3IOF8vGjQtGFMjSlDkyZ1Z0TIVMvcQaary',1,'lITCf4E77a',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(78,'Edward Senger','misty.stanton@schowalter.info',2,NULL,'2022-10-23 21:46:05','$2y$10$Bk8pFurwUGwSQg87AVu0luvX8mCjBHJfF6QnUm5ezWpaakTUkNTO2',1,'zRykzj2yut',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(79,'Joesph O\'Connell','trenton.baumbach@hotmail.com',2,NULL,'2022-10-23 21:46:05','$2y$10$4ZUyrZZwDVoSSlps7HYfoeAt16LHK91bkequy4ev7eMdnFuCyKB4a',1,'nVLzsLvLvs',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(80,'Cordelia Braun','otha49@davis.com',2,NULL,'2022-10-23 21:46:05','$2y$10$LWieeCrCo9Eo5gZRm8yePu9pCgEUmsZ5.fVKIxNUc6jxiEQjVzLi.',1,'4kniRXYzI0',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(81,'Veda Lebsack','wwhite@yahoo.com',2,NULL,'2022-10-23 21:46:05','$2y$10$FojYqysMwk5PfDJo5KD/LupdSpX05dyUdyVAb1APx1jTtMOP5Lq6y',1,'bsL66ZVmSI',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(82,'Dr. Alvis Sawayn','therese59@yahoo.com',2,NULL,'2022-10-23 21:46:05','$2y$10$kRdXmcHa/ZZm6mB5XWZ0fOCXeyIeEX4T.heNm8oFZq8jEPPq8vK96',1,'eH8OH6rS7b',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(83,'Dr. Geo Abernathy DVM','shaylee42@kshlerin.com',2,NULL,'2022-10-23 21:46:05','$2y$10$xHvmZXWLXV2y8U/ysGXetOA/9C2avmiCdViQnvlye7VK/ebPtY4f2',1,'8UgvxjA6eY',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(84,'Dr. Leopoldo Reichert','nosinski@yahoo.com',2,NULL,'2022-10-23 21:46:05','$2y$10$KeHDdlWG1KOsKrqosNGxiOTl3QtA0bE.e2Uwoyy4l8e91ROmQHbQm',1,'E9CxNj3DEo',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(85,'Jamil DuBuque MD','torp.roberto@gmail.com',2,NULL,'2022-10-23 21:46:05','$2y$10$Gs1Bt9P5.h0ortGP1N5k1e1/kGyOEO1BQu7snmgyN/ZkZvzgDz55K',1,'cCtSrQowl2',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(86,'Garrett Okuneva','ywiegand@yahoo.com',2,NULL,'2022-10-23 21:46:05','$2y$10$i8fLZlmEV9n3PQK.7fYo7.COopzJqjGqIW0nZZQUB1eUJ0kocqRwq',1,'QvYDkeU95Z',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(87,'Mrs. Lisette O\'Conner I','gilda.leuschke@gmail.com',2,NULL,'2022-10-23 21:46:05','$2y$10$LnuJDjw1xxrNjuKXYG.SN.etugn4.nNcRGwo8Yt7loDNJfO/ScWfS',1,'9sBCPwQl7u',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(88,'Ms. Sadye Fisher Sr.','rempel.ashlynn@hotmail.com',2,NULL,'2022-10-23 21:46:06','$2y$10$HaDv688dh9zwWqQsDswLJu4aN7KJMwfrVBxBrMHP8uAPdI2aJsQLq',1,'ZYnJQFou9Q',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(89,'Dr. Zella Kerluke','rodolfo92@gmail.com',2,NULL,'2022-10-23 21:46:06','$2y$10$zmQ0gm2NpJahzpE/uAL25.oEZEAf1AYkBCWa8FtSyyISMvVq6Ggi6',1,'LQjXLgFM3R',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(90,'Prof. Frederic Cruickshank','nikko46@durgan.com',2,NULL,'2022-10-23 21:46:06','$2y$10$0KlhMyhOuFT7FHeym//60u7jK0CCOFrbUd9xtVPiB48ipNcP03r9S',1,'L4qtm8aWFd',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(91,'Mrs. Amely Lakin','fgoldner@gmail.com',2,NULL,'2022-10-23 21:46:06','$2y$10$2Tj6gJcq4wupiwBFOfbyf.IoOAnjzrd36ZAZbFcye3X17uTHOvmUi',1,'Gc3t5jIkWN',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(92,'Prof. Montana Hoeger','geovanni32@yahoo.com',2,NULL,'2022-10-23 21:46:06','$2y$10$MpDFiwYl7fHU8XweJGQ.j.d93g0cFlCD8KEIkVXF8XaqCZwJM8Ane',1,'7EkXPK8uLT',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(93,'Susan Boyle','koepp.georgette@bradtke.com',2,NULL,'2022-10-23 21:46:06','$2y$10$ydM621knW4cUd6JEWSzBXe3jXrZO/IBEVZkAzUkUcMpjbU66gpV8a',1,'jQhQ3GZuOw',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(94,'Lavonne Torphy','reinger.reanna@hotmail.com',2,NULL,'2022-10-23 21:46:06','$2y$10$58dMEQDhkmYe9gNnbTdTJ.lD6GkxbTk7hOoh0b6PDByKw..nH.lLm',1,'p9wi4ncrlK',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(95,'Savion Kuhic','timmy79@yahoo.com',2,NULL,'2022-10-23 21:46:06','$2y$10$hUEgJiSc27y4DE5ClDlqPuknZzMZR4LHwWSC0FDbevTtjuBygoblG',1,'M6B3JaAygZ',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(96,'Prof. Autumn Reinger DDS','charity.collier@sanford.biz',2,NULL,'2022-10-23 21:46:06','$2y$10$6TTrtktRsTzU/jYGcs0zW.Awi2uVDPoEoiip7uE5q4uGz5bSw04xW',1,'r5JF2y7wRH',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(97,'Kendra Lemke','jerde.monte@hotmail.com',2,NULL,'2022-10-23 21:46:06','$2y$10$crD3vzg1XBCWN4mKxMVbr.SDszA6.pBSLAlihZ3UOK6XpmAr93GE2',1,'eLblz7fEX8',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(98,'Mossie Gleason','lucile.douglas@hotmail.com',2,NULL,'2022-10-23 21:46:06','$2y$10$Qrqx41iS4/G5dfEWaJjdPeZyDNYYueOJVt/RrIit7HQBU8EYPfRHS',1,'4vwAzTvQKu',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(99,'Dr. Ignatius Abshire','kling.jessyca@yahoo.com',2,NULL,'2022-10-23 21:46:06','$2y$10$VGCBAFJKpSGi2gfmooEdlOXXteqgJkR20U3QXmjmQSlsXZLSC2Btm',1,'nhVBeY6srR',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(100,'Lura Kling','meghan58@goldner.biz',2,NULL,'2022-10-23 21:46:07','$2y$10$QccHNFAJZwOp3mF10dlcI.ps.EKFh6TuQdMuv870OTUbiVOhTISqa',1,'3rP7vaJRjK',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(101,'Kelton Jerde','zachariah53@hotmail.com',2,NULL,'2022-10-23 21:46:07','$2y$10$HGz/zXCpiSeWILwiZZcd1.grUA0J7eDv7YKXCEjAPHQ1rCJ5vMByW',1,'zPCW85H9Gi',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(102,'Arturo Collins','avery.maggio@hotmail.com',2,NULL,'2022-10-23 21:46:07','$2y$10$N8w2tNZ66cd/Z2NxU4gcQehDkLtnKiC13JumVYvE5QZMOJJjQ0WUC',1,'m8wtDQZ9xj',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(103,'Mr. Mark Bechtelar','clint.oconner@gmail.com',2,NULL,'2022-10-23 21:46:07','$2y$10$D1qXKvwBRo70f3t/QbEMT.gNBntYqCTqViVQm//lc4lZBrR90dIrS',1,'RpmuzzhVHx',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(104,'Dr. Theresa Schaden I','brianne05@hotmail.com',2,NULL,'2022-10-23 21:46:07','$2y$10$QsTWluEUeIaPTmjJ/41xoeO4QYCfgBrTPNAKZEaA64S2MqJ22iQ7O',1,'zxsT7RJXNp',NULL,'2022-10-23 21:46:07','2022-10-23 21:46:07'),(105,'Khoa Tran Dang','dangtran.khoa@nfq.asia',3,'https://lh3.googleusercontent.com/a/ALm5wu17GnBmM7qnXX0V9dlGpXAQucXvXH0VWW-fLNd3=s96-c',NULL,NULL,1,NULL,NULL,'2022-10-29 23:31:07','2022-10-29 23:31:07'),(106,'Khoa Tran Dang','richardannowit@gmail.com',3,'https://lh3.googleusercontent.com/a/ALm5wu1hk-Y5fF4B7onIjmcY_HT1TShwFZ98zLuo1-cn7w=s96-c',NULL,NULL,1,NULL,NULL,'2022-11-14 17:22:42','2022-11-14 17:22:42'),(107,NULL,'thanhb1605421@elteam.com',3,NULL,NULL,NULL,0,NULL,NULL,'2022-11-15 22:50:50','2022-11-15 22:50:50'),(108,NULL,'langb1805781@elteam.com',3,NULL,NULL,NULL,0,NULL,NULL,'2022-11-15 22:50:50','2022-11-15 22:50:50'),(109,NULL,'huyb1906482@elteam.com',3,NULL,NULL,NULL,0,NULL,NULL,'2022-11-15 22:57:36','2022-11-15 22:57:36'),(110,NULL,'tebeqok@mailinator.com',3,NULL,NULL,NULL,0,NULL,NULL,'2022-11-15 23:02:18','2022-11-15 23:02:18'),(111,NULL,'cebibateq@mailinator.com',3,NULL,NULL,NULL,0,NULL,NULL,'2022-11-15 23:03:52','2022-11-15 23:03:52'),(114,'Tran Dang Khoa','richardktran2.dev@gmail.com',2,NULL,NULL,'$2y$10$Aco9agVq9hUKcqJVMu4pMeitTkXAZ3j7Bw4kAROeCV/wsRyhbV2VK',0,NULL,NULL,'2022-11-16 21:28:54','2022-11-16 21:28:54'),(115,'Trần Đăng kHoa','richardktran3.dev@gmail.com',2,NULL,NULL,'$2y$10$b5OZLN6sgs.FZYRLPvL/U.I8xavUob05aJMn5UZKKR1Dt8/nNwOAW',0,NULL,NULL,'2022-11-16 21:34:00','2022-11-16 21:34:00'),(116,NULL,'richardktran@gmail.com',3,NULL,NULL,NULL,0,NULL,NULL,'2022-11-23 19:55:20','2022-11-23 19:55:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-23 17:30:11
