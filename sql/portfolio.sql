-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Czas generowania: 08 Kwi 2019, 16:49
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
-- Struktura tabeli dla tabeli `admin`
--

CREATE TABLE `admin` (
  `pass` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `admin`
--

INSERT INTO `admin` (`pass`) VALUES
('admin');

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
(1, 'HTML,PHP,JS', 'DC Heroes', 'In dit project maakte ik een website over DC Heroes met mogelijkheden tot commentaars zetten en beoordelen.', 'In this project I made a website about DC Heroes with possibilities to comment and comment.', 'W tym projekcie stworzylem strone internetowa o DC Heroes z mozliwoscia komentowania i komentowania.', '2019-03-01', 'dc-heroes-full.png', 'dcheroes'),
(2, 'HTML,PHP', 'Radio Gaga', 'In dit project maakte ik een online radio met drie albums.', 'In this project I made an online radio with three albums.', 'W tym projekcie stworzylem radio internetowe z trzema albumami.', '2018-10-22', 'radio-gaga-full.png', 'radiogaga'),
(3, 'HTML,PHP,JS', 'Game World', 'In dit project maakte ik een webshop met games.', 'In this project I made a webshop with games.', 'W tym projekcie stworzylem sklep internetowy z grami.', '2018-12-14', 'game-world-full.png', 'gameworld'),
(4, 'HTML,PHP', 'Calculator++', 'In dit project heb ik een rekenmachine gemaakt die kunt basis berekeningen doen.', 'In this project I made a calculator that can do basic calculations.', 'W tym projekcie stworzylem kalkulator, ktory moze wykonywac podstawowe obliczenia.', '2018-10-01', 'calculator_plus_plus-full.png', 'calculatorplusplus'),
(5, 'HTML,PHP,JS', 'Kroepniek.nl', 'In dit project heb ik een voorbeeld website gemaakt waarin je eigen account kan maken en dan inloggen.', 'In this project I created a sample Web site where you can create your own account and then log in.', 'W tym projekcie stworzylem przykladowa strone internetowa, na ktorej mozesz utworzyc wlasne konto, a nastepnie zalogowac sie.\r\n', '2019-01-23', 'kroepniek-full.png', 'kroepniek'),
(6, 'C#', 'Calculator', 'In dit project heb ik een rekenmachine gemaakt die basic berekeningen kan doen.', 'In this project I made a calculator that can do basic calculations.', 'W tym projekcie stworzylem kalkulator, ktory moze wykonywac podstawowe obliczenia.', '2018-10-05', 'calculator-full.png', 'csharp/calculator'),
(7, 'C#', 'Mystery Number', 'In dit project heb ik een applicatie gemaakt waarin je een getaal moet raden.', 'In this project I made an application in which you have to guess a number.', 'W tym projekcie stworzylem aplikacje, w ktorej musisz odgadnac liczbe.', '2018-11-02', 'mystery-number-full.png', 'csharp/mysterynumber'),
(8, 'C#', 'Vault', 'In dit project heb ik een applicatie gemaakt waarin je een code in moet voeren om in te loggen.', 'In this project I created an application in which you must enter a code to log in.', 'W tym projekcie stworzylem aplikacje, w ktorej musisz wpisac kod, aby sie zalogowac.', '2018-12-04', 'vault-full.png', 'csharp/vault'),
(9, 'C#', 'Dragrace', 'In dit project heb ik een applicatie gemaakt waarin je een paarden wedstrijd kan simuleren.', 'In this project I made an application in which you can simulate a horse competition.', 'W tym projekcie stworzylem aplikacje, w ktorej mozesz symulowac zawody konne.', '2019-01-15', 'dragrace-full.png', 'csharp/dragrace'),
(10, 'C#', 'Tunestore', 'In dit project heb ik een applicatie gemaakt waarin je liedjes kan afspelen. De muziekspeler heeft alle basic functies.', 'In this project I made an application in which you can play songs. The music player has all basic functions.', 'W tym projekcie stworzylem aplikacje, w ktorej mozesz odtwarzac utwory. Odtwarzacz muzyki ma wszystkie podstawowe funkcje.', '2019-03-27', 'tunestore-full.png', 'csharp/tunestore'),
(11, 'C#', 'Rooster', 'In dit project heb ik een schoolrooster app gemaakt. Data wordt van een website gehaald.', 'In this project I created a school schedule app. Data is taken from a website.', 'W tym projekcie stworzylem aplikacje do harmonogramu szkolnego. Dane sa pobierane ze strony internetowej.', '2018-12-14', 'rooster-full.png', 'csharp/rooster'),
(12, 'C#', 'Notepad#', 'In dit project heb ik een notepad gemaakt die basis functies van een notepad heeft en ook paar features.', 'In this project I made a notepad that has basic functions of a notepad and also a few features.', 'W tym projekcie stworzylem notatnik, ktory ma podstawowe funkcje notatnika, a takze kilka funkcji.', '2018-11-27', 'notepad-sharp-full.png', 'csharp/notepadsharp'),
(13, 'C#', 'Ferraria', 'In dit project heb ik een fake Terraria gemaakt. Je kunt alleen maar bewegen en graven.', 'In this project I made a fake Terraria. You can only move and dig.', 'W tym projekcie zrobilem falszywa Terrarie. Mozesz sie tylko poruszac i kopac.', '2018-12-08', 'ferraria-full.png', 'csharp/ferraria'),
(14, 'C#', 'Horseman', 'In dit project heb ik eigen spel gemaakt. Je kunt dingen graven en neerplatsen. Er worden ook dynamishe lichten gebruikt.', 'In this project I made my own game. You can dig things and place them. Dynamic lights are also used.', 'W tym projekcie stworzylem wlasna gre. Mozesz kopac rzeczy i stawiac je. Stosowane sa rowniez swiatla dynamiczne.', '2018-12-08', 'horseman-full.png', 'csharp/horseman'),
(15, 'C#,ARDUINO', 'RGB Led Colors', 'In dit project heb ik een applicatie gemaakt die de kleuren van een led kan veranderen.', 'In this project I made an application that can change the colors of a LED.', 'W tym projekcie stworzylem aplikacje, ktora może zmienic kolory diody LED.', '2018-12-06', 'rgb-led-colors-full.png', 'csharp/rgbledcolors'),
(16, 'HTML,PHP,JS', 'Vault Js', 'In dit project heb ik een website gemaakt waarin je een code moet invoeren om in te loggen.', 'In this project I created a website where you have to enter a code to log in.', 'W tym projekcie stworzylem strone internetowa, na ktorej musisz wpisac kod, aby sie zalogowac.', '2019-01-22', 'vault-js-full.png', 'vaultjs');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `webcontent`
--

CREATE TABLE `webcontent` (
  `ID` int(11) NOT NULL,
  `CONTENT_NL` text COLLATE utf8_polish_ci NOT NULL,
  `CONTENT_EN` text COLLATE utf8_polish_ci NOT NULL,
  `CONTENT_PL` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `webcontent`
--

INSERT INTO `webcontent` (`ID`, `CONTENT_NL`, `CONTENT_EN`, `CONTENT_PL`) VALUES
(1, 'Mijn naam is Daniel Mondzielewski en ik ben 17 jaar oud. Ik studeer nu Applicatie- en mediaontwikkeling op Roc Ter AA in Helmond.\r\n							In 2013 ben ik met mijn familie naar Nederland gekomen. Mijn ouders hebben hier goede werk gevonden en zij besloten om hier te blijven.\r\n							Mijn hobbies zijn programmeren, elektronica en gamen. Ik ga elke week 2-3 keer sporten met mijn broer. ', 'My name is Daniel Mondzielewski and I am 17 years old. I am now studying Application and Media Development at Roc Ter AA in Helmond.\r\nIn 2013 I came to the Netherlands with my family. My parents have found good work here and they decided to stay here.\r\nMy hobbies are programming, electronics and gaming. I work out 2-3 times a week with my brother.', 'Nazywam sie Daniel Mondzielewski i mam 17 lat. Obecnie studiuje aplikacje i rozwoj mediow w Roc Ter AA w Helmond.\r\nW 2013 roku przyjechalem do Holandii z rodzina. Moi rodzice znalezli tu dobra prace i postanowili tu zostac.\r\nMoje hobby to programowanie, elektronika i gry. Cwicze 2-3 razy w tygodniu z moim bratem.'),
(2, 'Op mijn school heb ik al een certificaat van Microsoft Word gehaald.\r\n					Ik heb ook paar certificaten gehaald op Sololearn.com', 'At my school I have already obtained a Microsoft Word certificate.\r\nI also obtained a few certificates on Sololearn.com', 'W mojej szkole uzyskalem juz certyfikat Microsoft Word.\r\nUzyskalem rowniez kilka certyfikatow na Sololearn.com');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `webcontent`
--
ALTER TABLE `webcontent`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `projects`
--
ALTER TABLE `projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT dla tabeli `webcontent`
--
ALTER TABLE `webcontent`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
