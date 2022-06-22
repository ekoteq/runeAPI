'use strict';

const { Quest } = require('../Structures');

class Quests {
    constructor() {
        this.allFiredUp = new Quest({
            name: `All Fired Up`,
            release: new Date(2008, 7, 26),
            members: true,
            difficulty: 'intermediate'
        });
        this.animalMagnetism = new Quest({
            name: `Animal Magnetism`,
            release: new Date(2006, 11, 12),
            members: true,
            difficulty: 'intermediate'
        });
        this.anotherSliceOfHAM = new Quest({
            name: `Another Slice of H.A.M.`,
            release: new Date(2007, 3, 24),
            members: true,
            difficulty: 'intermediate'
        });
        this.asAFirstResort = new Quest({
            name: `As a First Resort`,
            release: new Date(2008, 0, 29),
            members: true,
            difficulty: 'experienced'
        });
        this.azzanadrasQuest = new Quest({
            name: `Azzanadra\'s Quest`,
            release: new Date(2021, 1, 22),
            members: true,
            difficulty: 'experienced'
        });
        this.backToMyRoots = new Quest({
            name: `Back to my Roots`,
            release: new Date(2007, 9, 9),
            members: true,
            difficulty: 'master'
        });
        this.backToTheFreezer = new Quest({
            name: `Back to the Freezer`,
            release: new Date(2017, 1, 27),
            members: true,
            difficulty: 'master'
        });
        this.beneathCursedTides = new Quest({
            name: `Beneath Cursed Tides`,
            release: new Date(2015, 11, 14),
            members: false,
            difficulty: 'intermediate'
        });
        this.betweenARock = new Quest({
            name: `Between a Rock...`,
            release: new Date(2005, 2, 21),
            members: true,
            difficulty: 'experienced'
        });
        this.bigChompyBirdHunting = new Quest({
            name: `Big Chompy Bird Hunting`,
            release: new Date(2004, 4, 18),
            members: true,
            difficulty: 'intermediate'
        });
        this.biohazard = new Quest({
            name: `Biohazard`,
            release: new Date(2002, 9, 23),
            members: true,
            difficulty: 'novice'
        });
        this.birthrightOfTheDwarves = new Quest({
            name: `Birthright of the Dwarves`,
            release: new Date(2013, 9, 2),
            members: true,
            difficulty: 'grandmaster'
        });
        this.theBloodPact = new Quest({
            name: `The Blood Pact`,
            release: new Date(2010, 2, 15),
            members: false,
            difficulty: 'novice'
        });
        this.bloodRunsDeep = new Quest({
            name: `Blood Runs Deep`,
            release: new Date(2009, 11, 15),
            members: true,
            difficulty: 'master'
        });
        this.theBranchesOfDarkmeyer = new Quest({
            name: `The Branches of Darkmeyer`,
            release: new Date(2011, 7, 31),
            members: true,
            difficulty: 'master'
        });
        this.bringingHomeTheBacon = new Quest({
            name: `Bringing Home the Bacon`,
            release: new Date(2013, 6, 9),
            members: true,
            difficulty: 'novice'
        });
        this.theBrinkOfExtinction = new Quest({
            name: `The Brink of Extinction`,
            release: new Date(2012, 11, 4),
            members: true,
            difficulty: 'grandmaster'
        });
        this.brokenHome = new Quest({
            name: `Broken Home`,
            release: new Date(2014, 9, 27),
            members: false,
            difficulty: 'novice'
        });
        this.buyersAndCellars = new Quest({
            name: `Buyers and Cellars`,
            release: new Date(2010, 3, 28),
            members: true,
            difficulty: 'novice'
        });
        this.cabinFever = new Quest({
            name: `Cabin Fever`,
            release: new Date(2006, 1, 7),
            members: true,
            difficulty: 'experienced'
        });
        this.callOfTheAncestors = new Quest({
            name: `Call of the Ancestors`,
            release: new Date(2015, 9, 12),
            members: true,
            difficulty: 'novice'
        });
        this.carnilleanRising = new Quest({
            name: `Carnillean Rising`,
            release: new Date(2012, 6, 3),
            members: true,
            difficulty: 'intermediate'
        });
        this.catapultConstruction = new Quest({
            name: `Catapult Construction`,
            release: new Date(2008, 1, 13),
            members: true,
            difficulty: 'master'
        });
        this.chefsAssistant = new Quest({
            name: `Chef\'s Assistant`,
            release: new Date(2019, 1, 11),
            members: false,
            difficulty: 'novice'
        });
        this.childrenOfMah = new Quest({
            name: `Children of Mah`,
            release: new Date(2016, 10, 21),
            members: true,
            difficulty: 'grandmaster'
        });
        this.theChosenCommander = new Quest({
            name: `The Chosen Commander`,
            release: new Date(2009, 2, 17),
            members: true,
            difficulty: 'experienced'
        });
        this.cityOfSenntisten = new Quest({
            name: `City of Senntisten`,
            release: new Date(2021, 5, 21),
            members: true,
            difficulty: 'master'
        });
        this.clockTower = new Quest({
            name: `Clock Tower`,
            release: new Date(2002, 5, 17),
            members: true,
            difficulty: 'novice'
        });
        this.aClockworkSyringe = new Quest({
            name: `A Clockwork Syringe`,
            release: new Date(2011, 2, 28),
            members: true,
            difficulty: 'master'
        });
        this.coldWar = new Quest({
            name: `Cold War`,
            release: new Date(2007, 1, 29),
            members: true,
            difficulty: 'intermediate'
        });
        this.contact = new Quest({
            name: `Contact!`,
            release: new Date(2007, 0, 10),
            members: true,
            difficulty: 'master'
        });
        this.cooksAssistant = new Quest({
            name: `Cook\'s Assistant`,
            release: new Date(2001, 0, 4),
            members: false,
            difficulty: 'novice'
        });
        this.creatureOfFenkenstrain = new Quest({
            name: `Creature of Fenkenstrain`,
            release: new Date(2005, 0, 31),
            members: true,
            difficulty: 'intermediate'
        });
        this.crocodileTears = new Quest({
            name: `Crocodile Tears`,
            release: new Date(2017, 5, 5),
            members: true,
            difficulty: 'master'
        });
        this.theCurseOfArrav = new Quest({
            name: `The Curse of Arrav`,
            release: new Date(2009, 6, 21),
            members: true,
            difficulty: 'master'
        });
        this.curseOfTheBlackStone = new Quest({
            name: `Curse of the Black Stone`,
            release: new Date(2019, 1, 25),
            members: true,
            difficulty: 'master'
        });
        this.theDarknessOfHallowvale = new Quest({
            name: `The Darkness of Hallowvale`,
            release: new Date(2006, 8, 4),
            members: true,
            difficulty: 'intermediate'
        });
        this.deadliestCatch = new Quest({
            name: `Deadliest Catch`,
            release: new Date(2011, 5, 7),
            members: true,
            difficulty: 'master'
        });
        this.dealingWithScabaras = new Quest({
            name: `Dealing with Scabaras`,
            release: new Date(2008, 0, 2),
            members: true,
            difficulty: 'master'
        });
        this.theDeathOfChivalry = new Quest({
            name: `The Death of Chivalry`,
            release: new Date(2013, 7, 13),
            members: false,
            difficulty: 'novice'
        });
        this.deathPlateau = new Quest({
            name: `Death Plateau`,
            release: new Date(2004, 7, 9),
            members: false,
            difficulty: 'novice'
        });
        this.deathToTheDorgeshuun = new Quest({
            name: `Death to the Dorgeshuun`,
            release: new Date(2006, 5, 21),
            members: true,
            difficulty: 'intermediate'
        });
        this.defenderOfVarrock = new Quest({
            name: `Defender of Varrock`,
            release: new Date(2008, 8, 29),
            members: true,
            difficulty: 'experienced'
        });
        this.demonSlayer = new Quest({
            name: `Demon Slayer`,
            release: new Date(2013, 0, 28),
            members: false,
            difficulty: 'novice'
        });
        this.desertTreasure = new Quest({
            name: `Desert Treasure`,
            release: new Date(2005, 3, 18),
            members: true,
            difficulty: 'master'
        });
        this.desperateMeasures = new Quest({
            name: `Desperate Measures`,
            release: new Date(2020, 6, 27),
            members: true,
            difficulty: 'intermediate'
        });
        this.desperateTimes = new Quest({
            name: `Desperate Times`,
            release: new Date(2019, 4, 13),
            members: true,
            difficulty: 'intermediate'
        });
        this.deviousMinds = new Quest({
            name: `Devious Minds`,
            release: new Date(2005, 11, 19),
            members: true,
            difficulty: 'experienced'
        });
        this.diamondInTheRough = new Quest({
            name: `Diamond in the Rough`,
            release: new Date(2012, 8, 26),
            members: true,
            difficulty: 'novice'
        });
        this.theDigSite = new Quest({
            name: `The Dig Site`,
            release: new Date(2003, 6, 9),
            members: true,
            difficulty: 'intermediate'
        });
        this.dimensionOfDisaster = new Quest({
            name: `Dimension of Disaster`,
            release: new Date(2015, 2, 23),
            members: true,
            difficulty: 'special'
        });
        this.dishonourAmongThieves = new Quest({
            name: `Dishonour among Thieves`,
            release: new Date(2015, 1, 23),
            members: true,
            difficulty: 'intermediate'
        });
        this.doNoEvil = new Quest({
            name: `Do No Evil`,
            release: new Date(2010, 11, 1),
            members: true,
            difficulty: 'master'
        });
        this.dragonSlayer = new Quest({
            name: `Dragon Slayer`,
            release: new Date(2001, 8, 23),
            members: false,
            difficulty: 'experienced'
        });
        this.dreamMentor = new Quest({
            name: `Dream Mentor`,
            release: new Date(2007, 4, 15),
            members: true,
            difficulty: 'master'
        });
        this.druidicRitual = new Quest({
            name: `Druidic Ritual`,
            release: new Date(2002, 1, 27),
            members: false,
            difficulty: 'novice'
        });
        this.dwarfCannon = new Quest({
            name: `Dwarf Cannon`,
            release: new Date(2003, 4, 27),
            members: true,
            difficulty: 'novice'
        });
        this.eadgarsRuse = new Quest({
            name: `Eadgar\'s Ruse`,
            release: new Date(2004, 9, 5),
            members: true,
            difficulty: 'experienced'
        });
        this.eaglesPeak = new Quest({
            name: `Eagles\' Peak`,
            release: new Date(2006, 10, 28),
            members: true,
            difficulty: 'novice'
        });
        this.theElderKiln = new Quest({
            name: `The Elder Kiln`,
            release: new Date(2012, 1, 14),
            members: true,
            difficulty: 'master'
        });
        this.elementalWorkshopI = new Quest({
            name: `Elemental Workshop I`,
            release: new Date(2004, 5, 2),
            members: true,
            difficulty: 'novice'
        });
        this.elementalWorkshopII = new Quest({
            name: `Elemental Workshop II`,
            release: new Date(2006, 9, 2),
            members: true,
            difficulty: 'intermediate'
        });
        this.elementalWorkshopIII = new Quest({
            name: `Elemental Workshop III`,
            release: new Date(2010, 4, 25),
            members: true,
            difficulty: 'intermediate'
        });
        this.elementalWorkshopIV = new Quest({
            name: `Elemental Workshop IV`,
            release: new Date(2011, 2, 1),
            members: true,
            difficulty: 'intermediate'
        });
        this.enakhrasLament = new Quest({
            name: `Enakhra\'s Lament`,
            release: new Date(2006, 0, 23),
            members: true,
            difficulty: 'experienced'
        });
        this.enlightenedJourney = new Quest({
            name: `Enlightened Journey`,
            release: new Date(2006, 10, 6),
            members: true,
            difficulty: 'intermediate'
        });
        this.ernestTheChicken = new Quest({
            name: `Ernest the Chicken`,
            release: new Date(2001, 0, 21),
            members: false,
            difficulty: 'novice'
        });
        this.evilDavesBigDayOut = new Quest({
            name: `Evil Dave\'s Big Day Out`,
            release: new Date(2017, 10, 27),
            members: true,
            difficulty: 'intermediate'
        });
        this.extinction = new Quest({
            name: `Extinction`,
            release: new Date(2002, 3, 4),
            members: true,
            difficulty: 'grandmaster'
        });
        this.theEyesOfGlouphrie = new Quest({
            name: `The Eyes of Glouphrie`,
            release: new Date(2006, 7, 15),
            members: true,
            difficulty: 'intermediate'
        });
        this.aFairyTaleI = new Quest({
            name: `A Fairy Tale I - Growing Pains`,
            release: new Date(2006, 1, 27),
            members: true,
            difficulty: 'experienced'
        });
        this.aFairyTaleII = new Quest({
            name: `A Fairy Tale II - Cure a Queen`,
            release: new Date(2006, 6, 11),
            members: true,
            difficulty: 'experienced'
        });
        this.aFairyTaleIII = new Quest({
            name: `A Fairy Tale III - Battle at Ork's Rift`,
            release: new Date(2010, 4, 13),
            members: true,
            difficulty: 'experienced'
        });
        this.familyCrest = new Quest({
            name: `Family Crest`,
            release: new Date(2002, 3, 9),
            members: true,
            difficulty: 'experienced'
        });
        this.fateOfTheGods = new Quest({
            name: `Fate of the Gods`,
            release: new Date(2014, 2, 24),
            members: true,
            difficulty: 'grandmaster'
        });
        this.theFeud = new Quest({
            name: `The Feud`,
            release: new Date(2005, 3, 4),
            members: true,
            difficulty: 'intermediate'
        });
        this.fightArena = new Quest({
            name: `Fight Arena`,
            release: new Date(2002, 6, 23),
            members: true,
            difficulty: 'experienced'
        });
        this.theFiremakersCurse = new Quest({
            name: `The Firemaker\'s Curse`,
            release: new Date(2012, 0, 11),
            members: true,
            difficulty: 'master'
        });
        this.fishingContest = new Quest({
            name: `Fishing Contest`,
            release: new Date(2002, 4, 28),
            members: true,
            difficulty: 'novice'
        });
        this.forgettableTaleOfADrunkenDwarf = new Quest({
            name: `Forgettable Tale of a Drunken Dwarf`,
            release: new Date(2005, 6, 26),
            members: true,
            difficulty: 'intermediate'
        });
        this.forgivenessOfAChaosDwarf = new Quest({
            name: `Forgiveness of a Chaos Dwarf`,
            release: new Date(2009, 8, 9),
            members: true,
            difficulty: 'master'
        });
        this.theFremennikIsles = new Quest({
            name: `The Fremennik Isles`,
            release: new Date(2007, 1, 6),
            members: true,
            difficulty: 'experienced'
        });
        this.theFremennikTrials = new Quest({
            name: `The Fremennik Trials`,
            release: new Date(2004, 10, 2),
            members: true,
            difficulty: 'intermediate'
        });
        this.furNSeek = new Quest({
            name: `Fur \'n Seek`,
            release: new Date(2009, 7, 10),
            members: true,
            difficulty: 'novice'
        });
        this.gardenOfTranquillity = new Quest({
            name: `Garden of Tranquillity`,
            release: new Date(2005, 7, 30),
            members: true,
            difficulty: 'intermediate'
        });
        this.gertrudesCat = new Quest({
            name: `Gertrude\'s Cat`,
            release: new Date(2003, 6, 28),
            members: false,
            difficulty: 'novice'
        });
        this.ghostsAhoy = new Quest({
            name: `Ghosts Ahoy`,
            release: new Date(2005, 2, 15),
            members: true,
            difficulty: 'intermediate'
        });
        this.theGiantDwarf = new Quest({
            name: `The Giant Dwarf`,
            release: new Date(2005, 4, 31),
            members: true,
            difficulty: 'intermediate'
        });
        this.gloriousMemories = new Quest({
            name: `Glorious Memories`,
            release: new Date(2009, 3, 1),
            members: true,
            difficulty: 'master'
        });
        this.goblinDiplomacy = new Quest({
            name: `Goblin Diplomacy`,
            release: new Date(2001, 4, 8),
            members: false,
            difficulty: 'novice'
        });
        this.theGolem = new Quest({
            name: `The Golem`,
            release: new Date(2005, 3, 11),
            members: true,
            difficulty: 'intermediate'
        });
        this.gowerQuest = new Quest({
            name: `Gower Quest`,
            release: new Date(2016, 5, 20),
            members: false,
            difficulty: 'experienced'
        });
        this.theGrandTree = new Quest({
            name: `The Grand Tree`,
            release: new Date(2002, 11, 12),
            members: true,
            difficulty: 'experienced'
        });
        this.theGreatBrainRobbery = new Quest({
            name: `The Great Brain Robbery`,
            release: new Date(2007, 2, 6),
            members: true,
            difficulty: 'experienced'
        });
        this.grimTales = new Quest({
            name: `Grim Tales`,
            release: new Date(2007, 5, 4),
            members: true,
            difficulty: 'master'
        });
        this.gunnarsGround = new Quest({
            name: `Gunnar\'s Ground`,
            release: new Date(2010, 8, 21),
            members: false,
            difficulty: 'novice'
        });
        this.theHandInTheSand = new Quest({
            name: `The Hand in the Sand`,
            release: new Date(2006, 0, 10),
            members: true,
            difficulty: 'intermediate'
        });
        this.hauntedMine = new Quest({
            name: `Haunted Mine`,
            release: new Date(2004, 11, 21),
            members: true,
            difficulty: 'experienced'
        });
        this.hazeelCult = new Quest({
            name: `Hazeel Cult`,
            release: new Date(2002, 7, 15),
            members: true,
            difficulty: 'novice'
        });
        this.heartOfStone = new Quest({
            name: `Heart of Stone`,
            release: new Date(2014, 10, 24),
            members: true,
            difficulty: 'intermediate'
        });
        this.heartstealer = new Quest({
            name: `Heartstealer`,
            release: new Date(2021, 1, 8),
            members: false,
            difficulty: 'novice'
        });
        this.herosWelcome = new Quest({
            name: `Hero\'s Welcome`,
            release: new Date(2015, 5, 29),
            members: true,
            difficulty: 'experienced'
        });
        this.heroesQuest = new Quest({
            name: `Heroes\' Quest`,
            release: new Date(2002, 1, 27),
            members: true,
            difficulty: 'experienced'
        });
        this.holyGrail = new Quest({
            name: `Holy Grail`,
            release: new Date(2002, 6, 23),
            members: true,
            difficulty: 'intermediate'
        });
        this.horrorFromTheDeep = new Quest({
            name: `Horror from the Deep`,
            release: new Date(2004, 10, 17),
            members: true,
            difficulty: 'experienced'
        });
        this.huntForRedRaktuber = new Quest({
            name: `Hunt for Red Raktuber`,
            release: new Date(2009, 5, 2),
            members: true,
            difficulty: 'intermediate'
        });
        this.icthlarinsLittleHelper = new Quest({
            name: `Icthlarin\'s Little Helper`,
            release: new Date(2005, 3, 26),
            members: true,
            difficulty: 'intermediate'
        });
        this.impCatcher = new Quest({
            name: `Imp Catcher`,
            release: new Date(2001, 1, 16),
            members: false,
            difficulty: 'novice'
        });
        this.impressingTheLocals = new Quest({
            name: `Impressing the Locals`,
            release: new Date(2016, 6, 11),
            members: true,
            difficulty: 'novice'
        });
        this.inAidOfTheMyreque = new Quest({
            name: `In Aid of the Myreque`,
            release: new Date(2006, 2, 22),
            members: true,
            difficulty: 'intermediate'
        });
        this.inPyreNeed = new Quest({
            name: `In Pyre Need`,
            release: new Date(2009, 0, 6),
            members: true,
            difficulty: 'experienced'
        });
        this.inSearchOfTheMyreque = new Quest({
            name: `In Search of the Myreque`,
            release: new Date(2005, 0, 10),
            members: true,
            difficulty: 'intermediate'
        });
        this.theJackofSpades = new Quest({
            name: `The Jack of Spades`,
            release: new Date(2017, 5, 5),
            members: true,
            difficulty: 'novice'
        });
        this.junglePotion = new Quest({
            name: `Jungle Potion`,
            release: new Date(2002, 9, 23),
            members: true,
            difficulty: 'novice'
        });
        this.kennithsConcerns = new Quest({
            name: `Kennith\'s Concerns`,
            release: new Date(2008, 2, 11),
            members: true,
            difficulty: 'intermediate'
        });
        this.kindredSpirits = new Quest({
            name: `Kindred Spirits`,
            release: new Date(2016, 4, 23),
            members: true,
            difficulty: 'experienced'
        });
        this.kingOfTheDwarves = new Quest({
            name: `King of the Dwarves`,
            release: new Date(2011, 0, 4),
            members: true,
            difficulty: 'master'
        });
        this.kingsRansom = new Quest({
            name: `King\'s Ransom`,
            release: new Date(2007, 6, 24),
            members: true,
            difficulty: 'experienced'
        });
        this.theKnightsSword = new Quest({
            name: `The Knight\'s Sword`,
            release: new Date(2001, 3, 6),
            members: false,
            difficulty: 'intermediate'
        });
        this.landOfTheGoblins = new Quest({
            name: `Land of the Goblins`,
            release: new Date(2007, 10, 12),
            members: true,
            difficulty: 'experienced'
        });
        this.legacyOfSeergaze = new Quest({
            name: `Legacy of Seergaze`,
            release: new Date(2008, 3, 22),
            members: true,
            difficulty: 'experienced'
        });
        this.legendsQuest = new Quest({
            name: `Legends\' Quest`,
            release: new Date(2003, 7, 20),
            members: true,
            difficulty: 'master'
        });
        this.letThemEatPie = new Quest({
            name: `Let Them Eat Pie`,
            release: new Date(2012, 0, 31),
            members: false,
            difficulty: 'novice'
        });
        this.theLightWithin = new Quest({
            name: `The Light Within`,
            release: new Date(2015, 7, 24),
            members: true,
            difficulty: 'grandmaster'
        });
        this.theLordOfVampyrium = new Quest({
            name: `The Lord of Vampyrium`,
            release: new Date(2015, 8, 14),
            members: true,
            difficulty: 'master'
        });
        this.lostCity = new Quest({
            name: `Lost City`,
            release: new Date(2002, 1, 27),
            members: true,
            difficulty: 'experienced'
        });
        this.theLostTribe = new Quest({
            name: `The Lost Tribe`,
            release: new Date(2005, 4, 31),
            members: true,
            difficulty: 'intermediate'
        });
        this.loveStory = new Quest({
            name: `Love Story`,
            release: new Date(2010, 6, 5),
            members: true,
            difficulty: 'master'
        });
        this.lunarDiplomacy = new Quest({
            name: `Lunar Diplomacy`,
            release: new Date(2006, 6, 24),
            members: true,
            difficulty: 'experienced'
        });
        this.makingHistory = new Quest({
            name: `Making History`,
            release: new Date(2005, 10, 22),
            members: true,
            difficulty: 'intermediate'
        });
        this.meetingHistory = new Quest({
            name: `Meeting History`,
            release: new Date(2008, 7, 5),
            members: true,
            difficulty: 'intermediate'
        });
        this.merlinsCrystal = new Quest({
            name: `Merlin\'s Crystal`,
            release: new Date(2002, 1, 27),
            members: true,
            difficulty: 'intermediate'
        });
        this.theMightyFall = new Quest({
            name: `The Mighty Fall`,
            release: new Date(2014, 5, 2),
            members: true,
            difficulty: 'master'
        });
        this.missingMyMummy = new Quest({
            name: `Missing My Mummy`,
            release: new Date(2009, 5, 19),
            members: true,
            difficulty: 'intermediate'
        });
        this.missingPresumedDeath = new Quest({
            name: `Missing, Presumed Death`,
            release: new Date(2013, 9, 15),
            members: false,
            difficulty: 'novice'
        });
        this.monksFriend = new Quest({
            name: `Monk\'s Friend`,
            release: new Date(2002, 4, 28),
            members: true,
            difficulty: 'novice'
        });
        this.monkeyMadness = new Quest({
            name: `Monkey Madness`,
            release: new Date(2004, 11, 6),
            members: true,
            difficulty: 'master'
        });
        this.mountainDaughter = new Quest({
            name: `Mountain Daughter`,
            release: new Date(2005, 4, 7),
            members: true,
            difficulty: 'intermediate'
        });
        this.mourningsEndPartI = new Quest({
            name: `Mourning\'s End Part I`,
            release: new Date(2005, 6, 19),
            members: true,
            difficulty: 'master'
        });
        this.mourningsEndPartII = new Quest({
            name: `Mourning\'s End Part II`,
            release: new Date(2005, 9, 17),
            members: true,
            difficulty: 'master'
        });
        this.murderMystery = new Quest({
            name: `Murder Mystery`,
            release: new Date(2003, 5, 9),
            members: true,
            difficulty: 'novice'
        });
        this.myArmsBigAdventure = new Quest({
            name: `My Arm\'s Big Adventure`,
            release: new Date(2006, 9, 23),
            members: true,
            difficulty: 'intermediate'
        });
        this.mythsOfTheWhiteLands = new Quest({
            name: `Myths of the White Lands`,
            release: new Date(2008, 11, 16),
            members: false,
            difficulty: 'novice'
        });
        this.natureSpirit = new Quest({
            name: `Nature Spirit`,
            release: new Date(2004, 6, 13),
            members: true,
            difficulty: 'novice'
        });
        this.theNeedleSkips = new Quest({
            name: `The Needle Skips`,
            release: new Date(2018, 10, 19),
            members: true,
            difficulty: 'novice'
        });
        this.nomadsElegy = new Quest({
            name: `Nomad\'s Elegy`,
            release: new Date(2016, 1, 15),
            members: true,
            difficulty: 'master'
        });
        this.nomadsRequiem = new Quest({
            name: `Nomad\'s Requiem`,
            release: new Date(2010, 0, 11),
            members: true,
            difficulty: 'grandmaster'
        });
        this.observatoryQuest = new Quest({
            name: `Observatory Quest`,
            release: new Date(2003, 2, 17),
            members: true,
            difficulty: 'novice'
        });
        this.olafsQuest = new Quest({
            name: `Olaf\'s Quest`,
            release: new Date(2007, 3, 10),
            members: true,
            difficulty: 'intermediate'
        });
        this.onceUponASlime = new Quest({
            name: `Once Upon a Slime`,
            release: new Date(2020, 1, 10),
            members: false,
            difficulty: 'novice'
        });
        this.onceUponATimeInGielinor = new Quest({
            name: `Once Upon a Time in Gielinor`,
            release: new Date(2021, 10, 22),
            members: true,
            difficulty: 'novice'
        });
        this.oneOfAKind = new Quest({
            name: `One of a Kind`,
            release: new Date(2014, 2, 10),
            members: true,
            difficulty: 'grandmaster'
        });
        this.onePiercingNote = new Quest({
            name: `One Piercing Note`,
            release: new Date(2011, 10, 7),
            members: false,
            difficulty: 'novice'
        });
        this.oneSmallFavour = new Quest({
            name: `One Small Favour`,
            release: new Date(2005, 1, 28),
            members: true,
            difficulty: 'experienced'
        });
        this.ourManInTheNorth = new Quest({
            name: `Our Man in the North`,
            release: new Date(2017, 5, 5),
            members: true,
            difficulty: 'master'
        });
        this.thePathOfGlouphrie = new Quest({
            name: `The Path of Glouphrie`,
            release: new Date(2007, 8, 3),
            members: true,
            difficulty: 'experienced'
        });
        this.perilsOfIceMountain = new Quest({
            name: `Perils of Ice Mountain`,
            release: new Date(2008, 4, 7),
            members: false,
            difficulty: 'novice'
        });
        this.phiteClub = new Quest({
            name: `\'Phite Club`,
            release: new Date(2017, 5, 5),
            members: true,
            difficulty: 'master'
        });
        this.piecesOfHate = new Quest({
            name: `Pieces of Hate`,
            release: new Date(2018, 2, 19),
            members: true,
            difficulty: 'master'
        });
        this.piratesTreasure = new Quest({
            name: `Pirate\'s Treasure`,
            release: new Date(2001, 5, 11),
            members: false,
            difficulty: 'novice'
        });
        this.plagueCity = new Quest({
            name: `Plague City`,
            release: new Date(2002, 7, 27),
            members: true,
            difficulty: 'novice'
        });
        this.plaguesEnd = new Quest({
            name: `Plague\'s End`,
            release: new Date(2014, 7, 11),
            members: true,
            difficulty: 'grandmaster'
        });
        this.priestInPeril = new Quest({
            name: `Priest in Peril`,
            release: new Date(2004, 5, 29),
            members: false,
            difficulty: 'novice'
        });
        this.thePrisonerOfGlouphrie = new Quest({
            name: `The Prisoner of Glouphrie`,
            release: new Date(2011, 1, 9),
            members: true,
            difficulty: 'master'
        });
        this.quietBeforeTheSwarm = new Quest({
            name: `Quiet Before the Swarm`,
            release: new Date(2010, 5, 24),
            members: true,
            difficulty: 'intermediate'
        });
        this.ragAndBoneMan = new Quest({
            name: `Rag and Bone Man`,
            release: new Date(2006, 3, 10),
            members: true,
            difficulty: 'novice'
        });
        this.ratCatchers = new Quest({
            name: `Rat Catchers`,
            release: new Date(2005, 10, 28),
            members: true,
            difficulty: 'intermediate'
        });
        this.recipeForDisaster = new Quest({
            name: `Recipe for Disaster`,
            release: new Date(2006, 2, 15),
            members: true,
            difficulty: 'special'
        });
        this.recruitmentDrive = new Quest({
            name: `Recruitment Drive`,
            release: new Date(2005, 5, 27),
            members: true,
            difficulty: 'novice'
        });
        this.regicide = new Quest({
            name: `Regicide`,
            release: new Date(2004, 8, 20),
            members: true,
            difficulty: 'master'
        });
        this.theRestlessGhost = new Quest({
            name: `The Restless Ghost`,
            release: new Date(2001, 0, 4),
            members: false,
            difficulty: 'novice'
        });
        this.ritualOfTheMahjarrat = new Quest({
            name: `Ritual of the Mahjarrat`,
            release: new Date(2011, 8, 14),
            members: true,
            difficulty: 'grandmaster'
        });
        this.riverOfBlood = new Quest({
            name: `River of Blood`,
            release: new Date(2016, 3, 25),
            members: true,
            difficulty: 'grandmaster'
        });
        this.rockingOut = new Quest({
            name: `Rocking Out`,
            release: new Date(2008, 5, 11),
            members: true,
            difficulty: 'master'
        });
        this.rovingElves = new Quest({
            name: `Roving Elves`,
            release: new Date(2005, 1, 7),
            members: true,
            difficulty: 'master'
        });
        this.royalTrouble = new Quest({
            name: `Royal Trouble`,
            release: new Date(2006, 4, 22),
            members: true,
            difficulty: 'experienced'
        });
        this.rumDeal = new Quest({
            name: `Rum Deal`,
            release: new Date(2005, 9, 31),
            members: true,
            difficulty: 'experienced'
        });
        this.runeMechanics = new Quest({
            name: `Rune Mechanics`,
            release: new Date(2010, 1, 1),
            members: true,
            difficulty: 'novice'
        });
        this.runeMemories = new Quest({
            name: `Rune Memories`,
            release: new Date(2012, 10, 28),
            members: true,
            difficulty: 'novice'
        });
        this.runeMysteries = new Quest({
            name: `Rune Mysteries`,
            release: new Date(2003, 11, 1),
            members: false,
            difficulty: 'novice'
        });
        this.saltInTheWound = new Quest({
            name: `Salt in the Wound`,
            release: new Date(2001, 6, 5),
            members: true,
            difficulty: 'intermediate'
        });
        this.scorpionCatcher = new Quest({
            name: `Scorpion Catcher`,
            release: new Date(2002, 2, 25),
            members: true,
            difficulty: 'intermediate'
        });
        this.seaSlug = new Quest({
            name: `Sea Slug`,
            release: new Date(2002, 8, 9),
            members: true,
            difficulty: 'intermediate'
        });
        this.shadesOfMortton = new Quest({
            name: `Shades of Mort\'ton`,
            release: new Date(2004, 10, 18),
            members: true,
            difficulty: 'intermediate'
        });
        this.shadowOfTheStorm = new Quest({
            name: `Shadow of the Storm`,
            release: new Date(2005, 10, 14),
            members: true,
            difficulty: 'intermediate'
        });
        this.aShadowOverAshdale = new Quest({
            name: `A Shadow over Ashdale`,
            release: new Date(2014, 3, 22),
            members: false,
            difficulty: 'novice'
        });
        this.sheepHerder = new Quest({
            name: `Sheep Herder`,
            release: new Date(2002, 7, 15),
            members: true,
            difficulty: 'novice'
        });
        this.shieldOfArrav = new Quest({
            name: `Shield of Arrav`,
            release: new Date(2001, 0, 4),
            members: false,
            difficulty: 'novice'
        });
        this.shiloVillage = new Quest({
            name: `Shilo Village`,
            release: new Date(2003, 0, 27),
            members: true,
            difficulty: 'experienced'
        });
        this.sliskesEndgame = new Quest({
            name: `Sliske\'s Endgame`,
            release: new Date(2016, 11, 19),
            members: true,
            difficulty: 'grandmaster'
        });
        this.theSlugMenace = new Quest({
            name: `The Slug Menace`,
            release: new Date(2006, 8, 20),
            members: true,
            difficulty: 'intermediate'
        });
        this.smokingKills = new Quest({
            name: `Smoking Kills`,
            release: new Date(2008, 5, 5),
            members: true,
            difficulty: 'intermediate'
        });
        this.someLikeItCold = new Quest({
            name: `Some Like It Cold`,
            release: new Date(2012, 6, 7),
            members: true,
            difficulty: 'experienced'
        });
        this.songFromTheDepths = new Quest({
            name: `Song from the Depths`,
            release: new Date(2012, 4, 22),
            members: false,
            difficulty: 'novice'
        });
        this.aSoulsBane = new Quest({
            name: `A Soul\'s Bane`,
            release: new Date(2006, 3, 3),
            members: false,
            difficulty: 'novice'
        });
        this.spiritOfSummer = new Quest({
            name: `Spirit of Summer`,
            release: new Date(2008, 6, 29),
            members: true,
            difficulty: 'intermediate'
        });
        this.spiritsOfTheElid = new Quest({
            name: `Spirits of the Elid`,
            release: new Date(2005, 11, 5),
            members: true,
            difficulty: 'intermediate'
        });
        this.stolenHearts = new Quest({
            name: `Stolen Hearts`,
            release: new Date(2012, 8, 26),
            members: false,
            difficulty: 'novice'
        });
        this.summersEnd = new Quest({
            name: `Summer\'s End`,
            release: new Date(2008, 8, 15),
            members: true,
            difficulty: 'experienced'
        });
        this.swanSong = new Quest({
            name: `Swan Song`,
            release: new Date(2006, 4, 2),
            members: true,
            difficulty: 'master'
        });
        this.sweptAway = new Quest({
            name: `Swept Away`,
            release: new Date(2008, 9, 28),
            members: false,
            difficulty: 'novice'
        });
        this.taiBwoWannaiTrio = new Quest({
            name: `Tai Bwo Wannai Trio`,
            release: new Date(2004, 8, 14),
            members: true,
            difficulty: 'intermediate'
        });
        this.aTailOfTwoCats = new Quest({
            name: `A Tail of Two Cats`,
            release: new Date(2005, 8, 26),
            members: true,
            difficulty: 'intermediate'
        });
        this.theTaleOfTheMuspah = new Quest({
            name: `The Tale of the Muspah`,
            release: new Date(2009, 3, 21),
            members: true,
            difficulty: 'novice'
        });
        this.tearsOfGuthix = new Quest({
            name: `Tears of Guthix`,
            release: new Date(2005, 4, 4),
            members: true,
            difficulty: 'intermediate'
        });
        this.theTempleAtSenntisten = new Quest({
            name: `The Temple at Senntisten`,
            release: new Date(2009, 11, 3),
            members: true,
            difficulty: 'master'
        });
        this.templeOfIkov = new Quest({
            name: `Temple of Ikov`,
            release: new Date(2002, 5, 17),
            members: true,
            difficulty: 'experienced'
        });
        this.throneOfMiscellania = new Quest({
            name: `Throne of Miscellania`,
            release: new Date(2004, 10, 29),
            members: true,
            difficulty: 'experienced'
        });
        this.tokTzKetDill = new Quest({
            name: `TokTz-Ket-Dill`,
            release: new Date(2008, 4, 13),
            members: true,
            difficulty: 'experienced'
        });
        this.theTouristTrap = new Quest({
            name: `The Tourist Trap`,
            release: new Date(2003, 3, 14),
            members: true,
            difficulty: 'intermediate'
        });
        this.towerOfLife = new Quest({
            name: `Tower of Life`,
            release: new Date(2007, 1, 19),
            members: true,
            difficulty: 'novice'
        });
        this.treeGnomeVillage = new Quest({
            name: `Tree Gnome Village`,
            release: new Date(2002, 6, 23),
            members: true,
            difficulty: 'intermediate'
        });
        this.tribalTotem = new Quest({
            name: `Tribal Totem`,
            release: new Date(2002, 3, 30),
            members: true,
            difficulty: 'intermediate'
        });
        this.trollRomance = new Quest({
            name: `Troll Romance`,
            release: new Date(2005, 0, 5),
            members: true,
            difficulty: 'experienced'
        });
        this.trollStronghold = new Quest({
            name: `Troll Stronghold`,
            release: new Date(2004, 7, 24),
            members: true,
            difficulty: 'experienced'
        });
        this.twilightOfTheGods = new Quest({
            name: `Twilight of the Gods`,
            release: new Date(2002, 5, 6),
            members: true,
            difficulty: 'master'
        });
        this.undergroundPass = new Quest({
            name: `Underground Pass`,
            release: new Date(2003, 2, 3),
            members: true,
            difficulty: 'experienced'
        });
        this.vampyreSlayer = new Quest({
            name: `Vampyre Slayer`,
            release: new Date(2001, 0, 28),
            members: false,
            difficulty: 'novice'
        });
        this.violetIsBlue = new Quest({
            name: `Violet is Blue`,
            release: new Date(2018, 11, 17),
            members: false,
            difficulty: 'novice'
        });
        this.violetIsBlueToo = new Quest({
            name: `Violet is Blue Too`,
            release: new Date(2020, 11, 14),
            members: false,
            difficulty: 'novice'
        });
        this.aVoidDance = new Quest({
            name: `A Void Dance`,
            release: new Date(2010, 7, 10),
            members: true,
            difficulty: 'experienced'
        });
        this.theVoidStaresBack = new Quest({
            name: `The Void Stares Back`,
            release: new Date(2010, 9, 6),
            members: true,
            difficulty: 'grandmaster'
        });
        this.wanted = new Quest({
            name: `Wanted`,
            release: new Date(2005, 9, 17),
            members: true,
            difficulty: 'intermediate'
        });
        this.watchtower = new Quest({
            name: `Watchtower`,
            release: new Date(2003, 4, 7),
            members: true,
            difficulty: 'intermediate'
        });
        this.waterfallQuest = new Quest({
            name: `Waterfall Quest`,
            release: new Date(2002, 8, 24),
            members: true,
            difficulty: 'intermediate'
        });
        this.whatLiesBelow = new Quest({
            name: `What Lies Below`,
            release: new Date(2007, 2, 27),
            members: true,
            difficulty: 'intermediate'
        });
        this.whatsMineIsYours = new Quest({
            name: `What\'s Mine is Yours`,
            release: new Date(2012, 9, 17),
            members: false,
            difficulty: 'novice'
        });
        this.whileGuthixSleeps = new Quest({
            name: `While Guthix Sleeps`,
            release: new Date(2008, 10, 26),
            members: true,
            difficulty: 'grandmaster'
        });
        this.witchsHouse = new Quest({
            name: `Witch\'s House`,
            release: new Date(2002, 1, 27),
            members: false,
            difficulty: 'intermediate'
        });
        this.withinTheLight = new Quest({
            name: `Within the Light`,
            release: new Date(2009, 9, 13),
            members: true,
            difficulty: 'master'
        });
        this.wolfWhistle = new Quest({
            name: `Wolf Whistle`,
            release: new Date(2008, 0, 15),
            members: false,
            difficulty: 'novice'
        });
        this.theWorldWakes = new Quest({
            name: `The World Wakes`,
            release: new Date(2013, 2, 4),
            members: true,
            difficulty: 'grandmaster'
        });
        this.youAreIt = new Quest({
            name: `You Are It`,
            release: new Date(2018, 4, 8),

            members: true,
            difficulty: 'intermediate'
        });
        this.zogreFleshEaters = new Quest({
            name: `Zogre Flesh Eaters`,
            release: new Date(2005, 4, 17),
            members: true,
            difficulty: 'intermediate'
        });
	};
};

module.exports = Quests;