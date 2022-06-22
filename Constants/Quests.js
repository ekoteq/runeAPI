'use strict';

const { Quest } = require('../Structures');

class Quests {
    constructor() {
        this.allFiredUp = new Quest({
            name: `All Fired Up`,
            members: true,
            difficulty: 'intermediate'
        });
        this.animalMagnetism = new Quest({
            name: `Animal Magnetism`,
            members: true,
            difficulty: 'intermediate'
        });
        this.anotherSliceOfHAM = new Quest({
            name: `Another Slice of H.A.M.`,
            members: true,
            difficulty: 'intermediate'
        });
        this.asAFirstResort = new Quest({
            name: `As a First Resort`,
            members: true,
            difficulty: 'experienced'
        });
        this.azzanadrasQuest = new Quest({
            name: `Azzanadra\'s Quest`,
            members: true,
            difficulty: 'experienced'
        });
        this.backToMyRoots = new Quest({
            name: `Back to my Roots`,
            members: true,
            difficulty: 'master'
        });
        this.backToTheFreezer = new Quest({
            name: `Back to the Freezer`,
            members: true,
            difficulty: 'master'
        });
        this.beneathCursedTides = new Quest({
            name: `Beneath Cursed Tides`,
            members: false,
            difficulty: 'intermediate'
        });
        this.betweenARock = new Quest({
            name: `Between a Rock...`,
            members: true,
            difficulty: 'experienced'
        });
        this.bigChompyBirdHunting = new Quest({
            name: `Big Chompy Bird Hunting`,
            members: true,
            difficulty: 'intermediate'
        });
        this.biohazard = new Quest({
            name: `Biohazard`,
            members: true,
            difficulty: 'novice'
        });
        this.birthrightOfTheDwarves = new Quest({
            name: `Birthright of the Dwarves`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.theBloodPact = new Quest({
            name: `The Blood Pact`,
            members: false,
            difficulty: 'novice'
        });
        this.bloodRunsDeep = new Quest({
            name: `Blood Runs Deep`,
            members: true,
            difficulty: 'master'
        });
        this.theBranchesOfDarkmeyer = new Quest({
            name: `The Branches of Darkmeyer`,
            members: true,
            difficulty: 'master'
        });
        this.bingingHomeTheBacon = new Quest({
            name: `Bringing Home the Bacon`,
            members: true,
            difficulty: 'novice'
        });
        this.theBrinkOfExtinction = new Quest({
            name: `The Brink of Extinction`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.brokenHome = new Quest({
            name: `Broken Home`,
            members: false,
            difficulty: 'novice'
        });
        this.buyersAndCellars = new Quest({
            name: `Buyers and Cellars`,
            members: true,
            difficulty: 'novice'
        });
        this.cabinFever = new Quest({
            name: `Cabin Fever`,
            members: true,
            difficulty: 'experienced'
        });
        this.callOfTheAncestors = new Quest({
            name: `Call of the Ancestors`,
            members: true,
            difficulty: 'novice'
        });
        this.carnilleanRising = new Quest({
            name: `Carnillean Rising`,
            members: true,
            difficulty: 'intermediate'
        });
        this.catapultConstruction = new Quest({
            name: `Catapult Construction`,
            members: true,
            difficulty: 'master'
        });
        this.chefsAssistant = new Quest({
            name: `Chef\'s Assistant`,
            members: false,
            difficulty: 'novice'
        });
        this.childrenOfMah = new Quest({
            name: `Children of Mah`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.theChosenCommander = new Quest({
            name: `The Chosen Commander`,
            members: true,
            difficulty: 'experienced'
        });
        this.cityOfSenntisten = new Quest({
            name: `City of Senntisten`,
            members: true,
            difficulty: 'master'
        });
        this.clockTower = new Quest({
            name: `Clock Tower`,
            members: true,
            difficulty: 'novice'
        });
        this.aClockworkSyringe = new Quest({
            name: `A Clockwork Syringe`,
            members: true,
            difficulty: 'master'
        });
        this.coldWar = new Quest({
            name: `Cold War`,
            members: true,
            difficulty: 'intermediate'
        });
        this.contact = new Quest({
            name: `Contact!`,
            members: true,
            difficulty: 'master'
        });
        this.cooksAssistant = new Quest({
            name: `Cook\'s Assistant`,
            members: false,
            difficulty: 'novice'
        });
        this.creatureOfFenkenstrain = new Quest({
            name: `Creature of Fenkenstrain`,
            members: true,
            difficulty: 'intermediate'
        });
        this.crocodileTears = new Quest({
            name: `Crocodile Tears`,
            members: true,
            difficulty: 'master'
        });
        this.theCurseOfArrav = new Quest({
            name: `The Curse of Arrav`,
            members: true,
            difficulty: 'master'
        });
        this.curseOfTheBlackStone = new Quest({
            name: `Curse of the Black Stone`,
            members: true,
            difficulty: 'master'
        });
        this.theDarknessOfHallowvale = new Quest({
            name: `The Darkness of Hallowvale`,
            members: true,
            difficulty: 'intermediate'
        });
        this.deadliestCatch = new Quest({
            name: `Deadliest Catch`,
            members: true,
            difficulty: 'master'
        });
        this.dealingWithScabaras = new Quest({
            name: `Dealing with Scabaras`,
            members: true,
            difficulty: 'master'
        });
        this.theDeathOfChivalry = new Quest({
            name: `The Death of Chivalry`,
            members: false,
            difficulty: 'novice'
        });
        this.deathPlateau = new Quest({
            name: `Death Plateau`,
            members: false,
            difficulty: 'novice'
        });
        this.deathToTheDorgeshuun = new Quest({
            name: `Death to the Dorgeshuun`,
            members: true,
            difficulty: 'intermediate'
        });
        this.defenderOfVarrock = new Quest({
            name: `Defender of Varrock`,
            members: true,
            difficulty: 'experienced'
        });
        this.demonSlayer = new Quest({
            name: `Demon Slayer`,
            members: false,
            difficulty: 'novice'
        });
        this.desertTreasure = new Quest({
            name: `Desert Treasure`,
            members: true,
            difficulty: 'master'
        });
        this.desperateMeasures = new Quest({
            name: `Desperate Measures`,
            members: true,
            difficulty: 'intermediate'
        });
        this.desperateTimes = new Quest({
            name: `Desperate Times`,
            members: true,
            difficulty: 'intermediate'
        });
        this.deviousMinds = new Quest({
            name: `Devious Minds`,
            members: true,
            difficulty: 'experienced'
        });
        this.diamondInTheRough = new Quest({
            name: `Diamond in the Rough`,
            members: true,
            difficulty: 'novice'
        });
        this.theDigSite = new Quest({
            name: `The Dig Site`,
            members: true,
            difficulty: 'intermediate'
        });
        this.dimensionOfDisaster = new Quest({
            name: `Dimension of Disaster`,
            members: true,
            difficulty: 'special'
        });
        this.dishonourAmongThieves = new Quest({
            name: `Dishonour among Thieves`,
            members: true,
            difficulty: 'intermediate'
        });
        this.doNoEvil = new Quest({
            name: `Do No Evil`,
            members: true,
            difficulty: 'master'
        });
        this.dragonSlayer = new Quest({
            name: `Dragon Slayer`,
            members: false,
            difficulty: 'experienced'
        });
        this.dreamMentor = new Quest({
            name: `Dream Mentor`,
            members: true,
            difficulty: 'master'
        });
        this.druidicRitual = new Quest({
            name: `Druidic Ritual`,
            members: false,
            difficulty: 'novice'
        });
        this.dwarfCannon = new Quest({
            name: `Dwarf Cannon`,
            members: true,
            difficulty: 'novice'
        });
        this.eadgarsRuse = new Quest({
            name: `Eadgar\'s Ruse`,
            members: true,
            difficulty: 'experienced'
        });
        this.eaglesPeak = new Quest({
            name: `Eagles\' Peak`,
            members: true,
            difficulty: 'novice'
        });
        this.theElderKiln = new Quest({
            name: `The Elder Kiln`,
            members: true,
            difficulty: 'master'
        });
        this.elementalWorkshopI = new Quest({
            name: `Elemental Workshop I`,
            members: true,
            difficulty: 'novice'
        });
        this.elementalWorkshopII = new Quest({
            name: `Elemental Workshop II`,
            members: true,
            difficulty: 'intermediate'
        });
        this.elementalWorkshopIII = new Quest({
            name: `Elemental Workshop III`,
            members: true,
            difficulty: 'intermediate'
        });
        this.elementalWorkshopIV = new Quest({
            name: `Elemental Workshop IV`,
            members: true,
            difficulty: 'intermediate'
        });
        this.enakhrasLament = new Quest({
            name: `Enakhra\'s Lament`,
            members: true,
            difficulty: 'experienced'
        });
        this.enlightenedJourney = new Quest({
            name: `Enlightened Journey`,
            members: true,
            difficulty: 'intermediate'
        });
        this.ernestTheChicken = new Quest({
            name: `Ernest the Chicken`,
            members: false,
            difficulty: 'novice'
        });
        this.evilDavesBigDayOut = new Quest({
            name: `Evil Dave\'s Big Day Out`,
            members: true,
            difficulty: 'intermediate'
        });
        this.extinction = new Quest({
            name: `Extinction`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.theEyesOfGlouphrie = new Quest({
            name: `The Eyes of Glouphrie`,
            members: true,
            difficulty: 'intermediate'
        });
        this.aFairyTaleI = new Quest({
            name: `A Fairy Tale I - Growing Pains`,
            members: true,
            difficulty: 'experienced'
        });
        this.aFairyTaleII = new Quest({
            name: `A Fairy Tale II - Cure a Queen`,
            members: true,
            difficulty: 'experienced'
        });
        this.aFairyTaleIII = new Quest({
            name: `A Fairy Tale III - Battle at Ork's Rift`,
            members: true,
            difficulty: 'experienced'
        });
        this.familyCrest = new Quest({
            name: `Family Crest`,
            members: true,
            difficulty: 'experienced'
        });
        this.fateOfTheGods = new Quest({
            name: `Fate of the Gods`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.theFeud = new Quest({
            name: `The Feud`,
            members: true,
            difficulty: 'intermediate'
        });
        this.fightArena = new Quest({
            name: `Fight Arena`,
            members: true,
            difficulty: 'experienced'
        });
        this.theFiremakersCurse = new Quest({
            name: `The Firemaker\'s Curse`,
            members: true,
            difficulty: 'master'
        });
        this.fishingContest = new Quest({
            name: `Fishing Contest`,
            members: true,
            difficulty: 'novice'
        });
        this.forgettableTaleOfADrunkenDwarf = new Quest({
            name: `Forgettable Tale of a Drunken Dwarf`,
            members: true,
            difficulty: 'intermediate'
        });
        this.forgivenessOfAChaosDwarf = new Quest({
            name: `Forgiveness of a Chaos Dwarf`,
            members: true,
            difficulty: 'master'
        });
        this.theFremennikIsles = new Quest({
            name: `The Fremennik Isles`,
            members: true,
            difficulty: 'experienced'
        });
        this.theFremennikTrials = new Quest({
            name: `The Fremennik Trials`,
            members: true,
            difficulty: 'intermediate'
        });
        this.furNSeek = new Quest({
            name: `Fur \'n Seek`,
            members: true,
            difficulty: 'novice'
        });
        this.gardenOfTranquillity = new Quest({
            name: `Garden of Tranquillity`,
            members: true,
            difficulty: 'intermediate'
        });
        this.gertrudesCat = new Quest({
            name: `Gertrude\'s Cat`,
            members: false,
            difficulty: 'novice'
        });
        this.ghostsAhoy = new Quest({
            name: `Ghosts Ahoy`,
            members: true,
            difficulty: 'intermediate'
        });
        this.theGiantDwarf = new Quest({
            name: `The Giant Dwarf`,
            members: true,
            difficulty: 'intermediate'
        });
        this.gloriousMemories = new Quest({
            name: `Glorious Memories`,
            members: true,
            difficulty: 'master'
        });
        this.goblinDiplomacy = new Quest({
            name: `Goblin Diplomacy`,
            members: false,
            difficulty: 'novice'
        });
        this.theGolem = new Quest({
            name: `The Golem`,
            members: true,
            difficulty: 'intermediate'
        });
        this.gowerQuest = new Quest({
            name: `Gower Quest`,
            members: false,
            difficulty: 'experienced'
        });
        this.theGrandTree = new Quest({
            name: `The Grand Tree`,
            members: true,
            difficulty: 'experienced'
        });
        this.theGreatBrainRobbery = new Quest({
            name: `The Great Brain Robbery`,
            members: true,
            difficulty: 'experienced'
        });
        this.grimTales = new Quest({
            name: `Grim Tales`,
            members: true,
            difficulty: 'master'
        });
        this.gunnarsGround = new Quest({
            name: `Gunnar\'s Ground`,
            members: false,
            difficulty: 'novice'
        });
        this.theHandInTheSand = new Quest({
            name: `The Hand in the Sand`,
            members: true,
            difficulty: 'intermediate'
        });
        this.hauntedMine = new Quest({
            name: `Haunted Mine`,
            members: true,
            difficulty: 'experienced'
        });
        this.hazeelCult = new Quest({
            name: `Hazeel Cult`,
            members: true,
            difficulty: 'novice'
        });
        this.heartOfStone = new Quest({
            name: `Heart of Stone`,
            members: true,
            difficulty: 'intermediate'
        });
        this.heartstealer = new Quest({
            name: `Heartstealer`,
            members: false,
            difficulty: 'novice'
        });
        this.herosWelcome = new Quest({
            name: `Hero\'s Welcome`,
            members: true,
            difficulty: 'experienced'
        });
        this.heroesQuest = new Quest({
            name: `Heroes\' Quest`,
            members: true,
            difficulty: 'experienced'
        });
        this.holyGrail = new Quest({
            name: `Holy Grail`,
            members: true,
            difficulty: 'intermediate'
        });
        this.horrorFromTheDeep = new Quest({
            name: `Horror from the Deep`,
            members: true,
            difficulty: 'experienced'
        });
        this.huntForRedRaktuber = new Quest({
            name: `Hunt for Red Raktuber`,
            members: true,
            difficulty: 'intermediate'
        });
        this.icthlarinsLittleHelper = new Quest({
            name: `Icthlarin\'s Little Helper`,
            members: true,
            difficulty: 'intermediate'
        });
        this.impCatcher = new Quest({
            name: `Imp Catcher`,
            members: false,
            difficulty: 'novice'
        });
        this.impressingTheLocals = new Quest({
            name: `Impressing the Locals`,
            members: true,
            difficulty: 'novice'
        });
        this.inAidOfTheMyreque = new Quest({
            name: `In Aid of the Myreque`,
            members: true,
            difficulty: 'intermediate'
        });
        this.inPyreNeed = new Quest({
            name: `In Pyre Need`,
            members: true,
            difficulty: 'experienced'
        });
        this.inSearchOfTheMyreque = new Quest({
            name: `In Search of the Myreque`,
            members: true,
            difficulty: 'intermediate'
        });
        this.theJackofSpades = new Quest({
            name: `The Jack of Spades`,
            members: true,
            difficulty: 'novice'
        });
        this.junglePotion = new Quest({
            name: `Jungle Potion`,
            members: true,
            difficulty: 'novice'
        });
        this.kennithsConcerns = new Quest({
            name: `Kennith\'s Concerns`,
            members: true,
            difficulty: 'intermediate'
        });
        this.kindredSpirits = new Quest({
            name: `Kindred Spirits`,
            members: true,
            difficulty: 'experienced'
        });
        this.kingOfTheDwarves = new Quest({
            name: `King of the Dwarves`,
            members: true,
            difficulty: 'master'
        });
        this.kingsRansom = new Quest({
            name: `King\'s Ransom`,
            members: true,
            difficulty: 'experienced'
        });
        this.theKnightsSword = new Quest({
            name: `The Knight\'s Sword`,
            members: false,
            difficulty: 'intermediate'
        });
        this.landOfTheGoblins = new Quest({
            name: `Land of the Goblins`,
            members: true,
            difficulty: 'experienced'
        });
        this.legacyOfSeergaze = new Quest({
            name: `Legacy of Seergaze`,
            members: true,
            difficulty: 'experienced'
        });
        this.legendsQuest = new Quest({
            name: `Legends\' Quest`,
            members: true,
            difficulty: 'master'
        });
        this.letThemEatPie = new Quest({
            name: `Let Them Eat Pie`,
            members: false,
            difficulty: 'novice'
        });
        this.theLightWithin = new Quest({
            name: `The Light Within`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.theLordOfVampyrium = new Quest({
            name: `The Lord of Vampyrium`,
            members: true,
            difficulty: 'master'
        });
        this.lostCity = new Quest({
            name: `Lost City`,
            members: true,
            difficulty: 'experienced'
        });
        this.theLostTribe = new Quest({
            name: `The Lost Tribe`,
            members: true,
            difficulty: 'intermediate'
        });
        this.loveStory = new Quest({
            name: `Love Story`,
            members: true,
            difficulty: 'master'
        });
        this.lunarDiplomacy = new Quest({
            name: `Lunar Diplomacy`,
            members: true,
            difficulty: 'experienced'
        });
        this.makingHistory = new Quest({
            name: `Making History`,
            members: true,
            difficulty: 'intermediate'
        });
        this.meetingHistory = new Quest({
            name: `Meeting History`,
            members: true,
            difficulty: 'intermediate'
        });
        this.merlinsCrystal = new Quest({
            name: `Merlin\'s Crystal`,
            members: true,
            difficulty: 'intermediate'
        });
        this.theMightyFall = new Quest({
            name: `The Mighty Fall`,
            members: true,
            difficulty: 'master'
        });
        this.missingMyMummy = new Quest({
            name: `Missing My Mummy`,
            members: true,
            difficulty: 'intermediate'
        });
        this.missingPresumedDeath = new Quest({
            name: `Missing, Presumed Death`,
            members: false,
            difficulty: 'novice'
        });
        this.monksFriend = new Quest({
            name: `Monk\'s Friend`,
            members: true,
            difficulty: 'novice'
        });
        this.monkeyMadness = new Quest({
            name: `Monkey Madness`,
            members: true,
            difficulty: 'master'
        });
        this.mountainDaughter = new Quest({
            name: `Mountain Daughter`,
            members: true,
            difficulty: 'intermediate'
        });
        this.mourningsEndPartI = new Quest({
            name: `Mourning\'s End Part I`,
            members: true,
            difficulty: 'master'
        });
        this.mourningsEndPartII = new Quest({
            name: `Mourning\'s End Part II`,
            members: true,
            difficulty: 'master'
        });
        this.murderMystery = new Quest({
            name: `Murder Mystery`,
            members: true,
            difficulty: 'novice'
        });
        this.myArmsBigAdventure = new Quest({
            name: `My Arm\'s Big Adventure`,
            members: true,
            difficulty: 'intermediate'
        });
        this.mythsOfTheWhiteLands = new Quest({
            name: `Myths of the White Lands`,
            members: false,
            difficulty: 'novice'
        });
        this.natureSpirit = new Quest({
            name: `Nature Spirit`,
            members: true,
            difficulty: 'novice'
        });
        this.theNeedleSkips = new Quest({
            name: `The Needle Skips`,
            members: true,
            difficulty: 'novice'
        });
        this.nomadsElegy = new Quest({
            name: `Nomad\'s Elegy`,
            members: true,
            difficulty: 'master'
        });
        this.nomadsRequiem = new Quest({
            name: `Nomad\'s Requiem`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.observatoryQuest = new Quest({
            name: `Observatory Quest`,
            members: true,
            difficulty: 'novice'
        });
        this.olafsQuest = new Quest({
            name: `Olaf\'s Quest`,
            members: true,
            difficulty: 'intermediate'
        });
        this.onceUponASlime = new Quest({
            name: `Once Upon a Slime`,
            members: false,
            difficulty: 'novice'
        });
        this.onceUponATimeInGielinor = new Quest({
            name: `Once Upon a Time in Gielinor`,
            members: true,
            difficulty: 'novice'
        });
        this.oneOfAKind = new Quest({
            name: `One of a Kind`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.onePiercingNote = new Quest({
            name: `One Piercing Note`,
            members: false,
            difficulty: 'novice'
        });
        this.oneSmallFavour = new Quest({
            name: `One Small Favour`,
            members: true,
            difficulty: 'experienced'
        });
        this.ourManInTheNorth = new Quest({
            name: `Our Man in the North`,
            members: true,
            difficulty: 'master'
        });
        this.thePathOfGlouphrie = new Quest({
            name: `The Path of Glouphrie`,
            members: true,
            difficulty: 'experienced'
        });
        this.perilsOfIceMountain = new Quest({
            name: `Perils of Ice Mountain`,
            members: false,
            difficulty: 'novice'
        });
        this.phiteClub = new Quest({
            name: `\'Phite Club`,
            members: true,
            difficulty: 'master'
        });
        this.piecesOfHate = new Quest({
            name: `Pieces of Hate`,
            members: true,
            difficulty: 'master'
        });
        this.piratesTreasure = new Quest({
            name: `Pirate\'s Treasure`,
            members: false,
            difficulty: 'novice'
        });
        this.plagueCity = new Quest({
            name: `Plague City`,
            members: true,
            difficulty: 'novice'
        });
        this.plaguesEnd = new Quest({
            name: `Plague\'s End`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.priestInPeril = new Quest({
            name: `Priest in Peril`,
            members: false,
            difficulty: 'novice'
        });
        this.thePrisonerOfGlouphrie = new Quest({
            name: `The Prisoner of Glouphrie`,
            members: true,
            difficulty: 'master'
        });
        this.quietBeforeTheSwarm = new Quest({
            name: `Quiet Before the Swarm`,
            members: true,
            difficulty: 'intermediate'
        });
        this.ragAndBoneMan = new Quest({
            name: `Rag and Bone Man`,
            members: true,
            difficulty: 'novice'
        });
        this.ratCatchers = new Quest({
            name: `Rat Catchers`,
            members: true,
            difficulty: 'intermediate'
        });
        this.recipeForDisaster = new Quest({
            name: `Recipe for Disaster`,
            members: true,
            difficulty: 'special'
        });
        this.recruitmentDrive = new Quest({
            name: `Recruitment Drive`,
            members: true,
            difficulty: 'novice'
        });
        this.regicide = new Quest({
            name: `Regicide`,
            members: true,
            difficulty: 'master'
        });
        this.theRestlessGhost = new Quest({
            name: `The Restless Ghost`,
            members: false,
            difficulty: 'novice'
        });
        this.ritualOfTheMahjarrat = new Quest({
            name: `Ritual of the Mahjarrat`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.riverOfBlood = new Quest({
            name: `River of Blood`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.rockingOut = new Quest({
            name: `Rocking Out`,
            members: true,
            difficulty: 'master'
        });
        this.rovingElves = new Quest({
            name: `Roving Elves`,
            members: true,
            difficulty: 'master'
        });
        this.royalTrouble = new Quest({
            name: `Royal Trouble`,
            members: true,
            difficulty: 'experienced'
        });
        this.rumDeal = new Quest({
            name: `Rum Deal`,
            members: true,
            difficulty: 'experienced'
        });
        this.runeMechanics = new Quest({
            name: `Rune Mechanics`,
            members: true,
            difficulty: 'novice'
        });
        this.runeMemories = new Quest({
            name: `Rune Memories`,
            members: true,
            difficulty: 'novice'
        });
        this.runeMysteries = new Quest({
            name: `Rune Mysteries`,
            members: false,
            difficulty: 'novice'
        });
        this.saltInTheWound = new Quest({
            name: `Salt in the Wound`,
            members: true,
            difficulty: 'intermediate'
        });
        this.scorpionCatcher = new Quest({
            name: `Scorpion Catcher`,
            members: true,
            difficulty: 'intermediate'
        });
        this.seaSlug = new Quest({
            name: `Sea Slug`,
            members: true,
            difficulty: 'intermediate'
        });
        this.shadesOfMortton = new Quest({
            name: `Shades of Mort\'ton`,
            members: true,
            difficulty: 'intermediate'
        });
        this.shadowOfTheStorm = new Quest({
            name: `Shadow of the Storm`,
            members: true,
            difficulty: 'intermediate'
        });
        this.aShadowOverAshdale = new Quest({
            name: `A Shadow over Ashdale`,
            members: false,
            difficulty: 'novice'
        });
        this.sheepHerder = new Quest({
            name: `Sheep Herder`,
            members: true,
            difficulty: 'novice'
        });
        this.shieldOfArrav = new Quest({
            name: `Shield of Arrav`,
            members: false,
            difficulty: 'novice'
        });
        this.shiloVillage = new Quest({
            name: `Shilo Village`,
            members: true,
            difficulty: 'experienced'
        });
        this.sliskesEndgame = new Quest({
            name: `Sliske\'s Endgame`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.theSlugMenace = new Quest({
            name: `The Slug Menace`,
            members: true,
            difficulty: 'intermediate'
        });
        this.smokingKills = new Quest({
            name: `Smoking Kills`,
            members: true,
            difficulty: 'intermediate'
        });
        this.someLikeItCold = new Quest({
            name: `Some Like It Cold`,
            members: true,
            difficulty: 'experienced'
        });
        this.songFromTheDepths = new Quest({
            name: `Song from the Depths`,
            members: false,
            difficulty: 'novice'
        });
        this.aSoulsBane = new Quest({
            name: `A Soul\'s Bane`,
            members: false,
            difficulty: 'novice'
        });
        this.spiritOfSummer = new Quest({
            name: `Spirit of Summer`,
            members: true,
            difficulty: 'intermediate'
        });
        this.spiritsOfTheElid = new Quest({
            name: `Spirits of the Elid`,
            members: true,
            difficulty: 'intermediate'
        });
        this.stolenHearts = new Quest({
            name: `Stolen Hearts`,
            members: false,
            difficulty: 'novice'
        });
        this.summersEnd = new Quest({
            name: `Summer\'s End`,
            members: true,
            difficulty: 'experienced'
        });
        this.swanSong = new Quest({
            name: `Swan Song`,
            members: true,
            difficulty: 'master'
        });
        this.sweptAway = new Quest({
            name: `Swept Away`,
            members: false,
            difficulty: 'novice'
        });
        this.taiBwoWannaiTrio = new Quest({
            name: `Tai Bwo Wannai Trio`,
            members: true,
            difficulty: 'intermediate'
        });
        this.aTailOfTwoCats = new Quest({
            name: `A Tail of Two Cats`,
            members: true,
            difficulty: 'intermediate'
        });
        this.theTaleOfTheMuspah = new Quest({
            name: `The Tale of the Muspah`,
            members: true,
            difficulty: 'novice'
        });
        this.tearsOfGuthix = new Quest({
            name: `Tears of Guthix`,
            members: true,
            difficulty: 'intermediate'
        });
        this.theTempleAtSenntisten = new Quest({
            name: `The Temple at Senntisten`,
            members: true,
            difficulty: 'master'
        });
        this.templeOfIkov = new Quest({
            name: `Temple of Ikov`,
            members: true,
            difficulty: 'experienced'
        });
        this.throneOfMiscellania = new Quest({
            name: `Throne of Miscellania`,
            members: true,
            difficulty: 'experienced'
        });
        this.tokTzKetDill = new Quest({
            name: `TokTz-Ket-Dill`,
            members: true,
            difficulty: 'experienced'
        });
        this.theTouristTrap = new Quest({
            name: `The Tourist Trap`,
            members: true,
            difficulty: 'intermediate'
        });
        this.towerOfLife = new Quest({
            name: `Tower of Life`,
            members: true,
            difficulty: 'novice'
        });
        this.treeGnomeVillage = new Quest({
            name: `Tree Gnome Village`,
            members: true,
            difficulty: 'intermediate'
        });
        this.tribalTotem = new Quest({
            name: `Tribal Totem`,
            members: true,
            difficulty: 'intermediate'
        });
        this.trollRomance = new Quest({
            name: `Troll Romance`,
            members: true,
            difficulty: 'experienced'
        });
        this.trollStronghold = new Quest({
            name: `Troll Stronghold`,
            members: true,
            difficulty: 'experienced'
        });
        this.twilightOfTheGods = new Quest({
            name: `Twilight of the Gods`,
            members: true,
            difficulty: 'master'
        });
        this.undergroundPass = new Quest({
            name: `Underground Pass`,
            members: true,
            difficulty: 'experienced'
        });
        this.vampyreSlayer = new Quest({
            name: `Vampyre Slayer`,
            members: false,
            difficulty: 'novice'
        });
        this.violetIsBlue = new Quest({
            name: `Violet is Blue`,
            members: false,
            difficulty: 'novice'
        });
        this.violetIsBlueToo = new Quest({
            name: `Violet is Blue Too`,
            members: false,
            difficulty: 'novice'
        });
        this.aVoidDance = new Quest({
            name: `A Void Dance`,
            members: true,
            difficulty: 'experienced'
        });
        this.theVoidStaresBack = new Quest({
            name: `The Void Stares Back`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.wanted = new Quest({
            name: `Wanted`,
            members: true,
            difficulty: 'intermediate'
        });
        this.watchtower = new Quest({
            name: `Watchtower`,
            members: true,
            difficulty: 'intermediate'
        });
        this.waterfallQuest = new Quest({
            name: `Waterfall Quest`,
            members: true,
            difficulty: 'intermediate'
        });
        this.whatLiesBelow = new Quest({
            name: `What Lies Below`,
            members: true,
            difficulty: 'intermediate'
        });
        this.whatsMineIsYours = new Quest({
            name: `What\'s Mine is Yours`,
            members: false,
            difficulty: 'novice'
        });
        this.whileGuthixSleeps = new Quest({
            name: `While Guthix Sleeps`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.witchsHouse = new Quest({
            name: `Witch\'s House`,
            members: false,
            difficulty: 'intermediate'
        });
        this.withinTheLight = new Quest({
            name: `Within the Light`,
            members: true,
            difficulty: 'master'
        });
        this.wolfWhistle = new Quest({
            name: `Wolf Whistle`,
            members: false,
            difficulty: 'novice'
        });
        this.theWorldWakes = new Quest({
            name: `The World Wakes`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.youAreIt = new Quest({
            name: `You Are It`,
            members: true,
            difficulty: 'intermediate'
        });
        this.zogreFleshEaters = new Quest({
            name: `Zogre Flesh Eaters`,
            members: true,
            difficulty: 'intermediate'
        });
	};
};

module.exports = Quests;