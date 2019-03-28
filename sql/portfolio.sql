-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Czas generowania: 28 Mar 2019, 23:24
-- Wersja serwera: 5.7.19
-- Wersja PHP: 7.1.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `portfolio`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `projects`
--

CREATE TABLE `projects` (
  `ID` int(11) NOT NULL,
  `PROJECT_LANG` text COLLATE utf8_polish_ci NOT NULL,
  `PROJECT_TITLE` text COLLATE utf8_polish_ci NOT NULL,
  `PROJECT_DESC_NL` text COLLATE utf8_polish_ci NOT NULL,
  `PROJECT_DESC_EN` text COLLATE utf8_polish_ci NOT NULL,
  `PROJECT_DESC_PL` text COLLATE utf8_polish_ci NOT NULL,
  `PROJECT_DATE` date NOT NULL,
  `PROJECT_IMG` text COLLATE utf8_polish_ci NOT NULL,
  `PROJECT_URL` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `projects`
--

INSERT INTO `projects` (`ID`, `PROJECT_LANG`, `PROJECT_TITLE`, `PROJECT_DESC_NL`, `PROJECT_DESC_EN`, `PROJECT_DESC_PL`, `PROJECT_DATE`, `PROJECT_IMG`, `PROJECT_URL`) VALUES
(1, 'HTML,PHP,JS', 'DC Heroes', 'NL', 'EN', 'PL', '2019-03-01', 'dc-heroes-full.png', 'dcheroes'),
(2, 'HTML,PHP,JS', 'Radio Gaga', 'NL', 'EN', 'PL', '2018-10-22', 'radio-gaga-full.png', 'radiogaga'),
(3, 'HTML,PHP,JS', 'Game World', 'NL', 'EN', 'PL', '2018-12-14', 'game-world-full.png', 'gameworld');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `projects`
--
ALTER TABLE `projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
